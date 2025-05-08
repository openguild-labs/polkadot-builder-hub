import FeaturedCategories from "@/components/featured-categories";
import FAQ from "@/components/faq";
import ResourcesSection from "@/components/resources-section";
import HeroSection from "@/components/hero-section";


export default function Home() {
  return (
    <main className="flex flex-col gap-32 p-4">
      {/* Hero Section */}
      <HeroSection />
      {/* Resources Section */}
      <ResourcesSection />
      {/* Featured Categories Section */}
      <FeaturedCategories />
      {/* FAQ Section */}
      <FAQ />
    </main>
  );
}
