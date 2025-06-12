import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto mt-16">
      <div className="flex flex-row items-center justify-between">
        <Skeleton className="h-[20px] w-[100px]" />
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="h-[40px] w-[100px]" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-[20px] w-[40px]" />
          <Skeleton className="h-[40px] w-full" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Skeleton className="h-[40px] w-[100px]" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-[300px] w-full" />
        </div>
      </div>
    </main>
  );
}
