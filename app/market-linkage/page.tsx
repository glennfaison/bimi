import { Footer } from "@/components/footer";
import Image from "next/image";

export default function MarketLinkagePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/market-linkage-network.jpg"
          alt="Market Linkage Network"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
              Our Strategic Priority for the next 5 years
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl">
              Within the next 5 years we aim bridge capital and market access for over 5000 youths entrepreneurs and building a startup ecosystem
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 space-y-24">
        {/* The Problem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Problem</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Entrepreneurship cannot thrive without access to both financial and human capital. Across Africa, many promising ideas stall because entrepreneurs lack funding to grow. Traditional financing often demands collateral that young people and women do not have, while venture capital and microfinance remain limited in reach.
              </p>
              <p>
                To unlock Africa's potential, we must reimagine finance for development, expanding affordable credit, promoting impact investment, and supporting blended finance that shares risk across sectors. Equally, we must invest in human capital, through education, mentorship, and digital skills, to turn creativity into enterprise.
              </p>
              <p>
                When financial inclusion meets skill development, we don't just fund businesses; we build capacity, confidence, and competitiveness, the true foundations of Africa's entrepreneurial renaissance.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/market-linkage-network.jpg"
              alt="Market Linkage Problem"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* The Solution */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Solution</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Entrepreneurship cannot thrive without access to both financial and human capital. Across Africa, many promising ideas stall because entrepreneurs lack funding to grow. Traditional financing often demands collateral that young people and women do not have, while venture capital and microfinance remain limited in reach.
            </p>
            <p>
              To unlock Africa's potential, we must reimagine finance for development, expanding affordable credit, promoting impact investment, and supporting blended finance that shares risk across sectors. Equally, we must invest in human capital, through education, mentorship, and digital skills, to turn creativity into enterprise.
            </p>
            <p>
              When financial inclusion meets skill development, we don't just fund businesses; we build capacity, confidence, and competitiveness, the true foundations of Africa's entrepreneurial renaissance.
            </p>
          </div>
        </div>

        {/* Our Approach */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-12 text-center">Our Approach</h2>
          <div className="space-y-16">
            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-200 h-[300px] flex flex-col items-center justify-center text-center p-6 rounded-lg">
                <span className="font-bold text-xl mb-2">Partnership and collaborations</span>
                <span className="font-bold text-xl">Add a photo</span>
              </div>
              <div className="text-gray-700">
                <p>
                  A strong entrepreneurial ecosystem is vital for Cameroon's inclusive growth and sustainable development. While entrepreneurship is rising, the ecosystem remains fragmented, hindered by limited financing, weak infrastructure, and complex regulations. To overcome these challenges, Cameroon needs a coordinated and collaborative approach involving government, academia, the private sector, and development partners. Key actions include simplifying business regulations, expanding digital infrastructure, promoting public–private partnerships for innovation hubs, and mobilizing local and diaspora investment. An inclusive, well-coordinated ecosystem will enable entrepreneurs across all regions to scale their ideas, create jobs, and position Cameroon as a leading hub for innovation in Africa.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-gray-700">
                <p>
                  We work with entrepreneurs to identify potential markets they can ...........
                </p>
              </div>
              <div className="bg-gray-200 h-[300px] flex flex-col items-center justify-center text-center p-6 rounded-lg">
                <span className="font-bold text-xl mb-2">Independent</span>
                <span className="font-bold text-xl mb-2">Market Entry</span>
                <span className="font-bold text-xl">Approach</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why this crucial */}
        <div className="max-w-4xl mx-auto text-center pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why this crucial</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Entrepreneurship cannot thrive without access to both financial and human capital. Across Africa, many promising ideas stall because entrepreneurs lack funding to grow. Traditional financing often demands collateral that young people and women do not have, while venture capital and microfinance remain limited in reach.
            </p>
            <p>
              To unlock Africa's potential, we must reimagine finance for development, expanding affordable credit, promoting impact investment, and supporting blended finance that shares risk across sectors. Equally, we must invest in human capital, through education, mentorship, and digital skills, to turn creativity into enterprise.
            </p>
            <p>
              When financial inclusion meets skill development, we don't just fund businesses; we build capacity, confidence, and competitiveness, the true foundations of Africa's entrepreneurial renaissance.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
