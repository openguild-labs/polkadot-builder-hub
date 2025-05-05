import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-4">
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
            <Link href="/explore-ideas">Explore ideas</Link>
          </Button>
          <Button variant="secondary" className="hover:cursor-pointer" asChild>
            <Link href="/hackathon-resources">Hackathon resources</Link>
          </Button>
        </div>
      </div>
      {/* Resources Section */}
      <div className="flex flex-col gap-8 items-center justify-center h-[500px]">
        <h2 className="text-2xl font-bold">Welcome aboard, builders!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[200px]">
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
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="flex flex-col gap-4 items-center justify-center h-[500px]">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <Accordion type="multiple" className="w-full md:w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
