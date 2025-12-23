"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const faqItems = [
  {
    value: "item-1",
    question: "What is Polkadot?",
    answer: (
      <>
        Polkadot is a layer-0 blockchain protocol that enables interoperability
        between multiple layer-1 blockchains (roll-ups) under shared security.
        Developers build on Polkadot to create scalable, interoperable, and
        secure blockchain applications, leveraging its modular framework,
        cross-chain communication (XCM), and robust developer tools like the
        Polkadot SDK. It&apos;s ideal for projects needing custom blockchains,
        smart contracts, or cross-chain functionality. Learn more at{" "}
        <Link
          className="text-polkadot-pink hover:text-[#FF2670] transition-colors"
          href="https://polkadot.network/technology"
          target="_blank"
        >
          polkadot.network/technology
        </Link>
      </>
    ),
  },
  {
    value: "item-2",
    question: "What is Polkadot Hub?",
    answer:
      "Polkadot Hub is a central gateway for creating and trading assets, deploying Ethereum-compatible smart contracts, and accessing native Polkadot features—all within Polkadot's high-performance, secure, and scalable Web3 platform.",
  },
  {
    value: "item-3",
    question:
      "How do I choose between building a roll up (parachain), or smart contract application?",
    answer: (
      <div className="flex flex-col gap-4">
        <p>
          <strong className="text-polkadot-pink">Roll ups (parachains)</strong>{" "}
          are ideal for custom blockchains with constant activity, making them a
          tailored solution for enterprises building specialized use cases, such
          as supply chain tracking, financial settlement systems, or private
          data management. They offer full control over governance, consensus,
          and performance.
        </p>
        <p>
          <strong className="text-polkadot-pink">Smart contracts</strong> are
          best for consumer-facing applications, such as DeFi platforms, NFT
          marketplaces, or gaming dApps, providing flexibility in development
          time and resource needs. Small teams or startups can quickly prototype
          and deploy using familiar tools like Solidity or Ink!, leveraging{" "}
          <Link
            className="text-polkadot-pink hover:text-[#FF2670] transition-colors"
            href="https://polkadot.com/platform/hub/"
            target="_blank"
          >
            Polkadot Hub
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    value: "item-4",
    question: "What resources are available for builders?",
    answer:
      "We provide comprehensive resources including hackathon guides, grant information, community connections, teammate finder, and curated idea lists. All designed to help you succeed in building on Polkadot.",
  },
  {
    value: "item-5",
    question: "How can I submit my project idea?",
    answer:
      "You can submit your project idea by clicking the 'Submit Idea' button in the navigation. Fill out the form with your project details, and our team will review it for inclusion in our idea gallery.",
  },
];

export default function FAQ() {
  return (
    <section className="relative py-24 px-4 bg-white">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Image
          src="/graphics/Computer.png"
          alt="Decoration"
          width={400}
          height={400}
        />
      </div>

      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex flex-col items-center gap-4">
          <span className="font-display text-sm text-polkadot-pink tracking-[0.3em]">
            NEED HELP?
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1a1a] text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="h-1 w-24 bg-[#E6007A] mt-4"></div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="bg-white border-2 border-[#1a1a1a]/20 px-6 data-[state=open]:border-polkadot-pink data-[state=open]:shadow-[4px_4px_0_0_#E6007A] transition-all"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <span className="font-display text-sm text-polkadot-pink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base text-[#1a1a1a] tracking-wide">
                    {item.question.toUpperCase()}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-10 text-[#1a1a1a]/60 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Contact CTA */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <p className="text-[#1a1a1a]/40 font-display text-sm tracking-wider">
          STILL HAVE QUESTIONS?{" "}
          <a
            href="mailto:support@polkadotbuilders.com"
            className="text-polkadot-pink hover:text-[#FF2670] transition-colors"
          >
            REACH OUT TO US
          </a>
        </p>
      </div>
    </section>
  );
}
