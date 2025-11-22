import TeamMemberForm from '@/components/admin/team-member-form';
import { createClient } from '@/lib/supabase/server';

export default async function EditTeamMemberPage({ params }) {
  const supabase = await createClient();
  const { data: member } = await supabase
    .from('team_members')
    .select('*')
    .eq('id', params.id)
    .single();

  return <TeamMemberForm member={member} />;
}
