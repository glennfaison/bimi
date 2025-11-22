import SponsorForm from '@/components/admin/sponsor-form';
import { createClient } from '@/lib/supabase/server';

export default async function EditSponsorPage({ params }) {
  const supabase = await createClient();
  const { data: sponsor } = await supabase
    .from('sponsors')
    .select('*')
    .eq('id', params.id)
    .single();

  return <SponsorForm sponsor={sponsor} />;
}
