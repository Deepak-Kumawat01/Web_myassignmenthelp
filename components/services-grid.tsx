// import {
//   Pencil,
//   BookOpen,
//   FileEdit,
//   GraduationCap,
//   BookMarked,
//   FileText,
// } from 'lucide-react'

// export default function ServicesGrid() {
//   const services = [
//     {
//       icon: Pencil,
//       title: 'Essay Writing Services',
//       description:
//         'A lot of students face difficulties while writing an Essay, and we get it. However, My Assignment Help got you covered...',
//     },
//     {
//       icon: BookOpen,
//       title: 'Dissertation & Thesis Helpers',
//       description:
//         'Dissertation and thesis writing requires thorough research to come up with accurate information...',
//     },
//     {
//       icon: FileEdit,
//       title: 'Proofreading & Editing Service',
//       description:
//         'Proof-reading and editing at the end of every assignment is a necessity...',
//     },
//     {
//       icon: GraduationCap,
//       title: 'Online Exam Help',
//       description:
//         'What if we told you somebody can write your online exams for you? Even during proctored exams...',
//     },
//     {
//       icon: BookMarked,
//       title: 'Diploma Assignment Help',
//       description:
//         'Get the help of professional Malaysian writers to write your diploma assignments...',
//     },
//     {
//       icon: FileText,
//       title: 'Report Writing Help',
//       description:
//         'Project report writing is very important, we guarantee that your report will be 100% plagiarism-free...',
//     },
//   ]

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Heading */}
//         <h2 className="text-[2rem] font-bold text-center text-[#1a3a5c] mb-4">
//           Services Offered By My Assignment Help Malaysia
//         </h2>

//         <p className="text-center font-normal mb-12 max-w-2xl mx-auto">
//           Our best assignment helpers in Malaysia offer a lot of assignment
//           writing services at cheap prices. Want to know what all assignment
//           services in Malaysia we render? Here’s the list:
//         </p>

//         {/* GRID */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service, idx) => {
//             const IconComponent = service.icon

//             return (
//               <div
//                 key={idx}
//                 className="relative bg-white border border-gray-200 rounded-lg p-8 shadow-md overflow-hidden group"
//               >
//                 {/* BLUE SLIDE BG */}
//                 <div className="absolute inset-0 bg-[#0c1c33] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>

//                 {/* Content */}
//                 <div className="relative z-10">
//                   {/* Circle Icon */}
//                   <div className="w-16 h-16 bg-[#0c1c33] text-white rounded-full flex items-center justify-center mb-5 shadow group-hover:bg-white transition">
//                     <IconComponent className="w-8 h-8 group-hover:text-[#0c1c33] transition" />
//                   </div>

//                   {/* Title */}
//                   <h3 className="font-bold text-[#1a3a5c] group-hover:text-white transition mb-3">
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p className=" text-sm leading-relaxed group-hover:text-gray-200 transition">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         {/* CTA BUTTON */}
//         <div className="text-center mt-12">
//           <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-full font-semibold transition shadow">
//             HIRE A WRITER NOW!!
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useEffect, useRef } from 'react'

import {
  Pencil,
  BookOpen,
  FileEdit,
  GraduationCap,
  BookMarked,
  FileText,
} from 'lucide-react'

export default function ServicesGrid() {
  const btnRef = useRef<any>(null)

  // CTA Button Scroll + Interval Animation
  useEffect(() => {
    const button = btnRef.current
    let interval: NodeJS.Timeout | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            button.classList.add('cta-animate')
            setTimeout(() => {
              button.classList.remove('cta-animate')
            }, 1500)

            // 👉 Start repeating animation every 5 sec
            interval = setInterval(() => {
              button.classList.add('cta-animate')
              setTimeout(() => {
                button.classList.remove('cta-animate')
              }, 1500)
            }, 5000)
          } else {
            if (interval) clearInterval(interval)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (button) observer.observe(button)

    return () => {
      observer.disconnect()
      if (interval !== null) clearInterval(interval)
    }
  }, [])

  const services = [
    {
      icon: Pencil,
      title: 'Essay Writing Services',
      description:
        'A lot of students face difficulties while writing an Essay, and we get it. However, My Assignment Help got you covered...',
    },
    {
      icon: BookOpen,
      title: 'Dissertation & Thesis Helpers',
      description:
        'Dissertation and thesis writing requires thorough research to come up with accurate information...',
    },
    {
      icon: FileEdit,
      title: 'Proofreading & Editing Service',
      description:
        'Proof-reading and editing at the end of every assignment is a necessity...',
    },
    {
      icon: GraduationCap,
      title: 'Online Exam Help',
      description:
        'What if we told you somebody can write your online exams for you? Even during proctored exams...',
    },
    {
      icon: BookMarked,
      title: 'Diploma Assignment Help',
      description:
        'Get the help of professional Malaysian writers to write your diploma assignments...',
    },
    {
      icon: FileText,
      title: 'Report Writing Help',
      description:
        'Project report writing is very important, we guarantee that your report will be 100% plagiarism-free...',
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-[2rem] font-bold text-center text-[#1a3a5c] mb-4">
          Services Offered By My Assignment Help Malaysia
        </h2>

        <p className="text-center font-normal mb-12 max-w-2xl mx-auto">
          Our best assignment helpers in Malaysia offer a lot of assignment
          writing services at cheap prices. Want to know what all assignment
          services in Malaysia we render? Here’s the list:
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon

            return (
              <div
                key={idx}
                className="relative bg-white border border-gray-200 rounded-lg p-8 shadow-md overflow-hidden group"
              >
                {/* BLUE SLIDE BACKGROUND */}
                <div className="absolute inset-0 bg-[#0c1c33] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>

                <div className="relative z-10">
                  {/* ICON Circle */}
                  <div className="w-16 h-16 bg-[#0c1c33] text-white rounded-full flex items-center justify-center mb-5 shadow group-hover:bg-white transition">
                    <IconComponent className="w-8 h-8 group-hover:text-[#0c1c33] transition" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#1a3a5c] group-hover:text-white transition mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed group-hover:text-gray-200 transition">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA BUTTON WITH ANIMATION */}
        <div className="text-center mt-12">
          <button
            ref={btnRef}
            className="bg-[#e3431b] hover:bg-[#ec3d11] text-white px-10 py-3 rounded-full font-semibold transition shadow"
          >
            HIRE A WRITER NOW!!
          </button>
        </div>
      </div>
    </section>
  )
}
