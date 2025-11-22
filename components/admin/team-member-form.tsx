"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { ImageUpload } from "./image-upload";
import { createClient } from "@/lib/supabase/client";

export default function TeamMemberForm({ member }: { member?: any }) {
  const router = useRouter();
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: member?.name || "",
    role: member?.role || "",
    image_url: member?.image_url || "",
    order_index: member?.order_index || 0,
    is_published: member?.is_published ?? true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (member) {
        const { error } = await supabase
          .from("team_members")
          .update(formData)
          .eq("id", member.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("team_members")
          .insert([formData]);
        if (error) throw error;
      }
      router.push("/admin/team-members");
      router.refresh();
    } catch (error) {
      alert("Failed to save team member");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
      <Card className="bg-white border-gray-200">
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-700">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Team member name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role" className="text-gray-700">Role</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={e => setFormData({ ...formData, role: e.target.value })}
              required
              placeholder="Role"
            />
          </div>
          <ImageUpload
            currentImageUrl={formData.image_url}
            onImageUploaded={url => setFormData({ ...formData, image_url: url })}
            folder="team-members"
          />
          <div className="space-y-2">
            <Label htmlFor="order_index" className="text-gray-700">Order</Label>
            <Input
              id="order_index"
              type="number"
              value={formData.order_index}
              onChange={e => setFormData({ ...formData, order_index: parseInt(e.target.value) })}
              placeholder="0"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={formData.is_published}
              onCheckedChange={checked => setFormData({ ...formData, is_published: checked })}
            />
            <Label htmlFor="published" className="cursor-pointer text-gray-700">
              Published
            </Label>
          </div>
          <div className="flex gap-4">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : member ? "Update Team Member" : "Create Team Member"}
            </Button>
            <Button type="button" variant="outline" onClick={() => router.push("/admin/team-members")}>Cancel</Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
