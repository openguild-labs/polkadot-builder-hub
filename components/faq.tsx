import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4 items-center justify-start p-4 w-fit">
        <h2 className="px-12 py-6 text-center text-4xl font-bold w-full rounded-2xl bg-gray-100/40 backdrop-blur-lg border border-white/30">
          Frequently Asked Questions
        </h2>
        <div className="w-full md:w-5xl">
          <Accordion
            type="single"
            collapsible
            className="w-full bg-secondary/80 p-8 rounded-2xl"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold text-xl">
                What is Polkadot?
              </AccordionTrigger>
              <AccordionContent>
                Polkadot is a layer-0 blockchain protocol that enables
                interoperability between multiple layer-1 blockchains (roll-ups)
                under shared security. Developers build on Polkadot to create
                scalable, interoperable, and secure blockchain applications,
                leveraging its modular framework, cross-chain communication
                (XCM), and robust developer tools like the Polkadot SDK.
                It&apos;s ideal for projects needing custom blockchains, smart
                contracts, or cross-chain functionality. Learn more at{" "}
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
              <AccordionTrigger className="font-bold text-xl">
                What is Polkadot Hub?
              </AccordionTrigger>
              <AccordionContent>
                Polkadot Hub is a central gateway for creating and trading
                assets, deploying Ethereum-compatible smart contracts, and
                accessing native Polkadot features—all within Polkadot&apos;s
                high-performance, secure, and scalable Web3 platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold text-xl">
                How do I choose between building a roll up (parachain), or smart
                contract application?
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  <p>
                    Roll ups (parachains) are ideal for custom blockchains with
                    constant activity, making them a tailored solution for
                    enterprises building specialized use cases, such as supply
                    chain tracking, financial settlement systems, or private
                    data management. They offer full control over governance,
                    consensus, and performance, enabling scalable and secure
                    infrastructure for large-scale projects with dedicated
                    resources. Roll ups are well-suited for organizations
                    needing robust, long-term blockchain solutions with high
                    throughput and interoperability.
                  </p>
                  <p>
                    Smart contracts are best for consumer-facing applications,
                    such as DeFi platforms, NFT marketplaces, or gaming dApps,
                    providing flexibility in development time and resource
                    needs. Small teams or startups can quickly prototype and
                    deploy using familiar tools like Solidity or Ink!,
                    leveraging{" "}
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
      </div>
    </div>
  );
}
