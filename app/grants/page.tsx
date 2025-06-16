import GrantCard from "@/components/grant-card";
import GoBack from "@/components/go-back";
import { grants } from "@/components/mocks/grants";

export default function Grants() {
  return (
    <div className="flex flex-col gap-4 p-4 mt-16">
      <GoBack />
      <h1 className="text-2xl font-bold">Grants</h1>
      <p className="text-sm text-muted-foreground">
        Polkadot Builders Grants are a way to support the Polkadot ecosystem.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {grants.map((grant) => (
          <GrantCard key={grant.id} grant={grant} />
        ))}
      </div>
    </div>
  );
}
