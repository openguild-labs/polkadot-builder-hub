import Link from "next/link";
import GoBack from "@/components/go-back";
import { Button } from "@/components/ui/button";

export default function IdeaSubmitted() {
  return (
    <main className="flex flex-col gap-8 p-4 max-w-3xl mx-auto">
      <GoBack href="/" />
      <h1 className="text-2xl font-bold text-center">Idea submitted</h1>
      <p className="text-center">Thank you for your submission. We will review your idea and get back to you soon.</p>
      <Button asChild className="w-fit self-center">
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  );
}
