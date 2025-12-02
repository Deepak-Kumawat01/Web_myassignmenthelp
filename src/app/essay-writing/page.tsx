// app/essay-writing-service/page.tsx
'use client'

import Link from 'next/link'

const essayTypes = [
  {
    title: 'Expository Essay',
    desc: 'Clear, fact-based essays that explain a topic step-by-step. Perfect for Malaysian school & university assignments.',
  },
  {
    title: 'Descriptive Essay',
    desc: 'Essays that describe a place, person, memory or event in rich detail while still meeting academic guidelines.',
  },
  {
    title: 'Narrative Essay',
    desc: 'Story-style assignments with a clear beginning, middle and end – aligned with Malaysian marking rubrics.',
  },
  {
    title: 'Persuasive Essay',
    desc: 'Essays that convince your reader with logical arguments, evidence and proper referencing.',
  },
  {
    title: 'Argumentative Essay',
    desc: 'Balanced essays that compare both sides of an issue and present a strong final position.',
  },
  {
    title: 'Reflective & Personal Essays',
    desc: 'Reflection papers, journals and personal response essays that still stay academically sound.',
  },
]

const whyChoose = [
  {
    title: '100% Human Essay Writers',
    desc: 'Every essay is written by Malaysian academic writers – zero AI, zero bots. Safe for Turnitin & AI checks.',
  },
  {
    title: 'Aligned With Malaysian Universities',
    desc: 'We follow the expectations of UM, UTM, UPM, UiTM and other Malaysian universities for structure & formatting.',
  },
  {
    title: 'Student-Friendly Pricing',
    desc: 'Transparent pricing with no hidden charges – you only pay for the words and complexity you actually need.',
  },
  {
    title: 'Free Turnitin & Proofreading',
    desc: 'On request we can share Turnitin & Grammarly reports so you know your essay is clean and ready to submit.',
  },
]

const processSteps = [
  {
    label: 'Step 1',
    title: 'Share Your Essay Details',
    desc: 'Upload the question, word count, deadline and marking rubric. Our team reviews and assigns a Malaysian expert.',
  },
  {
    label: 'Step 2',
    title: 'Get A Budget-Friendly Quote',
    desc: 'We send you a customised quote in MYR. Once you approve and pay, your writer starts immediately.',
  },
  {
    label: 'Step 3',
    title: 'Track Draft & Progress',
    desc: 'Chat with support on WhatsApp for updates. You can request outline or partial drafts if needed.',
  },
  {
    label: 'Step 4',
    title: 'Download Your Essay',
    desc: 'Receive a plagiarism-free essay before the deadline – properly formatted and ready to submit.',
  },
]

const faqs = [
  {
    q: 'Can you match my university referencing style?',
    a: 'Yes. We frequently work with APA, MLA, Chicago, Harvard and IEEE. Just mention your required style in the form or chat.',
  },
  {
    q: 'Is your essay writing service in Malaysia legal?',
    a: 'We provide model essays and study materials for reference. You are expected to use them ethically and follow your university guidelines.',
  },
  {
    q: 'Can you handle urgent last-minute essays?',
    a: 'For short essays we can sometimes take 12–24 hour deadlines, depending on the topic and complexity. Share your deadline and we will confirm.',
  },
  {
    q: 'Will my details stay confidential?',
    a: 'Yes. We never share your personal data, topics or documents with other students. Everything stays encrypted and private.',
  },
]

