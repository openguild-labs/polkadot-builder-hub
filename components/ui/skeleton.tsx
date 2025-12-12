import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-[#E6007A]/10 animate-pulse", className)}
      {...props}
    />
  )
}

export { Skeleton }
