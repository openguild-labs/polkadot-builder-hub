"use client";

import GoBack from "@/components/go-back";
import { Skeleton } from "@/components/ui/skeleton";
// import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IdeasWithUsersResponse } from "@/types/ideas";
import IdeaCard from "@/components/idea-card";
import { categories } from "@/components/mocks/categories";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { OctagonAlert, RefreshCcw, Loader2, X } from "lucide-react";

const fetchIdeas = async (
  category: string
): Promise<IdeasWithUsersResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/idea?category=${category}`,
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

export default function ExploreIdeasPage() {
  // const { data: session, isPending } = authClient.useSession();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "all";
  const selectedCategoryName =
    categories.find((category) => category.slug === selectedCategory)?.name ||
    "All categories";
  const router = useRouter();
  // const [sortMode, setSortMode] = useState("date");

  const {
    data: ideasWithUsers,
    isLoading,
    isError,
    error,
    isRefetching,
    isRefetchError,
    refetch,
  } = useQuery<IdeasWithUsersResponse, Error>({
    queryKey: ["ideasWithUsers", selectedCategory],
    queryFn: ({ queryKey }) => fetchIdeas(queryKey[1] as string),
  });

  function handleCategoryChange(category: string) {
    router.push(`/explore-ideas?category=${category}`);
  }

  // function handleSortByChange(sortBy: string) {
  //   setSortMode(sortBy);
  // }

    return (
      <main className="flex flex-col gap-8 p-4 mt-16">
        <GoBack href="/" />
        <h1 className="text-2xl font-bold">Explore Ideas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 h-[600px]">
          <div className="hidden lg:flex lg:flex-col lg:col-span-1 h-[600px]">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <div className="flex flex-col gap-2 items-start">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="ghost"
                  className="hover:cursor-pointer"
                  onClick={() => handleCategoryChange(category.slug)}
                >
                  <category.icon />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col h-[600px]">
            <div className="flex flex-row justify-between">
              <h2 className="text-lg font-bold mb-4">{selectedCategoryName}</h2>
              <div className="flex flex-row gap-2">
                {/* <Select onValueChange={handleSortByChange} defaultValue="date">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="level">Level</SelectItem>
                    <SelectItem value="date">Date added</SelectItem>
                  </SelectContent>
                </Select> */}
                <Button
                  variant="secondary"
                  className="hover:cursor-pointer"
                  disabled={isRefetching}
                  size="icon"
                  onClick={() => refetch()}
                >
                  {isRefetching ? (
                    <Loader2 className="animate-spin" />
                  ) : isRefetchError ? (
                    <X />
                  ) : (
                    <>
                      <RefreshCcw />
                    </>
                  )}
                </Button>
              </div>
            </div>
            {isError && (
              <div className="flex flex-row gap-2 items-center bg-red-500 p-2 text-secondary">
                <OctagonAlert className="w-4 h-4" />
                <p className="text-lg font-bold">
                  {error.message}. Showing ideas from the last fetch.
                </p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto flex-1">
              {isLoading ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton key={index} className="h-[200px] w-full" />
                ))
              ) : ideasWithUsers?.data.length === 0 ? (
                <p className="text-md font-medium text-muted-foreground">No ideas found</p>
              ) : (
                ideasWithUsers?.data.map((idea) => (
                  <IdeaCard key={idea.idea.id} idea={idea} />
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    );
}
