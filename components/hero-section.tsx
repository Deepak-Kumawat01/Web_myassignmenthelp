export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a3a5c] leading-tight">
              Hire an Malaysian Assignment Writer
            </h1>
            <p className="text-gray-600 text-lg">
              Get professional assignment help from experienced Malaysian writers. We provide high-quality academic
              writing services for all subjects and levels.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition">
                Get Started
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded font-semibold transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <p className="text-gray-600">Active Writers</p>
                  <p className="text-2xl font-bold text-orange-500">500+</p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-gray-600">Assignments Completed</p>
                  <p className="text-2xl font-bold text-orange-500">10,000+</p>
                </div>
                <div>
                  <p className="text-gray-600">Customer Satisfaction</p>
                  <p className="text-2xl font-bold text-orange-500">98%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
