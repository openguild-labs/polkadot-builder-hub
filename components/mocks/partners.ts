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
    url: "https://papermoon.xyz",
    logo: "/logos/papermoon.png",
  },
  {
    id: 2,
    title: "buildstation",
    url: "https://buildstation.org",
    logo: "/logos/buildstation.svg",
  },
];
