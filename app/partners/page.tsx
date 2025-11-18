import Image from "next/image";
import { createClient } from "@/lib/supabase/server";

export const revalidate = 3600;

export default async function PartnersPage() {
  const supabase = await createClient();
  
  // We'll still fetch from DB to support dynamic additions, but we'll also hardcode the main ones for the design match
  const { data: partners } = await supabase
    .from("cards")
    .select("*")
    .in("category", ["partner", "sponsor"])
    .eq("is_published", true)
    .order("order_index");

  return (
    <div className="min-h-screen bg-background">
      {/* Custom Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src="/partners-handshake.jpg"
          alt="Partnership handshake"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl text-center px-4">
            Our Partners and Sponsors
          </h1>
        </div>
      </div>
      
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <p className="text-lg leading-relaxed text-gray-700">
            Bimi CF is built on the pillars of human capital development, innovation, and economic empowerment driven by the vision of a more just world where everyone finds dignity in their work. We champion job creation through entrepreneurship and ensure access to knowledge and skills through impactful training programs. Our strength lies in connecting entrepreneurs to the resources they need from financing opportunities to access to global markets while nurturing startup ecosystems that inspire and sustain new ventures across Cameroon and Africa.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            This journey has been made possible through the unwavering support of our partners and sponsors around the world, whose collaboration continues to bring our vision to life.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {/* Hardcoded logos to match design */}
          <div className="h-20 w-48 relative grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/facebook-logo.png" alt="Facebook" fill className="object-contain" />
          </div>
          <div className="h-20 w-48 relative grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/coca-cola-logo.png" alt="Coca Cola" fill className="object-contain" />
          </div>
          <div className="h-20 w-48 relative grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/disney-inspired-logo.png" alt="Disney" fill className="object-contain" />
          </div>
          <div className="h-20 w-48 relative grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/walmart-logo.png" alt="Walmart" fill className="object-contain" />
          </div>

          {/* Dynamic partners from DB if any */}
          {partners?.map((partner) => (
             partner.image_url && (
              <div key={partner.id} className="h-20 w-48 relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image src={partner.image_url || "/placeholder.svg"} alt={partner.title} fill className="object-contain" />
              </div>
             )
          ))}
        </div>
      </div>
    </div>
  );
}
