export default function StatsSection() {
  const stats = [
    { number: '97536', label: 'ORDERS DELIVERED' },
    { number: '500', label: 'ASSIGNMENT HELPERS' },
    { number: '53000', label: 'STUDENTS' },
    { number: '150', label: 'SUBJECTS' },
  ]

  return (
    <section className="bg-[#0c1c33] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-[2rem] font-bold text-center mb-2">
          WHY CHOOSE MY ASSIGNMENT HELP MALAYSIA EXPERTS?
        </h2>

        <p className="text-center text-white/70 mb-16 max-w-3xl mx-auto">
          Best writer’s guidance over the complete assignment. Different
          subjects and types of writing on one online platform
        </p>

        {/* Stats Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="border border-white/20 py-10 px-6 text-center rounded-md"
            >
              {/* Big White Number */}
              <div className="text-5xl font-semibold mb-3">{stat.number}</div>

              {/* Label (Uppercase + Gray) */}
              <p className="text-sm tracking-wide text-white/70 font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
