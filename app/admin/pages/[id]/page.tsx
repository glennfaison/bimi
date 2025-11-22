import { createClient } from "@/lib/supabase/server";
import { PageSectionForm } from "@/components/admin/page-section-form";
import { notFound } from 'next/navigation';

export default async function EditPageSection({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  
  const { data: section } = await supabase
    .from("page_sections")
    .select("*")
    .eq("id", id)
    .single();

  if (!section) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Edit Page Section</h1>
      <PageSectionForm initialData={section} isEditing={true} />
    </div>
  );
}
