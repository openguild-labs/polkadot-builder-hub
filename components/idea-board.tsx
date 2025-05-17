"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";
import IdeaCard, { IdeaCardProps } from "@/components/idea-card";
import { ideas } from "@/components/mocks/ideas";
import { categories } from "@/components/mocks/categories";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const levelOrder = { "Easy": 1, "Intermediate": 2, "Advanced": 3 } as const;
type Level = keyof typeof levelOrder;

export default function IdeaBoard() {

  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category') || "all";
  const selectedCategoryName = categories.find((category) => category.slug === selectedCategory)?.name || "All categories";
  const router = useRouter();
  const [sortMode, setSortMode] = useState("date");

  const filteredIdeas = ideas.filter((idea: IdeaCardProps) => 
    selectedCategory === "all" ? true : idea.category === selectedCategory
  );

  const filteredAndSortedIdeas = [...filteredIdeas].sort((a, b) => {
    if (sortMode === "date") {
      return b.dateAdded.localeCompare(a.dateAdded);
    } else {
      return levelOrder[a.level as Level] - levelOrder[b.level as Level];
    }
  });

  function handleCategoryChange(category: string) {
    router.push(`/explore-ideas?category=${category}`);
  }

  function handleSortByChange(sortBy: string) {
    setSortMode(sortBy);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 h-[600px]">
      <div className="hidden lg:flex lg:flex-col lg:col-span-1 h-[600px]">
        <h2 className="text-lg font-bold mb-4">Categories</h2>
        <div className="flex flex-col gap-2 items-start">
          {categories.map((category) => (
            <Button key={category.id} variant="ghost" className="hover:cursor-pointer" onClick={() => handleCategoryChange(category.slug)}>
              {category.name}
            </Button>
          ))}
        </div>
      </div>
      <div className="lg:col-span-4 flex flex-col h-[600px]">
        <div className="flex flex-row justify-between">
          <h2 className="text-lg font-bold mb-4">{selectedCategoryName}</h2>
          <Select onValueChange={handleSortByChange} defaultValue="date">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="level">Level</SelectItem>
              <SelectItem value="date">Date added</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto flex-1">
          {filteredAndSortedIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </div>
    </div>
  );
}