import { Category } from "@/components/mocks/categories";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/explore-ideas?category=${category.slug}`}
      className="flex flex-col border rounded-lg w-76 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/10"
    >
      <Image
        src={category.image}
        alt={category.name}
        width={300}
        height={200}
        className="w-76 rounded-t-lg"
      />
      <div className="flex flex-col gap-2 p-4 transition-colors duration-200 hover:bg-[#FF2670] hover:text-white h-[150px] rounded-b-lg">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 items-center">
            <category.icon />
            <h2 className="text-lg font-bold">{category.name}</h2>
          </div>
          <ArrowRight />
        </div>
        <p className="text-sm line-clamp-3">{category.description}</p>
      </div>
    </Link>
  );
}
