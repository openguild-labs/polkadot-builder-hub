"use client";

import { use } from "react";
import GoBack from "@/components/go-back";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Loader2, X, OctagonAlert } from "lucide-react";
import { IdeasWithUsersResponse } from "@/types/ideas";
import { Badge } from "@/components/ui/badge";
import { formatTimestampToTimeAgo } from "@/lib/utils";
import { MarkdownPreview } from "@/components/markdown-preview";

const fetchIdea = async (id: string): Promise<IdeasWithUsersResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/idea?id=${id}`,
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

  const {
    data: idea,
    isLoading,
    isError,
    error,
    isRefetching,
    isRefetchError,
    refetch,
  } = useQuery<IdeasWithUsersResponse, Error>({
    queryKey: ["idea"],
    queryFn: () => fetchIdea(id),
  });

  return (
    <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto mt-16">
      <div className="flex flex-row items-center justify-between">
        <GoBack useHistory={true} />
        <div className="flex flex-row gap-2">
          <Button
            disabled={isRefetching}
            className="hover:cursor-pointer"
            size="icon"
            onClick={() => refetch()}
          >
            {isRefetching ? (
              <Loader2 className="animate-spin" />
            ) : isRefetchError ? (
              <X />
            ) : (
              <RefreshCcw />
            )}
          </Button>
        </div>
      </div>
      {isError && (
        <div className="flex flex-row gap-2 items-center bg-red-500 p-2 text-secondary">
          <OctagonAlert className="w-4 h-4" />
          <p className="text-lg font-bold">{error.message}</p>
        </div>
      )}
      {isLoading ? (
        <div className="flex flex-col gap-4">
          <Skeleton className="h-[24px] w-[100px]" />
          <Skeleton className="h-[24px] w-full" />
          <Skeleton className="h-[16px] w-[100px]" />
          <div className="flex flex-row gap-2">
            <Skeleton className="h-[20px] w-[20px] rounded-full" />
            <Skeleton className="h-[14px] w-[100px]" />
          </div>
          <Skeleton className="h-[200px] w-full" />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{idea?.data[0].idea.title}</h1>
          <p className="text-md">{idea?.data[0].idea.description}</p>
          <div className="flex flex-row gap-2">
            <Badge variant="outline">{idea?.data[0].idea.level}</Badge>
          </div>
          <div className="flex flex-row gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={idea?.data[0].user.image}
              alt="avatar"
              width={20}
              height={20}
              className="rounded-full"
            />
            <p className="text-sm">{idea?.data[0].user.name}</p>
            <p className="text-sm text-muted-foreground">•</p>
            <p className="text-sm text-muted-foreground">
              {formatTimestampToTimeAgo(
                new Date(idea?.data[0].idea.createdAt || new Date())
              )}
            </p>
          </div>
          <MarkdownPreview content={idea?.data[0].idea.content || ""} />
        </div>
      )}
    </main>
  );
}
