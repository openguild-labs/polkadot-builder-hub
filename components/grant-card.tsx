import type { Grant } from "./mocks/grants";

export default function GrantCard({ grant }: { grant: Grant }) {
  return (
    <div className="border-2 border-muted rounded-lg p-4">
      <h2 className="text-lg font-bold">{grant.title}</h2>
      <p className="text-sm text-muted-foreground">{grant.description}</p>
    </div>
  );
}
