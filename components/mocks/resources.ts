export type Resource = {
  id: number;
  title: string;
  description: string;
  path: string;
};

export const resources: Resource[] = [
  {
    id: 1,
    title: "Tips to win hackathon on Polkadot",
    description: "Learn how to win hackathon on Polkadot",
    path: "/hackathon-resources",
  },
  {
    id: 2,
    title: "Getting grants on Polkadot",
    description: "Learn how to win hackathon on Polkadot",
    path: "/grants",
  },
  {
    id: 3,
    title: "Polkadot Developers Resources",
    description: "Learn how to get started on Polkadot",
    path: "/developers",
  },
  {
    id: 4,
    title: "Teammate Finder Directory (coming soon)",
    description: "Learn how to get started on Polkadot",
    path: "/teammate-finder",
  },
  {
    id: 5,
    title: "Event Calendar",
    description: "Learn how to get started on Polkadot",
    path: "/events",
  },
  {
    id: 6,
    title: "Learn before Build",
    description: "Learn how to get started on Polkadot",
    path: "/learn-before-build",
  },
  {
    id: 7,
    title: "Pitchdeck Template",
    description: "Learn how to get started on Polkadot",
    path: "/pitchdeck-template",
  },
];
