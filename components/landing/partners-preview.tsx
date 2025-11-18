import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

// This would typically come from the database, but for the preview we'll use placeholders
// In the real implementation, we'll pass data as props
export function PartnersPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Partners and Sponsors
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="h-16 w-40 relative">
            <Image src="/facebook-logo.png" alt="Facebook" fill className="object-contain" />
          </div>
          <div className="h-16 w-40 relative">
            <Image src="/coca-cola-logo.png" alt="Coca Cola" fill className="object-contain" />
          </div>
          <div className="h-16 w-40 relative">
            <Image src="/disney-inspired-logo.png" alt="Disney" fill className="object-contain" />
          </div>
          <div className="h-16 w-40 relative">
            <Image src="/walmart-logo.png" alt="Walmart" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
