import FeaturedCategories from "@/components/featured-categories";
import FAQ from "@/components/faq";
import ResourcesSection from "@/components/resources-section";
import HeroSection from "@/components/hero-section";
import PartnerSection from "@/components/partner-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col relative">
      <Image
        src="/background.png"
        alt="Background"
        fill
        className="-z-10"
        priority
        quality={100}
      />
      {/* Hero Section */}
      <HeroSection />
      <div className="flex flex-col gap-24">
        {/* Resources Section */}
        <ResourcesSection />
        {/* Featured Categories Section */}
        <FeaturedCategories />
        {/* Partner Section */}
        <PartnerSection />
        {/* FAQ Section */}
        <FAQ />
      </div>
    </main>
  );
}
