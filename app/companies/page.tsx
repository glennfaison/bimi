import { createClient } from "@/lib/supabase/server";
import { PartnersPreview } from "@/components/landing/partners-preview";
import Image from "next/image";

export const revalidate = 3600;

export default async function CompaniesPage() {
  const supabase = await createClient();
  
  const { data: companies } = await supabase
    .from("cards")
    .select("*")
    .eq("category", "company")
    .eq("is_published", true)
    .order("order_index");

  const placeholders = Array(9).fill(null).map((_, i) => ({
    id: `placeholder-${i}`,
    title: "",
    description: "",
    image_url: null
  }));

  const displayCompanies = companies && companies.length > 0 ? companies : placeholders;

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image 
          src="/team-collage.jpg" 
          alt="Companies Collage" 
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center max-w-4xl">
            The Companies we have successfully impacted
          </h1>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayCompanies.map((company) => (
            <div key={company.id} className="flex flex-col">
              {/* Image Placeholder Area */}
              <div className="bg-[#E5E5E5] aspect-square w-full flex items-center justify-center relative">
                {company.image_url ? (
                  <Image 
                    src={company.image_url || "/placeholder.svg"} 
                    alt={company.title} 
                    fill 
                    className="object-cover"
                  />
                ) : (
                  <div className="text-white">
                    <svg width="120" height="200" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="40" r="30" stroke="white" strokeWidth="2"/>
                      <line x1="50" y1="70" x2="50" y2="150" stroke="white" strokeWidth="2"/>
                      <line x1="50" y1="150" x2="20" y2="190" stroke="white" strokeWidth="2"/>
                      <line x1="50" y1="150" x2="80" y2="190" stroke="white" strokeWidth="2"/>
                      <line x1="20" y1="100" x2="80" y2="100" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Info Area */}
              <div className="bg-[#E5E5E5] p-6 mt-2">
                <div className="space-y-2">
                  <p className="text-lg font-bold text-black">
                    Name: <span className="font-normal">{company.title}</span>
                  </p>
                  <p className="text-lg font-bold text-black">
                    Position: <span className="font-normal">{company.description}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-[#FDF2F2] py-20 px-6 relative overflow-hidden">
        {/* Video background placeholder - can be replaced with actual video */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
           {/* <video autoPlay muted loop className="w-full h-full object-cover">
             <source src="/path-to-video.mp4" type="video/mp4" />
           </video> */}
        </div>
        
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Your Support will Drive Economic Development and reduce Poverty
          </h2>
          <p className="text-lg text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Without your Support we can't help more business to grow and scale . Your partnership, sponsorship and investment will contribute greatly to our mission of creating a more just, equitable, and prosperity through infrastructure and economic development
          </p>
          <button className="bg-[#D9D9D9] text-black font-bold py-3 px-12 rounded hover:bg-gray-300 transition-colors text-lg">
            Join us Today
          </button>
        </div>
      </section>

      <PartnersPreview />
    </div>
  );
}
