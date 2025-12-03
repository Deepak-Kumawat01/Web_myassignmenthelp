'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ReviewsSection() {
  const reviews = [
    {
      name: 'Imran Soon',
      location: 'Shah Alam',
      img: '/82.jpg',
      text: 'Justifiable prices! Initially, I thought the amount taken was a little too much, however, after getting my services done on time and with 100% accuracy.',
    },
    {
      name: 'Nur Abidin',
      location: 'Alor Setar',
      img: '/83.jpg',
      text: 'You guys did a great job! I am very impressed with the way the job was done on the assignment. Excellent work! Thank you, now I think the fee taken was justifiable.',
    },
    {
      name: 'Farah Wong',
      location: 'Kuala Lumpur',
      img: '/84.jpg',
      text: 'Qualified professionals in all fields. I am glad I sought help from you guys. Excellent work! Thank you.',
    },
    {
      name: 'Daniel Lee',
      location: 'Johor Bahru',
      img: '/85.jpg',
      text: 'Amazing service, fast delivery, and high quality assignments! Truly dependable.',
    },
  ]

  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % reviews.length)
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length)

  const visible = [
    reviews[index],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ]

  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* TITLE */}
        <h2 className="text-center text-3xl font-bold mb-1">
          MyAssignmentHelp.MY Reviews
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Happy Clients & Feedbacks
        </p>

        {/* 3 SLIDES */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          {visible.map((r, i) => (
            <div
              key={i}
              className="bg-white border border-[#eaeaea] w-[290px] p-6 relative shadow-sm"
            >
              {/* EXACT SAME RED QUOTE (❝) */}
              <div className="absolute -top-3 left-6 text-[#ff3c2e] text-[64px] leading-none">
                “
              </div>

              {/* CONTENT */}
              <div className="mt-4">
                <div className="flex items-start gap-4">
                  {/* IMAGE */}
                  <img
                    src={r.img}
                    alt={r.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  {/* TEXT + NAME */}
                  <div>
                    <p className="text-gray-700 text-sm leading-normal">
                      {r.text}
                    </p>

                    <div className="mt-4">
                      <p className="font-semibold text-gray-900 text-[15px]">
                        {r.name}
                      </p>
                      <p className="text-gray-400 text-xs">{r.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ARROWS */}
        <div className="flex justify-center gap-8">
          <button
            onClick={prev}
            className="text-gray-500 hover:text-gray-800 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="text-gray-500 hover:text-gray-800 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
