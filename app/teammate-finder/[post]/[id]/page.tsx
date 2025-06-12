"use client";

import { use } from "react";
import GoBack from "@/components/go-back";
import { authClient } from "@/lib/auth-client";
import { Skeleton } from "@/components/ui/skeleton";
import UnauthorizedComponent from "@/components/unauthorized";
import { PostsWithAuthorsResponse } from "@/types/posts";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Loader2, X, OctagonAlert } from "lucide-react";
import MainPost from "@/components/main-post";
import ReplyPost from "@/components/reply-post";
import AddReply from "@/components/add-reply";
import { User } from "@/types/users";

const fetchPosts = async (id: string): Promise<PostsWithAuthorsResponse> => {
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

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: session, isPending } = authClient.useSession();

  const {
    data: posts,
    isLoading,
    isError,
    error,
    isRefetching,
    isRefetchError,
    refetch,
  } = useQuery<PostsWithAuthorsResponse, Error>({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(id),
  });

  const mainPost = posts?.data?.find((post) => post.post.id === id);
  const replyPosts = posts?.data?.filter((post) => post.post.repliedTo === id);

  if (isPending) {
    return (
      <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto">
        <div className="flex flex-row items-center justify-between">
          <Skeleton className="h-[20px] w-[100px]" />
          <Skeleton className="h-[20px] w-[100px]" />
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
            <p className="text-lg font-bold">{error.message}</p>
          </div>
        )}
        {isLoading ? (
          <div className="flex flex-col gap-4">
            <Skeleton className="h-[200px] w-full" />
            {Array.from({ length: 2 }).map((_, index) => (
              <Skeleton key={index} className="h-[120px] w-full" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <MainPost
              mainPost={mainPost ? mainPost : undefined}
              user={session?.user as User | null}
              refetch={refetch}
            />
            {replyPosts?.map((replyPost) => (
              <ReplyPost
                key={replyPost.post.id}
                replyPost={replyPost}
                user={session?.user as User | null}
                refetch={refetch}
              />
            ))}
          </div>
        )}

        <AddReply id={id} refetch={refetch} />
      </main>
    );
  }

  return <UnauthorizedComponent />;
}
