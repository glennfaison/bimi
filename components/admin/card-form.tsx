"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ImageUpload } from "./image-upload";
import type { Card as CardType } from "@/lib/types";

interface CardFormProps {
  initialData?: CardType;
  isEditing?: boolean;
}

export function CardForm({ initialData, isEditing = false }: CardFormProps) {
  const router = useRouter();
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    image_url: initialData?.image_url || "",
    link_url: initialData?.link_url || "",
    category: initialData?.category || "partner",
    order_index: initialData?.order_index || 0,
    is_published: initialData?.is_published ?? true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isEditing) {
        const { error } = await supabase
          .from("cards")
          .update(formData)
          .eq("id", initialData!.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("cards")
          .insert([formData]);
        if (error) throw error;
      }
      
      router.push("/admin/companies");
      router.refresh();
    } catch (error) {
      console.error("Error saving card:", error);
      alert("Error saving. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Name *</Label>
            <Input
              id="title"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Company/Partner name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="company">Company</SelectItem>
                <SelectItem value="partner">Partner</SelectItem>
                <SelectItem value="sponsor">Sponsor</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief description..."
            />
          </div>

          <ImageUpload
            currentImageUrl={formData.image_url}
            onImageUploaded={(url) => setFormData({ ...formData, image_url: url })}
            folder={formData.category}
          />

          <div className="space-y-2">
            <Label htmlFor="link_url">Website URL</Label>
            <Input
              id="link_url"
              type="url"
              value={formData.link_url}
              onChange={(e) => setFormData({ ...formData, link_url: e.target.value })}
              placeholder="https://..."
            />
          </div>

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
              onClick={() => router.push("/admin/companies")}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
