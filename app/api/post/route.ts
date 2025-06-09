import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { post } from "@/db/schema/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { createId } from "@paralleldrive/cuid2";
import { Post } from "@/types/posts";
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

  let posts: Post[] = []
  
  if (page && limit && !id && !replies) {
    // get recent posts by page and limit without repliedTo
    posts = await db.select().from(post).where(isNull(post.repliedTo)).limit(Number(limit)).offset((Number(page) - 1) * Number(limit)) as Post[]
  }

  if (id && replies === "true") {
    // get the post and posts that are replied to the post
    posts = await db.select().from(post).where(or(eq(post.id, id), eq(post.repliedTo, id))).orderBy(desc(post.createdAt)) as Post[]
  }

  return NextResponse.json(posts)
}

// Create a post
export async function POST(request: NextRequest) {
 
  const session = await auth.api.getSession({
      headers: await headers()
  })

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, content } = await request.json()

  const id = createId()

  const newPost = await db.insert(post).values({
    id: id,
    title: title,
    content: content,
    repliedTo: null,
    authorId: session.user.id,
    tags: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  }).returning()

  return NextResponse.json(newPost[0])
}