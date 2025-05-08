import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeaturedCategories from "@/components/featured-categories";
import FAQ from "@/components/faq";
import ResourcesSection from "@/components/resources-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 p-4">
      {/* Hero Section */}
      <div className="flex flex-col gap-4 text-center items-center justify-center h-[600px]">
        <h1 className="text-4xl font-bold">Polkadot Builders Resources</h1>
        <p className="text-lg text-muted-foreground">
          Aggregated by OpenGuild ♥️
        </p>
        <p className="text-lg font-semibold">
          Start building on Polkadot Hub - powerful smart contract layers for
          consumer dApps.
        </p>
        <div className="flex flex-row gap-4 justify-center">
          <Button className="hover:cursor-pointer" asChild>
            <Link href="/explore-ideas?category=all">Explore ideas</Link>
          </Button>
          <Button variant="secondary" className="hover:cursor-pointer" asChild>
            <Link href="/hackathon-resources">Hackathon resources</Link>
          </Button>
        </div>
      </div>
      {/* Resources Section */}
      <ResourcesSection />
      {/* Featured Categories Section */}
      <FeaturedCategories />
      {/* FAQ Section */}
      <FAQ />
    </main>
  );
}
