import { createClient } from "@/lib/supabase/server";
import { PillarForm } from "@/components/admin/pillar-form";
import { notFound } from 'next/navigation';

export default async function EditPillar({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  
  const { data: pillar } = await supabase
    .from("pillars")
    .select("*")
    .eq("id", id)
    .single();

  if (!pillar) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Edit Pillar</h1>
      <PillarForm initialData={pillar} isEditing={true} />
    </div>
  );
}
