"use client";

import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 border-b border-white/10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold tracking-wider">LOGO</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-gray-300 transition-colors outline-none">
                About Us <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-primary/90 text-gray-200">
                <DropdownMenuItem>
                  <Link href="/strategic-priority" className="w-full">Our Strategic Priority</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/pillars-of-inspiration" className="w-full">Our Pillar of Inspiration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/our-people" className="w-full">Our People</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/companies" className="w-full">Businesses we have work with</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/partners" className="w-full">Our Partners and Sponsors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/contact" className="w-full">Contact Us</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-gray-300 transition-colors outline-none">
                Entrepreneurship Programmes <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-primary/90 text-gray-200">
                <DropdownMenuItem>
                  <Link href="/financial-capital" className="w-full">Access to Capital</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/market-linkage" className="w-full">Market Linkage</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/structured-training" className="w-full">Structured Training</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-gray-300 transition-colors outline-none">
                Initiative <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-primary/90 text-gray-200">
                <DropdownMenuItem>
                  <Link href="/climate" className="w-full">Climate</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/strategic-priority" className="w-full">Strategic Priority</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-gray-300 transition-colors outline-none">
                News & Reports <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-primary/90 text-gray-200">
                <DropdownMenuItem>Latest News</DropdownMenuItem>
                <DropdownMenuItem>Reports</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-gray-300 transition-colors outline-none">
                Resources <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-primary/90 text-gray-200">
                <DropdownMenuItem>Downloads</DropdownMenuItem>
                <DropdownMenuItem>Gallery</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">Home</Link>
            <Link href="/strategic-priority" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">About Us</Link>
            <Link href="/market-linkage" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">Programmes</Link>
            <Link href="/climate" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10">Initiatives</Link>
            <Link href="/admin" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-white/10">Admin Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
