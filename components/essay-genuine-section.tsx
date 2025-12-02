export default function EssayGenuineSection() {
  const features = [
    "100% Authentic Essay",
    "100% Guaranteed Privacy",
    "100% Money Back",
    "Unlimited Revisions",
    "Expert Writers",
    "Easy Processing",
    "Quick Delivery",
    "Award-winning Writers",
  ]

  return (
    <section className="bg-[#1a3a5c] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Genuine Essay Writing Service In Malaysia</h2>
        <p className="text-center mb-10 max-w-3xl mx-auto text-gray-200">
          There are many similar services are available in Malaysia and out out the internet except the top few every
          service claims to provide high quality assignment writing services. Here we are available with our authentic
          top quality essay writing service with an experience of more than 10 years in industry. We are committed to
          deliver high quality and genuine essay writing services with best possible price.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {features.map((feature, index) => (
            <button
              key={index}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold text-sm transition"
            >
              {feature}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
