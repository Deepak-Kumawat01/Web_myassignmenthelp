'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openServices, setOpenServices] = useState(false)

  return (
    <header className="bg-[#0d1f42] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="p-1 bg-white rounded-md">
            <Image src="/logo.png" alt="Logo" width={140} height={50} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-[#ff5e14] transition">
              Home
            </a>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setOpenServices(true)}
              onMouseLeave={() => setOpenServices(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#ff5e14] transition">
                Services <span className="text-xs">▼</span>
              </button>

              {openServices && (
                <div className="absolute left-0 bg-white text-black shadow-lg rounded-md w-64 py-2 z-50">
                  {[
                    'Essay Writing Service',
                    'Homework Helper',
                    'Thesis Writing Service',
                    'Online Exam Help',
                    'Do My Assignment',
                    'Programming Assignment Help',
                  ].map((item) => (
                    <a
                      key={item}
                      href={
                        item === 'Essay Writing Service'
                          ? '/essay-writing-service'
                          : '#'
                      }
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="hover:text-[#ff5e14] transition">
              Experts
            </a>
            <a href="#" className="hover:text-[#ff5e14] transition">
              Questions
            </a>
            <a href="#" className="hover:text-[#ff5e14] transition">
              Answers
            </a>

            <a
              href="#"
              className="hover:text-[#ff5e14] transition flex items-center gap-1"
            >
              Reviews
              <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded">
                4.9/5
              </span>
            </a>

            <a href="#" className="hover:text-[#ff5e14] transition">
              Blog
            </a>
          </nav>

          {/* Order Now */}
          <button className="hidden sm:block bg-[#ff5e14] hover:bg-[#e65513] text-white px-6 py-2 rounded font-semibold transition">
            Order Now &gt;&gt;
          </button>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-white/20 text-sm">
            <div className="space-y-3 pt-4">
              <a href="#" className="block hover:text-[#ff5e14]">
                Home
              </a>
              <a href="#" className="block hover:text-[#ff5e14]">
                Services
              </a>
              <a href="#" className="block hover:text-[#ff5e14]">
                Experts
              </a>
              <a href="#" className="block hover:text-[#ff5e14]">
                Questions
              </a>
              <a href="#" className="block hover:text-[#ff5e14]">
                Answers
              </a>
              <a href="#" className="block hover:text-[#ff5e14]">
                Reviews
              </a>
              <a href="#" className="block hover:text-[#ff5e14]">
                Blog
              </a>

              <button className="w-full bg-[#ff5e14] hover:bg-[#e65513] text-white px-4 py-2 rounded font-semibold transition mt-4">
                Order Now &gt;&gt;
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
