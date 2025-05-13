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
      <div className="flex flex-col gap-2 p-4 h-[200px] rounded-lg justify-between">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 items-center">
            <category.icon />
            <h2 className="text-lg font-bold">{category.name}</h2>
          </div>
          <ArrowRight />
        </div>
        <p className="text-sm line-clamp-3 text-muted-foreground">{category.description}</p>
        <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image src={category.featuredProjects[0].profileImage} alt="Featured Projects" width={40} height={40} className="rounded-full" />
            <Image src={category.featuredProjects[1].profileImage} alt="Featured Projects" width={40} height={40} className="rounded-full -ml-6" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-muted-foreground">Featuring</p>
            <p className="text-sm">{category.featuredProjects.map((project) => project.builderName).join(", ")}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
