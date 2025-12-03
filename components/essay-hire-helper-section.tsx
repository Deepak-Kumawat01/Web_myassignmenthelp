'use client'

export default function EssayHireHelperSection() {
  return (
    <section className="bg-white pt-20 pb-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* LEFT IMAGE */}
          <div className="w-full">
            <img
              src="/essay-writing-assistance.jpg"
              alt="Essay Helper Malaysia"
              className="w-full rounded-md shadow-[0px_8px_25px_rgba(0,0,0,0.15)] animate-float"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-[#1a1f2e]">
            {/* Title */}
            <h2 className="text-[38px] font-extrabold leading-snug mb-5">
              Hire Malaysian Essay Helper{' '}
              <span className="text-[#ff3c2e]">At Cheap Prices</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-[16px]  leading-[1.75] mb-5">
              Want somebody to complete your online college essay for you? Pay
              our Malaysian essay helper to write your essay, sit back and
              relax! We have professional essay writers in Malaysia who will
              write your essay with proper structure and format at cheap prices.
              All you have to do is click on ‘do my essay for me’ and we will
              get back to you.
            </p>

            <p className="text-[16px]  leading-[1.75] mb-5">
              The purpose of My Assignment Help Malaysia is to provide essay
              writing assistance to students of Malaysian University & Colleges.
              A student might face problems with time constraints, lack of
              motivation, uncertainty in analysis, and lack of editing and
              proofreading skills. However, our skilled and reliable essay
              mentors got you! You are one click away from getting the perfect
              essay written for you.
            </p>

            <p className="text-[16px]  leading-[1.75] mb-6">
              Our essay writing service Malaysia is open 24/7. So, if you have
              an urgent essay due and don’t know how to start it or finish it on
              time, contact us now! We offer fast essay help for various levels:
            </p>

            {/* BULLET POINTS */}
            <ul className="list-disc pl-6 leading-[1.8] text-[15px] mb-10">
              <li>College essay writing service</li>
              <li>High School essay help</li>
              <li>University essay writing service</li>
              <li>Master's essay writing assistance</li>
              <li>Doctoral essay writing service</li>
              <li>& many more....</li>
            </ul>
          </div>
        </div>

        {/* BUTTON — EXACT POSITION */}
        <div className="w-full flex justify-center mt-10">
          <button className="bg-[#ff3c2e] text-white text-[15px] font-semibold px-8 py-4 rounded-full shadow-md hover:bg-[#e83225] transition">
            DO MY ESSAY FOR ME!
          </button>
        </div>
      </div>

      {/* FLOATING ANIMATION */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
