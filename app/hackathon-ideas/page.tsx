"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Search, Sparkles, ExternalLink } from "lucide-react";
import {
  hackathonTracks,
  HackathonIdea,
  HackathonTrack,
} from "@/components/mocks/hackathon-ideas";

const difficultyColors = {
  Beginner: "bg-green-500/20 text-green-600 border-green-500/30",
  Intermediate: "bg-yellow-500/20 text-yellow-600 border-yellow-500/30",
  Advanced: "bg-red-500/20 text-red-600 border-red-500/30",
};

function IdeaCard({
  idea,
  track,
}: {
  idea: HackathonIdea;
  track: HackathonTrack;
}) {
  return (
    <Link
      href={`/hackathon-ideas/${idea.id}`}
      className="group block p-6 bg-white border-2 border-[#1a1a1a]/10 hover:border-polkadot-pink/30 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-display font-bold text-lg text-[#1a1a1a] group-hover:text-polkadot-pink transition-colors">
          {idea.title}
        </h3>
        <span
          className={`px-2 py-1 text-xs font-display border shrink-0 ${
            difficultyColors[idea.difficulty]
          }`}
        >
          {idea.difficulty}
        </span>
      </div>

      <p className="text-[#1a1a1a]/60 text-sm mb-4 leading-relaxed line-clamp-2">
        {idea.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {idea.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-[#1a1a1a]/5 text-[#1a1a1a]/60"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div
          className="flex items-center gap-2 text-xs"
          style={{ color: track.color }}
        >
          <span>{track.icon}</span>
          <span className="font-display">{track.shortName}</span>
        </div>
        <span className="text-xs text-polkadot-pink opacity-0 group-hover:opacity-100 transition-opacity font-display">
          View Details →
        </span>
      </div>
    </Link>
  );
}

function IdeasContent() {
  const searchParams = useSearchParams();
  const initialTrack = searchParams.get("track");

  const [selectedTrack, setSelectedTrack] = useState<number | null>(
    initialTrack ? parseInt(initialTrack) : null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );

  const filteredIdeas = useMemo(() => {
    let ideas: { idea: HackathonIdea; track: HackathonTrack }[] = [];

    // Get ideas from selected track or all tracks
    const tracks = selectedTrack
      ? hackathonTracks.filter((t) => t.id === selectedTrack)
      : hackathonTracks;

    tracks.forEach((track) => {
      track.ideas.forEach((idea) => {
        ideas.push({ idea, track });
      });
    });

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      ideas = ideas.filter(
        ({ idea }) =>
          idea.title.toLowerCase().includes(query) ||
          idea.description.toLowerCase().includes(query) ||
          idea.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by difficulty
    if (selectedDifficulty) {
      ideas = ideas.filter(
        ({ idea }) => idea.difficulty === selectedDifficulty
      );
    }

    return ideas;
  }, [selectedTrack, searchQuery, selectedDifficulty]);

  const totalIdeas = hackathonTracks.reduce(
    (sum, track) => sum + track.ideas.length,
    0
  );

  return (
    <>
      {/* Filters */}
      <div className="sticky top-0 z-20 bg-white border-b-2 border-[#1a1a1a]/10 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Track filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTrack(null)}
                className={`px-4 py-2 font-display text-sm transition-all ${
                  selectedTrack === null
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-[#1a1a1a]/5 text-[#1a1a1a]/60 hover:bg-[#1a1a1a]/10"
                }`}
              >
                All Tracks ({totalIdeas})
              </button>
              {hackathonTracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setSelectedTrack(track.id)}
                  className={`px-4 py-2 font-display text-sm transition-all flex items-center gap-2 ${
                    selectedTrack === track.id
                      ? "text-white"
                      : "text-[#1a1a1a]/60 hover:opacity-80"
                  }`}
                  style={{
                    backgroundColor:
                      selectedTrack === track.id
                        ? track.color
                        : `${track.color}15`,
                  }}
                >
                  <span>{track.icon}</span>
                  <span>{track.shortName}</span>
                  <span className="opacity-60">({track.ideas.length})</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]/40" />
              <input
                type="text"
                placeholder="Search ideas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 bg-[#1a1a1a]/5 border-2 border-transparent focus:border-polkadot-pink outline-none font-display text-sm"
              />
            </div>
          </div>

          {/* Difficulty filters */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setSelectedDifficulty(null)}
              className={`px-3 py-1 text-xs font-display transition-all ${
                selectedDifficulty === null
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-[#1a1a1a]/5 text-[#1a1a1a]/60 hover:bg-[#1a1a1a]/10"
              }`}
            >
              All Levels
            </button>
            {["Beginner", "Intermediate", "Advanced"].map((difficulty) => (
              <button
                key={difficulty}
                onClick={() =>
                  setSelectedDifficulty(
                    selectedDifficulty === difficulty ? null : difficulty
                  )
                }
                className={`px-3 py-1 text-xs font-display border transition-all ${
                  selectedDifficulty === difficulty
                    ? difficultyColors[
                        difficulty as keyof typeof difficultyColors
                      ]
                    : "bg-[#1a1a1a]/5 text-[#1a1a1a]/60 border-transparent hover:bg-[#1a1a1a]/10"
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Ideas Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-6 text-[#1a1a1a]/60 font-display text-sm">
          Showing {filteredIdeas.length} ideas
        </div>

        {filteredIdeas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIdeas.map(({ idea, track }) => (
              <IdeaCard key={idea.id} idea={idea} track={track} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[#1a1a1a]/40 font-display text-lg mb-4">
              No ideas found matching your filters
            </p>
            <button
              onClick={() => {
                setSelectedTrack(null);
                setSearchQuery("");
                setSelectedDifficulty(null);
              }}
              className="text-polkadot-pink font-display text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default function HackathonIdeasPage() {
  const totalIdeas = hackathonTracks.reduce(
    (sum, track) => sum + track.ideas.length,
    0
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Header - White Theme */}
      <div className="bg-white py-16 border-b-2 border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#1a1a1a]/60 hover:text-polkadot-pink mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-display text-sm">Back to Home</span>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-polkadot-pink" />
            <span className="font-display text-sm text-polkadot-pink tracking-widest">
              POLKADOT HUB HACKATHON 2026
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#1a1a1a] mb-4">
            BUILD IDEAS
          </h1>

          <p className="text-[#1a1a1a]/60 max-w-2xl text-lg mb-8">
            Explore {totalIdeas} curated build ideas across 3 tracks. Find
            inspiration for your hackathon project.
          </p>

          <Link
            href="https://hackathon.openguild.wtf/"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E6007A] hover:bg-[#ff1a88] text-white font-display text-sm tracking-wider transition-all"
          >
            Register for Hackathon
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Content with Suspense */}
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-64 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        }
      >
        <IdeasContent />
      </Suspense>

      {/* Bottom CTA - White Theme */}
      <div className="bg-[#fafafa] py-16 border-t-2 border-[#1a1a1a]/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-[#1a1a1a] mb-4">
            Ready to Build?
          </h2>
          <p className="text-[#1a1a1a]/60 mb-8">
            Join the Polkadot Hub Hackathon and turn one of these ideas into
            reality. Register now to compete for $30,000 in prizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://hackathon.openguild.wtf/"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E6007A] hover:bg-[#ff1a88] text-white font-display text-sm tracking-wider transition-all"
            >
              Register as Hacker
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link
              href="https://codecamp.openguild.wtf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1a1a1a]/20 hover:border-polkadot-pink text-[#1a1a1a] hover:text-polkadot-pink font-display text-sm tracking-wider transition-all"
            >
              Learn at CodeCamp
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
