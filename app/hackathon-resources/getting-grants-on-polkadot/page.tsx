import GoBack from "@/components/go-back";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";


export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto mt-16">
      <GoBack href="/hackathon-resources" />
      <h1 className="text-2xl font-bold">Getting grants on Polkadot</h1>
      <div className="flex flex-col gap-4">
        <p>
          <span className="font-bold bg-[#FF2670] text-secondary py-1 px-1">You are new founders, builders, developers?</span> We have you covered.
        </p>
        <p>
          Below are the best & straightforward grant opportunities for you to
          bootstrap your products on Polkadot.
        </p>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li>Business Oriented <Badge className="inline ml-2">Recommended</Badge></li>
          <li>Opensource infrastructure and tools</li>
        </ul>
        <p>
          But how would you access these? Join OpenGuid Discord to get the
          fastest support ever!
        </p>
        <p>
          We are just not your friends, but also a place that you can have quick
          access to resources, information, ecosystem experts connection so that
          you don’t waste your time in it.
        </p>
        <p className="font-bold bg-[#07FFFF] text-primary py-2 px-1 w-fit">Just ask!</p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Relevant links</h2>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdRw9EMCoe4N8iA_akQbiLBCh_L8GDyqBeNEsC87gv3AXEn4Q/viewform" target="_blank" className="w-fit text-lg underline underline-offset-4 text-blue-500 hover:text-blue-600">
          OpenGuild Meetup for Builders
          <ExternalLink className="w-6 h-6 inline-block ml-2" />
        </a>
        <a href="https://grants.web3.foundation/docs/process" target="_blank" className="w-fit text-lg underline underline-offset-4 text-blue-500 hover:text-blue-600">
          Web3 Foundation Grants
          <ExternalLink className="w-6 h-6 inline-block ml-2" />
        </a>
        <a href="https://github.com/Polkadot-Fast-Grants/apply" target="_blank" className="w-fit text-lg underline underline-offset-4 text-blue-500 hover:text-blue-600">
          Fast Grant For New Founders
          <ExternalLink className="w-6 h-6 inline-block ml-2" />
        </a>
        <a href="https://github.com/PolkadotOpenSourceGrants/apply" target="_blank" className="w-fit text-lg underline underline-offset-4 text-blue-500 hover:text-blue-600">
          Polkadot Open Source Grants
          <ExternalLink className="w-6 h-6 inline-block ml-2" />
        </a>
        <a href="https://forms.monday.com/forms/6333f358de606dd1eded5a06d478db1a?r=euc1" target="_blank" className="w-fit text-lg underline underline-offset-4 text-blue-500 hover:text-blue-600">
          Event Funding
          <ExternalLink className="w-6 h-6 inline-block ml-2" />
        </a>
        <a href="https://dotmeetups.notion.site/how-to-start" target="_blank" className="w-fit text-lg underline underline-offset-4 text-blue-500 hover:text-blue-600">
          Meetup Fund
          <ExternalLink className="w-6 h-6 inline-block ml-2" />
        </a>
      </div>
    </main>
  );
}
