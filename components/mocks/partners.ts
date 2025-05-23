export type Partner = {
  id: number;
  title: string;
  url: string;
  logo: string; 
};

export const partners: Partner[] = [
  {
    id: 1,
    title: "Papermoon",
    url: "https://papermoon.io",
    logo: "/logos/papermoon.png",
  },
  {
    id: 2,
    title: "buildstation",
    url: "https://buildstation.org",
    logo: "/logos/buildstation.svg",
  },
  {
    id: 3,
    title: "WebZero",
    url: "https://joinwebzero.com",
    logo: "/logos/webzero.png",
  },
  {
    id: 4,
    title: "EasyA",
    url: "https://easya.io",
    logo: "/logos/easya.svg",
  },
  {
    id: 5,
    title: "Space4Build",
    url: "https://medellinblockchainweek.space4build.xyz/",
    logo: "/logos/space4build.png",
  },
  {
    id: 6,
    title: "Polkadot Africa",
    url: "https://polkadotafrica.notion.site/",
    logo: "/logos/polkadot-africa.png",
  },
];
