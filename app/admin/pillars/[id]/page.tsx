import { PillarForm } from '@/components/admin/pillar-form';
import { createClient } from '@/lib/supabase/server';

interface Params { id: string }

export default async function EditPillarPage({ params }: { params: Params }) {
  const supabase = await createClient();
  const { data: pillar } = await supabase
    .from('pillars')
    .select('*')
    .eq('id', params.id)
    .single();

  return <PillarForm initialData={pillar} isEditing />;
}
