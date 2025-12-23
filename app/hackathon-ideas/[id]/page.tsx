"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Clock,
  Target,
  Lightbulb,
  CheckCircle2,
  XCircle,
  BookOpen,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { getIdeaById } from "@/components/mocks/hackathon-ideas";

const difficultyColors = {
  Beginner: "bg-green-500/20 text-green-600 border-green-500/30",
  Intermediate: "bg-yellow-500/20 text-yellow-600 border-yellow-500/30",
  Advanced: "bg-red-500/20 text-red-600 border-red-500/30",
};

const difficultyDescriptions = {
  Beginner:
    "Suitable for developers new to Web3. Focus on core functionality with simpler integrations.",
  Intermediate:
    "Requires solid understanding of blockchain concepts. Involves multiple integrations and moderate complexity.",
  Advanced:
    "For experienced Web3 developers. Complex architecture, security considerations, and advanced protocols.",
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function IdeaDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const ideaId = parseInt(resolvedParams.id);
  const result = getIdeaById(ideaId);

  if (!result) {
    notFound();
  }

  const { idea, track } = result;
  const { prd } = idea;

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div
        className="relative py-16 border-b-2"
        style={{ borderColor: `${track.color}30` }}
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `linear-gradient(135deg, ${track.color} 0%, transparent 50%)`,
          }}
        />

        <div className="relative max-w-4xl mx-auto px-4">
          <Link
            href="/hackathon-ideas"
            className="inline-flex items-center gap-2 text-[#1a1a1a]/60 hover:text-polkadot-pink mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-display text-sm">Back to Ideas</span>
          </Link>

          {/* Track badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6"
            style={{ backgroundColor: `${track.color}15` }}
          >
            <span className="text-xl">{track.icon}</span>
            <span
              className="font-display text-sm tracking-wider"
              style={{ color: track.color }}
            >
              {track.name.toUpperCase()}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display font-bold text-3xl md:text-4xl text-[#1a1a1a] mb-4">
            {idea.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className={`px-3 py-1 text-sm font-display border ${
                difficultyColors[idea.difficulty]
              }`}
            >
              {idea.difficulty}
            </span>
            <div className="flex items-center gap-2 text-[#1a1a1a]/60 text-sm">
              <Clock className="w-4 h-4" />
              <span>{prd.timeline}</span>
            </div>
            <span className="text-[#1a1a1a]/40">•</span>
            <span className="text-[#1a1a1a]/60 text-sm">ID: #{idea.id}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {idea.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-[#1a1a1a]/5 text-[#1a1a1a]/70"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="https://polkadot-hub-hackathon.vercel.app/"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E6007A] hover:bg-[#ff1a88] text-white font-display text-sm tracking-wider transition-all"
          >
            Build This Idea
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: `${track.color}15` }}
            >
              <Target className="w-5 h-5" style={{ color: track.color }} />
            </div>
            <h2 className="font-display font-bold text-xl text-[#1a1a1a]">
              Overview
            </h2>
          </div>
          <p className="text-[#1a1a1a]/70 leading-relaxed">{prd.overview}</p>
        </section>

        {/* Problem Statement */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: `${track.color}15` }}
            >
              <Lightbulb className="w-5 h-5" style={{ color: track.color }} />
            </div>
            <h2 className="font-display font-bold text-xl text-[#1a1a1a]">
              Problem Statement
            </h2>
          </div>
          <p className="text-[#1a1a1a]/70 leading-relaxed">
            {prd.problemStatement}
          </p>
        </section>

        {/* Proposed Solution */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: `${track.color}15` }}
            >
              <Sparkles className="w-5 h-5" style={{ color: track.color }} />
            </div>
            <h2 className="font-display font-bold text-xl text-[#1a1a1a]">
              Proposed Solution
            </h2>
          </div>
          <p className="text-[#1a1a1a]/70 leading-relaxed">
            {prd.proposedSolution}
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: `${track.color}15` }}
            >
              <CheckCircle2
                className="w-5 h-5"
                style={{ color: track.color }}
              />
            </div>
            <h2 className="font-display font-bold text-xl text-[#1a1a1a]">
              Key Features
            </h2>
          </div>
          <ul className="space-y-3">
            {prd.keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="w-6 h-6 flex items-center justify-center text-xs font-display shrink-0 mt-0.5"
                  style={{
                    backgroundColor: `${track.color}15`,
                    color: track.color,
                  }}
                >
                  {index + 1}
                </span>
                <span className="text-[#1a1a1a]/70">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Requirements */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: `${track.color}15` }}
            >
              <BookOpen className="w-5 h-5" style={{ color: track.color }} />
            </div>
            <h2 className="font-display font-bold text-xl text-[#1a1a1a]">
              Technical Requirements
            </h2>
          </div>
          <div className="bg-[#1a1a1a]/5 p-6">
            <ul className="space-y-2">
              {prd.technicalRequirements.map((req, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-[#1a1a1a]/70"
                >
                  <span className="text-polkadot-pink">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* User Stories */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: `${track.color}15` }}
            >
              <Users className="w-5 h-5" style={{ color: track.color }} />
            </div>
            <h2 className="font-display font-bold text-xl text-[#1a1a1a]">
              User Stories
            </h2>
          </div>
          <div className="space-y-4">
            {prd.userStories.map((story, index) => (
              <div
                key={index}
                className="p-4 border-l-4 bg-[#fafafa]"
                style={{ borderColor: track.color }}
              >
                <p className="text-[#1a1a1a]/70 italic">
                  &ldquo;{story}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: `${track.color}15` }}
            >
              <BarChart3 className="w-5 h-5" style={{ color: track.color }} />
            </div>
            <h2 className="font-display font-bold text-xl text-[#1a1a1a]">
              Success Metrics
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {prd.successMetrics.map((metric, index) => (
              <div key={index} className="p-4 border-2 border-[#1a1a1a]/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-[#1a1a1a]/70">{metric}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Out of Scope */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-red-500/10">
              <XCircle className="w-5 h-5 text-red-500" />
            </div>
            <h2 className="font-display font-bold text-xl text-[#1a1a1a]">
              Out of Scope
            </h2>
          </div>
          <ul className="space-y-2">
            {prd.outOfScope.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-[#1a1a1a]/60"
              >
                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Difficulty Info */}
        <section className="mb-12">
          <div
            className="p-6 border-2"
            style={{ borderColor: `${track.color}30` }}
          >
            <h3 className="font-display font-bold text-lg text-[#1a1a1a] mb-2">
              Difficulty: {idea.difficulty}
            </h3>
            <p className="text-[#1a1a1a]/60 mb-4">
              {difficultyDescriptions[idea.difficulty]}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" style={{ color: track.color }} />
              <span className="text-[#1a1a1a]/70">
                Estimated development time: <strong>{prd.timeline}</strong>
              </span>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="font-display font-bold text-xl text-[#1a1a1a] mb-4">
            Helpful Resources
          </h2>
          <div className="space-y-2">
            {prd.resources.map((resource, index) => {
              const [url, description] = resource.split(" - ");
              return (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-[#1a1a1a]/5 hover:bg-[#1a1a1a]/10 transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 text-polkadot-pink" />
                  <span className="text-[#1a1a1a]/70 group-hover:text-polkadot-pink transition-colors">
                    {description || url}
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        {/* Prize Info */}
        <section className="mb-12">
          <div className="p-6" style={{ backgroundColor: `${track.color}10` }}>
            <h3 className="font-display font-bold text-lg text-[#1a1a1a] mb-4">
              {track.name} Track Prizes
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-1">🥇</div>
                <div
                  className="font-display font-bold text-xl"
                  style={{ color: track.color }}
                >
                  {track.prizes.first}
                </div>
                <div className="text-[#1a1a1a]/50 text-sm">1st Place</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🥈</div>
                <div
                  className="font-display font-bold text-xl"
                  style={{ color: track.color }}
                >
                  {track.prizes.second}
                </div>
                <div className="text-[#1a1a1a]/50 text-sm">2nd Place</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🥉</div>
                <div
                  className="font-display font-bold text-xl"
                  style={{ color: track.color }}
                >
                  {track.prizes.third}
                </div>
                <div className="text-[#1a1a1a]/50 text-sm">3rd Place</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#fafafa] py-16 border-t-2 border-[#1a1a1a]/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-[#1a1a1a] mb-4">
            Ready to Build This?
          </h2>
          <p className="text-[#1a1a1a]/60 mb-8">
            Register for the Polkadot Hub Hackathon and start building. Get
            access to mentors, resources, and a community of builders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://polkadot-hub-hackathon.vercel.app/"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E6007A] hover:bg-[#ff1a88] text-white font-display text-sm tracking-wider transition-all"
            >
              Register for Hackathon
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link
              href="/hackathon-ideas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1a1a1a]/20 hover:border-polkadot-pink text-[#1a1a1a] hover:text-polkadot-pink font-display text-sm tracking-wider transition-all"
            >
              Browse More Ideas
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
