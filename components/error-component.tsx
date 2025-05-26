import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorComponent() {

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Error</h1>
      <p className="text-sm text-gray-500">Something went wrong with authentication!</p>
      <div className="flex flex-row gap-4 mt-4">
        <Button className="hover:cursor-pointer" asChild>
          <Link href="/signin">
            Sign In
          </Link>
        </Button>
      </div>
    </div>
  )
}
