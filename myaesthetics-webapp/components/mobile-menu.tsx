"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button onClick={() => setIsOpen(true)} className="text-[#8a7e6d] hover:text-[#5d5242]" aria-label="Open menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#f8f5f0] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-[#e0d9cf]">
            <Link href="/" className="text-xl font-semibold text-[#8a7e6d]" onClick={() => setIsOpen(false)}>
              MYAESTHETICS
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#8a7e6d] hover:text-[#5d5242]"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-6 text-center">
            <Link
              href="/about"
              className="text-lg py-2 text-[#5d5242] hover:text-[#8a7e6d] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className="text-lg py-2 text-[#5d5242] hover:text-[#8a7e6d] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/gallery"
              className="text-lg py-2 text-[#5d5242] hover:text-[#8a7e6d] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              GALLERY
            </Link>
            <Link
              href="/contact"
              className="text-lg py-2 text-[#5d5242] hover:text-[#8a7e6d] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="/book"
              className="mt-4 inline-block px-8 py-3 bg-[#5d5242] text-white text-sm hover:bg-[#4a4135] transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
