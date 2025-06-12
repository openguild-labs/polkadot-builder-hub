"use client";

import { use } from "react";
import GoBack from "@/components/go-back";
import { authClient } from "@/lib/auth-client";
import UnauthorizedComponent from "@/components/unauthorized";
import { Skeleton } from "@/components/ui/skeleton";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: session, isPending } = authClient.useSession();

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

  if (session?.user.role === "admin") {
    return (
      <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto">
        <GoBack href="/admin/ideas" />
        <h1 className="text-2xl font-bold">Idea {id}</h1>
        <p className="text-sm text-muted-foreground">
          {id}
        </p>
      </main>
    )
  }

  return <UnauthorizedComponent />
}