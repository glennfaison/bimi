import { PillarForm } from "@/components/admin/pillar-form";

export default function NewPillar() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Add Pillar of Inspiration</h1>
      <PillarForm />
    </div>
  );
}
