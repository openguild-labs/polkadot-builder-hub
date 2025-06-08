"use client";

import GoBack from "@/components/go-back";
import { authClient } from "@/lib/auth-client";
import UnauthorizedComponent from "@/components/unauthorized";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Clock, Plus } from "lucide-react";

export default function Page() {
  const { data: session, isPending } = authClient.useSession();

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
            <Button variant="outline">
              <Clock />
              Recent
            </Button>
          </div>
          <Button>
            <Plus />
            Post
          </Button>
        </div>
      </main>
    );
  }

  return <UnauthorizedComponent />;
}
