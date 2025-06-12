import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-background/80 flex flex-row justify-between gap-4 items-center p-4 border-b">
      <Link href="/">
        <Image src="/polkadot.svg" alt="logo" width={100} height={50} />
      </Link>
      <div className="flex flex-row gap-4">
        <Button className="hover:cursor-pointer" asChild>
          <Link
            href="/submit-an-idea"
          >
            Submit an idea
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </header>
  );
}