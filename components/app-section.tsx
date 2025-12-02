export default function AppSection() {
  return (
    <section className="bg-[#1a3a5c] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Facing Issues with Assignments? Talk to Our Experts Now!</h2>
            <p className="text-gray-200 mb-8 leading-relaxed">
              Download our mobile app and get instant access to our expert assignment helpers. Get real-time assistance
              and track your assignments on the go.
            </p>

            <div className="flex gap-4 flex-col sm:flex-row">
              <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                <span>🍎</span> App Store
              </button>
              <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                <span>▶️</span> Google Play
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-lg">
              <div className="bg-gray-200 w-40 h-40 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">QR Code</span>
              </div>
              <p className="text-center text-gray-600 text-sm mt-4">Scan to Download</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
