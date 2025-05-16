export type Community = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export const communities: Community[] = [
  {
    id: 1,
    title: "OpenGuild",
    description: "A community of APAC builders",
    url: "https://discord.gg/YxwPSUer5Z"
  },
  {
    id: 2,
    title: "Polkadot Discord",
    description: "The official Polkadot Discord server",
    url: "https://discord.gg/polkadot",
  }
]