export default function CTABanner() {
  return (
    <section className="bg-[#ff302e] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* TEXT */}
          <h2 className="text-white text-4xl font-medium text-center md:text-left">
            Ready to get your Assignment done?
          </h2>

          {/* BUTTON (same as your website) */}
          <button
            className="
              bg-[#0f1b33]
              text-white
              px-8 py-3
              rounded-full
              font-medium
              shadow-[0_4px_12px_rgba(0,0,0,0.35)]
              hover:-translate-y-0.5
              transition-all
              text-lg
            "
          >
            Let’s start
          </button>
        </div>
      </div>
    </section>
  )
}
