import type { Grant } from "./mocks/grants";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GrantCard({ grant }: { grant: Grant }) {
  return (
    <div className="flex flex-col gap-2 border-2 border-muted rounded-lg p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10 justify-between">
      <div>
        <h2 className="text-lg font-bold">{grant.title}</h2>
        <p className="text-sm text-muted-foreground">{grant.description}</p>
      </div>
      <Button asChild className="hover:cursor-pointer self-end mt-auto">
        <Link href={grant.url} target="_blank">
          Apply
          <ExternalLink />
        </Link>
      </Button>
    </div>
  );
}
