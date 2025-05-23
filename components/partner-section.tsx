import PartnerCard from "@/components/partner-card";
import { partners } from "@/components/mocks/partners";


export default function PartnerSection() {
  return (
    <div className="flex flex-col gap-8 items-center my-16 p-4">
      <h2 className="text-2xl font-bold">Contributors & Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>
    </div>
  );
}