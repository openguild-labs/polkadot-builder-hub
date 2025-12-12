"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/explore-ideas?category=all", label: "EXPLORE" },
    { href: "/hackathon-resources", label: "RESOURCES" },
    { href: "/join-communities", label: "COMMUNITY" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b-2 border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-row justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#552BBF]"></div>
            <div className="w-3 h-3 bg-[#E6007A]"></div>
            <div className="w-3 h-3 bg-[#00B2FF]"></div>
          </div>
          <span className="font-display text-[#1a1a1a] text-sm md:text-base tracking-wider group-hover:text-[#E6007A] transition-colors">
            POLKADOT BUILDERS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm text-[#1a1a1a]/70 hover:text-[#E6007A] transition-colors tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            className="font-display bg-[#E6007A] hover:bg-[#FF2670] text-white border-0 px-6 py-2 text-sm tracking-wider"
            asChild
          >
            <Link href="/submit-an-idea">
              SUBMIT IDEA
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1a1a1a] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#1a1a1a]/20">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-sm text-[#1a1a1a]/70 hover:text-[#E6007A] transition-colors tracking-wider py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="font-display bg-[#E6007A] hover:bg-[#FF2670] text-white border-0 px-6 py-3 text-sm tracking-wider mt-2"
              asChild
            >
              <Link
                href="/submit-an-idea"
                onClick={() => setMobileMenuOpen(false)}
              >
                SUBMIT IDEA
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
