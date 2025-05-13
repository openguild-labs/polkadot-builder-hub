import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Trophy, ArrowRight, Handshake } from 'lucide-react';

export default function ResourcesSection() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-2xl font-bold">Welcome aboard, builders!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link className="border-2 border-muted rounded-lg p-4 bg-[#FF2670] text-secondary" href="/grants">
          <div className="flex flex-row items-center gap-2">
            <h3 className="text-xl font-bold">
              Get Grants to support growth your ideas!
            </h3>
            <ArrowRight className="w-6 h-6" />
          </div>
        </Link>
        <div className="grid grid-cols-1 gap-4">
          <Link
            href="/past-hackathon-winners"
            className="border-2 border-muted rounded-lg p-4 bg-primary text-secondary"
          >
            <div className="flex flex-row items-center gap-2">
              <Trophy className="w-6 h-6" />
              <h3 className="text-xl font-bold">Past Hackathon Winners</h3>
              <ArrowRight className="w-6 h-6" />
            </div>
          </Link>
          <Link
            href="/join-communities"
            className="border-2 border-muted rounded-lg p-4 bg-[#7916F3] text-secondary"
          >
            <div className="flex flex-row items-center gap-2">
              <Handshake className="w-6 h-6" />
              <h3 className="text-xl font-bold">
                Join Communities to get support
              </h3>
              <ArrowRight className="w-6 h-6" />
            </div>
          </Link>
          <div className="border-2 border-muted rounded-lg p-4 bg-[#DCE2E9]">
            <div className="flex flex-row items-center gap-2">
              <Handshake className="w-6 h-6" />
              <h3 className="text-xl font-bold text-muted-foreground">Teammate Finder Directory</h3>
              <Badge>Coming soon</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
