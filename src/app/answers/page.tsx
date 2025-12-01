// app/answers/page.tsx
export default function AnswersPage() {
    return (
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Answers</div>
            <h1 className="section-title">Sample Assignment Solutions</h1>
            <p className="section-subtitle">
              Here you can later list sample answers or solved assignment snippets
              for SEO. For now, this is static demo content.
            </p>
          </div>
  
          <div className="reviews-grid">
            <article className="review-card">
              <div className="review-name">Business Case Study Example</div>
              <p className="review-text">
                Short write-up explaining how we structure introduction, company
                background, SWOT, recommendations and conclusion for Malaysian
                business case assignments.
              </p>
            </article>
            <article className="review-card">
              <div className="review-name">Nursing Care Plan Sample</div>
              <p className="review-text">
                Example layout showing NANDA diagnosis, goals, interventions and
                evaluation in simple language.
              </p>
            </article>
          </div>
        </div>
      </section>
    )
  }
  