export default function EssayCustomSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a3a5c] mb-12">
          Get Custom Essay Writing Service in Malaysia
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Introduction",
              content:
                "It includes introduction of the topic, objectives, problem statement and the information related to the topic that is to be fulfilled.",
            },
            {
              title: "Body",
              content:
                "This is the main important part of your essay. Each section should be briefly introduced with paragraphs that the reader must be able to understand and memorize.",
            },
            {
              title: "Conclusion",
              content:
                "Here, you sum the entire essay into a small summary. It is an important part in an essay. Some tips for writing a conclusion: You should restate your thesis statement in your conclusion about in a new angle.",
            },
          ].map((section, index) => (
            <div key={index} className="border-4 border-orange-500 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-[#1a3a5c] mb-4">{section.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-[#1a3a5c] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition">
            HIRE A WRITER NOW!
          </button>
        </div>
      </div>
    </section>
  )
}
