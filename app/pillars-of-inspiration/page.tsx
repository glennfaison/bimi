import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import { PartnersPreview } from "@/components/landing/partners-preview";
import { Footer } from "@/components/footer";

export const revalidate = 3600;

export default async function PillarsPage() {
  const supabase = await createClient();
  
  const { data: pillars } = await supabase
    .from("pillars")
    .select("*")
    .eq("is_published", true)
    .order("order_index");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40">
           {/* In a real app, this would be a collage image */}
           <Image 
             src="/placeholder.svg?height=800&width=1600&text=Pillars+Collage" 
             alt="Background Collage" 
             fill 
             className="object-cover"
           />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Our Pillars of Inspiration
          </h1>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars && pillars.length > 0 ? (
            pillars.map((pillar) => (
            <div key={pillar.id} className="flex flex-col">
              <div className="relative aspect-square w-full overflow-hidden bg-muted">
                <Image
                  src={pillar.image_url || "/placeholder.svg"}
                  alt={pillar.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="bg-[#14b8a6] p-4 text-white">
                <p className="text-lg font-bold">Name: {pillar.name}</p>
                <p className="text-base">Country: {pillar.country}</p>
              </div>
            </div>
          ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No pillars of inspiration yet.
            </div>
          )}
        </div>
      </div>

      {/* Partners Section */}
      <PartnersPreview />
      <Footer />
    </div>
  );
}
