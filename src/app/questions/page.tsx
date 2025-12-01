// app/questions/page.tsx
export default function QuestionsPage() {
    return (
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Student Questions</div>
            <h1 className="section-title">Recently Asked Questions</h1>
            <p className="section-subtitle">
              In WordPress version you may have dynamic Q&A. Currently this page
              shows static placeholder content which you can replace with real
              data later.
            </p>
          </div>
  
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-q">
                Can you help with my final year project (FYP) for UTM?
              </div>
              <div className="faq-a">
                Yes, our experts regularly handle FYPs for engineering, business
                and IT students. We follow your faculty guidelines strictly.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-q">
                Do you provide Turnitin report along with assignment?
              </div>
              <div className="faq-a">
                We can share plagiarism report on request so you can check the
                similarity score before submission.
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  