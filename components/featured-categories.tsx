import { categories } from "@/components/mocks/categories";
import CategoryCard from "@/components/category-card";


export default function FeaturedCategories() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-2xl font-bold">Featured Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}