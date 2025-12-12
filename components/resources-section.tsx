import Link from "next/link";
import { ArrowRight, Handshake, Coins } from "lucide-react";
import Image from "next/image";

export default function ResourcesSection() {
  return (
    <section className="relative py-24 px-4 bg-white">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col items-center gap-4">
          <span className="font-display text-sm text-[#E6007A] tracking-[0.3em]">
            GET STARTED
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] text-center">
            WELCOME ABOARD<span className="text-[#E6007A]">,</span> BUILDERS
            <span className="text-[#E6007A]">!</span>
          </h2>
          <div className="h-1 w-24 bg-[#E6007A] mt-4"></div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Grant Card */}
          <Link
            href="/grants"
            className="group relative bg-gradient-to-br from-[#E6007A]/10 to-transparent border-2 border-[#E6007A] p-8 transition-all duration-300 hover:shadow-[4px_4px_0_0_#E6007A]"
          >
            <div className="flex flex-col h-full justify-between min-h-[280px]">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#E6007A]/10 border-2 border-[#E6007A]">
                    <Coins className="w-6 h-6 text-[#E6007A]" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#E6007A] group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="font-display text-xl md:text-2xl text-[#1a1a1a] tracking-wide">
                  GET GRANTS TO GROW YOUR IDEAS
                  <span className="text-[#E6007A]">!</span>
                </h3>
                <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">
                  Access funding opportunities from the Polkadot ecosystem to
                  bring your innovative projects to life.
                </p>
              </div>
              <div className="relative w-48 h-48 self-end -mb-4 -mr-4 opacity-60 group-hover:opacity-100 transition-opacity">
                <Image
                  src="/graphics/Dotted Dot Coin.png"
                  alt="Grants"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Side Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Past Hackathon Winners */}
            <Link
              href="/past-hackathon-winners"
              className="group flex items-center justify-between bg-white border-2 border-[#1a1a1a] p-6 transition-all duration-300 hover:border-[#E6007A] hover:shadow-[4px_4px_0_0_#E6007A]"
            >
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16">
                  <Image
                    src="/graphics/Trophy.png"
                    alt="Trophy"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg text-[#1a1a1a] tracking-wide">
                    PAST HACKATHON WINNERS
                  </h3>
                  <p className="text-[#1a1a1a]/50 text-sm">
                    See the best projects built on Polkadot
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#E6007A] group-hover:translate-x-2 transition-transform" />
            </Link>

            {/* Join Communities */}
            <Link
              href="/join-communities"
              className="group flex items-center justify-between bg-white border-2 border-[#1a1a1a] p-6 transition-all duration-300 hover:border-[#552BBF] hover:shadow-[4px_4px_0_0_#552BBF]"
            >
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16">
                  <Image
                    src="/graphics/Online.png"
                    alt="Community"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg text-[#1a1a1a] tracking-wide">
                    JOIN COMMUNITIES
                  </h3>
                  <p className="text-[#1a1a1a]/50 text-sm">
                    Connect with fellow builders worldwide
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#552BBF] group-hover:translate-x-2 transition-transform" />
            </Link>

            {/* Teammate Finder */}
            <Link
              href="/teammate-finder?page=1&limit=100"
              className="group flex items-center justify-between bg-white border-2 border-[#1a1a1a] p-6 transition-all duration-300 hover:border-[#00B2FF] hover:shadow-[4px_4px_0_0_#00B2FF]"
            >
              <div className="flex items-center gap-6">
                <div className="p-3 bg-[#00B2FF]/10 border-2 border-[#00B2FF]">
                  <Handshake className="w-8 h-8 text-[#00B2FF]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg text-[#1a1a1a] tracking-wide">
                    TEAMMATE FINDER
                  </h3>
                  <p className="text-[#1a1a1a]/50 text-sm">
                    Find your dream team for hackathons
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#00B2FF] group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
