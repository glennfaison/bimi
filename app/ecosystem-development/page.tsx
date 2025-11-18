import Image from "next/image";

export default function EcosystemPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/ecosystem-collaboration.jpg"
          alt="Startup Ecosystem Development"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Startup Ecosystem Development
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Within the next 5 years we aim bridge capital and market access for over 5000 youths entrepreneurs and building a startup ecosystem
            </p>
          </div>
        </div>
      </div>

      {/* The Problem Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
          The Problem
        </h2>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-4 text-muted-foreground text-lg">
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
          <div className="relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-xl">
            <Image
              src="/startup-ecosystem-graphic.jpg"
              alt="Startup Ecosystem"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* The Solution Section */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6 text-center">
            The Solution
          </h2>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg text-muted-foreground">
              Entrepreneurship cannot thrive without access to both financial and human capital. Across Africa, many promising ideas stall because entrepreneurs lack funding to grow. Traditional financing often demands collateral that young people and women do not have, while venture capital and microfinance remain limited in reach. To unlock Africa's potential, we must reimagine finance for development, expanding affordable credit, promoting impact investment, and supporting blended finance that shares risk across sectors. Equally, we must invest in human capital, through education, mentorship, and digital skills, to turn creativity into enterprise. When financial inclusion meets skill development, we don't just fund businesses; we build capacity, confidence, and competitiveness, the true foundations of Africa's entrepreneurial renaissance.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12 text-center">
          Our Approach
        </h2>

        <div className="space-y-16">
          {/* Partnership and collaborations */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-xl bg-gray-200 flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-xl font-bold text-gray-700">Partnership and collaborations</p>
                <p className="text-sm text-gray-500 mt-2">Add a photo</p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                A strong entrepreneurial ecosystem is vital for Cameroon's inclusive growth and sustainable development. While entrepreneurship is rising, the ecosystem remains fragmented, hindered by limited financing, weak infrastructure, and complex regulations. To overcome these challenges, Cameroon needs a coordinated and collaborative approach involving government, academia, the private sector, and development partners. Key actions include simplifying business regulations, expanding digital infrastructure, promoting public–private partnerships for innovation hubs, and mobilizing local and diaspora investment. An inclusive, well-coordinated ecosystem will enable entrepreneurs across all regions to scale their ideas, create jobs, and position Cameroon as a leading hub for innovation in Africa.
              </p>
            </div>
          </div>

          {/* Independent Market Entry Approach */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-4 text-muted-foreground text-lg lg:order-1">
              <p>
                We work with entrepreneurs to identify potential markets they can .............
              </p>
            </div>
            <div className="relative h-[300px] lg:h-[400px] w-full overflow-hidden rounded-xl bg-gray-200 flex items-center justify-center lg:order-2">
              <div className="text-center p-6">
                <p className="text-xl font-bold text-gray-900">Independent Market Entry Approach</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why it can't be neglected Section */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6 text-center">
            Why it can't be neglected
          </h2>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg text-muted-foreground">
              Entrepreneurship cannot thrive without access to both financial and human capital. Across Africa, many promising ideas stall because entrepreneurs lack funding to grow. Traditional financing often demands collateral that young people and women do not have, while venture capital and microfinance remain limited in reach. To unlock Africa's potential, we must reimagine finance for development, expanding affordable credit, promoting impact investment, and supporting blended finance that shares risk across sectors. Equally, we must invest in human capital, through education, mentorship, and digital skills, to turn creativity into enterprise. When financial inclusion meets skill development, we don't just fund businesses; we build capacity, confidence, and competitiveness, the true foundations of Africa's entrepreneurial renaissance.
            </p>
          </div>
        </div>
      </div>

      {/* Partners and Sponsors */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-16">
            Partners and Sponsors
          </h2>
          <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none">
            <div className="flex justify-center">
              <Image
                src="/muyang-group-logo.jpg"
                alt="Muyang Group"
                width={200}
                height={100}
                className="max-h-24 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/ntala-show-logo.jpg"
                alt="Ntala Show"
                width={200}
                height={100}
                className="max-h-24 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/yellow-lock-logo.jpg"
                alt="Partner Logo"
                width={200}
                height={100}
                className="max-h-24 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
