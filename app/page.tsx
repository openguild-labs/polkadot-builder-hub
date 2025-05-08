import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import FeaturedCategories from "@/components/featured-categories";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-col gap-16 p-4">
      {/* Hero Section */}
      <div className="flex flex-col gap-4 text-center items-center justify-center h-[600px]">
        <h1 className="text-4xl font-bold">Polkadot Builders Resources</h1>
        <p className="text-lg text-muted-foreground">
          Aggregated by OpenGuild ♥️
        </p>
        <p className="text-lg font-semibold">
          Start building on Polkadot Hub - powerful smart contract layers for
          consumer dApps.
        </p>
        <div className="flex flex-row gap-4 justify-center">
          <Button className="hover:cursor-pointer" asChild>
            <Link href="/explore-ideas?category=all">Explore ideas</Link>
          </Button>
          <Button variant="secondary" className="hover:cursor-pointer" asChild>
            <Link href="/hackathon-resources">Hackathon resources</Link>
          </Button>
        </div>
      </div>
      {/* Resources Section */}
      <div className="flex flex-col gap-8 items-center">
        <h2 className="text-2xl font-bold">Welcome aboard, builders!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link className="border-2 border-muted rounded-lg p-4" href="/grants">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">
                Get Grants to support growth your ideas!
              </h3>
            </div>
          </Link>
          <div className="grid grid-cols-1 gap-4">
            <Link
              href="/past-hackathon-winners"
              className="border-2 border-muted rounded-lg p-4"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Past Hackathon Winners</h3>
              </div>
            </Link>
            <Link
              href="/join-communities"
              className="border-2 border-muted rounded-lg p-4"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">
                  Join Communities to get support
                </h3>
              </div>
            </Link>
            <div className="border-2 border-muted rounded-lg p-4">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Teammate Finder Directory</h3>
                <Badge>Coming soon</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Categories Section */}
      <FeaturedCategories />
      {/* FAQ Section */}
      <div className="flex flex-col gap-4 items-center justify-start h-[1000px]">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <Accordion type="multiple" className="w-full md:w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">
              What is Polkadot?
            </AccordionTrigger>
            <AccordionContent>
              Polkadot is a layer-0 blockchain protocol that enables
              interoperability between multiple layer-1 blockchains (roll-ups)
              under shared security. Developers build on Polkadot to create
              scalable, interoperable, and secure blockchain applications,
              leveraging its modular framework, cross-chain communication (XCM),
              and robust developer tools like the Polkadot SDK. It&apos;s ideal for
              projects needing custom blockchains, smart contracts, or
              cross-chain functionality. Learn more at{" "}
              <Link
                className="underline underline-offset-4 text-blue-500"
                href="https://polkadot.network/technology"
              >
                <Image
                  className="inline mr-2"
                  src="/logo.svg"
                  alt="Polkadot"
                  width={20}
                  height={20}
                />
                polkadot.network/technology
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold">What is Polkadot Hub?</AccordionTrigger>
            <AccordionContent>
              Polkadot Hub is a central gateway for creating and trading assets,
              deploying Ethereum-compatible smart contracts, and accessing
              native Polkadot features—all within Polkadot&apos;s high-performance,
              secure, and scalable Web3 platform.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold">
              How do I choose between building a roll up (parachain), or smart
              contract application?
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-4">
                <p>
                  Roll ups (parachains) are ideal for custom blockchains with
                  constant activity, making them a tailored solution for
                  enterprises building specialized use cases, such as supply
                  chain tracking, financial settlement systems, or private data
                  management. They offer full control over governance,
                  consensus, and performance, enabling scalable and secure
                  infrastructure for large-scale projects with dedicated
                  resources. Roll ups are well-suited for organizations needing
                  robust, long-term blockchain solutions with high throughput
                  and interoperability.
                </p>
                <p>
                  Smart contracts are best for consumer-facing applications,
                  such as DeFi platforms, NFT marketplaces, or gaming dApps,
                  providing flexibility in development time and resource needs.
                  Small teams or startups can quickly prototype and deploy using
                  familiar tools like Solidity or Ink!, leveraging{" "}
                  <Link
                    className="underline underline-offset-4 text-blue-500"
                    href="https://polkadot.com/platform/hub/"
                  >
                    <Image
                      className="inline mr-2"
                      src="/logo.svg"
                      alt="Polkadot"
                      width={20}
                      height={20}
                    />
                    Polkadot Hub
                  </Link>
                  . This approach minimizes infrastructure overhead, supports
                  rapid iteration, and is ideal for agile projects aiming to
                  reach users with innovative, user-centric solutions.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
