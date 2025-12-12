import FeaturedCategories from "@/components/featured-categories";
import FAQ from "@/components/faq";
import ResourcesSection from "@/components/resources-section";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main className="flex flex-col relative bg-white">
      {/* Hero Section */}
      <HeroSection />
      <div className="flex flex-col gap-24">
        {/* Resources Section */}
        <ResourcesSection />
        {/* Featured Categories Section */}
        <FeaturedCategories />
        {/* FAQ Section */}
        <FAQ />
      </div>
    </main>
  );
}
