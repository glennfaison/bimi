import { PartnersPreview } from "@/components/landing/partners-preview";
import Image from "next/image";

export default function StructuredTrainingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Custom Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/structured-training-hero.jpg"
            alt="Structured Training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <p className="text-xl md:text-2xl text-white max-w-4xl leading-relaxed">
            Structured learning is a path way to equip and effectively equip young entrepreneurs 
            with the right mind set, entrepreneurial, and innovative skills to a sustainable and 
            scalable venture
          </p>
        </div>
      </div>

      {/* The Problem */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0a0a0a]">The Problem</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose max-w-none text-gray-700">
              <p>
                Entrepreneurship cannot thrive without access to both financial and human capital. 
                Across Africa, many promising ideas stall because entrepreneurs lack funding to grow. 
                Traditional financing often demands collateral that young people and women do not have, 
                while venture capital and microfinance remain limited in reach.
              </p>
              <p className="mt-4">
                To unlock Africa's potential, we must reimagine finance for development, expanding 
                affordable credit, promoting impact investment, and supporting blended finance that 
                shares risk across sectors. Equally, we must invest in human capital, through education, 
                mentorship, and digital skills, to turn creativity into enterprise.
              </p>
              <p className="mt-4">
                When financial inclusion meets skill development, we don't just fund businesses; 
                we build capacity, confidence, and competitiveness, the true foundations of Africa's 
                entrepreneurial renaissance.
              </p>
            </div>
            <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/team-collaboration-puzzle.jpg"
                alt="Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#0a0a0a]">The Solution</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Entrepreneurship cannot thrive without access to both financial and human capital. 
              Across Africa, many promising ideas stall because entrepreneurs lack funding to grow. 
              Traditional financing often demands collateral that young people and women do not have, 
              while venture capital and microfinance remain limited in reach.
            </p>
            <p className="mt-4">
              To unlock Africa's potential, we must reimagine finance for development, expanding 
              affordable credit, promoting impact investment, and supporting blended finance that 
              shares risk across sectors. Equally, we must invest in human capital, through education, 
              mentorship, and digital skills, to turn creativity into enterprise.
            </p>
            <p className="mt-4">
              When financial inclusion meets skill development, we don't just fund businesses; 
              we build capacity, confidence, and competitiveness, the true foundations of Africa's 
              entrepreneurial renaissance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#0a0a0a]">Our Approach</h2>
          
          <div className="space-y-24">
            {/* Item 1: New Business Venture */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-200 h-[300px] flex flex-col items-center justify-center p-8 text-center rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-[#0a0a0a]">New Business Venture</h3>
                <p className="text-gray-500 font-medium">Add a photo</p>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>
                  A strong entrepreneurial ecosystem is vital for Cameroon's inclusive growth and 
                  sustainable development. While entrepreneurship is rising, the ecosystem remains 
                  fragmented, hindered by limited financing, weak infrastructure, and complex regulations.
                </p>
                <p className="mt-4">
                  To overcome these challenges, Cameroon needs a coordinated and collaborative approach 
                  involving government, academia, the private sector, and development partners.
                </p>
              </div>
            </div>

            {/* Item 2: Innovation Management */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="prose max-w-none text-gray-700 order-2 md:order-1">
                <p>
                  We work with entrepreneurs to identify potential markets they can ..........
                </p>
              </div>
              <div className="bg-gray-200 h-[300px] flex flex-col items-center justify-center p-8 text-center rounded-lg order-1 md:order-2">
                <h3 className="text-xl font-bold mb-2 text-[#0a0a0a]">Innovation Management</h3>
              </div>
            </div>

            {/* Item 3: Digital Innovation */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-200 h-[300px] flex flex-col items-center justify-center p-8 text-center rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-[#0a0a0a]">Digital Innovation</h3>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p>
                  We work with entrepreneurs to identify potential markets they can ..........
                </p>
              </div>
            </div>

            {/* Item 4: Global Strategy Implementation */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="prose max-w-none text-gray-700 order-2 md:order-1">
                <p>
                  We work with entrepreneurs to identify potential markets they can ..........
                </p>
              </div>
              <div className="bg-gray-200 h-[300px] flex flex-col items-center justify-center p-8 text-center rounded-lg order-1 md:order-2">
                <h3 className="text-xl font-bold mb-2 text-[#0a0a0a]">Global Strategy Implementation</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it can't be neglected */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#0a0a0a]">Why it can't be neglected</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Entrepreneurship cannot thrive without access to both financial and human capital. 
              Across Africa, many promising ideas stall because entrepreneurs lack funding to grow. 
              Traditional financing often demands collateral that young people and women do not have, 
              while venture capital and microfinance remain limited in reach.
            </p>
            <p className="mt-4">
              To unlock Africa's potential, we must reimagine finance for development, expanding 
              affordable credit, promoting impact investment, and supporting blended finance that 
              shares risk across sectors. Equally, we must invest in human capital, through education, 
              mentorship, and digital skills, to turn creativity into enterprise.
            </p>
            <p className="mt-4">
              When financial inclusion meets skill development, we don't just fund businesses; 
              we build capacity, confidence, and competitiveness, the true foundations of Africa's 
              entrepreneurial renaissance.
            </p>
          </div>
        </div>
      </section>

      <PartnersPreview />
    </main>
  );
}
