'use client'

import Image from 'next/image'
import clsx from 'clsx'
import { useEffect, useRef } from 'react'

export default function QuickAssistanceGrid() {
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

  const services = [
    {
      icon: '/24-7-customer-support.svg',
      title: '24/7 Customer Support',
      description:
        'Our Malaysian assignment experts offer round-the-clock customer support. Contact us anytime for help.',
      card: false,
    },
    {
      icon: '/free-revisions.svg',
      title: 'Free Revisions',
      description:
        "If you're not happy with the first draft of your assignment, get it revised for free.",
      card: true,
    },
    {
      icon: '/timely-delivery.svg',
      title: 'Timely Delivery',
      description:
        'We ensure assignments are delivered on time, even with tight deadlines.',
      card: false,
    },
    {
      icon: '/plagiarism-free-content.svg',
      title: 'Plagiarism-Free Content',
      description:
        'All assignments are 100% original, checked with advanced plagiarism tools.',
      card: true,
    },
    {
      icon: '/high-quality-assignments.svg',
      title: 'High-Quality Assignments',
      description:
        'Experienced academic writers deliver the best quality assignments.',
      card: false,
    },
    {
      icon: '/affordable-prices.svg',
      title: 'Affordable Prices',
      description: 'Get assignments done at budget-friendly prices.',
      card: true,
    },
  ]

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* LEFT BG SVG */}
      <div className="absolute left-0 top-0 h-full w-40 opacity-30 pointer-events-none">
        <Image
          src="/quick-assignment-writting-assistance.svg"
          alt="bg"
          fill
          className="object-contain"
        />
      </div>

      {/* RIGHT BG SVG */}
      <div className="absolute right-0 top-0 h-full w-40 opacity-30 pointer-events-none">
        <Image
          src="/quick-assignment-writing-assistance-from-malaysian.svg"
          alt="bg"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-black mb-4">
          Quick Assignment Writing Assistance From Malaysian Assignment Helpers
        </h2>

        <p className="text-center text-black font-normal mb-12 max-w-5xl mx-auto">
          MyAssignmentHelp.My is a leading online assignment help provider in
          Malaysia that offers quality assignment writing services to
          students.Our company has a team of experienced and qualified writers
          who can help you with all your assignment needs. Here are some of the
          features that make MyAssignmentHelp.My the best choice for your
          assignment help needs:
        </p>

        {/* GRID (pattern matches your website) */}
        {/* GRID WRAPPED INSIDE SAME WIDTH AS H2 */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 mt-10">
          {services.map((service, i) => (
            <div
              key={i}
              className={clsx(
                'p-8 text-center flex flex-col items-center',
                service.card
                  ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] rounded-md border border-gray-100'
                  : 'bg-transparent',
              )}
            >
              {/* ICON */}
              <div className="mb-5 flex justify-center">
                <Image
                  src={service.icon}
                  width={70}
                  height={70}
                  alt={service.title}
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold text-[#1a3a5c] mb-3">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed max-w-[240px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-12">
          <button
            ref={btnRef}
            className="px-8 py-4 tracking-wide bg-[#e3431b] text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition"
          >
            ORDER NOW..!!
          </button>
        </div>
      </div>
    </section>
  )
}
