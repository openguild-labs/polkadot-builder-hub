import { ArrowDownAZ, CircleDollarSign, Droplet, Laptop, Image, Server, SquareTerminal, Network } from "lucide-react";

export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: React.ElementType;
  image: string;
  featuredProjects: {
    id: number;
    builderName: string;
    profileImage: string;
  }[];
}

export const categories: Category[] = [
  {
    id: 0,
    name: "All categories",
    slug: "all",
    description: "View all ideas from all categories",
    icon: ArrowDownAZ,
    image: "/polkadot-builders-1.png",
    featuredProjects: [
      {
        id: 0,
        builderName: "Asset Hub",
        profileImage: "/logos/assethub.svg",
      },
      {
        id: 1,
        builderName: "JAM",
        profileImage: "/logos/jam.svg",
      },
    ],
  },
  {
    id: 1,
    name: "Payment",
    slug: "payment",
    description: "Revolutionizing payments with secure transactions on Polkadot",
    icon: CircleDollarSign,
    image: "/polkadot-builders-1.png",
    featuredProjects: [
      {
        id: 0,
        builderName: "Polkadot App",
        profileImage: "/logos/polkadot.svg",
      },
      {
        id: 1,
        builderName: "Asset Hub",
        profileImage: "/logos/assethub.svg",
      },
    ],
  },
  {
    id: 2,
    name: "DeFi",
    slug: "defi",
    description: "Building decentralized financial systems on Polkadot",
    icon: Droplet,
    image: "/polkadot-builders-1.png",
    featuredProjects: [
      {
        id: 0,
        builderName: "Bifrost",
        profileImage: "/logos/bifrost.svg",
      },
      {
        id: 1,
        builderName: "Hydration",
        profileImage: "/logos/hydration.svg",
      },
    ],
  },
  {
    id: 3,
    name: "Consumer DApps",
    slug: "consumer-dapps",
    description: "Creating user-friendly and accessible DApps for everyday use",
    icon: Laptop,
    image: "/polkadot-builders-1.png",
    featuredProjects: [
      {
        id: 0,
        builderName: "Polkadot App",
        profileImage: "/logos/polkadot.svg",
      },
      {
        id: 1,
        builderName: "Mythical",
        profileImage: "/logos/mythical.svg",
      },
    ],
  },
  {
    id: 4,
    name: "NFTs",
    slug: "nfts",
    description: "Creating and trading unique digital assets on Polkadot",
    icon: Image,
    image: "/polkadot-builders-1.png",
    featuredProjects: [
      {
        id: 0,
        builderName: "Unique",
        profileImage: "/logos/unique.svg",
      },
      {
        id: 1,
        builderName: "Koda",
        profileImage: "/logos/koda.svg",
      },
    ],
  },
  {
    id: 5,
    name: "Infrastructure",
    slug: "infrastructure",
    description: "Building the infrastructure for a decentralized future",
    icon: Server,
    image: "/polkadot-builders-1.png",
    featuredProjects: [
      {
        id: 0,
        builderName: "Moonbeam",
        profileImage: "/logos/moonbeam.svg",
      },
      {
        id: 1,
        builderName: "Hyperbridge",
        profileImage: "/logos/hyperbridge.svg",
      },
    ],
  },
  {
    id: 6,
    name: "Developer Tools",
    slug: "developer-tools",
    description: "Tools and resources for building on Polkadot",
    icon: SquareTerminal,
    image: "/polkadot-builders-1.png",
    featuredProjects: [
      {
        id: 0,
        builderName: "Polkadot API",
        profileImage: "/logos/papi.svg",
      },
      {
        id: 1,
        builderName: "Dedot",
        profileImage: "/logos/dedot.svg",
      },
    ],
  },
  {
    id: 7,
    name: "DePIN",
    slug: "depin",
    description: "Decentralized infrastructure projects on Polkadot",
    icon: Network,
    image: "/polkadot-builders-1.png",
    featuredProjects: [
      {
        id: 0,
        builderName: "Crust",
        profileImage: "/logos/crust.svg",
      },
      {
        id: 1,
        builderName: "Phala",
        profileImage: "/logos/phala.svg",
      },
    ],
  },
];