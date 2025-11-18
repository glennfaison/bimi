import Image from "next/image";

export function FocusAreas() {
  return (
    <section className="py-20 bg-[#14b8a6] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold uppercase mb-6">Our Areas of Focus</h2>
          <p className="text-lg text-teal-50">
            Empowering Africa's youth to become emerging entrepreneurs is not just about supporting individual businesses, it is about strategically leveraging a demographic dividend for broad economic development. By addressing global market access, capital availability, and ecosystem resilience, we can transform a youthful population into a generation of job creators, innovators, and change-makers who drive sustainable growth across the continent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="space-y-4">
            <div className="aspect-video relative bg-white/10 rounded-lg overflow-hidden">
              <Image src="/global-markets-map.jpg" alt="Global Markets" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold">Access to Global Markets</h3>
            <p className="text-sm text-teal-50 leading-relaxed">
              Opportunity: Africa's young entrepreneurs are brimming with innovative ideas, but many remain limited to local markets. Expanding access to global markets allows youth-led enterprises to scale, generate higher revenues, and compete internationally.
            </p>
            <p className="text-sm text-teal-50 leading-relaxed">
              Challenge: Barriers such as inadequate infrastructure, trade in balance, regulatory hurdles, and limited digital presence hinder international reach. Without targeted support, many startups struggle to reach beyond their local ecosystems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="space-y-4">
            <div className="aspect-video relative bg-white/10 rounded-lg overflow-hidden">
              <Image src="/capital-finance-flow.jpg" alt="Capital and Finance" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold">Access to Capital and Finance</h3>
            <p className="text-sm text-teal-50 leading-relaxed">
              Opportunity: Capital is the lifeblood of entrepreneurship. With proper funding, young Africans can turn innovative ideas into viable, scalable enterprises, creating jobs and contributing to economic growth.
            </p>
            <p className="text-sm text-teal-50 leading-relaxed">
              Challenge: Many youth-led startups face systemic barriers to finance, including lack of collateral, limited credit history, and risk-averse financial institutions. Even when funds are available, startups often lack financial literacy and investment readiness.
            </p>
          </div>

          {/* Card 3 */}
          <div className="space-y-4">
            <div className="aspect-video relative bg-white/10 rounded-lg overflow-hidden">
              <Image src="/startup-ecosystem-icons.jpg" alt="Ecosystem Building" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold">Ecosystem Building</h3>
            <p className="text-sm text-teal-50 leading-relaxed">
              Opportunity: A strong entrepreneurial ecosystem can amplify the success of youth enterprises by providing networks, mentorship, policy support, and resilience against shocks. Ecosystems that integrate universities, incubators, investors, and government policies create sustainable pathways for youth entrepreneurship.
            </p>
            <p className="text-sm text-teal-50 leading-relaxed">
              Challenge: Many African countries have fragmented or underdeveloped ecosystems. Political instability, economic shocks, and regulatory bottlenecks can derail promising startups before they scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
