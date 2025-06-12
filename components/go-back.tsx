"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function GoBack({ href = "/", useHistory = false }: { href?: string; useHistory?: boolean }) {
  const router = useRouter();

  if (useHistory) {
    return (
      <Button 
        variant="ghost" 
        className="flex items-center gap-2 border-2 border-primary rounded-full p-2 w-fit hover:cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft />
        <span>Go back</span>
      </Button>
    );
  }

  return (
    <Button variant="ghost" className="flex items-center gap-2 border-2 border-primary rounded-full p-2 w-fit" asChild>
      <Link href={href}>
        <ArrowLeft />
        <span>Go back</span>
      </Link>
    </Button>
  );
}