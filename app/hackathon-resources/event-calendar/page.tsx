import GoBack from "@/components/go-back";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-4">
      <GoBack href="/hackathon-resources" />
      <h1 className="text-2xl font-bold">Event Calendar</h1>
    </main>
  );
}