import GoBack from "@/components/go-back";
import { ExternalLink } from "lucide-react";

export default function Page() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <GoBack href="/hackathon-resources" />
      <h1 className="text-2xl font-bold">Learn before build</h1>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <a
            href="https://openguild.wtf/learn/database"
            target="_blank"
            className="w-fit text-lg underline underline-offset-4 text-blue-500 hover:text-blue-600"
          >
            Ecosystem Learning Resources
            <ExternalLink className="w-6 h-6 inline-block ml-2" />
          </a>
          <p>
            OpenGuild’s Learn Database is a treasure trove of accessible,
            high-quality resources for learning Polkadot and Web3 development
            from anywhere.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="https://polkadot.com/blockchain-academy/"
            target="_blank"
            className="w-fit text-lg underline underline-offset-4 text-blue-500 hover:text-blue-600"
          >
            Polkadot Blockchain Academy
            <ExternalLink className="w-6 h-6 inline-block ml-2" />
          </a>
          <p>
            Polkadot Blockchain Academy is your gateway to mastering blockchain
            development with insights from Polkadot’s top experts, tailored for
            ambitious builders.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="https://youtube.com/playlist?list=PLQ-uHSnFig5M9fW16o2l35jrfdsxGknNB&si=-lGNxycZlbbXNWrp"
            target="_blank"
            className="w-fit text-lg underline underline-offset-4 text-blue-500 hover:text-blue-600"
          >
            Startup School (Y Combinator)
            <ExternalLink className="w-6 h-6 inline-block ml-2" />
          </a>
          <p>
            YCombinator’s Startup School playlist offers actionable insights for
            web3 entrepreneurs, blending startup wisdom with practical
            strategies for success.
          </p>
        </div>
      </div>
    </main>
  );
}
