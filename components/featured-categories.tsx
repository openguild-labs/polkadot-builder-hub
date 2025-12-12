import { categories } from "@/components/mocks/categories";
import CategoryCard from "@/components/category-card";
import Image from "next/image";

export default function FeaturedCategories() {
  return (
    <section className="relative py-24 px-4 bg-white">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Image
          src="/graphics/Dotted Logo.png"
          alt="Decoration"
          width={600}
          height={600}
        />
      </div>

      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col items-center gap-4">
          <span className="font-display text-sm text-[#E6007A] tracking-[0.3em]">
            EXPLORE
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] text-center">
            FEATURED CATEGORIES
          </h2>
          <div className="h-1 w-24 bg-[#E6007A] mt-4"></div>
          <p className="text-[#1a1a1a]/50 text-center max-w-xl mt-4">
            Browse through various categories to find ideas and projects that match your interests and expertise.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
