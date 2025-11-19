import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

// This would typically come from the database, but for the preview we'll use placeholders
// In the real implementation, we'll pass data as props
export function PartnersPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-secondary sm:text-4xl mb-16">
            Partners and Sponsors
          </h2>
          <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none">
            <div className="flex justify-center">
              <Image
                src="/muyang-group-logo.jpg"
                alt="Muyang Group"
                width={200}
                height={100}
                className="max-h-24 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/ntala-show-logo.jpg"
                alt="Ntala Show"
                width={200}
                height={100}
                className="max-h-24 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/yellow-lock-logo.jpg"
                alt="Partner Logo"
                width={200}
                height={100}
                className="max-h-24 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
