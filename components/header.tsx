// 'use client'

// import { Menu, X } from 'lucide-react'
// import Image from 'next/image'
// import { useState } from 'react'

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [openServices, setOpenServices] = useState(false)

//   return (
//     <header className="bg-[#0d1f42] text-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="p-1 bg-white rounded-md">
//             <Image src="/logo.png" alt="Logo" width={140} height={50} />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
//             <a href="/" className="hover:text-[#ff5e14] transition">
//               Home
//             </a>

//             {/* Services Dropdown */}
//             <div
//               className="relative group"
//               onMouseEnter={() => setOpenServices(true)}
//               onMouseLeave={() => setOpenServices(false)}
//             >
//               <button className="flex items-center gap-1 hover:text-[#ff5e14] transition">
//                 Services <span className="text-xs">▼</span>
//               </button>

//               {openServices && (
//                 <div className="absolute left-0 bg-white text-black shadow-lg rounded-md w-64 py-2 z-50">
//                   {[
//                     'Essay Writing Service',
//                     'Homework Helper',
//                     'Thesis Writing Service',
//                     'Online Exam Help',
//                     'Do My Assignment',
//                     'Programming Assignment Help',
//                   ].map((item) => (
//                     <a
//                       key={item}
//                       href={
//                         item === 'Essay Writing Service'
//                           ? '/essay-writing-service'
//                           : '#'
//                       }
//                       className="block px-4 py-2 hover:bg-gray-100 text-sm"
//                     >
//                       {item}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <a href="#" className="hover:text-[#ff5e14] transition">
//               Experts
//             </a>
//             <a href="#" className="hover:text-[#ff5e14] transition">
//               Questions
//             </a>
//             <a href="#" className="hover:text-[#ff5e14] transition">
//               Answers
//             </a>

//             <a
//               href="#"
//               className="hover:text-[#ff5e14] transition flex items-center gap-1"
//             >
//               Reviews
//               <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded">
//                 4.9/5
//               </span>
//             </a>

//             <a href="#" className="hover:text-[#ff5e14] transition">
//               Blog
//             </a>
//           </nav>

//           {/* Order Now */}
//           <button className="hidden sm:block bg-[#ff5e14] hover:bg-[#e65513] text-white px-6 py-2 rounded font-semibold transition">
//             Order Now &gt;&gt;
//           </button>

//           {/* Mobile Toggle */}
//           <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <nav className="md:hidden pb-4 border-t border-white/20 text-sm">
//             <div className="space-y-3 pt-4">
//               <a href="#" className="block hover:text-[#ff5e14]">
//                 Home
//               </a>
//               <a href="#" className="block hover:text-[#ff5e14]">
//                 Services
//               </a>
//               <a href="#" className="block hover:text-[#ff5e14]">
//                 Experts
//               </a>
//               <a href="#" className="block hover:text-[#ff5e14]">
//                 Questions
//               </a>
//               <a href="#" className="block hover:text-[#ff5e14]">
//                 Answers
//               </a>
//               <a href="#" className="block hover:text-[#ff5e14]">
//                 Reviews
//               </a>
//               <a href="#" className="block hover:text-[#ff5e14]">
//                 Blog
//               </a>

//               <button className="w-full bg-[#ff5e14] hover:bg-[#e65513] text-white px-4 py-2 rounded font-semibold transition mt-4">
//                 Order Now &gt;&gt;
//               </button>
//             </div>
//           </nav>
//         )}
//       </div>
//     </header>
//   )
// }

'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openServices, setOpenServices] = useState(false)

  return (
    <header
      className="bg-[#0d1f42] text-white"
      style={{ fontFamily: 'Roboto, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-[80px]">
          {/* LOGO */}
          <div className="flex items-center bg-white h-[72px] px-[10px] rounded-[8px]">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={72}
              className="h-[72px] w-auto"
            />
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center font-medium">
            <a
              href="/"
              className="h-[72px] px-4 flex items-center text-[16px] hover:text-[#ff5e14] transition"
            >
              Home
            </a>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setOpenServices(true)}
              onMouseLeave={() => setOpenServices(false)}
            >
              <button className="h-[72px] px-4 flex items-center gap-1 text-[16px] hover:text-[#ff5e14] transition">
                Services <span className="text-xs">▼</span>
              </button>

              {openServices && (
                <div className="absolute left-0 top-full bg-white text-black w-64 py-2 shadow-lg border border-gray-200 rounded-md z-50">
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
                      className="block px-4 py-2 text-[14px] hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              className="h-[72px] px-4 flex items-center text-[16px] hover:text-[#ff5e14] transition"
            >
              Experts
            </a>

            <a
              href="#"
              className="h-[72px] px-4 flex items-center text-[16px] hover:text-[#ff5e14] transition"
            >
              Questions
            </a>

            <a
              href="#"
              className="h-[72px] px-4 flex items-center text-[16px] hover:text-[#ff5e14] transition"
            >
              Answers
            </a>

            <a
              href="#"
              className="h-[72px] px-4 flex items-center gap-2 text-[16px] hover:text-[#ff5e14] transition"
            >
              Reviews
              <span className="bg-[#ff5e14] text-black text-[11px] px-2 py-0.5 rounded-sm font-semibold">
                4.9/5
              </span>
            </a>

            <a
              href="#"
              className="h-[72px] px-4 flex items-center text-[16px] hover:text-[#ff5e14] transition"
            >
              Blog
            </a>
          </nav>

          {/* ORDER NOW BUTTON */}
          <button className="relative hidden sm:flex items-center justify-center bg-[#ff5e14] hover:bg-[#e65513] text-white px-7 py-3 rounded-md font-semibold text-[15px] overflow-hidden transition">
            <span className="relative z-10">Order Now &gt;&gt;</span>
            <span className="absolute inset-0 bg-[#ad8585] opacity-0 hover:opacity-20 transition"></span>
          </button>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-white/20 text-[15px] font-medium">
            <div className="flex flex-col gap-3 pt-4">
              {[
                'Home',
                'Services',
                'Experts',
                'Questions',
                'Answers',
                'Reviews',
                'Blog',
              ].map((item) => (
                <a key={item} href="#" className="hover:text-[#ff5e14]">
                  {item}
                </a>
              ))}

              <button className="w-full bg-[#ff5e14] hover:bg-[#e65513] text-white px-4 py-2 rounded-md font-semibold transition mt-4">
                Order Now &gt;&gt;
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
