// 'use client'

// import { useEffect, useRef } from 'react'
// import {
//   ClipboardList,
//   CreditCard,
//   Umbrella,
//   ScrollText,
//   ArrowRight,
// } from 'lucide-react'

// export default function ProcessSection() {
//   const btnRef = useRef<any>(null)

//   // CTA animation
//   useEffect(() => {
//     const button = btnRef.current
//     let interval: NodeJS.Timeout | undefined = undefined

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Initial animation instantly
//             button.classList.add('cta-animate')
//             setTimeout(() => button.classList.remove('cta-animate'), 1500)

//             // Loop animation every 5 sec
//             interval = setInterval(() => {
//               button.classList.add('cta-animate')
//               setTimeout(() => button.classList.remove('cta-animate'), 1500)
//             }, 5000)
//           } else {
//             clearInterval(interval)
//           }
//         })
//       },
//       { threshold: 0.5 },
//     )

//     if (button) observer.observe(button)

//     return () => {
//       observer.disconnect()
//       clearInterval(interval)
//     }
//   }, [])

//   const steps = [
//     {
//       icon: <ClipboardList className="w-12 h-12 text-white" />,
//       title: 'Place Order',
//       description:
//         'To take an assignment, you need to fill out a form first. Make sure that when submitting it is with the right information so we can deliver on time and 100% satisfactorily!',
//     },
//     {
//       icon: <CreditCard className="w-12 h-12 text-white" />,
//       title: 'Pay Online',
//       description:
//         "Once you place your order, our team will quote a price according to what's best for both of us.",
//     },
//     {
//       icon: <Umbrella className="w-12 h-12 text-white" />,
//       title: 'Take a Break',
//       description: 'Let our writers do the work in your stead',
//     },
//     {
//       icon: <ScrollText className="w-12 h-12 text-white" />,
//       title: 'Receive Solution',
//       description:
//         "Once our assignment help team has finished writing your assignments, we'll provide you with an original and exclusive solution.",
//     },
//   ]

//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Heading */}
//         <h2 className="text-[2rem] font-bold text-center text-[#1a3a5c] mb-2">
//           Simple Process Of Getting Assignment Services In Malaysia
//         </h2>

//         <p className="text-center mb-16 max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
//           Now you can impress your professors and score high grades by ordering
//           online Malaysia assignment help services in just 4 steps.
//         </p>

//         {/* Steps Wrapper */}
//         <div className="flex flex-col md:flex-row items-start justify-between gap-12">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center w-full md:w-auto relative"
//             >
//               {/* CARD + ICON */}
//               <div className="w-32 h-32 bg-[#e64321] rounded-2xl flex items-center justify-center shadow-[0_20px_45px_rgba(0,0,0,0.12)] mx-auto mb-6">
//                 {step.icon}
//               </div>

//               {/* TITLE */}
//               <h3 className="text-xl font-bold text-[#0c1c33] mb-3 text-center">
//                 {step.title}
//               </h3>

//               {/* DESCRIPTION */}
//               <p className="text-gray-600 text-sm leading-relaxed text-center max-w-[250px]">
//                 {step.description}
//               </p>

//               {/* ARROW BETWEEN CARDS — UPDATED TO ICON */}
//               {index < steps.length - 1 && (
//                 <ArrowRight className="absolute top-14 left-[105%] hidden md:block w-6 h-6 text-gray-400" />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* CTA BUTTON */}
//         <div className="text-center mt-16">
//           <button
//             ref={btnRef}
//             className="px-10 py-4 bg-[#0c1c33] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition"
//           >
//             GET YOUR HOMEWORK.!!
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useEffect, useRef } from 'react'

export default function ProcessSection() {
  const btnRef = useRef<any>(null)

  // CTA animation
  useEffect(() => {
    const button = btnRef.current
    let interval: NodeJS.Timeout | undefined = undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            button.classList.add('cta-animate')
            setTimeout(() => button.classList.remove('cta-animate'), 1500)

            interval = setInterval(() => {
              button.classList.add('cta-animate')
              setTimeout(() => button.classList.remove('cta-animate'), 1500)
            }, 5000)
          } else {
            clearInterval(interval)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (button) observer.observe(button)
    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      img: '/details.svg',
      title: 'Place Order',
      description:
        'To take an assignment, you need to fill out a form first. Make sure that when submitting it is with the right information so we can deliver on time and 100% satisfactorily!',
    },
    {
      img: '/place-order.svg',
      title: 'Pay Online',
      description:
        "Once you place your order, our team will quote a price according to what's best for both of us.",
    },
    {
      img: '/take-break.svg',
      title: 'Take a Break',
      description: 'Let our writers do the work in your stead',
    },
    {
      img: '/get-paper.svg',
      title: 'Receive Solution',
      description:
        "Once our assignment help team has finished writing your assignments, we'll provide you with an original and exclusive solution.",
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-[2rem] font-bold text-center text-[#1a3a5c] mb-3">
          Simple Process Of Getting Assignment Services In Malaysia
        </h2>

        <p className="text-center mb-16 max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-gray-700">
          Now you can impress your professors and score high grades by ordering
          online Malaysia assignment help services in just 4 steps.
        </p>

        {/* Steps container limited to same width as H2 */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              {/* Icon box */}
              <div className="w-32 h-32 bg-[#e64321] rounded-2xl flex items-center justify-center shadow-[0_20px_45px_rgba(0,0,0,0.12)] mb-6">
                <img src={step.img} alt={step.title} className="w-16 h-16" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#0c1c33] mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-black font-medium text-sm max-w-[220px] leading-relaxed">
                {step.description}
              </p>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <img
                  src="/curved-arrow.png"
                  alt="arrow"
                  className="hidden md:block absolute top-14 left-[115%] w-10"
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button
            ref={btnRef}
            className="px-10 py-4 bg-[#0c1c33] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition"
          >
            GET YOUR HOMEWORK.!!
          </button>
        </div>
      </div>
    </section>
  )
}
