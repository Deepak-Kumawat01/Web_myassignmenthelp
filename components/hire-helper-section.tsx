export default function HireHelperSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/homework-helper-team.jpg" alt="Homework Helper" className="rounded-lg w-full" />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-[#1a3a5c] mb-4">
              Hire Our Homework Helper Malaysia <span className="text-orange-500">For Best Assignment Help</span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team of homework helpers in Malaysia are highly trained professionals with extensive experience in
              academic writing. We understand the challenges students face and are committed to providing top-notch
              assignment help services. Whether you need assistance with essays, dissertations, case studies, or
              research papers, our experts are ready to help.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We have been serving students across Malaysia for years and have built a strong reputation for delivering
              quality work on time. Our homework helpers are available 24/7 to assist you with any academic writing
              task. We guarantee 100% original, plagiarism-free content that meets all your requirements.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-gray-700">Expert writers with years of experience</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-gray-700">Guaranteed on-time delivery</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-gray-700">100% plagiarism-free content</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span className="text-gray-700">24/7 customer support</span>
              </li>
            </ul>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition">
              HIRE OUR EXPERTS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
