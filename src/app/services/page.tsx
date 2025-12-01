// app/services/page.tsx
import ServiceCard, { type Service } from '../../components/ServiceCard'

const services: Service[] = [
  {
    title: 'Essay Writing Help',
    description:
      'Human-written essays with proper structure, references and formatting based on your rubric.',
  },
  {
    title: 'Homework Helper Malaysia',
    description:
      'Daily homework support for diploma, degree and masters students across Malaysian universities.',
  },
  {
    title: 'Thesis & Dissertation Assistance',
    description:
      'End-to-end help for proposal, chapters, analysis and final proof-reading.',
  },
]

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Our Services</div>
          <h1 className="section-title">Assignment Help in Malaysia</h1>
          <p className="section-subtitle">
            Explore the core services offered by MyAssignmentHelp.my. This page
            currently uses static demo content – you can later connect it with
            your CMS or API.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
