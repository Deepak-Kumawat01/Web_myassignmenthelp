import Image from 'next/image'

export default function HeroWithForm() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h1
            className="text-[36px] font-semibold text-[#0d1f42] leading-[42px] mb-5"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Best Assignment Helper Malaysia | <br />
            Trusted, Affordable & Fast Delivery
          </h1>

          <p className="text-[16px] leading-[26px] mb-7">
            My Assignment Help Malaysia is a leading assignment helper in
            Malaysia. We provide 100% AI-free assignment help to Malaysian
            students at all levels—from high school to university. Our team
            consists of real assignment helpers and 100% human writers, all
            experienced and qualified, ready to assist with essays, FYPs,
            reports, theses, case studies, research papers, dissertations, and
            more. We offer affordable assignment help without compromising on
            quality. If you need reliable help with your assignments, contact us
            today!
          </p>

          {/* Feature Boxes */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-[#f8d7da] px-4 py-3 rounded-md flex items-center gap-3">
              <Image
                src="/turnitin-report.png"
                alt="Turnitin"
                width={32}
                height={32}
              />
              <p className="font-semibold text-[#212529] text-[15px]">
                Turnitin Report
              </p>
            </div>

            <div className="bg-[#dbe4ff] px-4 py-3 rounded-md flex items-center gap-3">
              <Image
                src="/100-plagiarism-free.png"
                alt="Plagiarism Free"
                width={32}
                height={32}
              />
              <p className="font-semibold text-[#212529] text-[15px]">
                100% Plagiarism Free
              </p>
            </div>

            <div className="bg-[#d1f7d6] px-4 py-3 rounded-md flex items-center gap-3">
              <Image
                src="/proofreading-editing.png"
                alt="Reading Service"
                width={32}
                height={32}
              />
              <p className="font-semibold text-[#212529] text-[15px]">
                With Assignment Pre-Reading Service
              </p>
            </div>

            <div className="bg-[#fff3cd] px-4 py-3 rounded-md flex items-center gap-3">
              <Image
                src="/a-pluse-guaranteed.png"
                alt="A+ Guaranteed"
                width={32}
                height={32}
              />
              <p className="font-semibold text-[#212529] text-[15px]">
                A+ Guaranteed
              </p>
            </div>
          </div>

          <div className="bg-[#0c1c33] px-2 py-6 grid grid-cols-1 sm:grid-cols-3">
            {/* ITEM 1 */}
            <div className="flex items-center gap-2 py-4 sm:py-0 sm:pr-6 sm:border-r sm:border-white/30">
              <img
                src="/trust-pilot.png"
                alt="Trustpilot"
                className="w-12 h-12"
              />
              <div>
                <p className="text-white font-semibold">Trustpilot</p>
                <p className="text-[#ff3b30] text-sm">★★★★★</p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-center gap-2 py-4 sm:py-0 sm:px-6 sm:border-r sm:border-white/30">
              <img
                src="/site-jabber-reviews.jpg"
                alt="Site Jabber"
                className="w-12 h-12"
              />
              <div>
                <p className="text-white font-semibold">Site Jabber</p>
                <p className="text-[#ff3b30] text-sm">★★★★★</p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-center gap-2 py-4 sm:py-0 sm:pl-6">
              <img
                src="/reviews_rating.png"
                alt="MAH Reviews"
                className="w-12 h-12"
              />
              <div>
                <p className="text-white font-semibold">MAH Reviews</p>
                <p className="text-[#ff3b30] text-sm">★★★★★</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM — exact height as screenshot (small) */}
        <div
          className="bg-white shadow-[0_8px_20px_rgba(0,0,0,0.1)] border border-[#e5e7eb] w-full max-w-auto"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          <div className="bg-[#0d1f42] text-white text-center py-4 text-[18px] font-semibold">
            Hire An Assignment Helper
          </div>

          <form className="p-6 grid grid-cols-2 gap-3 text-[14px] text-[#212529]">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border border-[#ced4da] rounded px-3 h-[40px]"
            />

            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full border border-[#ced4da] rounded px-3 h-[40px]"
            />

            <select className="w-full border border-[#ced4da] rounded px-3 h-[40px] bg-white">
              <option>Malaysia (+60)</option>
            </select>

            <input
              type="text"
              placeholder="Enter Contact"
              className="w-full border border-[#ced4da] rounded px-3 h-[40px]"
            />

            <select className="w-full border border-[#ced4da] rounded px-3 h-[40px] bg-white">
              <option>Paper length</option>
            </select>

            <select className="w-full border border-[#ced4da] rounded px-3 h-[40px] bg-white">
              <option>Education Level</option>
            </select>

            <select className="w-full border border-[#ced4da] rounded px-3 h-[40px] bg-white">
              <option>Deadline</option>
            </select>

            <input
              type="text"
              placeholder="Subject Name"
              className="w-full border border-[#ced4da] rounded px-3 h-[40px]"
            />

            <select className="w-full border border-[#ced4da] rounded px-3 h-[40px] bg-white">
              <option>Referencing Style</option>
            </select>

            <select className="w-full border border-[#ced4da] rounded px-3 h-[40px] bg-white">
              <option>Paper Type</option>
            </select>

            <textarea
              rows={3}
              placeholder="Enter Question"
              className="col-span-2 w-full border border-[#ced4da] rounded px-3 py-2"
            ></textarea>

            <div className="col-span-2 flex items-center justify-between">
              {/* CUSTOM FILE INPUT */}
              <label className="flex items-center rounded cursor-pointer overflow-hidden h-[38px]">
                {/* LEFT BUTTON (Choose File) */}
                <span className="bg-[#e9ecef] text-[#212529] px-4 py-1 text-[14px] border border-gray-400">
                  Choose File
                </span>

                {/* ACTUAL FILE INPUT HIDDEN */}
                <input type="file" className="hidden" />

                {/* FILE NAME TEXT */}
                <span className="px-3 text-[14px] text-[#212529]">
                  No file chosen
                </span>
              </label>

              {/* ADD MORE BUTTON */}
              <button
                type="button"
                className="bg-[#212529] text-white px-4 py-1 rounded text-[13px]"
              >
                Add More
              </button>
            </div>

            <div className="col-span-2 flex justify-center mt-3">
              <button className="bg-[#d84436] hover:bg-[#c63a2f] text-white px-10 py-2 rounded text-[15px] font-semibold transition">
                Order Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#0d1f42] h-8 mt-12"></div>
    </section>
  )
}
