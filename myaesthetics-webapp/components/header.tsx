"use client"
import Link from "next/link"
import { Phone, Search } from "lucide-react"
import MobileMenu from "./mobile-menu"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f8f5f0]/80 backdrop-blur-sm border-b border-[#e0d9cf]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-semibold text-[#8a7e6d]">
              MYAESTHETICS
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-sm text-[#8a7e6d] hover:text-[#5d5242]">
                ABOUT
              </Link>
              <Link href="/services" className="text-sm text-[#8a7e6d] hover:text-[#5d5242]">
                SERVICES
              </Link>
              <Link href="/gallery" className="text-sm text-[#8a7e6d] hover:text-[#5d5242]">
                GALLERY
              </Link>
              <Link href="/contact" className="text-sm text-[#8a7e6d] hover:text-[#5d5242]">
                CONTACT
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="tel:+15551234567"
              className="hidden md:flex items-center text-sm text-[#8a7e6d] hover:text-[#5d5242]"
            >
              <Phone size={16} className="mr-2" />
              (555) 123-4567
            </Link>
            <button className="hidden md:block text-[#8a7e6d] hover:text-[#5d5242]">
              <Search size={18} />
            </button>
            <Link
              href="/book"
              className="hidden md:block px-4 py-1.5 border border-[#8a7e6d] text-xs text-[#8a7e6d] hover:bg-[#8a7e6d] hover:text-white transition duration-300"
            >
              BOOK NOW
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
