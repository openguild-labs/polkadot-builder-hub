"use client";

import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";
import IdeaCard, { IdeaCardProps } from "@/components/idea-card";

export const categories = [
  {
    id: 0,
    name: "All categories",
    description: "View all categories",
  },
  {
    id: 1,
    name: "Payment",
    description: "Payment ideas",
  },
  {
    id: 2,
    name: "DeFi",
    description: "DeFi ideas",
  },
  {
    id: 3,
    name: "Consumer DApps",
    description: "Consumer DApps ideas",
  },
  {
    id: 4,
    name: "NFTs",
    description: "NFTs ideas",
  },
  {
    id: 5,
    name: "Infrastructure",
    description: "Infrastructure ideas",
  },
  {
    id: 6,
    name: "Developer Tools",
    description: "Developer Tools ideas",
  },
  {
    id: 7,
    name: "DePIN",
    description: "DePIN ideas",
  },
];

const ideas = [
  {
    id: 1,
    title: "Idea 1",
    description: "Description 1",
    category: "Payment",
    builder: "Builder 1",
    builderImage: "/todd.jpg",
    level: "Easy",
  },
  {
    id: 2,
    title: "Idea 2",
    description: "Description 2",
    category: "DeFi",
    builder: "Builder 2",
    builderImage: "/todd.jpg",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Idea 3",
    description: "Description 3",
    category: "Consumer DApps",
    builder: "Builder 3",
    builderImage: "/todd.jpg",
    level: "Advanced",
  },
  {
    id: 4,
    title: "Idea 4",
    description: "Description 4",
    category: "NFTs",
    builder: "Builder 4",
    builderImage: "/todd.jpg",
    level: "Easy",
  },
  {
    id: 5,
    title: "Idea 5",
    description: "Description 5",
    category: "Infrastructure",
    builder: "Builder 5",
    builderImage: "/todd.jpg",
    level: "Intermediate",
  },
  {
    id: 6,
    title: "Idea 6",
    description: "Description 6",
    category: "Developer Tools",
    builder: "Builder 6",
    builderImage: "/todd.jpg",
    level: "Advanced",
  },
  {
    id: 7,
    title: "Idea 7",
    description: "Description 7",
    category: "DePIN",
    builder: "Builder 7",
    builderImage: "/todd.jpg",
    level: "Easy",
  },
  {
    id: 8,
    title: "Idea 8",
    description: "Description 8",
    category: "DePIN",
    builder: "Builder 8",
    builderImage: "/todd.jpg",
    level: "Easy",
  },
  {
    id: 9,
    title: "Idea 9",
    description: "Description 9",
    category: "DeFi",
    builder: "Builder 9",
    builderImage: "/todd.jpg",
    level: "Easy",
  },
  {
    id: 10,
    title: "Idea 10",
    description: "Description 10",
    category: "NFTs",
    builder: "Builder 10",
    builderImage: "/todd.jpg",
    level: "Easy",
  },
];

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