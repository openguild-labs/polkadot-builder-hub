import GoBack from "@/components/go-back";
import { resources } from "@/components/mocks/resources";
import ResourceCard from "@/components/resource-card";

export default function HackathonResources() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <GoBack />
      <h1 className="text-2xl font-bold">Hackathon Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </main>
  );
}
