import type { Winner } from "./mocks/winners";

export default function WinnerCard({ winner }: { winner: Winner }) {
  return (
    <div className="border-2 border-muted rounded-lg p-4">
      <h2 className="text-lg font-bold">{winner.name}</h2>
      <p className="text-sm text-muted-foreground">{winner.description}</p>
      <p className="text-sm text-muted-foreground">{winner.hackathon}</p>
      <p className="text-sm text-muted-foreground">{winner.xLink}</p>
      <p className="text-sm text-muted-foreground">{winner.pitchLink}</p>
      <p className="text-sm text-muted-foreground">{winner.github}</p>
    </div>
  );
}
