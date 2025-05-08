import IdeaBoard from "@/components/idea-board";
import GoBack from "@/components/go-back";
export default function ExploreIdeas() {

  return (
    <main className="flex flex-col gap-4 p-4">
      <GoBack />
      <h1 className="text-2xl font-bold">Explore Ideas</h1>
      <IdeaBoard />
    </main>
  );
}
