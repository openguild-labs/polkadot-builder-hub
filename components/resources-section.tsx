import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ResourcesSection() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-2xl font-bold">Welcome aboard, builders!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link className="border-2 border-muted rounded-lg p-4" href="/grants">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">
              Get Grants to support growth your ideas!
            </h3>
          </div>
        </Link>
        <div className="grid grid-cols-1 gap-4">
          <Link
            href="/past-hackathon-winners"
            className="border-2 border-muted rounded-lg p-4"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">Past Hackathon Winners</h3>
            </div>
          </Link>
          <Link
            href="/join-communities"
            className="border-2 border-muted rounded-lg p-4"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">
                Join Communities to get support
              </h3>
            </div>
          </Link>
          <div className="border-2 border-muted rounded-lg p-4">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">Teammate Finder Directory</h3>
              <Badge>Coming soon</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
