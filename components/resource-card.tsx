import type { Resource } from "./mocks/resources";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="border-2 border-muted rounded-lg p-4">
      <h2 className="text-lg font-bold">{resource.title}</h2>
    </div>
  );
}