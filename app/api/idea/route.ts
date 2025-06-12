import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { user } from "@/db/schema/auth-schema";
import { idea } from "@/db/schema/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { createId } from "@paralleldrive/cuid2";
import { IdeaWithUser } from "@/types/ideas";
import { isNull, eq, or, desc, and, sql } from "drizzle-orm";

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
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')

  let response: { data: IdeaWithUser[], meta?: { currentPage: number, limit: number, totalPages: number } } = { data: [] }
  
  if (page && limit && !id) {
    const pageNum = parseInt(page)
    const limitNum = parseInt(limit)
    const offset = (pageNum - 1) * limitNum

    // Get total count of posts and posts data in a single query
    const posts = await db
      .select({
        idea: {
          id: idea.id,
          title: idea.title,
          description: idea.description,
          content: idea.content,
          category: idea.category,
          userId: idea.userId,
          createdAt: idea.createdAt,
          updatedAt: idea.updatedAt,
        },
        user: {
          id: user.id,
          name: user.name,
          image: user.image,
          email: user.email,
          emailVerified: user.emailVerified,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        totalCount: sql<number>`(SELECT COUNT(*) FROM ${idea} WHERE ${idea.userId} IS NULL)`
      })
      .from(idea)
      .where(isNull(idea.userId))
      .orderBy(desc(idea.createdAt))
      .limit(limitNum)
      .offset(offset)
      .innerJoin(user, eq(idea.userId, user.id)) as unknown as (IdeaWithUser & { totalCount: number })[]

    const totalCount = posts[0]?.totalCount ?? 0
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

  if (id && !page && !limit) {
    // get the post and posts that are replies to the post, then join with user table to get author name and avatar
    const posts = await db.select().from(idea).where(or(eq(idea.id, id), eq(idea.userId, id))).orderBy(desc(idea.createdAt)).innerJoin(user, eq(idea.userId, user.id)) as unknown as IdeaWithUser[]
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

  const { title, description, category, level, content } = await request.json()

  const id = createId()

  const newIdea = await db.insert(idea).values({
    id: id,
    title: title,
    description: description,
    content: content,
    category: category,
    userId: session.user.id,
    level: level,
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  }).returning()

  return NextResponse.json(newIdea[0])
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

  const { id, title, description, category, level, content } = await request.json()

  if (!id) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // check if the post is owned by the user
  const selectedPost = await db.select().from(idea).where(and(eq(idea.id, id), eq(idea.userId, userId)))

  if (!selectedPost) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  if (title && description && category && level && content) {
    const updatedIdea = await db.update(idea).set({
      title: title,
      description: description,
      content: content,
      category: category,
      level: level,
    }).where(eq(idea.id, id))

    return NextResponse.json(updatedIdea, { status: 200 });
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
  const selectedPost = await db.select().from(idea).where(and(eq(idea.id, id), eq(idea.userId, userId)))

  if (!selectedPost) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  
  const deletedPost = await db.delete(idea).where(eq(idea.id, id))

  if (!deletedPost) {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }

  return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
}