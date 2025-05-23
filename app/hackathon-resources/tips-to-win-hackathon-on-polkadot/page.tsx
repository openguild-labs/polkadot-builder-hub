import GoBack from "@/components/go-back";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto">
      <GoBack href="/hackathon-resources" />
      <h1 className="text-2xl font-bold">Tips to win hackathon on Polkadot</h1>
    </main>
  );
}