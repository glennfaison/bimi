import { createClient } from "@/lib/supabase/server";
import { CardForm } from "@/components/admin/card-form";
import { notFound } from 'next/navigation';

export default async function EditCard({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  
  const { data: card } = await supabase
    .from("cards")
    .select("*")
    .eq("id", id)
    .single();

  if (!card) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Edit {card.category}</h1>
      <CardForm initialData={card} isEditing={true} />
    </div>
  );
}
