import type { Community } from "./mocks/communities";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CommunityCard({ community }: { community: Community }) {
  return (
    <div className="flex flex-col gap-2 border-2 border-muted rounded-lg p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10 justify-between">
      <div>
        <h2 className="text-lg font-bold">{community.title}</h2>
        <p className="text-sm text-muted-foreground">{community.description}</p>
      </div>
      <Button asChild className="hover:cursor-pointer self-end mt-auto">
        <Link href={community.url} target="_blank">
          Join
          <ExternalLink />
        </Link>
      </Button>
    </div>
  );
}
