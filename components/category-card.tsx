import { Category } from "@/components/mocks/categories";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/explore-ideas?category=${category.slug}`} className="flex flex-col gap-2 border rounded-lg p-4 w-76">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <category.icon />
          <h2 className="text-lg font-bold">{category.name}</h2>
        </div>
        <ArrowRight />
      </div>  
      <p className="text-sm">{category.description}</p>
    </Link>
  );
}
