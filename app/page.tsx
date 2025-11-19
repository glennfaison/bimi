import { createClient } from "@/lib/supabase/server";
import { Hero } from "@/components/landing/hero";
import { ProjectsPreview } from "@/components/landing/projects-preview";
import { AboutSection } from "@/components/landing/about-section";
import { FocusAreas } from "@/components/landing/focus-areas";
import { PartnersPreview } from "@/components/landing/partners-preview";
import { Footer } from "@/components/footer";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const supabase = await createClient();

  // Fetch hero content
  const { data: heroSection } = await supabase
    .from("page_sections")
    .select("*")
    .eq("page_slug", "landing")
    .eq("section_key", "hero")
    .single();

  return (
    <div className="flex flex-col min-h-screen">
      <Hero 
        title={heroSection?.title || "Empowering Africa's next generation of entrepreneurs with the skills, capital, and market access needed to build thriving businesses and transform the continent's economic future."} 
        content=""
        imageUrl={heroSection?.image_url}
      />
      
      <ProjectsPreview />
      
      <AboutSection />
      
      <FocusAreas />

      <PartnersPreview />

      <Footer />
    </div>
  );
}
