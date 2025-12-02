"use client"

import type React from "react"

import { useState } from "react"

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "Malaysia",
    paperLength: "",
    educationLevel: "",
    deadline: "",
    subject: "",
    referencingStyle: "",
    paperType: "",
    question: "",
    file: null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gray-50 rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-8 text-center">Place Your Order</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Second Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              >
                <option>Malaysia (+60)</option>
                <option>Singapore (+65)</option>
                <option>Indonesia (+62)</option>
                <option>Thailand (+66)</option>
              </select>
              <input
                type="tel"
                name="contact"
                placeholder="Enter Contact"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Third Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <select
                name="paperLength"
                value={formData.paperLength}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              >
                <option value="">Paper length</option>
                <option>1-5 pages</option>
                <option>5-10 pages</option>
                <option>10-20 pages</option>
                <option>20+ pages</option>
              </select>
              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              >
                <option value="">Education Level</option>
                <option>High School</option>
                <option>Bachelor</option>
                <option>Master</option>
                <option>PhD</option>
              </select>
            </div>

            {/* Fourth Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject Name"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Fifth Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <select
                name="referencingStyle"
                value={formData.referencingStyle}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              >
                <option value="">Referencing Style</option>
                <option>APA</option>
                <option>MLA</option>
                <option>Chicago</option>
                <option>Harvard</option>
              </select>
              <select
                name="paperType"
                value={formData.paperType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              >
                <option value="">Paper Type</option>
                <option>Essay</option>
                <option>Research Paper</option>
                <option>Case Study</option>
                <option>Other</option>
              </select>
            </div>

            {/* Question */}
            <textarea
              name="question"
              placeholder="Enter Question"
              value={formData.question}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* File Upload and Submit */}
            <div className="flex flex-col md:flex-row gap-4 items-end justify-between">
              <input type="file" name="file" className="px-4 py-2 border border-gray-300 rounded-lg" />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition w-full md:w-auto"
              >
                Order Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
