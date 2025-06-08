import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Skeleton className="h-[200px] w-full" />
    </div>
  );
}