"use client";

import GoBack from "@/components/go-back";
import { useParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Skeleton } from "@/components/ui/skeleton";
import UnauthorizedComponent from "@/components/unauthorized";
import { PostWithAuthor } from "@/types/posts";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Loader2, X, OctagonAlert } from "lucide-react";
import MainPost from "@/components/main-post";
import ReplyPost from "@/components/reply-post";
import AddReply from "@/components/add-reply";

const fetchPosts = async (id: string): Promise<PostWithAuthor[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/post?id=${id}&replies=true`,
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
  const { id } = useParams<{ id: string }>();
  const { data: session, isPending } = authClient.useSession();

  const {
    data: posts,
    isLoading,
    isError,
    error,
    isRefetching,
    isRefetchError,
    refetch,
  } = useQuery<PostWithAuthor[], Error>({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(id),
  });

  const mainPost = posts?.filter((post) => post.post.id === id);
  const replyPosts = posts?.filter((post) => post.post.repliedTo === id);

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
        <div className="flex flex-row items-center justify-between">
          <GoBack href="/teammate-finder" />
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
        {isError && (
          <div className="flex flex-row gap-2 items-center bg-red-500 p-2 text-secondary">
            <OctagonAlert className="w-4 h-4" />
            <p className="text-lg font-bold">
              {error.message}
            </p>
          </div>
        )}
        {isLoading ? (
          <Skeleton className="h-[200px] w-full" />
        ) : (
          <div className="flex flex-col gap-4">
            <MainPost mainPost={mainPost} />
            {replyPosts?.map((replyPost) => (
              <ReplyPost key={replyPost.post.id} replyPost={replyPost} />
            ))}
          </div>
        )}
        
        <AddReply id={id} refetch={refetch} />
      </main>
    );
  }

  return <UnauthorizedComponent />;
}
