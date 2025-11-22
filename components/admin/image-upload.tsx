"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X, Loader2 } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  currentImageUrl?: string;
  onImageUploaded: (url: string) => void;
  folder?: string;
}

export function ImageUpload({ currentImageUrl, onImageUploaded, folder = "general" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(currentImageUrl || "");
  const supabase = createClient();

  const uploadImage = async (file: File) => {
    try {
      setUploading(true);
      
      const fileExt = file.name.split('.').pop();
      const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      
      const { data, error } = await supabase.storage
        .from('public-images')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from('public-images')
        .getPublicUrl(data.path);

      setPreviewUrl(publicUrl);
      onImageUploaded(publicUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image must be less than 5MB');
      return;
    }

    uploadImage(file);
  };

  const clearImage = () => {
    setPreviewUrl("");
    onImageUploaded("");
  };

  return (
    <div className="space-y-4">
      <Label>Image</Label>
      
      {previewUrl && (
        <div className="relative w-full max-w-sm">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
            <Image
              src={previewUrl}
              alt="Preview"
              fill
              className="object-cover"
            />
          </div>
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute -right-2 -top-2"
            onClick={clearImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
          className="flex-1"
        />
        {uploading && <Loader2 className="h-4 w-4 animate-spin" />}
      </div>
      
      <p className="text-sm text-muted-foreground">
        Supported formats: JPG, PNG, GIF, WebP (max 5MB)
      </p>
    </div>
  );
}
