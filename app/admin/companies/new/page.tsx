import { CardForm } from "@/components/admin/card-form";

export default function NewCard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Add Company/Partner</h1>
      <CardForm />
    </div>
  );
}
