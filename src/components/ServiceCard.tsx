// components/ServiceCard.tsx

export type Service = {
    title: string
    description: string
    tag?: string
  }
  
  type Props = {
    service: Service
  }
  
  export default function ServiceCard({ service }: Props) {
    return (
      <article className="service-card">
        <div className="service-title">{service.title}</div>
        {service.tag && <div className="service-tag">{service.tag}</div>}
        <p className="service-desc">{service.description}</p>
      </article>
    )
  }
  