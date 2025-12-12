import { Category } from "@/components/mocks/categories";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/explore-ideas?category=${category.slug}`}
      className="group relative bg-white border-2 border-[#1a1a1a] transition-all duration-300 hover:border-[#E6007A] hover:shadow-[4px_4px_0_0_#E6007A]"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E6007A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 p-6 flex flex-col gap-4 min-h-[220px]">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#E6007A]/10 border-2 border-[#E6007A]/30 group-hover:border-[#E6007A] transition-colors">
              <category.icon className="w-5 h-5 text-[#E6007A]" />
            </div>
            <h3 className="font-display text-base text-[#1a1a1a] tracking-wide uppercase">
              {category.name}
            </h3>
          </div>
          <ArrowRight className="w-5 h-5 text-[#E6007A] group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Description */}
        <p className="text-[#1a1a1a]/50 text-sm leading-relaxed line-clamp-2">
          {category.description}
        </p>

        {/* Featured Projects */}
        <div className="mt-auto pt-4 border-t-2 border-[#1a1a1a]/10">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-[#f5f5f5]">
                <Image
                  src={category.featuredProjects[0].profileImage}
                  alt={category.featuredProjects[0].builderName}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-[#f5f5f5] -ml-2">
                <Image
                  src={category.featuredProjects[1].profileImage}
                  alt={category.featuredProjects[1].builderName}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-[#1a1a1a]/40 font-display tracking-wider">FEATURING</span>
              <span className="text-xs text-[#1a1a1a]/70">
                {category.featuredProjects
                  .map((project) => project.builderName)
                  .join(", ")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
