import Link from 'next/link'

export default function Hero() {
  return (
    <section className="section">
      <div className="container hero" style={{ gap: '2rem' }}>
        
        {/* LEFT SIDE CONTENT */}
        <div style={{ flex: 1 }}>
          <h1 className="hero-title">
            Best Assignment Helper Malaysia |{' '}
            <span className="hero-highlight">Trusted, Affordable</span> & Fast Delivery
          </h1>

          <p className="hero-subtitle" style={{ marginTop: '1rem' }}>
            My Assignment Help Malaysia is a leading assignment helper in Malaysia. 
            We provide 100% AI-free assignment help to Malaysian students at all levels — 
            from high school to university. Our team consists of real assignment helpers 
            and 100% human writers, all experienced and qualified, ready to assist with essays, 
            FYPs, reports, theses, case studies, research papers, dissertations, and more.
            We offer affordable assignment help without compromising on quality.
            If you need reliable help with your assignments, contact us today!
          </p>

          {/* Highlight Boxes (Turnitin, Plagiarism Free, etc.) */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginTop: '2rem'
          }}>

            <div style={{
              background: '#fcdcdc',
              padding: '1rem',
              borderRadius: '10px',
              fontWeight: 600
            }}>
              🔴 Turnitin Report
            </div>

            <div style={{
              background: '#e2e5ff',
              padding: '1rem',
              borderRadius: '10px',
              fontWeight: 600
            }}>
              🔵 100% Plagiarism Free
            </div>

            <div style={{
              background: '#d5f6d0',
              padding: '1rem',
              borderRadius: '10px',
              fontWeight: 600
            }}>
              👁️ With Assignment Pre-Reading Service
            </div>

            <div style={{
              background: '#f3f8b6',
              padding: '1rem',
              borderRadius: '10px',
              fontWeight: 600
            }}>
              👍 A+ Guaranteed
            </div>

          </div>

          {/* Trust Logos */}
          {/* <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            background: '#0a1332',
            color: 'white',
            borderRadius: '6px',
            marginTop: '2rem'
          }}>
            <div style={{ padding: '1rem', textAlign: 'center' }}>⭐ Trustpilot</div>
            <div style={{ padding: '1rem', textAlign: 'center' }}>⭐ Site Jabber</div>
            <div style={{ padding: '1rem', textAlign: 'center' }}>⭐ MAH Reviews</div>
          </div> */}
        </div>


        {/* RIGHT SIDE FORM */}
        <div style={{
          flex: 1,
          background: 'white',
          padding: '1.5rem',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          
          <div style={{
            background: '#0d1b3b',
            color: 'white',
            padding: '0.7rem 1rem',
            borderRadius: '6px',
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            Hire An Assignment Helper
          </div>

          {/* 2-column form grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.7rem'
          }}>

            <input className="form-input" placeholder="Enter Your Name" />
            <input className="form-input" placeholder="Enter Your Email" />

            <select className="form-input">
              <option>Malaysia (+60)</option>
              <option>India (+91)</option>
            </select>

            <input className="form-input" placeholder="Enter Contact" />

            <input className="form-input" placeholder="Paper length" />
            <select className="form-input">
              <option>Education Level</option>
            </select>

            <input className="form-input" placeholder="Deadline" />
            <input className="form-input" placeholder="Subject Name" />

            <select className="form-input">
              <option>Referencing Style</option>
            </select>

            <select className="form-input">
              <option>Paper Type</option>
            </select>
          </div>

          {/* Large text area */}
          <textarea
            className="form-input"
            placeholder="Enter Question"
            style={{ marginTop: '0.7rem', height: '80px' }}
          ></textarea>

          {/* File Upload + Add More */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '0.7rem'
          }}>
            <input type="file" />
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
                fontSize: '1rem'
              }}
            >
              Order Now
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
