import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UnauthorizedComponent() {

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Unauthorized</h1>
      <p className="text-sm text-gray-500">You are not allowed to access this page!</p>
      <Button className="mt-4" asChild>
        <Link href="/signin">
          Sign In
        </Link>
      </Button>
    </div>
  )
}
