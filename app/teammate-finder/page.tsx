import GoBack from "@/components/go-back";

export default function Page() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <GoBack />
      <h1 className="text-2xl font-bold">Teammate Finder</h1>
    </main>
  );
}