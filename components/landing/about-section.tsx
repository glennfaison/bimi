import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <picture className="relative h-[500px] rounded-lg shadow-xl">
            <Image
              src="/african-business-women-meeting.jpg"
              alt="Business meeting"
              fill
              className="object-cover"
            />
          </picture>

          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              According to a World Bank report, half of Sub-Saharan Africa is under 18. A generation of potential entrepreneurs ready to drive economic development and transformative change across the continent.
            </h2>
            
            <div className="space-y-4 text-gray-600">
              <p>
                For Africa, this represents a unique opportunity to harness the energy, creativity, and ambition of Africa's youth to drive entrepreneurship and foster innovation. By equipping young people with skills, access to finance, market opportunities, governments, investors, and development organizations, we can transform this demographic advantage into a powerful engine for job creation, economic growth, and sustainable development.
              </p>
              <p>
                In other words, Africa's youth bulge is not just a population statistic; it is a vast, untapped entrepreneurial potential. Every young person supported to start a business or scale an enterprise becomes a job creator, contributing not only to their own livelihoods but also to the broader economy and infrastructure development across the continent.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#" className="text-blue-700 font-bold text-xl hover:underline">
                Read more
              </Link>
            </div>
            <div>
              <Link href="#" className="text-red-500 font-bold text-xl hover:underline">
                Show the WB pdf report.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
