import Image from "next/image";
import { PartnersPreview } from "@/components/landing/partners-preview";
import { Footer } from "@/components/footer";

const pillars = [
  {
    name: "Rebecca Enonchong",
    country: "Cameroon",
    image: "/placeholder.svg?height=400&width=400&text=Rebecca+Enonchong"
  },
  {
    name: "Magatte Wade",
    country: "Senegal",
    image: "/placeholder.svg?height=400&width=400&text=Magatte+Wade"
  },
  {
    name: "Tony Elumelu",
    country: "Nigeria",
    image: "/placeholder.svg?height=400&width=400&text=Tony+Elumelu"
  },
  {
    name: "Foster Awintiti Akugri",
    country: "Ghana",
    image: "/placeholder.svg?height=400&width=400&text=Foster+Awintiti"
  },
  {
    name: "Aliko Dangote",
    country: "Nigeria",
    image: "/placeholder.svg?height=400&width=400&text=Aliko+Dangote"
  },
  {
    name: "Mamadou Kwidjim",
    country: "Cameroon",
    image: "/placeholder.svg?height=400&width=400&text=Mamadou+Kwidjim"
  },
  {
    name: "Asma Mansour",
    country: "Tunisia",
    image: "/placeholder.svg?height=400&width=400&text=Asma+Mansour"
  },
  {
    name: "Iyinoluwa Aboyeji",
    country: "Nigeria",
    image: "/placeholder.svg?height=400&width=400&text=Iyinoluwa+Aboyeji"
  },
  {
    name: "Yasmin Belo-Osagie",
    country: "Nigeria",
    image: "/placeholder.svg?height=400&width=400&text=Yasmin+Belo-Osagie"
  }
];

export default function PillarsPage() {
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
          {pillars.map((pillar) => (
            <div key={pillar.name} className="flex flex-col">
              <div className="relative aspect-square w-full overflow-hidden bg-muted">
                <Image
                  src={pillar.image || "/placeholder.svg"}
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
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <PartnersPreview />
      <Footer />
    </div>
  );
}
