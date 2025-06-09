import Link from "next/link";
import { Trophy, ArrowRight, PartyPopper, Handshake } from "lucide-react";
import Image from "next/image";

export default function ResourcesSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-8 items-center p-4 w-fit">
        <h2 className="px-12 py-6 text-center text-4xl font-bold w-full rounded-2xl bg-gray-100/40 backdrop-blur-lg border border-white/30">
          Welcome aboard, builders!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            className="rounded-lg p-4 text-primary bg-secondary/80"
            href="/grants"
          >
            <div className="flex flex-col justify-between">
              <div className="flex flex-row items-center gap-2">
                <h3 className="text-lg font-bold">
                  Get Grants to support growth your ideas!
                </h3>
                <ArrowRight className="w-6 h-6" />
              </div>
              <Image
                src="/grant.png"
                alt="Grants"
                width={300}
                height={300}
                className="self-end"
              />
            </div>
          </Link>
          <div className="grid grid-cols-1 gap-4">
            <Link
              href="/past-hackathon-winners"
              className="flex flex-col justify-center rounded-lg p-4 text-primary bg-secondary/80"
            >
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-8">
                  <Trophy className="w-12 h-12" />
                  <h3 className="text-lg font-bold">Past Hackathon Winners</h3>
                </div>
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>
            <Link
              href="/join-communities"
              className="flex flex-col justify-center rounded-lg p-4 text-primary bg-secondary/80"
            >
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-8">
                  <PartyPopper className="w-12 h-12" />
                  <h3 className="text-lg font-bold">
                    Join Communities to get support
                  </h3>
                </div>
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>
            <Link
              href="/teammate-finder"
              className="flex flex-col justify-center rounded-lg p-4 text-primary bg-secondary/80"
            >
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-8">
                  <Handshake className="w-12 h-12" />
                  <h3 className="text-lg font-bold">
                    Teammate Finder Directory
                  </h3>
                </div>
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
