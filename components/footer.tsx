export default function Footer() {
  return (
    <footer>
      {/* ================= TOP BLACK FOOTER ================= */}
      <div className="bg-[#0a0a0a] text-white pb-14 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            {/* COLUMN 1 */}
            <div>
              <h4 className="text-lg font-semibold text-[#898989] tracking-wide mb-6 flex items-center gap-2">
                <span className="w-[3px] h-6 bg-[#ff3c2e]  inline-block"></span>
                QUICK LINKS
              </h4>

              <ul className="space-y-3 text-[14px] font-semibold">
                <li>» OUR SERVICES</li>
                <li>» ABOUT US</li>
                <li>» OUR EXPERTS</li>
                <li>» REVIEWS</li>
                <li>» PRIVACY POLICY</li>
                <li>» TERMS & CONDITIONS</li>
                <li>» CONTACT US</li>
                <li>» BLOG</li>
                <li>» RECENT SUBMITTED QUESTIONS</li>
              </ul>
            </div>

            {/* COLUMN 2 */}
            <div>
              <h4 className="text-lg font-semibold tracking-wide text-[#898989] mb-6 flex items-center gap-2">
                <span className="w-[3px] h-6 bg-[#ff3c2e] inline-block"></span>
                USEFUL LINKS
              </h4>

              <ul className="space-y-3 text-[14px] font-semibold">
                <li>» OPEN UNIVERSITY MALAYSIA (UOM)</li>
                <li>» MATA PELAJARAN UMUM (MPU)</li>
                <li>» UNIVERSITY OF MALAYA (UM)</li>
                <li>» UNIVERSITI TEKNOLOGI MARA (UITM)</li>
                <li>» UNIVERSITI PUTRA MALAYSIA (UPM)</li>
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div>
              <h4 className="text-lg font-semibold tracking-wide text-[#898989] mb-6 flex items-center gap-2">
                <span className="w-[3px] h-6 bg-[#ff3c2e] inline-block"></span>
                USEFUL LINKS
              </h4>

              <ul className="space-y-3 text-[14px] font-semibold">
                <li>» MANAGEMENT ASSIGNMENT HELP</li>
                <li>» IT ASSIGNMENT HELP</li>
                <li>» NURSING ASSIGNMENT HELP</li>
                <li>» LAW ASSIGNMENT HELPER</li>
                <li>» PROGRAMMING ASSIGNMENT HELP</li>
                <li>» ENGINEERING ASSIGNMENT HELP</li>
                <li>» STATISTICS ASSIGNMENT HELP</li>
                <li>» FINANCE ASSIGNMENT HELP</li>
              </ul>
            </div>

            {/* COLUMN 4 – TRUSTPILOT BOX (IMAGE) */}
            <div className="flex justify-center mt-14 md:justify-start">
              <img
                src="/malaysiya-assignment-help-reviews.png"
                alt="Trusted Reviews"
                className="w-[220px] h-[180px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= DISCLAIMER BAR ================= */}
      <div className="bg-[#15224f] text-center p-4">
        <p className="text-white font-semibold leading-relaxed max-w-6xl mx-auto">
          <strong>Disclaimer: </strong> The Reference papers provided by the My
          Assignment Help Malaysia serve as model and sample papers for students
          and are not to be submitted as it is. These papers are intended to be
          used for reference and research purposes only.
        </p>
      </div>

      {/* ================= COPYRIGHT BAR ================= */}
      <div className="bg-[#343a40] py-4">
        <p className="text-center text-white">
          © 2025 My Assignment Help Malaysia. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
