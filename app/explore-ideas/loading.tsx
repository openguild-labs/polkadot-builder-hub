import GoBack from "@/components/go-back";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="flex flex-col gap-4 p-4 mt-16">
      <GoBack />
      <h1 className="text-2xl font-bold">Explore Ideas</h1>
      <Skeleton className="h-[400px] w-full" />
    </main>
  );
}