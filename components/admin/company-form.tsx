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

export default function CompanyForm({ company }: { company?: any }) {
  const router = useRouter();
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: company?.title || "",
    category: company?.category || "company",
    bio: company?.bio || "",
    image_url: company?.image_url || "",
    order_index: company?.order_index || 0,
    is_published: company?.is_published ?? true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (company) {
        const { error } = await supabase
          .from("cards")
          .update(formData)
          .eq("id", company.id);
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
      alert("Failed to save company");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
      <Card className="bg-white border-gray-200">
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-gray-700">Name</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              required
              placeholder="Company name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category" className="text-gray-700">Category</Label>
            <Input
              id="category"
              value={formData.category}
              onChange={e => setFormData({ ...formData, category: e.target.value })}
              required
              placeholder="company, partner, etc."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio" className="text-gray-700">Bio</Label>
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={e => setFormData({ ...formData, bio: e.target.value })}
              placeholder="Company bio"
            />
          </div>
          <ImageUpload
            currentImageUrl={formData.image_url}
            onImageUploaded={url => setFormData({ ...formData, image_url: url })}
            folder="companies"
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
              {isLoading ? "Saving..." : company ? "Update Company" : "Create Company"}
            </Button>
            <Button type="button" variant="outline" onClick={() => router.push("/admin/companies")}>Cancel</Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
