import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { impactstories } from "@/data/impactstory";

export const revalidate = 3600;

export default async function ClimatePage() {
  const publishedStories = impactstories.filter(i => i.is_published);

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Climate Action" 
        description="Our commitment to building climate resilience and sustainable development practices."
      />
      
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="prose prose-lg text-muted-foreground">
            <p>
              Climate change presents both a challenge and an opportunity for businesses. 
              At BIMI, we help organizations navigate the transition to a low-carbon economy 
              while building resilience against climate risks.
            </p>
            <h3>Our Approach</h3>
            <ul>
              <li>Climate Risk Assessment</li>
              <li>Sustainability Strategy Development</li>
              <li>Green Finance Access</li>
              <li>Carbon Footprint Reduction</li>
            </ul>
          </div>
          <div className="bg-muted rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
            <span className="text-muted-foreground">Climate Impact Visualization</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
