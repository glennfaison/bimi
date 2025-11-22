import CompanyForm from '@/components/admin/company-form';
import { createClient } from '@/lib/supabase/server';

interface Params { id: string }

export default async function EditCompanyPage({ params }: { params: Params }) {
  const supabase = await createClient();
  const { data: company } = await supabase
    .from('cards')
    .select('*')
    .eq('id', params.id)
    .single();

  return <CompanyForm company={company} />;
}
