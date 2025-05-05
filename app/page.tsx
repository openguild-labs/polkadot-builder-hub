import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      {/* Hero Section */}
      <div className="flex flex-col gap-4 text-center items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Polkadot Builders Resources</h1>
        <p className="text-lg text-muted-foreground">Aggregated by OpenGuild ♥️</p>
        <p className="text-lg font-semibold">Start building on Polkadot Hub - powerful smart contract layers for consumer dApps.</p>
        <div className="flex flex-row gap-4 justify-center">
          <Button className="hover:cursor-pointer">Explore ideas</Button>
          <Button variant="secondary" className="hover:cursor-pointer">Hackathon resources</Button>
        </div>
      </div>
      {/* Resources Section */}
      <div>
        <h2>Resources</h2>
        <p>Explore the latest resources for building on Polkadot Hub.</p>
        <div className="flex flex-row gap-4">
          <Button className="hover:cursor-pointer">Explore ideas</Button>
          <Button variant="secondary" className="hover:cursor-pointer">Hackathon resources</Button>
        </div>
      </div>
    </main>
  );
}
