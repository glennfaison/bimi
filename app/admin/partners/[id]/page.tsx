import PartnerForm from '@/components/admin/partner-form';
import { createClient } from '@/lib/supabase/server';

export default async function EditPartnerPage({ params }) {
  const supabase = await createClient();
  const { data: partner } = await supabase
    .from('partners')
    .select('*')
    .eq('id', params.id)
    .single();

  return <PartnerForm partner={partner} />;
}
