"use client";

import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";
import IdeaCard, { IdeaCardProps } from "@/components/idea-card";
import { ideas } from "@/components/mocks/ideas";
import { categories } from "@/components/mocks/categories";

export default function IdeaBoard() {

  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category') || "All categories";
  const router = useRouter();

  const filteredIdeas = ideas.filter((idea: IdeaCardProps) => 
    selectedCategory === "All categories" ? true : idea.category === selectedCategory
  );

  function handleCategoryChange(category: string) {
    router.push(`/explore-ideas?category=${category}`);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 h-[400px]">
      <div className="hidden lg:flex lg:flex-col lg:col-span-1 h-[400px]">
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <div className="flex flex-col gap-2 items-start">
          {categories.map((category) => (
            <Button key={category.id} variant="ghost" className="hover:cursor-pointer" onClick={() => handleCategoryChange(category.name)}>
              {category.name}
            </Button>
          ))}
        </div>
      </div>
      <div className="lg:col-span-4 flex flex-col h-[400px]">
        <h2 className="text-lg font-bold mb-4">{selectedCategory}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto flex-1">
          {filteredIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </div>
    </div>
  );
}