import { createClient } from "@/lib/supabase/server";
import { PartnersPreview } from "@/components/landing/partners-preview";
import { User } from 'lucide-react';
import Image from "next/image";
import { Footer } from "@/components/footer";

export const revalidate = 3600;

export default async function PeoplePage() {
  const supabase = await createClient();
  
  const { data: teamMembers } = await supabase
    .from("team_members")
    .select("*")
    .eq("is_published", true)
    .order("order_index");

  const placeholders = Array(9).fill(null).map((_, i) => ({
    id: `placeholder-${i}`,
    name: "",
    role: "",
    image_url: null
  }));

  const displayMembers = teamMembers && teamMembers.length > 0 ? teamMembers : placeholders;

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image 
          src="/team-collage.jpg" 
          alt="Team Collage" 
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center max-w-4xl">
            Meet the Brains behind our Organisation
          </h1>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayMembers.map((member) => (
            <div key={member.id} className="flex flex-col">
              {/* Image Placeholder Area */}
              <div className="bg-[#E5E5E5] aspect-square w-full flex items-center justify-center relative">
                {member.image_url ? (
                  <Image 
                    src={member.image_url || "/placeholder.svg"} 
                    alt={member.name} 
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
                    Name: <span className="font-normal">{member.name}</span>
                  </p>
                  <p className="text-lg font-bold text-black">
                    Position: <span className="font-normal">{member.role}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-[#FDF2F2] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-black">Be a Volunteer</h2>
          <p className="text-lg text-gray-800">
            Join our workforce to make help empower our economic infrastructure
          </p>
          <button className="bg-[#D9D9D9] text-black font-bold py-3 px-8 rounded hover:bg-gray-300 transition-colors">
            Join us Today
          </button>
        </div>
      </section>

      <PartnersPreview />
      <Footer />
    </div>
  );
}
