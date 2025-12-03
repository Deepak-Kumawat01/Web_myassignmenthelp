export default function DiscountBanner() {
  return (
    <section className="bg-[#0c1c33] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* LEFT TEXT */}
          <div>
            <h2 className="text-white text-[1.7rem] font-bold leading-snug">
              Get Up To 15% Discount On Assignment Writing Help
            </h2>
            <p className="text-white/80 text-[1rem] mt-1">
              Professional Assignment Help is just one click away
            </p>
          </div>

          {/* RIGHT CTA BUTTON BOX */}
          <button className="bg-white text-[#d73b2c] text-[1rem] font-semibold px-20 py-4 rounded-md shadow-sm hover:shadow-md transition">
            CONTACT US NOW!
          </button>
        </div>
      </div>
    </section>
  )
}
