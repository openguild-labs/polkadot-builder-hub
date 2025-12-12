import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/explore-ideas?category=all", label: "Explore Ideas" },
    { href: "/hackathon-resources", label: "Resources" },
    { href: "/grants", label: "Grants" },
    { href: "/join-communities", label: "Communities" },
  ];

  const resourceLinks = [
    { href: "https://docs.polkadot.com/", label: "Documentation", external: true },
    { href: "https://wiki.polkadot.network/", label: "Polkadot Wiki", external: true },
    { href: "https://polkadot.com/platform/hub/", label: "Polkadot Hub", external: true },
    { href: "https://substrate.io/", label: "Substrate", external: true },
  ];

  const socialLinks = [
    { href: "https://x.com/openguildwtf", icon: Twitter, label: "Twitter" },
    { href: "https://discord.com/invite/YxwPSUer5Z", icon: MessageCircle, label: "Discord" },
    { href: "https://github.com/AcalaNetwork", icon: Github, label: "GitHub" },
  ];

  return (
    <footer className="relative border-t-2 border-[#1a1a1a] bg-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#552BBF]"></div>
                <div className="w-3 h-3 bg-[#E6007A]"></div>
                <div className="w-3 h-3 bg-[#00B2FF]"></div>
              </div>
              <span className="font-display text-[#1a1a1a] text-sm tracking-wider">
                POLKADOT BUILDERS
              </span>
            </Link>
            <p className="text-[#1a1a1a]/50 text-sm leading-relaxed">
              A community-driven resource hub for builders creating the next generation of Web3 applications on Polkadot.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-[#1a1a1a]/20 text-[#1a1a1a]/50 hover:text-[#E6007A] hover:border-[#E6007A] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm text-[#E6007A] tracking-wider">
              QUICK LINKS
            </h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#1a1a1a]/50 text-sm hover:text-[#E6007A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm text-[#E6007A] tracking-wider">
              RESOURCES
            </h3>
            <nav className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a1a1a]/50 text-sm hover:text-[#E6007A] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Powered By */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm text-[#E6007A] tracking-wider">
              POWERED BY
            </h3>
            <div className="flex flex-col gap-4">
              <a 
                href="https://openguild.wtf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Image
                  src="/openguild.png"
                  alt="OpenGuild"
                  width={32}
                  height={32}
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-[#1a1a1a]/50 text-sm group-hover:text-[#1a1a1a] transition-colors">
                  OpenGuild
                </span>
              </a>
              <a 
                href="https://polkadot.network" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Image
                  src="/polkadot.svg"
                  alt="Polkadot"
                  width={32}
                  height={32}
                  className="opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-[#1a1a1a]/50 text-sm group-hover:text-[#1a1a1a] transition-colors">
                  Polkadot Network
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#1a1a1a]/30 text-xs font-display tracking-wider">
            © {currentYear} POLKADOT BUILDERS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/submit-an-idea" className="text-[#1a1a1a]/30 text-xs hover:text-[#E6007A] transition-colors">
              Submit Idea
            </Link>
            <span className="text-[#1a1a1a]/20">|</span>
            <a href="mailto:contact@polkadotbuilders.com" className="text-[#1a1a1a]/30 text-xs hover:text-[#E6007A] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Decorative pixel corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#1a1a1a]"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#1a1a1a]"></div>
    </footer>
  );
}
