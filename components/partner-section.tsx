import PartnerCard from "@/components/partner-card";
import { partners } from "@/components/mocks/partners";

export default function PartnerSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-8 items-center my-16">
        <h2 className="px-12 py-6 text-center text-3xl md:text-4xl font-bold w-full rounded-2xl bg-gray-100/40 backdrop-blur-lg border border-white/30">
          Contributors & Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-secondary/80 p-8 rounded-2xl">
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </div>
    </div>
  );
}
