import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import { Users, Building2, FileText, Eye } from 'lucide-react';

export const revalidate = 0;

export default async function AdminDashboard() {
  const supabase = await createClient();

  // Fetch counts for dashboard stats
  const { count: teamCount } = await supabase
    .from("team_members")
    .select("*", { count: "exact", head: true });

  const { count: companiesCount } = await supabase
    .from("cards")
    .select("*", { count: "exact", head: true })
    .eq("category", "company");

  const { count: partnersCount } = await supabase
    .from("cards")
    .select("*", { count: "exact", head: true })
    .in("category", ["partner", "sponsor"]);

  const { count: pagesCount } = await supabase
    .from("page_sections")
    .select("*", { count: "exact", head: true });

  const stats = [
    {
      title: "Team Members",
      value: teamCount || 0,
      icon: Users,
      description: "Active team profiles",
    },
    {
      title: "Companies",
      value: companiesCount || 0,
      icon: Building2,
      description: "Impacted companies listed",
    },
    {
      title: "Partners",
      value: partnersCount || 0,
      icon: Building2,
      description: "Partners & sponsors",
    },
    {
      title: "Page Sections",
      value: pagesCount || 0,
      icon: FileText,
      description: "Editable content sections",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the BIMI content management system.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              No recent activity to display.
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <a href="/" target="_blank" className="hover:underline">View Live Site</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
