import { ArrowDownAZ, CircleDollarSign, Droplet, Laptop, Image, Server, SquareTerminal, Network } from "lucide-react";

export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: React.ElementType;
  image: string;
  ideasFrom: {
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
    ideasFrom: [],
  },
  {
    id: 1,
    name: "Payment",
    slug: "payment",
    description: "Revolutionizing payments with secure and fast transactions on Polkadot",
    icon: CircleDollarSign,
    image: "/polkadot-builders-1.png",
    ideasFrom: [],
  },
  {
    id: 2,
    name: "DeFi",
    slug: "defi",
    description: "Building decentralized financial systems on Polkadot",
    icon: Droplet,
    image: "/polkadot-builders-1.png",
    ideasFrom: [],
  },
  {
    id: 3,
    name: "Consumer DApps",
    slug: "consumer-dapps",
    description: "Creating user-friendly and accessible DApps for everyday use",
    icon: Laptop,
    image: "/polkadot-builders-1.png",
    ideasFrom: [],
  },
  {
    id: 4,
    name: "NFTs",
    slug: "nfts",
    description: "Creating and trading unique digital assets on Polkadot",
    icon: Image,
    image: "/polkadot-builders-1.png",
    ideasFrom: [],
  },
  {
    id: 5,
    name: "Infrastructure",
    slug: "infrastructure",
    description: "Building the infrastructure for a decentralized future",
    icon: Server,
    image: "/polkadot-builders-1.png",
    ideasFrom: [],
  },
  {
    id: 6,
    name: "Developer Tools",
    slug: "developer-tools",
    description: "Tools and resources for building on Polkadot",
    icon: SquareTerminal,
    image: "/polkadot-builders-1.png",
    ideasFrom: [],
  },
  {
    id: 7,
    name: "DePIN",
    slug: "depin",
    description: "Decentralized infrastructure projects on Polkadot",
    icon: Network,
    image: "/polkadot-builders-1.png",
    ideasFrom: [],
  },
];