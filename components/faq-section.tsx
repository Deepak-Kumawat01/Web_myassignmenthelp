"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: "Is it legal to get professional assignment help online?",
      a: "Yes, getting help from professional writers is completely legal. Many students use these services while they juggle multiple responsibilities.",
    },
    {
      q: "Is my personal information safe with your platform?",
      a: "We maintain strict confidentiality and use advanced encryption to protect all your personal data and information.",
    },
    {
      q: "How does plagiarism checking work?",
      a: "All our assignments go through multiple plagiarism detection tools to ensure complete originality and authenticity.",
    },
    {
      q: "What if I am not satisfied with the final work?",
      a: "We offer unlimited revisions until you are completely satisfied with the work delivered to you.",
    },
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-[#1a3a5c] mb-6">
              Check what students usually ask about our affordable paper writing service
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                    className="w-full px-6 py-4 flex justify-between items-center bg-[#1a3a5c] text-white hover:bg-[#0f2438] transition"
                  >
                    <span className="font-semibold text-left">{faq.q}</span>
                    <ChevronDown size={20} className={`transform transition ${openIdx === idx ? "rotate-180" : ""}`} />
                  </button>
                  {openIdx === idx && <div className="px-6 py-4 bg-gray-50 text-gray-700">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="bg-[#1a3a5c] text-white p-6 rounded-lg mb-6">
              <h3 className="font-bold mb-4">Not Finding Your Answer?</h3>
              <p className="text-sm mb-6">Contact our customer support team. They will be happy to assist you.</p>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-semibold transition">
                CONTACT US NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
