import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#FF6B6B] rounded flex items-center justify-center text-white font-bold">
                L
              </div>
              <span className="text-xl font-bold text-gray-900">LOGO</span>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-400 hover:text-blue-500">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-blue-700 hover:text-blue-800">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-pink-600 hover:text-pink-700">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold text-[#FF6B6B] mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Schools, scholarships</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Grant & Business</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Cooperate Writing</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Travel consulting</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-[#FF6B6B] mb-4">Company</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Ndobo-BONABERI, DOUALA CAMEROON</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+(237)6 99 67 03 37</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>support@bimiconsulting.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-gray-900">Terms and Conditions</Link>
            <Link href="#" className="hover:text-gray-900">Privacy policy</Link>
            <Link href="#" className="hover:text-gray-900">Faq</Link>
          </div>
          <p className="text-sm text-gray-500 text-center md:text-right">
            © 2025 Bimi Consulting firm, Product of Muyang Group LTD and Made by Bickdrim. Bickdrim
          </p>
        </div>
      </div>
    </footer>
  );
}
