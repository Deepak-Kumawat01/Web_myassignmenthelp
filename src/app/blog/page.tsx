// app/blog/page.tsx
export default function BlogPage() {
    const posts = [
      {
        title: 'How to Choose the Best Assignment Helper in Malaysia',
        excerpt:
          'Check subject expertise, reviews, plagiarism policy and support options before you decide.',
      },
      {
        title: 'Zero-AI Policy: Why We Use Only Human Writers',
        excerpt:
          'Learn why Malaysian universities are strict about AI content and how we maintain originality.',
      },
    ]
  
    return (
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Blog</div>
            <h1 className="section-title">Assignment Tips for Malaysian Students</h1>
            <p className="section-subtitle">
              This is a static blog listing page. Later you can connect it to
              headless CMS (e.g., WordPress API, Strapi, etc.).
            </p>
          </div>
  
          <div className="reviews-grid">
            {posts.map((p) => (
              <article key={p.title} className="review-card">
                <div className="review-name">{p.title}</div>
                <p className="review-text">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }
  