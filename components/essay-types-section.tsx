export default function EssayTypesSection() {
  const essayTypes = [
    {
      title: "Expository Essay",
      description:
        "It is a type of essay that presents ideas and concepts in a clear, concise, and objective manner. We cover research and present factual information in a structured and logical way.",
    },
    {
      title: "Descriptive Essay",
      description:
        "As the name suggests, a descriptive essay aims at describing something or anything a writer thinks of. One tries to describe a scenario, product, persona, location, or even a sensation.",
    },
    {
      title: "Narrative Essay",
      description:
        "A narrative essay is a form of storytelling where the author writes about their personal experience in a narrative way. The writer presents the events sequentially with proper beginning, middle, and ending.",
    },
    {
      title: "Informative Essay",
      description:
        "An informative essay is written to inform or educate the reader about a topic. This type of essay provides factual information about a topic in a clear, unbiased, and well-organized manner.",
    },
    {
      title: "Persuasive Essay",
      description:
        "A persuasive essay is written to convince or persuade the reader to accept the writer's point of view or to take an action. The writer uses various techniques and arguments to influence the reader.",
    },
    {
      title: "Argumentative Essay",
      description:
        "An argumentative essay is a formal type of writing where the author defends a particular position or viewpoint on a topic using evidence and reasoning to support the argument.",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a3a5c] mb-4">
          Pay Malaysian Essay Helper For All Types of Essay
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Our expert essay writers can write essays on any topic in any format. Check out the types of essays below that
          we help with.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {essayTypes.map((essay, index) => (
            <div key={index} className="bg-[#1a3a5c] text-white rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-bold mb-3">{essay.title}</h3>
              <p className="text-sm leading-relaxed">{essay.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition">
            ORDER AN ESSAY WRITING
          </button>
        </div>
      </div>
    </section>
  )
}
