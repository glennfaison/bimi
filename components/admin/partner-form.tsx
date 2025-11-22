"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { ImageUpload } from "./image-upload";
import { createClient } from "@/lib/supabase/client";

export default function PartnerForm({ partner }: { partner?: any }) {
  const router = useRouter();
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: partner?.name || "",
    bio: partner?.bio || "",
    image_url: partner?.image_url || "",
    order_index: partner?.order_index || 0,
    is_published: partner?.is_published ?? true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (partner) {
        const { error } = await supabase
          .from("partners")
          .update(formData)
          .eq("id", partner.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("partners")
          .insert([formData]);
        if (error) throw error;
      }
      router.push("/admin/partners");
      router.refresh();
    } catch (error) {
      alert("Failed to save partner");
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
              placeholder="Partner name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio" className="text-gray-700">Bio</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={e => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Partner bio"
            />
          </div>
          <ImageUpload
            currentImageUrl={formData.image_url}
            onImageUploaded={url => setFormData({ ...formData, image_url: url })}
            folder="partners"
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
              {isLoading ? "Saving..." : partner ? "Update Partner" : "Create Partner"}
            </Button>
            <Button type="button" variant="outline" onClick={() => router.push("/admin/partners")}>Cancel</Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
