import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { user } from "@/db/schema/auth-schema";
import { post } from "@/db/schema/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { createId } from "@paralleldrive/cuid2";
import { PostWithAuthor } from "@/types/posts";
import { isNull, eq, or, desc, and, count } from "drizzle-orm";

// Get post(s)
export async function GET(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')
  const replies = searchParams.get('replies')
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')

  let response: { data: PostWithAuthor[], meta?: { currentPage: number, limit: number, totalPages: number } } = { data: [] }
  
  if (page && limit && !id && !replies) {
    const pageNum = parseInt(page)
    const limitNum = parseInt(limit)
    const offset = (pageNum - 1) * limitNum

    // Get total count of posts and posts data concurrently
    const [countResult, posts] = await Promise.all([
      db
        .select({ value: count() })
        .from(post)
        .where(isNull(post.repliedTo)),
      db
        .select()
        .from(post)
        .where(isNull(post.repliedTo))
        .orderBy(desc(post.createdAt))
        .limit(limitNum)
        .offset(offset)
        .innerJoin(user, eq(post.authorId, user.id)) as unknown as PostWithAuthor[]
    ])

    const totalCount = countResult[0].value
    const totalPages = Math.ceil(totalCount / limitNum)

    response = {
      data: posts,
      meta: {
        currentPage: pageNum,
        limit: limitNum,
        totalPages
      }
    }
  }

  if (id && replies === "true" && !page && !limit) {
    // get the post and posts that are replies to the post, then join with user table to get author name and avatar
    const posts = await db.select().from(post).where(or(eq(post.id, id), eq(post.repliedTo, id))).orderBy(desc(post.createdAt)).innerJoin(user, eq(post.authorId, user.id)) as unknown as PostWithAuthor[]
    response = { data: posts }
  }

  return NextResponse.json(response)
}

// Create a post
export async function POST(request: NextRequest) {
 
  const session = await auth.api.getSession({
      headers: await headers()
  })

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, content, repliedTo } = await request.json()

  const id = createId()

  const newPost = await db.insert(post).values({
    id: id,
    title: title,
    content: content,
    repliedTo: repliedTo,
    authorId: session.user.id,
    tags: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  }).returning()

  return NextResponse.json(newPost[0])
}

// Edit a post
export async function PATCH(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id

  const { id, title, content } = await request.json()

  if (!id) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // check if the post is owned by the user
  const selectedPost = await db.select().from(post).where(and(eq(post.id, id), eq(post.authorId, userId)))

  if (!selectedPost) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  if (!title && content) {
    const updatedPost = await db.update(post).set({
      content: content,
    }).where(eq(post.id, id))

    return NextResponse.json(updatedPost, { status: 200 });
  }

  if (title && content) {
    const updatedPost = await db.update(post).set({
      title: title,
      content: content,
    }).where(eq(post.id, id))

    return NextResponse.json(updatedPost, { status: 200 });
  }
}

// Delete a post
export async function DELETE(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id

  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // check if the post is owned by the user
  const selectedPost = await db.select().from(post).where(and(eq(post.id, id), eq(post.authorId, userId)))

  if (!selectedPost) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  
  const deletedPost = await db.delete(post).where(eq(post.id, id))

  if (!deletedPost) {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }

  return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
}