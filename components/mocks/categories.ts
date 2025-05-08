import { ArrowDownAZ, CircleDollarSign, Droplet, Laptop, Image, Server, SquareTerminal, Network } from "lucide-react";

export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: React.ElementType;
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
    ideasFrom: [],
  },
  {
    id: 1,
    name: "Payment",
    slug: "payment",
    description: "Revolutionizing payments with secure and fast transactions on Polkadot",
    icon: CircleDollarSign,
    ideasFrom: [],
  },
  {
    id: 2,
    name: "DeFi",
    slug: "defi",
    description: "Building decentralized financial systems on Polkadot",
    icon: Droplet,
    ideasFrom: [],
  },
  {
    id: 3,
    name: "Consumer DApps",
    slug: "consumer-dapps",
    description: "Creating user-friendly and accessible DApps for everyday use",
    icon: Laptop,
    ideasFrom: [],
  },
  {
    id: 4,
    name: "NFTs",
    slug: "nfts",
    description: "Creating and trading unique digital assets on Polkadot",
    icon: Image,
    ideasFrom: [],
  },
  {
    id: 5,
    name: "Infrastructure",
    slug: "infrastructure",
    description: "Building the infrastructure for a decentralized future",
    icon: Server,
    ideasFrom: [],
  },
  {
    id: 6,
    name: "Developer Tools",
    slug: "developer-tools",
    description: "Tools and resources for building on Polkadot",
    icon: SquareTerminal,
    ideasFrom: [],
  },
  {
    id: 7,
    name: "DePIN",
    slug: "depin",
    description: "Decentralized infrastructure projects on Polkadot",
    icon: Network,
    ideasFrom: [],
  },
];