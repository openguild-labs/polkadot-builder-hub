import GoBack from "@/components/go-back";

export default function JoinCommunities() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <GoBack />
      <h1 className="text-2xl font-bold">Join communities to get support</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-2 border-muted rounded-lg p-4">
          <h2 className="text-lg font-bold">OpenGuild (APAC focused - Builders Generally)</h2>
        </div>
        <div className="border-2 border-muted rounded-lg p-4">
          <h2 className="text-lg font-bold">Polkadot Discord</h2>
        </div>
      </div>
    </main>
  );
}
