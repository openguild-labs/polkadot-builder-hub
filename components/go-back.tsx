import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GoBack() {
  return (
    <Button variant="ghost" className="flex items-center gap-2 border-2 border-primary rounded-full p-2 w-fit" asChild>
      <Link href="/">
        <ArrowLeft />
        <span>Go back</span>
      </Link>
    </Button>
  );
}