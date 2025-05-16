export type Grant = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export const grants: Grant[] = [
  {
    id: 1,
    title: "Web3 Foundation Grant",
    description: "a comprehensive grants program focused on funding software development and research efforts related to Polkadot and Kusama",
    url: "https://grants.web3.foundation/docs/process"
  },
  {
    id: 2,
    title: "Fast Grant Bounty",
    description: "The Polkadot Fast-Grants Programme provides funding for early-stage builders on Polkadot",
    url: "https://github.com/Polkadot-Fast-Grants/apply",
  },
  {
    id: 3,
    title: "OpenSource Bounty",
    description: "The Polkadot Open Source Developer Grants bounty supports individuals and small teams in developing open-source software for the Polkadot ecosystem",
    url: "https://github.com/PolkadotOpenSourceGrants/apply",
  },
  {
    id: 4,
    title: "OpenGuild Meetup for Builders",
    description: "Get funding to host a Polkadot Mini Meetup in your city within South East Asia",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdRw9EMCoe4N8iA_akQbiLBCh_L8GDyqBeNEsC87gv3AXEn4Q/viewform",
  },
  {
    id: 5,
    title: "Event Bounty",
    description: "Get funding to host a Polkadot event",
    url: "https://forms.monday.com/forms/6333f358de606dd1eded5a06d478db1a?r=euc1",
  },
  {
    id: 6,
    title: "Meetup Bounty",
    description: "Get funding to host a Polkadot Meetup",
    url: "https://dotmeetups.notion.site/how-to-start",
  },
];