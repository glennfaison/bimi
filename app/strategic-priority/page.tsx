import { Footer } from "@/components/footer";
import { PartnersPreview } from "@/components/landing/partners-preview";
import Image from "next/image";

export default function StrategicPriorityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/business-strategy-meeting.jpg"
          alt="Strategic Priority Hero"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our Strategic Priority for the next 5 years
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Bimi's five-year strategic priority is to establish Africa's most effective venture pipeline, forecasted to empower over 350 trained startups to successfully secure crucial funding, propel between 200 and 400 founders into lucrative cross-border trade via AfCfta market access, and catalyze the development of new innovation hubs and accelerator platforms that will redefine the continent's collaborative entrepreneurial ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Two Column Text Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="text-base leading-7 text-muted-foreground">
            <p>
              Africa is defined by its unparalleled demographic dividend: it boasts the youngest population globally, with over 60% of its people under the age of 25. This burgeoning youth bulge represents a vast, untapped economic engine poised to transform the continent. This potential is already manifesting in a vibrant startup ecosystem, which, despite global economic headwinds, has seen African tech ventures attract billions in capital. This growth is driven by the necessity and ambition of young Africans who, faced with a soaring youth unemployment rate—averaging over 20% across the continent and exceeding 60% in certain economies—are choosing to become job creators rather than job seekers.
            </p>
          </div>
          <div className="text-base leading-7 text-muted-foreground">
            <p>
              The road from innovative idea to scalable enterprise, however, is a rigorous crucible fraught with systemic obstacles. The single most persistent challenge is the critical funding gap, particularly at the early stages. While large-scale capital has increased, the investment remains heavily concentrated in a few key hubs (Nigeria, Kenya, South Africa, Egypt). Most early-stage founders struggle with a severe scarcity of Seed Funding, where the optimum capital range of $20,000–$100,000 USD is often the hardest to secure. Traditional financial institutions are risk-averse, imposing strict collateral requirements and high-interest rates that are simply unattainable for nascent ventures, forcing many to rely on personal savings or friends and family.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Sections */}
      <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24 space-y-24">
        {/* Section 1: Access to Global Market */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-xl">
            <Image
              src="/global-market-access-map.jpg"
              alt="Access to Global Market"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Access to Global Market
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Local markets form the backbone of Africa's entrepreneurial ecosystem, enabling entrepreneurs to strengthen communities and build resilient economies. However, many face barriers such as weak distribution systems, limited digital access, and competition from imports. Strengthening local value chains, improving infrastructure, and promoting "Buy African, Build African" initiatives can keep wealth circulating within communities.
              </p>
              <p>
                At the same time, access to global markets offers even greater potential. With digital technology and frameworks like the AfCFTA, African entrepreneurs can reach international consumers. To compete effectively, they need trade finance, export knowledge, and supportive policies that simplify cross-border trade. Investing in these areas will transform Africa into a global hub of creativity, production, and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Access to Capital */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Access to Capital
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Entrepreneurship cannot thrive without access to both financial and human capital. Across Africa, many promising ideas stall because entrepreneurs lack funding to grow. Traditional financing often demands collateral that young people and women do not have, while venture capital and microfinance remain limited in reach.
              </p>
              <p>
                To unlock Africa's potential, we must reimagine finance for development, expanding affordable credit, promoting impact investment, and supporting blended finance that shares risk across sectors. Equally, we must invest in human capital, through education, mentorship, and digital skills, to turn creativity into enterprise. When financial inclusion meets skill development, we don't just fund businesses; we build capacity, confidence, and competitiveness, the true foundations of Africa's entrepreneurial renaissance.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-xl order-1 lg:order-2">
            <Image
              src="/access-to-capital-diagram.jpg"
              alt="Access to Capital Diagram"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Section 3: Startup Ecosystem Development */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-xl">
            <Image
              src="/startup-ecosystem-graphic.jpg"
              alt="Startup Ecosystem Development"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Startup Ecosystem Development
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A strong entrepreneurial ecosystem is vital for Cameroon's inclusive growth and sustainable development. While entrepreneurship is rising, the ecosystem remains fragmented, hindered by limited financing, weak infrastructure, and complex regulations. To overcome these challenges, Cameroon needs a coordinated and collaborative approach involving government, academia, the private sector, and development partners.
              </p>
              <p>
                Key actions include simplifying business regulations, expanding digital infrastructure, promoting public–private partnerships for innovation hubs, and mobilizing local and diaspora investment. An inclusive, well-coordinated ecosystem will enable entrepreneurs across all regions to scale their ideas, create jobs, and position Cameroon as a leading hub for innovation in Africa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PartnersPreview />

      <Footer />
    </div>
  );
}