export default function EssayWritingServicePage() {
  return (
    <main className="app-main">
      {/* HERO SECTION */}
      <section
        style={{
          background: '#ffffff',
          padding: '3rem 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '2.5rem',
            alignItems: 'flex-start',
          }}
        >
          {/* LEFT SIDE CONTENT */}
          <div>
            <h1
              style={{
                fontSize: '2.4rem',
                fontWeight: 700,
                color: '#0d1b3b',
                marginBottom: '1rem',
              }}
            >
              Essay Writing Services In Malaysia
            </h1>

            <p
              style={{
                fontSize: '1rem',
                color: '#374151',
                lineHeight: 1.6,
                marginBottom: '1.6rem',
              }}
            >
              Myassignmenthelp.my is the best essay writing service provider in
              Malaysia. We have a team of professional essay writers who are
              well-versed in different academic disciplines and can provide
              quality essay writing assistance to students of all levels. Our
              legit essay writing company has helped thousands of students in
              Malaysia with their essay writing needs. We provide custom essay
              writing service to students in Malaysia who are struggling with
              their essay writing assignments. So if you need affordable essay
              writing help, myassignmenthelp.my is the best choice.
            </p>

            {/* 4 BADGE GRID */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                margin: '1.5rem 0 2rem',
              }}
            >
              <div
                style={{
                  background: '#ffe5e5',
                  padding: '0.9rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: '1.3rem' }}>📄</span> Turnitin Report
              </div>

              <div
                style={{
                  background: '#e8ecff',
                  padding: '0.9rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: '1.3rem' }}>✔️</span> 100% Plagiarism
                Free
              </div>

              <div
                style={{
                  background: '#dcffd9',
                  padding: '0.9rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: '1.3rem' }}>🟢</span> Proofreading
                Editing
              </div>

              <div
                style={{
                  background: '#f6ffbf',
                  padding: '0.9rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: '1.3rem' }}>👍</span> A++ Guaranteed
              </div>
            </div>

            {/* REVIEWS STRIP (3 BOXES) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  background: '#09243d',
                  borderRadius: '6px',
                  padding: '1rem',
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '0.9rem',
                }}
              >
                ⭐ <strong>Trustpilot</strong>
                <div style={{ marginTop: 6 }}>★★★★★</div>
              </div>

              <div
                style={{
                  background: '#09243d',
                  borderRadius: '6px',
                  padding: '1rem',
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '0.9rem',
                }}
              >
                ⭐ <strong>Site Jabber</strong>
                <div style={{ marginTop: 6 }}>★★★★★</div>
              </div>

              <div
                style={{
                  background: '#09243d',
                  borderRadius: '6px',
                  padding: '1rem',
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '0.9rem',
                }}
              >
                ⭐ <strong>MAH Reviews</strong>
                <div style={{ marginTop: 6 }}>★★★★★</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            style={{
              flex: 1,
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
          >
            <div
              style={{
                background: '#0d1b3b',
                color: 'white',
                padding: '1rem 1rem',
                borderTopLeftRadius: '6px',
                borderTopRightRadius: '6px',
                fontWeight: 600,
                marginBottom: '1rem',
              }}
            >
              Hire An Assignment Helper
            </div>
            <div style={{ padding: '0 1rem 1rem 1rem' }}>
              {/* 2-column form grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                }}
              >
                {/* NAME */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    id="name"
                    className="form-input"
                    placeholder="Enter Your Name"
                  />
                </div>

                {/* EMAIL */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    id="email"
                    className="form-input"
                    placeholder="Enter Your Email"
                  />
                </div>

                {/* COUNTRY CODE */}
                <div className="form-group">
                  <label htmlFor="countryCode" className="form-label">
                    Country Code
                  </label>
                  <select id="countryCode" className="form-input">
                    <option>Malaysia (+60)</option>
                    <option>India (+91)</option>
                  </select>
                </div>

                {/* CONTACT */}
                <div className="form-group">
                  <label htmlFor="contact" className="form-label">
                    Contact Number
                  </label>
                  <input
                    id="contact"
                    className="form-input"
                    placeholder="Enter Contact"
                  />
                </div>

                {/* PAPER LENGTH */}
                <div className="form-group">
                  <label className="form-label">Paper Length</label>
                  <input className="form-input" placeholder="Paper length" />
                </div>

                {/* EDUCATION LEVEL */}
                <div className="form-group">
                  <label htmlFor="education" className="form-label">
                    Education Level
                  </label>
                  <select id="education" className="form-input">
                    <option>Select Level</option>
                  </select>
                </div>

                {/* DEADLINE */}
                <div className="form-group">
                  <label className="form-label">Deadline</label>
                  <input className="form-input" placeholder="Deadline" />
                </div>

                {/* SUBJECT */}
                <div className="form-group">
                  <label className="form-label">Subject Name</label>
                  <input className="form-input" placeholder="Subject Name" />
                </div>

                {/* REFERENCING STYLE */}
                <div className="form-group">
                  <label htmlFor="refStyle" className="form-label">
                    Referencing Style
                  </label>
                  <select id="refStyle" className="form-input">
                    <option>Select Style</option>
                  </select>
                </div>

                {/* PAPER TYPE */}
                <div className="form-group">
                  <label htmlFor="paperType" className="form-label">
                    Paper Type
                  </label>
                  <select id="paperType" className="form-input">
                    <option>Select Type</option>
                  </select>
                </div>
              </div>

              {/* TEXTAREA */}
              <div className="form-group" style={{ marginTop: '1rem' }}>
                <label className="form-label">Your Question</label>
                <textarea
                  className="form-input"
                  placeholder="Enter Question"
                  style={{ height: '90px' }}
                ></textarea>
              </div>

              {/* FILE UPLOAD */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '1rem',
                }}
              >
                <div className="form-group" style={{ margin: 0 }}>
                  <label htmlFor="uploadFile" className="form-label">
                    Upload File
                  </label>
                  <input id="uploadFile" type="file" />
                </div>

                <button className="btn btn-outline">Add More</button>
              </div>

              {/* Submit */}
              <div style={{ textAlign: 'center', marginTop: '1.2rem' }}>
                <button
                  style={{
                    background: '#d4422e',
                    color: 'white',
                    padding: '0.7rem 2rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ESSAY SERVICE */}
      <section className="section section-muted">
        <div className="container">
          <header className="section-header">
            <div className="section-eyebrow">Why Students Choose Us</div>
            <h2 className="section-title">
              Genuine Essay Writing Service{' '}
              <span className="hero-highlight">in Malaysia</span>
            </h2>
            <p className="section-subtitle">
              Our essay helpers in Malaysia have written thousands of essays for
              local students. Here&apos;s what makes our essay service different
              from generic international websites.
            </p>
          </header>

          <div className="features-grid">
            {whyChoose.map((item) => (
              <div key={item.title} className="feature-card">
                <div className="feature-title">{item.title}</div>
                <p style={{ fontSize: '0.85rem', color: '#4b5563' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES OF ESSAYS */}
      <section className="section">
        <div className="container">
          <header className="section-header">
            <div className="section-eyebrow">Essay Types We Cover</div>
            <h2 className="section-title">
              Pay Malaysian Essay Helpers for{' '}
              <span className="hero-highlight">All Types of Essay</span>
            </h2>
            <p className="section-subtitle">
              Whether it&apos;s a short 800-word homework essay or a long
              3,000-word coursework essay, we can match the exact type of essay
              your lecturer has asked for.
            </p>
          </header>

          <div className="services-grid">
            {essayTypes.map((type) => (
              <article key={type.title} className="service-card">
                <h3 className="service-title">{type.title}</h3>
                <p className="service-desc">{type.desc}</p>
                <div className="service-tag">
                  Suitable for Malaysian schools & universities
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="section section-muted">
        <div className="container">
          <header className="section-header">
            <div className="section-eyebrow">How It Works</div>
            <h2 className="section-title">
              Simple Process to{' '}
              <span className="hero-highlight">Get Your Essay Written</span>
            </h2>
            <p className="section-subtitle">
              We keep the ordering process simple so you don&apos;t waste time
              filling long forms. Just 4 quick steps and your essay is on the
              way.
            </p>
          </header>

          <div className="steps-grid">
            {processSteps.map((step) => (
              <div key={step.title} className="step-card">
                <div className="step-label">{step.label}</div>
                <div className="step-title">{step.title}</div>
                <p style={{ fontSize: '0.85rem', color: '#4b5563' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK STATS REUSE */}
      <section className="section">
        <div className="container">
          <header className="section-header">
            <div className="section-eyebrow">Essay Help in Numbers</div>
            <h2 className="section-title">
              Trusted by{' '}
              <span className="hero-highlight">
                Thousands of Malaysian Students
              </span>
            </h2>
          </header>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">97,536+</div>
              <div className="stat-label">Essay Orders Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">500+</div>
              <div className="stat-label">Professional Essay Helpers</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">53,000+</div>
              <div className="stat-label">Students Supported in Malaysia</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">150+</div>
              <div className="stat-label">Subjects & Essay Topics</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="section section-muted">
        <div className="container">
          <header className="section-header">
            <div className="section-eyebrow">FAQ</div>
            <h2 className="section-title">
              Essay Writing Questions{' '}
              <span className="hero-highlight">Students Usually Ask</span>
            </h2>
            <p className="section-subtitle">
              Still not sure if our Malaysian essay helpers are the right fit?
              These quick answers may help you decide.
            </p>
          </header>

          <div className="faq-list">
            {faqs.map((item) => (
              <article key={item.q} className="faq-item">
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link
              href="/contact"
              className="btn"
              style={{ padding: '0.7rem 1.6rem' }}
            >
              Talk to an Essay Expert Now
            </Link>
            <p
              style={{
                fontSize: '0.8rem',
                color: '#6b7280',
                marginTop: '0.6rem',
              }}
            >
              Prefer WhatsApp? You can also share your essay question directly
              on the contact page.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
