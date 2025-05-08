import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
      <Image src="/polkadot.svg" alt="Polkadot Builders" width={100} height={100} />
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">Polkadot Builders</h3>
        <p className="text-sm text-muted-foreground">
          Polkadot Builders is a community of builders who are building on Polkadot.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">Polkadot Builders</h3>
        <p className="text-sm text-muted-foreground">
          Polkadot Builders is a community of builders who are building on Polkadot.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold">Social links</h3>
        <div className="flex flex-col gap-2">
          <Link href="https://twitter.com/polkadotbuilders">Twitter</Link>
          <Link href="https://x.com/polkadotbuilders">X</Link>
          <Link href="https://t.me/polkadotbuilders">Telegram</Link>
        </div>
      </div>
    </footer>
  );
}