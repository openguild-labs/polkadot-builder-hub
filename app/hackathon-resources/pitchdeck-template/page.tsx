import GoBack from "@/components/go-back";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto">
      <GoBack href="/hackathon-resources" />
      <h1 className="text-2xl font-bold">Pitchdeck Template</h1>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-medium italic">OpenGuild generated this template to help Web3 founders and builders clearly communicate their vision, validate their ideas, and stand out to ecosystem partners, backers, and early adopters.</p>
        <p className="text-lg font-bold">Polkadot Founders Pitchdeck Template</p>
        <a target="_blank" href="https://docs.google.com/presentation/d/1jWOlajfo1k5zfEftyQtuEVd8G3JMgtou1MY7SIVkFEM/edit?usp=sharing" className="relative flex flex-row gap-4 border border-gray-300 rounded-md p-5">
          <Image src="/gdrive.svg" alt="Google drive link" width={50} height={50} />
          <div className="flex flex-col gap-2">
            <p className="text-sm text-wrap break-all overflow-wrap-anywhere">1jWOlajfo1k5zfEftyQtuEVd8G3JMgtou1MY7SIVkFEM</p>
            <p className="text-sm text-muted-foreground text-wrap break-all overflow-wrap-anywhere">https://docs.google.com/presentation</p>
          </div>
          <ExternalLink className="w-6 h-6 absolute top-1 right-1" />
        </a>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold underline underline-offset-4">✍️ Customize to Fit Your Narrative</h3>
          <p>This isn&apos;t a rigid structure - it&apos;s a launchpad.</p>
          <blockquote className="italic border-l-4 border-gray-300 pl-4">Move things around, simplify or expand slides, and make it feel true to your product and audience.</blockquote>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold underline underline-offset-4">🧠 Ground It in Reality</h3>
          <p>Data matters. So do stories.</p>
          <blockquote className="italic border-l-4 border-gray-300 pl-4">Strengthen your pitch with actual user problems, market context, or insights from founders&apos; past experience.</blockquote>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold underline underline-offset-4">💻 Demo &gt; Diagram</h3>
          <p>If you have a working product, even in testnet, show it.</p>
          <blockquote>Replace abstract charts with screens, GIFs, or real metrics. Let the product speak.</blockquote>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold underline underline-offset-4">🌍 Speak to the Community</h3>
          <p>You&apos;re not building in a vacuum.</p>
          <blockquote className="italic border-l-4 border-gray-300 pl-4">Tailor your messaging to resonate with other builders, VCs, and ecosystem partners in Web3. Tagline, tone, and even memes matter.</blockquote>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold underline underline-offset-4">🔗 Make It Actionable</h3>
          <p>Don&apos;t just end with a thank you.</p>
          <blockquote className="italic border-l-4 border-gray-300 pl-4">Add your links (demo, GitHub, Calendly, wallet), be clear on what you&apos;re seeking (grant, devs, collab), and give people a way to act.</blockquote>
        </div>
      </div>
    </main>
  );
}