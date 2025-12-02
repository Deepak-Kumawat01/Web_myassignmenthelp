export default function CTASection() {
  return (
    <section className="bg-[#1a3a5c] text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Facing Issues with Assignments?</h2>
            <p className="text-xl text-gray-200 mb-6">Talk to Our Experts Now!</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition">
              Request a Call Back
            </button>
          </div>
          <div className="flex justify-center items-center gap-8">
            <div className="bg-white/20 rounded-lg p-6 text-center">
              <p className="text-sm text-gray-300 mb-2">Available on</p>
              <p className="font-bold mb-2">App Store</p>
              <p className="text-xs">Download now</p>
            </div>
            <div className="bg-white/20 rounded-lg p-6 text-center">
              <p className="text-sm text-gray-300 mb-2">Available on</p>
              <p className="font-bold mb-2">Google Play</p>
              <p className="text-xs">Download now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
