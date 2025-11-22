"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { ImageUpload } from "./image-upload";
import type { Pillar } from "@/lib/types";

interface PillarFormProps {
  initialData?: Pillar;
  isEditing?: boolean;
}

export function PillarForm({ initialData, isEditing = false }: PillarFormProps) {
  const router = useRouter();
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    country: initialData?.country || "",
    bio: initialData?.bio || "",
    image_url: initialData?.image_url || "",
    order_index: initialData?.order_index || 0,
    is_published: initialData?.is_published ?? true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isEditing) {
        const { error } = await supabase
          .from("pillars")
          .update(formData)
          .eq("id", initialData!.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("pillars")
          .insert([formData]);
        if (error) throw error;
      }
      
      router.push("/admin/pillars");
      router.refresh();
    } catch (error) {
      console.error("Error saving pillar:", error);
      alert("Error saving pillar. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              placeholder="Country"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Biography</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Brief biography..."
              className="min-h-[150px]"
            />
          </div>

          <ImageUpload
            currentImageUrl={formData.image_url}
            onImageUploaded={(url) => setFormData({ ...formData, image_url: url })}
            folder="pillars"
          />

          <div className="space-y-2">
            <Label htmlFor="order">Display Order</Label>
            <Input
              id="order"
              type="number"
              value={formData.order_index}
              onChange={(e) => setFormData({ ...formData, order_index: parseInt(e.target.value) })}
              placeholder="0"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch
                id="published"
                checked={formData.is_published}
                onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
              />
              <Label htmlFor="published" className="cursor-pointer">
                Published
              </Label>
            </div>
          </div>

          <div className="flex gap-2">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : isEditing ? "Update" : "Create"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/admin/pillars")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
