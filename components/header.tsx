import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 flex flex-row justify-between gap-4 items-center p-4 border-b">
      <Link href="/">
        <Image src="/polkadot.svg" alt="logo" width={100} height={50} />
      </Link>
      <div className="flex flex-row gap-4">
        <Button className="hover:cursor-pointer" asChild>
          <Link
            href="https://zxstimlabs.notion.site/1f5d4deb717c80dab147e1d2a8794c9a"
            target="_blank"
          >
            Submit an idea
            <ExternalLink className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
}