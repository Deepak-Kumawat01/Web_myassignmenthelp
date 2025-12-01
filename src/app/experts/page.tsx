// app/experts/page.tsx
export default function ExpertsPage() {
    const experts = [
      {
        name: 'Dr. Aisha',
        role: 'PhD in Management',
        text: 'Specialist in MBA assignments, reports and case studies for Malaysian universities.',
      },
      {
        name: 'Mr. Daniel',
        role: 'MSc Computer Science',
        text: 'Handles programming, database and final year IT projects for diploma and degree.',
      },
      {
        name: 'Ms. Nurul',
        role: 'MPhil Nursing',
        text: 'Expert in nursing case studies, reflective reports and evidence-based assignments.',
      },
    ]
  
    return (
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Our Experts</div>
            <h1 className="section-title">Meet Some of Our Assignment Helpers</h1>
            <p className="section-subtitle">
              All experts are qualified human writers with experience in Malaysian
              grading systems. Below list is sample static data for UI.
            </p>
          </div>
  
          <div className="reviews-grid">
            {experts.map((e) => (
              <article key={e.name} className="review-card">
                <div className="review-name">{e.name}</div>
                <div className="review-location">{e.role}</div>
                <p className="review-text">{e.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }
  