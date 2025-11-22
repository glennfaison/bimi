"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@/lib/supabase/client";

export default function NewTeamMemberForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [orderIndex, setOrderIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.from("team_members").insert([
      {
        name,
        role,
        order_index: orderIndex,
        image_url: imageUrl,
        is_published: isPublished,
      },
    ]);
    setLoading(false);
    if (!error) {
      toast({ title: "Team member created" });
      router.push("/admin/team-members");
      router.refresh();
    } else {
      toast({ title: "Error", description: error.message || "Failed to create team member", variant: "destructive" });
    }
  }

  return (
    <form className="space-y-6 max-w-lg mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Add New Team Member</h2>
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <Input value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Role</label>
        <Input value={role} onChange={e => setRole(e.target.value)} required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Order Index</label>
        <Input type="number" value={orderIndex} onChange={e => setOrderIndex(Number(e.target.value))} required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Image URL</label>
        <Input value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="isPublished" checked={isPublished} onChange={e => setIsPublished(e.target.checked)} />
        <label htmlFor="isPublished" className="text-sm">Published</label>
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Create Member"}
      </Button>
    </form>
  );
}
