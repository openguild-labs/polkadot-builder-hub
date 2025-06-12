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
  LogOut,
} from "lucide-react";
import PostCard from "@/components/post-card";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { PostsWithAuthorsResponse } from "@/types/posts";
import PostPagination from "@/components/post-pagination";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const fetchPosts = async (page: number, limit: number): Promise<PostsWithAuthorsResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/post?page=${page}&limit=${limit}`,
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
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 100;

  const {
    data: postsWithAuthors,
    isLoading,
    isError,
    error,
    isRefetching,
    isRefetchError,
    refetch,
  } = useQuery<PostsWithAuthorsResponse, Error>({
    queryKey: ["postsWithAuthors", page, limit],
    queryFn: ({ queryKey }) => fetchPosts(queryKey[1] as number, queryKey[2] as number),
  });

  if (isPending) {
    return (
      <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto">
        <div className="flex flex-row items-center justify-between">
          <Skeleton className="h-[20px] w-[100px]" />
          <Skeleton className="h-[20px] w-[100px]" />
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-[20px] w-[100px]" />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2">
              <Skeleton className="h-[20px] w-[100px]" />
              <Skeleton className="h-[20px] w-[100px]" />
            </div>
            <Skeleton className="h-[20px] w-[100px]" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} className="h-[120px] w-full" />
          ))}
        </div>
      </main>
    );
  }

  if (session?.user) {
    return (
      <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto">
        <div className="flex flex-row items-center justify-between">
          <GoBack />
          <Button
            className="hover:cursor-pointer"
            variant="outline"
            onClick={() => authClient.signOut()}
          >
            <LogOut />
            Sign Out
          </Button>
        </div>
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
            postsWithAuthors?.data?.map((item) => (
              <PostCard key={item.post.id} post={item} />
            ))
          )}
        </div>
        <PostPagination
          currentPage={postsWithAuthors?.meta?.currentPage || 1}
          totalPages={postsWithAuthors?.meta?.totalPages || 1}
          onPageChange={(page) => {
            router.push(`/teammate-finder?page=${page}&limit=100`);
          }}
        />
      </main>
    );
  }

  return <UnauthorizedComponent />;
}
