// app/page.tsx
import Hero from '../components/Hero'
import ServiceCard, { type Service } from '../components/ServiceCard'

const services: Service[] = [
  {
    title: 'Essay Writing Service',
    tag: 'Structure · Referencing · Clarity',
    description:
      'Get well-structured essays with proper introduction, body and conclusion, fully aligned with Malaysian university guidelines.',
  },
  {
    title: 'Homework Helper',
    tag: 'School · College · University',
    description:
      'Daily homework, lab reports, problem-solving and more. Our helpers make concepts simple and clear.',
  },
  {
    title: 'Thesis & Dissertation Help',
    tag: 'FYP · Masters · PhD',
    description:
      'From topic selection to final draft – we assist with research, literature review, methodology and results.',
  },
  {
    title: 'Online Exam Help',
    description:
      'Stuck with time-bound online tests or quizzes? Our experts guide you with accurate answers under strict deadlines.',
  },
  {
    title: 'Programming Assignment Help',
    description:
      'Help for Java, Python, C++, web development, databases and more with clean, commented code.',
  },
  {
    title: 'Report & Case Study Writing',
    description:
      'Business reports, nursing case studies, law assignments and more – customised for Malaysian marking rubrics.',
  },
]

const steps = [
  {
    title: 'Place Order',
    text: 'Share assignment details, word count, deadline and referencing style in our simple form or WhatsApp.',
  },
  {
    title: 'Pay Online',
    text: 'Get a budget-friendly quote and confirm with secure online payment in MYR.',
  },
  {
    title: 'Take a Break',
    text: 'Relax while our Malaysian assignment writers research, draft and proofread your work.',
  },
  {
    title: 'Receive Solution',
    text: 'Get your original assignment with plagiarism report, on or before the deadline.',
  },
]

const stats = [
  { value: '97,536+', label: 'Orders Delivered' },
  { value: '500+', label: 'Assignment Helpers' },
  { value: '53,000+', label: 'Students Supported' },
  { value: '150+', label: 'Subjects Covered' },
]

const features = [
  {
    title: '100% Human Writers – Zero AI',
    text: 'Every assignment is written by real experts. We don’t use AI tools to generate your work.',
  },
  {
    title: '24/7 Malaysian Support',
    text: 'Chat with us anytime about your assignment progress, revisions or urgent queries.',
  },
  {
    title: 'Turnitin & Grammarly Checked',
    text: 'We check grammar and similarity reports before sending your final solution.',
  },
  {
    title: 'Affordable & Student-Friendly',
    text: 'Honest pricing with no hidden charges and flexible instalment plans for bigger projects.',
  },
  {
    title: 'Strict Confidentiality',
    text: 'Your personal details and assignment files stay secure and confidential with us.',
  },
  {
    title: 'On-Time Delivery',
    text: 'We respect your deadlines and plan our work to deliver on or before the due date.',
  },
]

const faqs = [
  {
    q: 'Is it safe to pay someone to do my assignment in Malaysia?',
    a: 'Yes. We keep your details fully confidential and prepare each assignment from scratch with plagiarism checks.',
  },
  {
    q: 'Can you help with urgent last-minute assignments?',
    a: 'Our writers handle urgent deadlines. Share your due date and we’ll confirm a realistic timeline.',
  },
  {
    q: 'Do you follow Malaysian university guidelines?',
    a: 'Yes. We regularly work with requirements from UM, UTM, UPM, UITM and other Malaysian institutions.',
  },
  {
    q: 'Can I ask for revisions?',
    a: 'Absolutely. Reasonable revisions related to original instructions are free within the support period.',
  },
]

const reviews = [
  {
    name: 'Sofia Omar',
    location: 'Perak',
    text: 'My Assignment Help made my semester easier. They handled my dissertation chapters professionally and on time.',
  },
  {
    name: 'Husna Chu',
    location: 'Penang',
    text: 'Pleasant experience! Got good marks and the writer followed my lecturer’s comments very carefully.',
  },
  {
    name: 'Imran Soon',
    location: 'Shah Alam',
    text: 'At first I thought the price was high, but after seeing the quality and Turnitin report, it was worth it.',
  },
  {
    name: 'Nur Abidin',
    location: 'Alor Setar',
    text: 'They have experts for all subjects. I ordered for management and finance; both were well written.',
  },
  {
    name: 'Farah Wong',
    location: 'Kuala Lumpur',
    text: 'Good communication, on-time delivery and neat referencing. Recommended for busy working students.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Highlights under hero */}
      <section className="section section-muted">
        <div className="container highlight-strip">
          <div className="highlight-item">
            <div className="highlight-label">Turnitin Report</div>
            <div className="highlight-value">Available on Request</div>
          </div>
          <div className="highlight-item">
            <div className="highlight-label">Plagiarism</div>
            <div className="highlight-value">100% Plagiarism-Free Work</div>
          </div>
          <div className="highlight-item">
            <div className="highlight-label">Guarantee</div>
            <div className="highlight-value">A+ Grade Assistance</div>
          </div>
          <div className="highlight-item">
            <div className="highlight-label">Support</div>
            <div className="highlight-value">24/7 Malaysia & WhatsApp</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Services Offered</div>
            <h2 className="section-title">
              Assignment Writing Services in Malaysia
            </h2>
            <p className="section-subtitle">
              From essays and homework to thesis and online exams, our best
              assignment helpers in Malaysia cover everything at cheap prices.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Simple process */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">How It Works</div>
            <h2 className="section-title">
              Simple Process to Get Assignment Help
            </h2>
            <p className="section-subtitle">
              Impress your professors and score higher grades in just four
              simple steps.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={step.title} className="step-card">
                <div className="step-label">Step {index + 1}</div>
                <div className="step-title">{step.title}</div>
                <p style={{ fontSize: '0.85rem', color: '#4b5563' }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats + features */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gap: '1.5rem' }}>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div>
            <div className="section-header">
              <div className="section-eyebrow">Why Choose Us</div>
              <h2 className="section-title">
                Quick Assignment Help from Malaysian Experts
              </h2>
            </div>

            <div className="features-grid">
              {features.map((f) => (
                <div key={f.title} className="feature-card">
                  <div className="feature-title">{f.title}</div>
                  <p style={{ fontSize: '0.85rem', color: '#4b5563' }}>
                    {f.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">FAQs</div>
            <h2 className="section-title">
              Questions Students Usually Ask Us
            </h2>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <div key={item.q} className="faq-item">
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Reviews</div>
            <h2 className="section-title">What Malaysian Students Say</h2>
          </div>

          <div className="reviews-grid">
            {reviews.map((r) => (
              <article key={r.name} className="review-card">
                <div className="review-name">{r.name}</div>
                <div className="review-location">{r.location}</div>
                <p className="review-text">“{r.text}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Facing Issues with Assignments? Talk to Our Experts Now
            </h2>
            <p className="section-subtitle">
              Share your topic and deadline to get an instant quote for
              Malaysia-specific assignment help.
            </p>
          </div>
          <div className="hero-cta-row">
            <a href="/contact" className="btn">
              Request a Call Back
            </a>
            <a href="/contact" className="btn btn-outline">
              Download Our App
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
