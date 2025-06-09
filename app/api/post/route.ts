import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { user } from "@/db/schema/auth-schema";
import { post } from "@/db/schema/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { createId } from "@paralleldrive/cuid2";
import { Post, PostWithAuthor } from "@/types/posts";
import { User } from "@/types/users";
import { isNull, eq, or, desc } from "drizzle-orm";

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

  let response: PostWithAuthor[] = []
  
  if (page && limit && !id && !replies) {
    const pageNum = parseInt(page)
    const limitNum = parseInt(limit)
    const offset = (pageNum - 1) * limitNum

    const posts = await db
      .select()
      .from(post)
      .where(isNull(post.repliedTo))
      .orderBy(desc(post.createdAt))
      .limit(limitNum)
      .offset(offset)
      .innerJoin(user, eq(post.authorId, user.id)) as unknown as PostWithAuthor[]

    response = posts
  }

  // if (id && replies === "true") {
  //   // get the post and posts that are replies to the post, then join with user table to get author name and avatar
  //   posts = await db.select().from(post).where(or(eq(post.id, id), eq(post.repliedTo, id))).orderBy(desc(post.createdAt)).innerJoin(user, eq(post.authorId, user.id)) as unknown as PostWithAuthor[]
  // }

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