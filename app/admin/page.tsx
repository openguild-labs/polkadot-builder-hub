"use client";

import GoBack from "@/components/go-back";
import { authClient } from "@/lib/auth-client";
import UnauthorizedComponent from "@/components/unauthorized";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminPage() {
  const { data: session, isPending } = authClient.useSession();

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
      <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto">
        <GoBack />
        <h1 className="text-2xl font-bold">Admin</h1>
        <div className="flex flex-row items-center justify-between">
          <Button asChild>
            <Link href="/admin/ideas">Ideas</Link>
          </Button>
        </div>
      </main>
    );
  }

  return <UnauthorizedComponent />;
}
