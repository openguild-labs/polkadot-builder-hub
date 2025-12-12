"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* World Map Background */}
      <div className="absolute inset-0 flex items-center justify-end z-0 pr-0 md:pr-20">
        <Image
          src="/graphics/World Map.png"
          alt="World Map"
          width={1200}
          height={900}
          className="object-contain opacity-60"
          priority
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(230, 0, 122, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(230, 0, 122, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gradient orbs for ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#E6007A] rounded-full blur-[200px] opacity-[0.06]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#552BBF] rounded-full blur-[180px] opacity-[0.04]" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#00B2FF] rounded-full blur-[150px] opacity-[0.03]" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4 py-24 md:py-32 max-w-5xl mx-auto text-center">
        {/* Main Title */}
        <div className="relative">
          <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-[10rem] text-[#1a1a1a] tracking-tight leading-none">
            BUILDERS HUB
          </h1>
          {/* Glow effect behind text */}
          <div className="absolute inset-0 font-display font-bold text-6xl md:text-8xl lg:text-[10rem] text-[#E6007A] tracking-tight leading-none blur-3xl opacity-20 -z-10">
            BUILDERS HUB
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-[#1a1a1a]/60 max-w-2xl text-base md:text-lg leading-relaxed mt-2">
          Build your apps secured by Polkadot. Access resources, find teammates,
          explore ideas, and join the next generation of blockchain builders.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <Link
            href="/explore-ideas?category=all"
            className="group relative flex items-center gap-3 px-10 py-4 bg-[#E6007A] hover:bg-[#ff1a88] text-white font-display text-sm tracking-wider transition-all duration-200 overflow-hidden"
          >
            <span className="relative z-10">Explore</span>
            <Image
              src="/polkadot.svg"
              alt="Polkadot"
              width={20}
              height={20}
              className="relative z-10 opacity-80 group-hover:opacity-100 transition-opacity invert"
            />
            {/* Button shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </Link>
          <Link
            href="/hackathon-resources"
            className="group flex items-center gap-3 px-10 py-4 border-2 border-[#1a1a1a] hover:border-[#E6007A] text-[#1a1a1a] hover:text-[#E6007A] font-display text-sm tracking-wider transition-all duration-200"
          >
            <span>View Resources</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Partner Attribution */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-20 text-sm">
          <span className="text-[#1a1a1a]/40">Made possible by</span>
          <span className="text-[#E6007A] font-medium">OpenGuild</span>
          <span className="text-[#1a1a1a]/20">|</span>
          <span className="text-[#E6007A] font-medium">Web3 Foundation</span>
          <span className="text-[#1a1a1a]/20">|</span>
          <span className="text-[#E6007A] font-medium">Polkadot</span>
        </div>

        {/* Partner Logos */}
        <div className="flex items-center justify-center gap-10 mt-6">
          <Image
            src="/openguild.png"
            alt="OpenGuild"
            width={36}
            height={36}
            className="opacity-50 hover:opacity-100 transition-opacity duration-300"
          />
          <Image
            src="/polkadot.svg"
            alt="Polkadot"
            width={36}
            height={36}
            className="opacity-50 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#E6007A]/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#E6007A]/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#E6007A]/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#E6007A]/30" />
    </section>
  );
}
