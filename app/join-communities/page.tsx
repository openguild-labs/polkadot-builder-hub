import GoBack from "@/components/go-back";
import { communities } from "@/components/mocks/communities";
import CommunityCard from "@/components/community-card";

export default function JoinCommunities() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <GoBack />
      <h1 className="text-2xl font-bold">Join communities to get support</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {communities.map((community) => (
          <CommunityCard key={community.id} community={community} />
        ))}
      </div>
    </main>
  );
}
