export default function QuickAssistanceGrid() {
  const services = [
    {
      icon: "👨‍💼",
      title: "24/7 Customer Support",
      description: "Have an issue? Contact our customer care team and we'll respond within minutes to help you out.",
    },
    {
      icon: "📚",
      title: "Free Resources",
      description: "Get free study materials, samples and guidelines to help you with your academic journey.",
    },
    {
      icon: "⚡",
      title: "Timely Delivery",
      description: "We deliver your assignment well before the deadline so you have time to review.",
    },
    {
      icon: "📄",
      title: "Plagiarism-Free Content",
      description:
        "All content is checked with advanced tools to ensure 100% original, unique, and plagiarism-free work.",
    },
    {
      icon: "🎖️",
      title: "High-Quality Assignments",
      description: "Our expert writers ensure top-notch quality assignments that will help you score excellent grades.",
    },
    {
      icon: "💰",
      title: "Affordable Prices",
      description: "We offer competitive and pocket-friendly prices for all types of assignment writing services.",
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1a3a5c] mb-4">
          Quick Assignment Writing Assistance From Malaysian Assignment Helpers
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Get expert help from certified Malaysian writers with years of experience in academic writing across all
          subjects.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-[#1a3a5c] mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition">
            GET INSTANT HELP
          </button>
        </div>
      </div>
    </section>
  )
}
