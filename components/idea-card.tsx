import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export interface IdeaCardProps {
  title: string;
  description: string;
  category: string;
  builder: string;
  builderImage: string;
  level: string;
}

export default function IdeaCard({ idea }: { idea: IdeaCardProps }) {
  return (
    <div className="flex flex-col gap-2 border rounded-lg p-4 h-[150px]">
      <h2 className="text-lg font-bold">{idea.title}</h2>
      <p className="text-sm">{idea.description}</p>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Image className="rounded-full" src={idea.builderImage} alt={idea.builder} width={32} height={32} />
          <p className="text-sm">{idea.builder}</p>
        </div>
        <Badge variant="outline">{idea.level}</Badge>
      </div>
    </div>
  );
}