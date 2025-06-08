"use client";

import GoBack from "@/components/go-back";
import { authClient } from "@/lib/auth-client";
import UnauthorizedComponent from "@/components/unauthorized";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Clock, Plus } from "lucide-react";
import PostCard from "@/components/post-card";
import { posts } from "@/components/mocks/posts";
import Link from "next/link";

export default function Page() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <Skeleton className="h-[200px] w-full" />
      </div>
    );
  }

  if (session?.user) {
    return (
      <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto">
        <GoBack />
        <h1 className="text-2xl font-bold">Teammate Finder</h1>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2">
            <Button className="hover:cursor-pointer" variant="outline">
              <Clock />
              Recent
            </Button>
          </div>
          <Button className="hover:cursor-pointer" asChild>
            <Link href="/teammate-finder/create-post">
              <Plus />
              Post
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    );
  }

  return <UnauthorizedComponent />;
}
