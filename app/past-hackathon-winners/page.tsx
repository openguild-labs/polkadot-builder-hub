"use client";

import { useState } from "react";
import GoBack from "@/components/go-back";
import { winners } from "@/components/mocks/winners";
import WinnerCard from "@/components/winner-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LayoutGrid, List } from 'lucide-react';
import { columns } from "@/app/past-hackathon-winners/columns"
import { DataTable } from "@/app/past-hackathon-winners/data-table"
import { Input } from "@/components/ui/input"


export default function PastHackathonWinners() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWinners = winners.filter((winner) =>
    winner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    winner.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    winner.hackathon.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex flex-col gap-4 p-4 mt-16">
      <GoBack />
      <h1 className="text-2xl font-bold">Past Hackathon Winners</h1>
      <Tabs defaultValue="grid" className="w-full">
        <TabsList>
          <TabsTrigger value="grid">
            <LayoutGrid className="w-4 h-4" />
          </TabsTrigger>
          <TabsTrigger value="list">
            <List className="w-4 h-4" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="grid">
          <div className="flex flex-col gap-4">
            <Input
              type="search"
              placeholder="Search winners by name, description, or hackathon..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-sm"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredWinners.map((winner) => (
                <WinnerCard key={winner.id} winner={winner} />
              ))}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="list">
          <div className="w-full">
            <DataTable columns={columns} data={winners} />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
