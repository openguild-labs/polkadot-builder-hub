import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div 
      className="flex flex-col gap-4 text-center items-center justify-center h-[700px] bg-gradient-to-br from-cyan-100/80 via-blue-100/80 to-purple-400/80 relative"
      style={{
        backgroundImage: 'url("/polkadot-builders-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      <div className="flex flex-col gap-4 relative z-10">
        <h1 className="text-4xl font-bold">Polkadot Builders Resources</h1>
        <p className="text-lg">
          Aggregated by OpenGuild ♥️
        </p>
        <p className="text-lg font-semibold">
          Start building on Polkadot Hub - powerful smart contract layers for
          consumer dApps.
        </p>
        <div className="flex flex-row gap-4 justify-center mt-4">
          <Button className="bg-primary hover:bg-[#FF2670] hover:text-white transition-all duration-200 ease-in-out" asChild>
            <Link href="/explore-ideas?category=all">Explore ideas</Link>
          </Button>
          <Button variant="secondary" className="hover:cursor-pointer" asChild>
            <Link href="/hackathon-resources">Hackathon resources</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
