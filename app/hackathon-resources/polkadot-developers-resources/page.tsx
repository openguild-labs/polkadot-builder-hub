import GoBack from "@/components/go-back";
import { ExternalLink } from "lucide-react";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto">
      <GoBack href="/hackathon-resources" />
      <h1 className="text-2xl font-bold">Polkadot Developers Resources</h1>
      <div className="flex flex-col gap-2">
        <p>
          <span className="font-bold bg-[#FF2670] text-secondary py-1 px-1">This Developer Resources Page</span> is your ultimate companion to kickstart
          your journey and build groundbreaking applications in the Polkadot
          ecosystem!
        </p>
        <p>
          Here&apos;s why you&apos;ll love joining the adventure, OpenGuild team had a
          really productive comeback of <a target="_blank" href="https://youtube.com/playlist?list=PLnhzaKpksqOKHuWhW5Ws1XyzgZybOO31s&si=OYJj6SsrzNRk-s-I" className="text-blue-500 underline underline-offset-4 hover:text-blue-600">Community Call Series<ExternalLink className="inline ml-1 w-4 h-4" /></a> with Alberto from
          Papermoon - a DevRel force side by side with Polkadot to bring the
          best DevX for builders coming to the eco.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold">We went through some key questions:</p>
        <ul className="flex flex-col gap-2 list-disc list-outside pl-4">
          <li>What different things can developers build on Polkadot?</li>
          <li>
            What are some of the most common challenges you see Polkadot
            developers facing today
          </li>
          <li>
            What is PaperMoon doing to help developers overcome those
            challenges?
          </li>
          <li>
            What are the main differences when targeting a developer looking to
            build in Polkadot than any other Web3 developer?
          </li>
          <li>
            GUIDE developers to utilize hackathon survival guide resource to
            maximize their development experience on Polkadot?
          </li>
          <li>
            As a Polkadot developer, any advices on how builders can make a
            career / build valuable products to the ecosystem.
          </li>
        </ul>
      </div>
      <iframe
        width="100%"
        height="472"
        src="https://www.youtube.com/embed/wbDzWNZQDIE?si=zA3hm8tkQKlT4yvB"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold">Resources for developers:</p>
        <table className="w-full border border-gray-300 rounded-md">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="p-3 border-r border-gray-300 bg-gray-50">
                Polkadot Hackathon Survival Guide (for Hackathon Builders)
              </td>
              <td className="p-3 border-r border-gray-300 bg-gray-50">
                <a href="https://github.com/polkadot-developers/hackathon-guide/tree/master" className="text-blue-600 hover:underline">
                  https://github.com/polkadot-developers/hackathon-guide/tree/master
                </a>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-3 border-r border-gray-300 bg-white">
                Polkadot Developers General Resources
              </td>
              <td className="p-3">
                <a href="https://polkadot.com/developers/" className="text-blue-600 hover:underline">
                  https://polkadot.com/developers/
                </a>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="p-3 border-r border-gray-300 bg-gray-50">
                Polkadot Smart Contracts
              </td>
              <td className="p-3 border-r border-gray-300 bg-gray-50">
                <a href="https://docs.polkadot.com/develop/smart-contracts/" className="text-blue-600 hover:underline">
                  https://docs.polkadot.com/develop/smart-contracts/
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-3 border-r border-gray-300 bg-white">
                Polkadot SDK
              </td>
              <td className="p-3">
                <a href="https://docs.polkadot.com/tutorials/polkadot-sdk/" className="text-blue-600 hover:underline">
                  https://docs.polkadot.com/tutorials/polkadot-sdk/
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
