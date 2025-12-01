// app/contact/page.tsx
export default function ContactPage() {
    return (
      <section className="section section-muted">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">Contact</div>
            <h1 className="section-title">Contact My Assignment Help Malaysia</h1>
            <p className="section-subtitle">
              For now this is a static contact section. Later you can replace this
              with a functional form + WhatsApp / email integration.
            </p>
          </div>
  
          <div className="hero-card">
            <div className="hero-card-title">Share Your Assignment Details</div>
            <p style={{ fontSize: '0.85rem', color: '#4b5563' }}>
              WhatsApp / Email (static demo):
            </p>
            <ul
              style={{
                fontSize: '0.85rem',
                color: '#111827',
                marginTop: '0.4rem',
                paddingLeft: '1.1rem',
              }}
            >
              <li>WhatsApp: +60 XXX-XXXXXXX</li>
              <li>Email: support@myassignmenthelp.my</li>
            </ul>
            <p
              style={{
                fontSize: '0.8rem',
                color: '#6b7280',
                marginTop: '0.7rem',
              }}
            >
              Add your real contact details here and integrate with your backend
              or CRM when ready.
            </p>
          </div>
        </div>
      </section>
    )
  }
  