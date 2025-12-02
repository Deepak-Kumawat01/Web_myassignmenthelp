import Image from 'next/image'

export default function HeroWithForm() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-extrabold leading-snug text-[#0c1c33] mb-4">
            Best Assignment Helper Malaysia | <br />
            Trusted, Affordable & Fast Delivery
          </h1>

          <p className="text-black font-normal text-base leading-relaxed mb-6">
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
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-red-100 p-4 rounded-md flex items-center gap-3">
              <Image
                src="/turnitin-report.png"
                alt="Turnitin"
                width={32}
                height={32}
              />
              <p className="font-semibold text-[#212529] text-[1rem]">
                Turnitin Report
              </p>
            </div>

            <div className="bg-indigo-100 p-4 rounded-md flex items-center gap-3">
              <Image
                src="/100-plagiarism-free.png"
                alt="Turnitin"
                width={32}
                height={32}
              />
              <p className="font-semibold text-[#212529] text-[1rem]">
                100% Plagiarism Free
              </p>
            </div>

            <div className="bg-green-100 p-4 rounded-md flex items-center gap-3">
              <Image
                src="/proofreading-editing.png"
                alt="Proofreading and Editing"
                width={32}
                height={32}
              />
              <p className="font-semibold text-[#212529] text-[1rem]">
                With Assignment Pre-Reading Service
              </p>
            </div>

            <div className="bg-yellow-100 p-4 rounded-md flex items-center gap-3">
              <Image
                src="/a-pluse-guaranteed.png"
                alt="Plus Guaranteed"
                width={32}
                height={32}
              />
              <p className="font-semibold text-[#212529] text-[1rem]">
                A+ Guaranteed
              </p>
            </div>
          </div>

          {/* Trust Badges Bar */}
          <div className="bg-[#0c1c33] rounded-md mt-8 px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Trustpilot */}
            <div className="flex items-center gap-3 py-4 sm:pr-6 lg:pr-8 border-b sm:border-b-0 sm:border-r border-white/20">
              <img
                src="/trust-pilot.png"
                alt="Trustpilot"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="text-white text-lg font-semibold">Trustpilot</p>
                <p className="text-[#ff3b30] text-sm">★★★★★</p>
              </div>
            </div>

            {/* Site Jabber */}
            <div className="flex items-center gap-3 py-4 sm:pl-6 sm:pr-6 lg:px-8 border-b sm:border-b-0 lg:border-r border-white/20">
              <img
                src="/site-jabber-reviews.jpg"
                alt="Site Jabber"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="text-white text-lg font-semibold">Site Jabber</p>
                <p className="text-[#ff3b30] text-sm">★★★★★</p>
              </div>
            </div>

            {/* MAH Reviews */}
            <div className="flex items-center gap-3 py-4 sm:pl-6 lg:pl-8">
              <img
                src="/reviews_rating.png"
                alt="MAH Reviews"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="text-white text-lg font-semibold">MAH Reviews</p>
                <p className="text-[#ff3b30] text-sm">★★★★★</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white shadow-lg rounded-md border border-gray-200">
          {/* TOP DARK BLUE HEADING */}
          <div className="bg-[#0d1f42] text-white text-center py-3 rounded-t-md font-semibold">
            Hire An Assignment Helper
          </div>

          <form className="p-6 grid grid-cols-2 gap-4">
            {/* NAME */}
            <div>
              <label className="text-xs font-semibold text-gray-700 mb-1 block">
                Enter Your Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-xs font-semibold text-gray-700 mb-1 block">
                Enter Your Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              />
            </div>

            {/* COUNTRY */}
            <div>
              <label className="text-xs font-semibold text-gray-700 mb-1 block">
                Country Code
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                <option>Malaysia (+60)</option>
              </select>
            </div>

            {/* CONTACT */}
            <div>
              <label className="text-xs font-semibold text-gray-700 mb-1 block">
                Enter Contact
              </label>
              <input
                type="text"
                placeholder="Enter Contact"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              />
            </div>

            {/* PAPER LENGTH */}
            <div>
              <label className="text-xs font-semibold text-gray-700 mb-1 block">
                Paper Length
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                <option>Select Paper Length</option>
              </select>
            </div>

            {/* EDUCATION LEVEL */}
            <div>
              <label className="text-xs font-semibold text-gray-700 mb-1 block">
                Education Level
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                <option>Select Education Level</option>
              </select>
            </div>

            {/* DEADLINE */}
            <div>
              <label className="text-xs font-semibold text-gray-700 mb-1 block">
                Deadline
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                <option>Select Deadline</option>
              </select>
            </div>

            {/* SUBJECT */}
            <div>
              <label className="text-xs font-semibold text-gray-700 mb-1 block">
                Subject Name
              </label>
              <input
                type="text"
                placeholder="Enter Subject Name"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              />
            </div>

            {/* REFERENCING STYLE */}
            <div>
              <label className="text-xs font-semibold text-gray-700 mb-1 block">
                Referencing Style
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                <option>Select Referencing Style</option>
              </select>
            </div>

            {/* PAPER TYPE */}
            <div>
              <label className="text-xs font-semibold text-gray-700 mb-1 block">
                Paper Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
                <option>Select Paper Type</option>
              </select>
            </div>

            {/* QUESTION */}
            <div className="col-span-2">
              <label className="text-xs font-semibold text-gray-700 mb-1 block">
                Enter Question
              </label>
              <textarea
                placeholder="Type your question..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
              ></textarea>
            </div>

            {/* FILE UPLOAD */}
            <div className="col-span-2">
              <label className="text-xs font-semibold text-gray-700 mb-1 block">
                Upload File
              </label>
              <div className="border border-gray-300 rounded px-3 py-2">
                <input type="file" className="text-sm" />
              </div>
            </div>

            <div className="col-span-2 flex items-center justify-end">
              <button
                type="button"
                className="bg-gray-700 text-white text-xs px-4 py-1 rounded"
              >
                Add More
              </button>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="col-span-2 flex justify-center">
              <button className="bg-[#d84436] hover:bg-[#c63a2f] text-white px-10 py-2 rounded font-semibold text-sm transition">
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
