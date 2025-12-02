export default function QuickLinks() {
  const quickLinks = [
    {
      title: "QUICK LINKS",
      links: [
        "OUR SERVICES",
        "ABOUT US",
        "OUR EXPERTS",
        "REVIEWS",
        "PRIVACY POLICY",
        "TERMS & CONDITIONS",
        "CONTACT US",
        "BLOG",
        "RECENT SUBMITTED QUESTIONS",
      ],
    },
    {
      title: "USEFUL LINKS",
      links: [
        "OPEN UNIVERSITY MALAYSIA (OUM)",
        "MATA PELAJARAN UMUM (MPU)",
        "UNIVERSITY OF MALAYA (UM)",
        "UNIVERSITI TEKNOLOGI MARA (UITM)",
        "UNIVERSITI PUTRA MALAYSIA (UPM)",
      ],
    },
    {
      title: "USEFUL LINKS",
      links: [
        "MANAGEMENT ASSIGNMENT HELP",
        "IT ASSIGNMENT HELP",
        "NURSING ASSIGNMENT HELP",
        "LAW ASSIGNMENT HELPER",
        "PROGRAMMING ASSIGNMENT HELPER",
        "ENGINEERING ASSIGNMENT HELP",
        "STATISTICS ASSIGNMENT HELP",
        "FINANCE ASSIGNMENT HELP",
      ],
    },
  ]

  return (
    <section className="bg-gray-900 text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {quickLinks.map((column, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-orange-500"></div>
                <h3 className="text-lg font-bold">{column.title}</h3>
              </div>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-orange-500 transition text-sm flex items-center gap-2"
                    >
                      <span className="text-orange-500">» </span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Customer Reviews */}
        <div className="bg-gray-800 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
          <div className="flex justify-between items-center">
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">4.7</div>
              <p className="text-gray-400">out of 5 stars</p>
              <p className="text-sm text-gray-400 mt-2">1215 reviews</p>
            </div>
            <div className="space-y-2 hidden md:block">
              <div className="flex items-center gap-2">
                <span className="text-orange-500">★★★★★</span>
                <span className="text-gray-400 text-sm">45%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">★★★★☆</span>
                <span className="text-gray-400 text-sm">38%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">★★★☆☆</span>
                <span className="text-gray-400 text-sm">12%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">★★☆☆☆</span>
                <span className="text-gray-400 text-sm">3%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-500">★☆☆☆☆</span>
                <span className="text-gray-400 text-sm">2%</span>
              </div>
            </div>
          </div>
          <a href="#" className="text-orange-500 hover:text-orange-400 text-sm mt-4 inline-block">
            View all reviews →
          </a>
        </div>
      </div>
    </section>
  )
}
