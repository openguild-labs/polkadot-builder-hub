"use client"

import { ColumnDef } from "@tanstack/react-table"
import type { Winner } from "@/components/mocks/winners"

function extractXUsername(xLink: string) {
  const username = xLink.split("/").pop();
  return username;
}

function extractGithubUsername(githubLink: string) {
  const username = githubLink.split("/").pop();
  return username;
}

export const columns: ColumnDef<Winner>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return <div className="w-[200px] whitespace-normal break-words">{row.original.name}</div>
    },
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
    cell: ({ row }) => {
      return <div className="w-[200px] whitespace-normal break-words">{row.original.hackathon}</div>
    },
  },
  {
    accessorKey: "x",
    header: "X Link",
    cell: ({ row }) => {
      return (
        <>
          {
            row.original.x ? (
              <a href={row.original.x} target="_blank" rel="noopener noreferrer" className="w-[100px] underline underline-offset-4 text-blue-500 whitespace-normal break-words">{extractXUsername(row.original.x)}</a>
            ) : (
              <div className="w-[200px] whitespace-normal break-words">n/a</div>
            )
          }
        </>
      )
    },
  },
  {
    accessorKey: "pitch",
    header: "Pitch Link",
    cell: ({ row }) => {
      return (
        <>
          {
            row.original.pitch ? (
              <a href={row.original.pitch} target="_blank" rel="noopener noreferrer" className="w-[100px] underline underline-offset-4 text-blue-500 whitespace-normal break-words">View</a>
            ) : (
              <div className="w-[200px] whitespace-normal break-words">n/a</div>
            )
          }
        </>
      )
    },
  },
  {
    accessorKey: "github_link",
    header: "Github",
    cell: ({ row }) => {
      return (
        <>
          {
            row.original.github_link ? (
              <a href={row.original.github_link} target="_blank" rel="noopener noreferrer" className="w-[100px] underline underline-offset-4 text-blue-500 whitespace-normal break-words">{extractGithubUsername(row.original.github_link)}</a>
            ) : (
              <div className="w-[200px] whitespace-normal break-words">n/a</div>
            )
          }
        </>
      )
    },
  },
]