export default function EssayFormattingSection() {
  const styles = [
    "APA Format",
    "MLA",
    "Harvard",
    "Chicago",
    "Manual Citation",
    "Turabian Format",
    "Chicago",
    "MLA Style",
    "Writing & Design",
  ]

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a3a5c] mb-4">
          Our essay writers in Malaysia are also proficient in most of the formatting styles too, which includes:
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {styles.map((style, index) => (
            <button
              key={index}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold transition"
            >
              {style}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
