import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t-2 border-muted mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <Image
          src="/polkadot.svg"
          alt="Polkadot Builders"
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Polkadot Builders</h3>
          <p className="text-sm text-muted-foreground">
            Polkadot Builders is a community of builders who are building on
            Polkadot.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Polkadot Resources</h3>
          <div className="flex flex-col gap-2">
            <a className="w-fit underline underline-offset-4 text-blue-500" target="_blank" href="https://docs.polkadot.com/">Documentation</a>
            <a className="w-fit underline underline-offset-4 text-blue-500" target="_blank" href="https://wiki.polkadot.network/">Polkadot Wiki</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Social links</h3>
          <div className="flex flex-col gap-2">
            <a className="w-fit underline underline-offset-4 text-blue-500" target="_blank" href="https://x.com/openguildwtf">X</a>
            <a className="w-fit underline underline-offset-4 text-blue-500" target="_blank" href="https://discord.com/invite/YxwPSUer5Z">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
