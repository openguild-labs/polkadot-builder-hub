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
    description: "Grant 1 description",
    url: "https://grants.web3.foundation/docs/process"
  },
  {
    id: 2,
    title: "Fast Grant Bounty",
    description: "Grant 1 description",
    url: "https://github.com/Polkadot-Fast-Grants/apply",
  },
  {
    id: 3,
    title: "OpenSource Bounty",
    description: "Grant 1 description",
    url: "https://github.com/PolkadotOpenSourceGrants/apply",
  },
  {
    id: 4,
    title: "OpenGuild Meetup for Builders",
    description: "Grant 1 description",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdRw9EMCoe4N8iA_akQbiLBCh_L8GDyqBeNEsC87gv3AXEn4Q/viewform",
  },
  {
    id: 5,
    title: "Event Bounty",
    description: "Grant 1 description",
    url: "https://forms.monday.com/forms/6333f358de606dd1eded5a06d478db1a?r=euc1",
  },
  {
    id: 6,
    title: "Meetup Bounty",
    description: "Grant 1 description",
    url: "https://dotmeetups.notion.site/how-to-start",
  },
];