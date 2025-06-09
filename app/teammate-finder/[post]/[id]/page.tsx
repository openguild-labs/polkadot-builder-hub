"use client";

import GoBack from "@/components/go-back";
import { useParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Skeleton } from "@/components/ui/skeleton";
import UnauthorizedComponent from "@/components/unauthorized";
import { Post } from "@/types/posts";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { MarkdownPreview } from "@/components/markdown-preview";

const fetchPosts = async (id: string): Promise<Post[]> => {
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
  } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(id),
  });

  const mainPost = posts?.filter((post) => post.id === id);

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
          <Button className="hover:cursor-pointer" variant="secondary">
            <RotateCcw />
          </Button>
        </div>
        <h1 className="text-2xl font-bold">{mainPost?.[0].title}</h1>
        <MarkdownPreview content={mainPost?.[0].content || ""} />
      </main>
    );
  }

  return <UnauthorizedComponent />;
}
