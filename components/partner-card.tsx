import type { Partner } from "./mocks/partners";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <a
      target="_blank"
      href={partner.url}
      className="group flex flex-col items-center justify-center gap-3 p-6 bg-white border-2 border-[#1a1a1a]/20 transition-all duration-300 hover:border-[#E6007A] hover:shadow-[4px_4px_0_0_#E6007A]"
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        <Image
          src={partner.logo}
          alt={partner.title}
          width={96}
          height={96}
          className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="font-display text-sm text-[#1a1a1a]/70 group-hover:text-[#1a1a1a] transition-colors tracking-wide">
          {partner.title.toUpperCase()}
        </span>
        <ExternalLink className="w-3 h-3 text-polkadot-pink opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </a>
  );
}
