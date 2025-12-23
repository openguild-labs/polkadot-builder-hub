"use client";

import Link from "next/link";
import { ArrowRight, Trophy, Sparkles, Heart, Palette } from "lucide-react";
import { hackathonTracks } from "./mocks/hackathon-ideas";

const consolidationPrizesData = [
  {
    name: "Most Loved Project",
    prize: "$500",
    winners: 3,
    icon: Heart,
    color: "#E6007A",
  },
  {
    name: "Best UI/UX Project",
    prize: "$500",
    winners: 3,
    icon: Palette,
    color: "#552BBF",
  },
];

export default function HackathonSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background effects - subtle grid */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(230, 0, 122, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(230, 0, 122, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#E6007A] rounded-full blur-[200px] opacity-[0.03]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#552BBF] rounded-full blur-[180px] opacity-[0.03]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E6007A]/10 border border-polkadot-pink/30 mb-6">
            <Sparkles className="w-4 h-4 text-polkadot-pink" />
            <span className="font-display text-xs text-polkadot-pink tracking-widest">
              HACKATHON 2026
            </span>
          </div>

          <h2 className="font-display font-bold text-4xl md:text-6xl text-[#1a1a1a] mb-4">
            POLKADOT HUB HACKATHON
          </h2>

          <p className="text-[#1a1a1a]/60 max-w-2xl mx-auto text-base md:text-lg mb-4">
            Build Once. Scale Everywhere. A 4-week online hackathon designed to
            discover and accelerate the most promising Web3 builders on Polkadot
            Hub.
          </p>

          <div className="flex items-center justify-center gap-2 text-[#1a1a1a]/40 text-sm font-display">
            <span>Feb 15, 2026 - Mar 24, 2026</span>
          </div>
        </div>

        {/* Prize Pool Banner */}
        <div className="relative mb-16 p-8 border-2 border-polkadot-pink/20 bg-gradient-to-r from-[#E6007A]/5 via-white to-[#552BBF]/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#E6007A]/10 border border-polkadot-pink/30">
                <Trophy className="w-8 h-8 text-polkadot-pink" />
              </div>
              <div>
                <p className="text-[#1a1a1a]/60 text-sm font-display tracking-wider">
                  TOTAL PRIZE POOL
                </p>
                <p className="font-display font-bold text-4xl text-[#1a1a1a]">
                  $30,000
                </p>
              </div>
            </div>
            <Link
              href="https://hackathon.openguild.wtf/"
              target="_blank"
              className="group flex items-center gap-2 px-8 py-4 bg-[#E6007A] hover:bg-[#ff1a88] text-white font-display text-sm tracking-wider transition-all"
            >
              Register as Hacker
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Tracks */}
        <div className="mb-16">
          <h3 className="font-display text-xl text-[#1a1a1a] mb-8 text-center">
            COMPETE ACROSS 3 TRACKS • 150 BUILD IDEAS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hackathonTracks.map((track) => (
              <div
                key={track.id}
                className="group relative p-6 bg-white border-2 border-[#1a1a1a]/10 hover:border-polkadot-pink/50 transition-all duration-300 shadow-sm"
              >
                {/* Track number */}
                <div
                  className="absolute top-4 right-4 font-display text-6xl font-bold opacity-10"
                  style={{ color: track.color }}
                >
                  {track.id.toString().padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <span className="text-4xl mb-4 block">{track.icon}</span>

                  <h4 className="font-display font-bold text-xl text-[#1a1a1a] mb-2">
                    {track.name}
                  </h4>

                  <p className="text-[#1a1a1a]/60 text-sm mb-6 leading-relaxed">
                    {track.description}
                  </p>

                  {/* Prize breakdown */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#1a1a1a]/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#1a1a1a]/50">🥇 1st Prize</span>
                      <span className="text-[#1a1a1a] font-display">
                        {track.prizes.first}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#1a1a1a]/50">🥈 2nd Prize</span>
                      <span className="text-[#1a1a1a] font-display">
                        {track.prizes.second}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#1a1a1a]/50">🥉 3rd Prize</span>
                      <span className="text-[#1a1a1a] font-display">
                        {track.prizes.third}
                      </span>
                    </div>
                  </div>

                  {/* Ideas count */}
                  <div
                    className="flex items-center justify-between p-3 -mx-2"
                    style={{ backgroundColor: `${track.color}10` }}
                  >
                    <span className="text-[#1a1a1a]/60 text-sm">
                      {track.ideas.length} Build Ideas
                    </span>
                    <Link
                      href={`/hackathon-ideas?track=${track.id}`}
                      className="flex items-center gap-1 text-sm font-display tracking-wider transition-colors"
                      style={{ color: track.color }}
                    >
                      Explore
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consolidation Prizes */}
        <div className="mb-16">
          <h3 className="font-display text-xl text-[#1a1a1a] mb-8 text-center">
            CONSOLIDATION PRIZES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {consolidationPrizesData.map((prize, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white border-2 border-[#1a1a1a]/10 shadow-sm"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ backgroundColor: `${prize.color}15` }}
                >
                  <prize.icon
                    className="w-6 h-6"
                    style={{ color: prize.color }}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-[#1a1a1a] text-sm mb-1">
                    {prize.name}
                  </h4>
                  <p className="text-[#1a1a1a]/50 text-xs">
                    {prize.winners} winners
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl text-[#1a1a1a]">
                    {prize.prize}
                  </p>
                  <p className="text-[#1a1a1a]/50 text-xs">each</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#1a1a1a]/60 mb-6">
            Made possible by{" "}
            <span className="text-polkadot-pink">OpenGuild</span>
            {" | "}
            <span className="text-polkadot-pink">Web3 Foundation</span>
            {" | "}
            <span className="text-polkadot-pink">Polkadot</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://hackathon.openguild.wtf/"
              target="_blank"
              className="group flex items-center gap-2 px-8 py-4 bg-[#E6007A] hover:bg-[#ff1a88] text-white font-display text-sm tracking-wider transition-all"
            >
              Join Hackathon
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://codecamp.openguild.wtf"
              target="_blank"
              className="group flex items-center gap-2 px-8 py-4 border-2 border-[#1a1a1a]/20 hover:border-polkadot-pink text-[#1a1a1a] hover:text-polkadot-pink font-display text-sm tracking-wider transition-all"
            >
              Learn at CodeCamp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
