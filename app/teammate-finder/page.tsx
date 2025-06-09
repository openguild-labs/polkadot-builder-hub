"use client";

import GoBack from "@/components/go-back";
import { authClient } from "@/lib/auth-client";
import UnauthorizedComponent from "@/components/unauthorized";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Plus,
  RefreshCcw,
  Loader2,
  X,
  OctagonAlert,
} from "lucide-react";
import PostCard from "@/components/post-card";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { PostWithAuthor } from "@/types/posts";

const fetchPosts = async (): Promise<PostWithAuthor[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/post?page=1&limit=20`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export default function Page() {
  const { data: session, isPending } = authClient.useSession();

  const {
    data: postsWithAuthors,
    isLoading,
    isError,
    error,
    isRefetching,
    isRefetchError,
    refetch,
  } = useQuery<PostWithAuthor[], Error>({
    queryKey: ["postsWithAuthors"],
    queryFn: fetchPosts,
  });

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
            <Button
              variant="secondary"
              className="w-[100px] hover:cursor-pointer"
              onClick={() => refetch()}
            >
              {isRefetching ? (
                <Loader2 className="animate-spin" />
              ) : isRefetchError ? (
                <X className="w-4 h-4" />
              ) : (
                <>
                  <RefreshCcw />
                  Refresh
                </>
              )}
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
          {isError && (
            <div className="flex flex-row gap-2 items-center bg-red-500 p-2 text-secondary">
              <OctagonAlert className="w-4 h-4" />
              <p className="text-lg font-bold">
                {error.message}. Showing posts from the last fetch.
              </p>
            </div>
          )}
          {isLoading ? (
            <Skeleton className="h-[300px] w-full" />
          ) : (
            postsWithAuthors?.map((item) => (
              <PostCard key={item.post.id} post={item} />
            ))
          )}
        </div>
      </main>
    );
  }

  return <UnauthorizedComponent />;
}
