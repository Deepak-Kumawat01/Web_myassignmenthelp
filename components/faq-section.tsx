'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(-1)
  const btnRef = useRef<any>(null)

  // CTA animation
  useEffect(() => {
    const button = btnRef.current
    let interval: NodeJS.Timeout | undefined = undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Initial animation instantly
            button.classList.add('cta-animate')
            setTimeout(() => button.classList.remove('cta-animate'), 1500)

            // Loop animation every 5 sec
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

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])

  const faqs = [
    {
      q: 'How is your assignment help service different from others?',
      a: 'We are a genuine and legitimate company, native to Singapore. All our experts are professionals with PhDs in their respective fields and more than 7+ years of work experience. In our online assignment help services expertise and efficiency is guaranteed.',
    },
    {
      q: 'Are my personal details shared with the tutor?',
      a: 'No, the personal details of the student are not shared with the tutor. Only the information about the assignment given by you is shared with them.',
    },
    {
      q: 'How many subjects do you provide tutoring in?',
      a: 'We provide tutoring in all the subjects that can be from any of the 3 disciplines, be it science, commerce, or arts. We have experts from every field.',
    },
    {
      q: 'What if I feel my assignment needs some revision?',
      a: 'We provide revision services without any additional cost. So, if a student feels that they need their assignment to be revised and/or edited, we will do it for them!',
    },
    {
      q: 'What does the online essay writing service price depend on?',
      a: 'When you buy essays or other papers online, it is necessary to specify their type, academic level, number of pages, and urgency. These factors are the most important when it comes to the pricing policy.',
    },
  ]

  return (
    <section className="bg-white py-14">
      <div className="max-w-5xl mx-auto px-4">
        {/* TITLE */}
        <h2 className="text-center text-3xl font-bold text-[#1a1f2e]">
          Check what students usually ask about our affordable paper writing
          service
        </h2>
        <p className="text-center text-black text-xl  mt-2 mb-10">
          Our Frequently Asked Questions here.
        </p>

        {/* WHITE BOX */}
        <div className="bg-white shadow-[0_0_35px_rgba(0,0,0,0.08)] rounded-2xl p-10">
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx

              return (
                <div key={idx}>
                  {/* FAQ BUTTON */}
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="
                      w-full rounded-full border border-gray-300 px-6 py-3
                      bg-white flex items-center gap-2 text-left transition
                    "
                  >
                    <ChevronRight
                      size={18}
                      className={`${isOpen ? 'rotate-90' : ''} transition`}
                    />
                    <span className="font-bold text-black">{faq.q}</span>
                  </button>

                  {/* ANSWER */}
                  {isOpen && (
                    <div className="px-10 py-4 text-gray-700 relative leading-relaxed">
                      <div className="absolute left-6 top-0 bottom-0 border-l border-dotted border-gray-400"></div>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-10">
          <button
            ref={btnRef}
            className="bg-linear-to-r from-[#ff6a42] to-[#ff302e] text-white font-semibold rounded-full px-10 py-3 
            shadow-[0_8px_20px_rgba(255,80,40,0.35)] hover:scale-105 transition-transform"
          >
            HIRE A WRITER NOW..!!
          </button>
        </div>
      </div>
    </section>
  )
}
