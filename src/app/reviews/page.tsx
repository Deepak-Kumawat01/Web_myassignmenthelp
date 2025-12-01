// app/reviews/page.tsx
export default function ReviewsPage() {
    const reviews = [
      {
        name: 'Sofia Omar',
        text: 'They handled my exams and assignments during a busy month. Everything was delivered on time.',
      },
      {
        name: 'Husna Chu',
        text: 'Customer support is friendly and explains clearly. I got good grades in multiple subjects.',
      },
      {
        name: 'Imran Soon',
        text: 'The solutions were easy to understand and helped me prepare for finals as well.',
      },
    ]
  
    return (
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Student Feedback</div>
            <h1 className="section-title">MyAssignmentHelp.my Reviews</h1>
            <p className="section-subtitle">
              Below testimonials are static placeholders matching the style of
              your WordPress site. Replace with real reviews from your database
              when you go live.
            </p>
          </div>
  
          <div className="reviews-grid">
            {reviews.map((r) => (
              <article key={r.name} className="review-card">
                <div className="review-name">{r.name}</div>
                <p className="review-text">“{r.text}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }

  