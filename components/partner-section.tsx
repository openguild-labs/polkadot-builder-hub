import PartnerCard from "@/components/partner-card";
import { partners } from "@/components/mocks/partners";

export default function PartnerSection() {
  return (
    <section className="relative py-24 px-4 bg-[#f5f5f5]">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col items-center gap-4">
          <span className="font-display text-sm text-polkadot-pink tracking-[0.3em]">
            ECOSYSTEM
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] text-center">
            CONTRIBUTORS <span className="text-polkadot-pink">&</span> PARTNERS
          </h2>
          <div className="h-1 w-24 bg-[#E6007A] mt-4"></div>
          <p className="text-[#1a1a1a]/50 text-center max-w-xl mt-4">
            Building the future of Web3 together with amazing partners across
            the Polkadot ecosystem.
          </p>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <p className="text-[#1a1a1a]/40 font-display text-sm tracking-wider">
          WANT TO BECOME A PARTNER?{" "}
          <a
            href="mailto:contact@polkadotbuilders.com"
            className="text-polkadot-pink hover:text-[#FF2670] transition-colors"
          >
            CONTACT US
          </a>
        </p>
      </div>
    </section>
  );
}
