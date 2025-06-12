import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { user } from "@/db/schema/auth-schema";
import { idea } from "@/db/schema/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { createId } from "@paralleldrive/cuid2";
import { IdeaWithUser } from "@/types/ideas";
import { eq, desc, and, sql } from "drizzle-orm";

// Get idea(s)
export async function GET(request: NextRequest) {

  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')
  const category = searchParams.get('category')

  let response: { data: IdeaWithUser[], meta?: { currentPage: number, limit: number, totalPages: number } } = { data: [] }

  if (category === "all" && !id) {
    // Get total count of posts and posts data in a single query
    const ideas = await db
    .select({
      idea: {
        id: idea.id,
        title: idea.title,
        description: idea.description,
        content: idea.content,
        category: idea.category,
        level: idea.level,
        status: idea.status,
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
      totalCount: sql<number>`(SELECT COUNT(*) FROM ${idea})`
    })
    .from(idea)
    .where(eq(idea.status, "approved"))
    .orderBy(desc(idea.createdAt))
    .innerJoin(user, eq(idea.userId, user.id)) as unknown as (IdeaWithUser & { totalCount: number })[]

    const totalCount = ideas[0]?.totalCount ?? 0

    response = {
      data: ideas,
      meta: {
        currentPage: 1,
        limit: totalCount,
        totalPages: 1
      }
    }
  }

  if (category !== "all" && !id) {

    // Get total count of posts and posts data in a single query
    const ideas = await db
      .select({
        idea: {
          id: idea.id,
          title: idea.title,
          description: idea.description,
          content: idea.content,
          category: idea.category,
          level: idea.level,
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
        totalCount: sql<number>`(SELECT COUNT(*) FROM ${idea})`
      })
      .from(idea)
      .where(and(eq(idea.category, category as string), eq(idea.status, "approved")))
      .orderBy(desc(idea.createdAt))
      .innerJoin(user, eq(idea.userId, user.id)) as unknown as (IdeaWithUser & { totalCount: number })[]

    const totalCount = ideas[0]?.totalCount ?? 0

    response = {
      data: ideas,
      meta: {
        currentPage: 1,
        limit: totalCount,
        totalPages: 1
      }
    }
  }

  if (id) {
    const ideaResult = await db
      .select({
        idea: {
          id: idea.id,
          title: idea.title,
          description: idea.description,
          content: idea.content,
          category: idea.category,
          level: idea.level,
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
        }
      })
      .from(idea)
      .where(eq(idea.id, id))
      .innerJoin(user, eq(idea.userId, user.id)) as unknown as IdeaWithUser[]
    
    response = { data: ideaResult }
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