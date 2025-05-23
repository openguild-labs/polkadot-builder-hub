export type Resource = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export const resources: Resource[] = [
  {
    id: 1,
    title: "Tips to win hackathon on Polkadot",
    description: "Learn how to win hackathon on Polkadot",
    url: "/hackathon-resources/tips-to-win-hackathon-on-polkadot",
  },
  {
    id: 2,
    title: "Getting grants on Polkadot",
    description: "Find out about different grants and how to apply for them",
    url: "/hackathon-resources/getting-grants-on-polkadot",
  },
  {
    id: 3,
    title: "Polkadot Developers Resources",
    description: "Library of different resources for developers on Polkadot",
    url: "/hackathon-resources/polkadot-developers-resources",
  },
  {
    id: 4,
    title: "Teammate Finder Directory (coming soon)",
    description: "Team up with other developers to build on Polkadot",
    url: "/teammate-finder",
  },
  {
    id: 5,
    title: "Event Calendar",
    description: "Find out about upcoming events and workshops",
    url: "https://lu.ma/polkadot",
  },
  {
    id: 6,
    title: "Learn before Build",
    description: "Learn about the basics of Polkadot before you build",
    url: "/hackathon-resources/learn-before-build",
  },
  {
    id: 7,
    title: "Pitchdeck Template",
    description: "Template for your pitchdeck to get funding for your project",
    url: "/hackathon-resources/pitchdeck-template",
  },
];
