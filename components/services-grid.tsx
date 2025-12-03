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
        'A lot of students face difficulties while writing an Essay, and we get it. However, My Assignment Help got you covered. We have experts who will write your essays with proper structure and format. Put your faith in our writers and you won’t be disappointed with our essay wriiting help in Malaysia.',
    },
    {
      icon: BookOpen,
      title: 'Dissertation & Thesis Helpers',
      description:
        'Dissertation and/or thesis writing requires conducting thorough research to come up with accurate information which can be difficult and time consuming. However, you don’t have to do it all by yourself now. My Assignment Help Malaysia is here! Trust our writers and we will get you the best results.',
    },
    {
      icon: FileEdit,
      title: 'Proofreading & Editing Service',
      description:
        'Proof-reading and editing at the end of every assignment is a necessity and guess what? We have professional editors and proof-readers who are native to Malaysia to assist you in editing your assignment, do and write research reports, case study and thesis.',
    },
    {
      icon: GraduationCap,
      title: 'Online Exam Help',
      description:
        "What if we told you somebody can write your online exams for you? It doesn't matter if it's subjective, objective, time-limited, or even a simple quiz. Even during proctored exams, We got you covered! Click on Order Now to avail our services!",
    },
    {
      icon: BookMarked,
      title: 'Diploma Assignment Help',
      description:
        'Get the help of professional Malaysian writers to write your diploma assignments & project. We write assignment for management, Business, Healthcare, Social Work, Psychology, Accounting & Finance etc.',
    },
    {
      icon: FileText,
      title: 'Report Writing Help',
      description:
        "Project report is very important, we guarantee that your Project report written by us will be 100% Plagiarism free. It's totally confidential service so you don't have to panic about this. Hire a project writer now.",
    },
  ]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-[36px] font-bold text-center text-[#212529] mb-4">
          Services Offered By My Assignment Help Malaysia
        </h2>

        <p className="text-center font-medium mb-12 ">
          Our best assignment helpers in Malaysia offer a lot of assignment
          writing services at cheap prices. Want to know what all assignment
          services in Malaysia we render? Here’s the list:
        </p>

        {/* GRID WRAPPED INSIDE SAME WIDTH AS H2 */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon

            return (
              <div
                key={idx}
                className="relative bg-white border border-gray-200 px-6 py-10 shadow-md overflow-hidden group min-h-[330px] flex flex-col"
              >
                {/* BLUE SLIDE BACKGROUND */}
                <div className="absolute inset-0 bg-[#0c1c33] translate-x-[-120%] group-hover:translate-x-0 transition-transform duration-500"></div>

                <div className="relative z-10 flex flex-col">
                  {/* ICON Circle */}
                  <div className="w-20 h-20 bg-[#0c1c33] text-white rounded-full flex items-center justify-center mb-5 shadow group-hover:bg-white transition">
                    <IconComponent className="w-12 h-12 group-hover:text-[#0c1c33] transition" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-2xl text-black group-hover:text-white transition mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black leading-relaxed group-hover:text-gray-200 transition">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA BUTTON WITH ANIMATION */}
        <div className="text-center my-12">
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
