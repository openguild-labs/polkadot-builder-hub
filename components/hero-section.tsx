import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div 
      className="flex flex-col gap-4 text-center items-center justify-center min-h-screen md:pt-16 relative"
    >
      <div className="flex flex-col gap-2 md:gap-4 relative z-10 items-center bg-secondary/80 py-8 px-4 md:p-24 rounded-4xl mx-4 md:mx-0">
        <Image src="/polkadot.svg" alt="Polkadot logo" width={200} height={200} />
        <h1 className="text-3xl md:text-5xl font-medium">Builders Resources</h1>
        <div className="flex flex-row items-center justify-center gap-4 mt-4 w-full">
          <div className="h-1 w-full bg-gray-300/50 rounded-full"></div>
          <Image src="/openguild.png" alt="OpenGuild logo" width={100} height={100} />
          <div className="h-1 w-full bg-gray-300/50 rounded-full"></div>
        </div>
        <p className="text-md md:text-lg font-semibold mt-8">
          Build Your Apps Secured By Polkadot
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-4">
          <Button className="bg-primary hover:bg-[#FF2670] hover:text-white transition-all duration-200 ease-in-out px-8 py-4 md:px-12 md:py-6 text-lg" asChild>
            <Link href="/explore-ideas?category=all">Explore ideas</Link>
          </Button>
          <Button variant="secondary" className="hover:cursor-pointer px-8 py-4 md:px-12 md:py-6 text-lg" asChild>
            <Link href="/hackathon-resources">Hackathon resources</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
