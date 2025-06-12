import { Badge } from "@/components/ui/badge";
import { AdminIdeaWithUser } from "@/types/ideas";
import Link from "next/link";

export default function AdminIdeaCard({ idea }: { idea: AdminIdeaWithUser }) {
  return (
    <Link href={`/admin/ideas/${idea.idea.id}`}>
      <div className="flex flex-col gap-2 border rounded-lg p-4 h-[200px] justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">{idea.idea.title}</h2>
          <p className="text-sm">{idea.idea.description}</p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-full"
              src={idea.user.image}
              alt={idea.user.name}
              width={32}
              height={32}
            />
            <p className="text-sm">{idea.user.name}</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Badge variant="outline">{idea.idea.level}</Badge>
            <Badge>{idea.idea.status}</Badge>
          </div>
        </div>
      </div>
    </Link>
  );
}
