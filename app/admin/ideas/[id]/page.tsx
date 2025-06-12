"use client";

import { use } from "react";
import GoBack from "@/components/go-back";
import { authClient } from "@/lib/auth-client";
import UnauthorizedComponent from "@/components/unauthorized";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Loader2, X, OctagonAlert, Pencil, Stamp, Ban, Check } from "lucide-react";
import { AdminIdeasWithUsersResponse } from "@/types/ideas";
import { Badge } from "@/components/ui/badge";
import { formatTimestampToTimeAgo } from "@/lib/utils";
import { MarkdownPreview } from "@/components/markdown-preview";

const fetchIdea = async (id: string): Promise<AdminIdeasWithUsersResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/admin-idea?id=${id}`,
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

const updateIdeaStatus = async (id: string, status: string): Promise<AdminIdeasWithUsersResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/admin-idea?id=${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ id, status }),
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
    data: idea,
    isLoading,
    isError,
    error,
    isRefetching,
    isRefetchError,
    refetch,
  } = useQuery<AdminIdeasWithUsersResponse, Error>({
    queryKey: ["idea"],
    queryFn: () => fetchIdea(id),
  });

  // Call the query client to update the bot details
  const queryClient = useQueryClient();

  const {
    mutate: updateIdeaStatusMutation,
    isPending: isUpdateIdeaStatusPending,
    isSuccess: isUpdateIdeaStatusSuccess,
    reset: resetMutation,
  } = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => updateIdeaStatus(id, status),
    onSuccess: (data) => {
      queryClient.setQueryData(["idea"], data);
      // Reset success state after 0.5 seconds
      setTimeout(() => {
        resetMutation();
      }, 500);
    },
  });

  function handleApproveIdea() {
    updateIdeaStatusMutation({ id, status: "approved" });
  }

  function handleRejectIdea() {
    updateIdeaStatusMutation({ id, status: "pending" });
  }

  if (isPending) {
    return (
      <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto mt-16">
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

  if (session?.user.role === "admin") {
    return (
      <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto mt-16">
        <GoBack href="/admin/ideas" />
        <p className="text-sm text-muted-foreground">{id}</p>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2">
            <Button variant="outline" size="icon" onClick={() => refetch()}>
              {isRefetching ? (
                <Loader2 className="animate-spin" />
              ) : isRefetchError ? (
                <X />
              ) : (
                <RefreshCcw />
              )}
            </Button>
          </div>
          <div className="flex flex-row gap-2">
            <Button className="hover:cursor-pointer" variant="outline" size="icon">
              <Pencil />
            </Button>
            <Button disabled={isUpdateIdeaStatusPending} className="hover:cursor-pointer" variant="outline" size="icon" onClick={handleApproveIdea}>
              {
                isUpdateIdeaStatusPending ? (
                  <Loader2 className="animate-spin" />
                ) : isUpdateIdeaStatusSuccess ? (
                  <Check />
                ) : (
                  <Stamp />
                )
              }
            </Button>
            <Button disabled={isUpdateIdeaStatusPending} className="hover:cursor-pointer" variant="outline" size="icon" onClick={handleRejectIdea}>
              {
                isUpdateIdeaStatusPending ? (
                  <Loader2 className="animate-spin" />
                ) : isUpdateIdeaStatusSuccess ? (
                  <Check />
                ) : (
                  <Ban />
                )
              }
            </Button>
          </div>
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
          <Skeleton className="h-[24px] w-[100px]" />
        ) : (
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{idea?.data[0].idea.title}</h1>
            <p className="text-md">{idea?.data[0].idea.description}</p>
            <div className="flex flex-row gap-2">
              <Badge variant="outline">{idea?.data[0].idea.level}</Badge>
              <Badge>{idea?.data[0].idea.status}</Badge>
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

  return <UnauthorizedComponent />;
}
