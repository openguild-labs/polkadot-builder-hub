import GoBack from "@/components/go-back";

export default function Page() {
  return (
    <main className="flex flex-col gap-4 p-4">
      <GoBack href="/hackathon-resources" />
      <h1 className="text-2xl font-bold">Learn before build</h1>
    </main>
  );
}