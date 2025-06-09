import { categories } from "@/components/mocks/categories";
import CategoryCard from "@/components/category-card";

export default function FeaturedCategories() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-8 items-center w-fit">
        <h2 className="px-12 py-6 text-center text-4xl font-bold w-full rounded-2xl bg-gray-100/40 backdrop-blur-lg border border-white/30">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
