import { categories } from "@/components/mocks/categories";
import Link from "next/link";

export default function FeaturedCategories() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-2xl font-bold">Featured Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link key={category.id} href={`/explore-ideas?category=${category.name}`} className="border-2 border-muted rounded-lg p-4">
            <h3 className="text-lg font-bold">{category.name}</h3>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}