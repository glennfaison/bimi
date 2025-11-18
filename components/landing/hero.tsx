import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";

interface HeroProps {
  title: string;
  content: string;
  imageUrl?: string | null;
}

export function Hero({ title, content, imageUrl }: HeroProps) {
  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl || "/placeholder.svg?height=1080&width=1920&query=business meeting africa"}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-white">
          {content}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="gap-2">
            <Link href="/strategic-priority">
              Our Priorities <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/partners">Partner With Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
