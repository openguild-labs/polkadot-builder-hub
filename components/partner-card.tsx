import type { Partner } from "./mocks/partners";
import Image from "next/image";

export default function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <a target="_blank" href={partner.url} className="flex flex-col gap-2">
      <Image
        className="rounded-md"
        src={partner.logo}
        alt={partner.title}
        width={400}
        height={200}
      />
    </a>
  );
}
