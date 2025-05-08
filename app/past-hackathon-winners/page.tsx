"use client";

import GoBack from "@/components/go-back";
import { winners } from "@/components/mocks/winners";
import WinnerCard from "@/components/winner-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LayoutGrid, List } from 'lucide-react';
import { columns } from "@/app/past-hackathon-winners/columns"
import { DataTable } from "@/app/past-hackathon-winners/data-table"


export default function PastHackathonWinners() {

  return (
    <main className="flex flex-col gap-4 p-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {winners.map((winner) => (
              <WinnerCard key={winner.id} winner={winner} />
            ))}
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
