"use client"

import { ColumnDef } from "@tanstack/react-table"
import type { Winner } from "@/components/mocks/winners"

export const columns: ColumnDef<Winner>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return <div className="w-[500px] whitespace-normal break-words">{row.original.description}</div>
    },
  },
  {
    accessorKey: "hackathon",
    header: "Hackathon",
  },
  {
    accessorKey: "xLink",
    header: "X Link",
  },
  {
    accessorKey: "pitchLink",
    header: "Pitch Link",
  },
  {
    accessorKey: "github",
    header: "Github",
  },
]