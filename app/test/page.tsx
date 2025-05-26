import Link from "next/link";

export default function Test() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>Test</h1>
      <Link href="/">Home</Link>
      <Link href="/signin">Sign In</Link>
      <Link href="/teammate-finder">Teammate Finder</Link>
    </div>
  );
}