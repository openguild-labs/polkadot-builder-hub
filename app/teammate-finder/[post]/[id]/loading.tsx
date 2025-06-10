import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
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
