'use client'

export default function HireHelperSection() {
  return (
    <section className="bg-white pt-16 pb-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 ">
          {/* LEFT IMAGE WITH FLOAT ANIMATION */}
          <div className="relative mt-20">
            <img
              src="/assignment-help-in-malaysia.jpg"
              alt="Homework Helper"
              className=" w-full shadow-lg animate-float"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-black leading-snug mb-5">
              Hire Our Homework Helper Malaysia{' '}
              <span className="text-[#ff3c2e]">For Best Assignment Help</span>
            </h2>

            <p className=" text-black leading-relaxed mb-5">
              MyAssignmentHelp.my is an authentic company providing reliable and
              genuine services in Malaysia, be it an individual project or a
              group-based one. The homework helpers we have are professionals in
              their respective fields.
            </p>

            <p className=" text-black leading-relaxed mb-5">
              We have a team of experienced and qualified assignment writers
              Malaysia who can provide you with online homework help on a
              variety of subjects. So whether you need help with your Math
              homework or your Science homework, we can definitely help you out.
            </p>

            <p className=" text-black leading-relaxed mb-5">
              You can check some of the assignment samples written by us by
              clicking on the link. Avail affordable services from our online
              assignment helper Malaysia and get your work done TODAY! The
              majority of students from Malacca, Kuala Lumpur, Kuching,
              GeorgeTown, Ipoh, Johor Bahru, Shah Alam, and other Malaysian
              towns come to us for online assignment services.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mb-60 mt-10 z-10 relative">
        {/* CTA BOX */}
        <div className="bg-[#112042] text-white rounded-xl shadow-lg px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* LEFT SIDE TEXT */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold leading-snug mb-4">
              Facing Issues with Assignments?
              <br /> Talk to Our Experts Now!
            </h2>

            <button className="bg-[#ff3c2e] hover:bg-[#e22a1b] text-white px-5 py-2 rounded-md text-sm font-semibold transition">
              Request a Call Back
            </button>
          </div>

          {/* RIGHT SIDE: APP STORE + GOOGLE PLAY + QR */}
          <div className="flex items-center gap-6">
            {/* App Buttons */}
            <div className="flex flex-col gap-3">
              <img
                src="/icon-app-store.webp"
                className="w-40"
                alt="App Store"
              />
              <img
                src="/icon-google-store.webp"
                className="w-40"
                alt="Google Play"
              />
            </div>

            {/* QR CODE */}
            <div>
              <img
                src="/MyAssignmentHelp.png"
                alt="QR Code"
                className="w-28 h-28 rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING ANIMATION STYLE */}
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
