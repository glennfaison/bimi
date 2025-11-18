import Image from "next/image";

export function ProjectsPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Bimi's Successful Projects
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-80">
          <div className="h-12 w-32 relative">
            <Image src="/facebook-logo.png" alt="Facebook" fill className="object-contain" />
          </div>
          <div className="h-12 w-32 relative">
            <Image src="/coca-cola-logo.png" alt="Coca Cola" fill className="object-contain" />
          </div>
          <div className="h-12 w-32 relative">
            <Image src="/disney-inspired-logo.png" alt="Disney" fill className="object-contain" />
          </div>
          <div className="h-12 w-32 relative">
            <Image src="/walmart-logo.png" alt="Walmart" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
