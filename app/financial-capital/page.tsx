import Image from "next/image";

export default function FinancialCapitalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/key-on-dollars.jpg"
          alt="Key on dollar bills"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Our Strategic Priority for the next 5 years
          </h1>
          <p className="max-w-3xl text-lg md:text-xl">
            Within the next 5 years we aim bridge capital and market access for over 5000 youths entrepreneurs and building a startup ecosystem
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* The Problem Section */}
        <div className="mb-24">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">The Problem</h2>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="prose prose-lg text-gray-600">
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
            <div className="relative h-[300px] w-full">
              <Image
                src="/access-to-capital-diagram.jpg"
                alt="Access to Capital Diagram"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* The Solution Section */}
        <div className="mb-24">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">The Solution</h2>
          <div className="mx-auto max-w-4xl text-center text-lg leading-relaxed text-gray-600">
            <p className="mb-6">
              Entrepreneurship cannot thrive without access to both financial and human capital. Across Africa, many promising ideas stall because entrepreneurs lack funding to grow. Traditional financing often demands collateral that young people and women do not have, while venture capital and microfinance remain limited in reach.
            </p>
            <p className="mb-6">
              To unlock Africa's potential, we must reimagine finance for development, expanding affordable credit, promoting impact investment, and supporting blended finance that shares risk across sectors. Equally, we must invest in human capital, through education, mentorship, and digital skills, to turn creativity into enterprise.
            </p>
            <p>
              When financial inclusion meets skill development, we don't just fund businesses; we build capacity, confidence, and competitiveness, the true foundations of Africa's entrepreneurial renaissance.
            </p>
          </div>
        </div>

        {/* How we secure funding Section */}
        <div className="mb-24">
          <h2 className="mb-16 text-center text-3xl font-bold text-gray-900">How we secure funding for entrepreneurs</h2>
          
          <div className="space-y-24">
            {/* Row 1: Grant */}
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex h-[400px] items-center justify-center bg-gray-200 text-xl font-bold text-gray-500">
                <div className="text-center">
                  <p>Grant</p>
                  <p className="text-sm font-normal">Add a photo</p>
                </div>
              </div>
              <div className="prose prose-lg text-gray-600">
                <p>
                  A strong entrepreneurial ecosystem is vital for Cameroon's inclusive growth and sustainable development. While entrepreneurship is rising, the ecosystem remains fragmented, hindered by limited financing, weak infrastructure, and complex regulations. To overcome these challenges, Cameroon needs a coordinated and collaborative approach involving government, academia, the private sector, and development partners. Key actions include simplifying business regulations, expanding digital infrastructure, promoting public–private partnerships for innovation hubs, and mobilizing local and diaspora investment. An inclusive, well-coordinated ecosystem will enable entrepreneurs across all regions to scale their ideas, create jobs, and position Cameroon as a leading hub for innovation in Africa.
                </p>
              </div>
            </div>

            {/* Row 2: Investment Capital */}
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="prose prose-lg text-gray-600 order-2 lg:order-1">
                <p>
                  A strong entrepreneurial ecosystem is vital for Cameroon's inclusive growth and sustainable development. While entrepreneurship is rising, the ecosystem remains fragmented, hindered by limited financing, weak infrastructure, and complex regulations. To overcome these challenges, Cameroon needs a coordinated and collaborative approach involving government, academia, the private sector, and development partners. Key actions include simplifying business regulations, expanding digital infrastructure, promoting public–private partnerships for innovation hubs, and mobilizing local and diaspora investment. An inclusive, well-coordinated ecosystem will enable entrepreneurs across all regions to scale their ideas, create jobs, and position Cameroon as a leading hub for innovation in Africa.
                </p>
              </div>
              <div className="flex h-[400px] items-center justify-center bg-gray-200 text-xl font-bold text-gray-500 order-1 lg:order-2">
                Investment Capital
              </div>
            </div>

             {/* Row 3: Investment Capital (Left) */}
             <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex h-[400px] items-center justify-center bg-gray-200 text-xl font-bold text-gray-500">
                Investment Capital
              </div>
              <div className="hidden lg:block">
                {/* Empty right side as per design pattern */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Companies that have benefited */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Companies that have benefited
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="h-16 w-40 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image src="/facebook-logo.png" alt="Facebook" fill className="object-contain" />
            </div>
            <div className="h-16 w-40 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image src="/coca-cola-logo.png" alt="Coca Cola" fill className="object-contain" />
            </div>
            <div className="h-16 w-40 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image src="/disney-inspired-logo.png" alt="Disney" fill className="object-contain" />
            </div>
            <div className="h-16 w-40 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image src="/walmart-logo.png" alt="Walmart" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
