export default function ReviewsSection() {
  const reviews = [
    {
      name: "Ahmed Hassan",
      rating: 4.5,
      text: "Great assignment help service! The writers are very professional and deliver high-quality work on time. Highly recommended!",
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "I was struggling with my thesis and My Assignment Help Malaysia saved me! The quality is excellent and they meet deadlines.",
    },
    {
      name: "Priya Singh",
      rating: 4.8,
      text: "Outstanding service! My assignment was completed perfectly. The support team was very helpful throughout the process.",
    },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1a3a5c] mb-4">MyassignmenthelP.MY Reviews</h2>
        <p className="text-center text-gray-600 mb-12">See what our satisfied customers say about us</p>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#1a3a5c]">{review.name}</p>
                  <p className="text-yellow-500 text-sm">{"⭐".repeat(Math.floor(review.rating))}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
