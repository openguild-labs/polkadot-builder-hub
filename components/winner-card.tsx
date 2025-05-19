import type { Winner } from "./mocks/winners";
import Image from "next/image";
import { Presentation } from 'lucide-react';

export default function WinnerCard({ winner }: { winner: Winner }) {

  return (
    <div className="flex flex-col gap-4 justify-between border-2 border-muted rounded-lg p-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">{winner.name}</h2>
        <p className="text-sm bg-muted rounded-md px-2 py-1 w-fit">{winner.hackathon}</p>
        <p className="text-sm text-muted-foreground">{winner.description}</p>
      </div>
      <div className="flex flex-row gap-4 items-center">
        {
          winner.x && (
            <a href={winner.x} target="_blank" rel="noopener noreferrer">
              <Image src="/x.svg" alt="X" width={20} height={20} />
            </a>
          )
        }
        {
          winner.pitch && (
            <a href={winner.pitch} target="_blank" rel="noopener noreferrer">
              <Presentation className="w-5 h-5" />
            </a>
          )
          }
          {
            winner.github_link && (
              <a href={winner.github_link} target="_blank" rel="noopener noreferrer">
                <Image src="/github.svg" alt="X" width={20} height={20} />
              </a>
            )
          }
      </div>
    </div>
  );
}
