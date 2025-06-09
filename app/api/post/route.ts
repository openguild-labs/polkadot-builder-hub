import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { post } from "@/db/schema/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { createId } from "@paralleldrive/cuid2";
 

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

  return NextResponse.json(newPost)
}