import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col gap-4 text-center items-center justify-center h-[700px] bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-400">
      <h1 className="text-4xl font-bold">Polkadot Builders Resources</h1>
      <p className="text-lg text-muted-foreground">
        Aggregated by OpenGuild ♥️
      </p>
      <p className="text-lg font-semibold">
        Start building on Polkadot Hub - powerful smart contract layers for
        consumer dApps.
      </p>
      <div className="flex flex-row gap-4 justify-center">
        <Button className="bg-primary hover:bg-[#FF2670] hover:text-white transition-all duration-200 ease-in-out" asChild>
          <Link href="/explore-ideas?category=all">Explore ideas</Link>
        </Button>
        <Button variant="secondary" className="hover:cursor-pointer" asChild>
          <Link href="/hackathon-resources">Hackathon resources</Link>
        </Button>
      </div>
    </div>
  );
}
