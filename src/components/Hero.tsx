export default function Hero() {
  return (
    <section className="section">
      <div
        className="container hero"
        style={{ display: 'flex', gap: '2rem', alignItems: 'stretch' }}
      >
        {/* LEFT SIDE CONTENT */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h1 className="hero-title">
              Best Assignment Helper Malaysia |{' '}
              <span className="hero-highlight">Trusted, Affordable</span> & Fast
              Delivery
            </h1>
            <p className="hero-subtitle" style={{ marginTop: '1rem' }}>
              My Assignment Help Malaysia is a leading assignment helper in
              Malaysia. We provide 100% AI-free assignment help to Malaysian
              students at all levels — from high school to university. Our team
              consists of real assignment helpers and 100% human writers, all
              experienced and qualified, ready to assist with essays, FYPs,
              reports, theses, case studies, research papers, dissertations, and
              more.
            </p>
            <p className="hero-subtitle" style={{ marginTop: '1rem' }}>
              We offer affordable assignment help without compromising on
              quality. If you need reliable help with your assignments, contact
              us today!
            </p>
          </div>

          {/* Benefit/Features List */}
          <div>
            <h2
              style={{
                marginTop: '2rem',
                marginBottom: '1rem',
                fontSize: '1.25rem',
                fontWeight: 600,
              }}
            >
              Why Students Choose Us
            </h2>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              <li
                style={{
                  background: '#fcdcdc',
                  padding: '0.8rem',
                  borderRadius: '8px',
                }}
              >
                🔴 Turnitin Report
              </li>
              <li
                style={{
                  background: '#e2e5ff',
                  padding: '0.8rem',
                  borderRadius: '8px',
                }}
              >
                🔵 100% Plagiarism Free
              </li>
              <li
                style={{
                  background: '#d5f6d0',
                  padding: '0.8rem',
                  borderRadius: '8px',
                }}
              >
                👁️ Pre-Reading Service
              </li>
              <li
                style={{
                  background: '#f3f8b6',
                  padding: '0.8rem',
                  borderRadius: '8px',
                }}
              >
                👍 A+ Guaranteed
              </li>
              <li
                style={{
                  background: '#fff4e5',
                  padding: '0.8rem',
                  borderRadius: '8px',
                }}
              >
                ✅ 24/7 Support & Live Chat
              </li>
              <li
                style={{
                  background: '#e8f7ff',
                  padding: '0.8rem',
                  borderRadius: '8px',
                }}
              >
                ✅ All Subjects Covered
              </li>
              <li
                style={{
                  background: '#e5ffe8',
                  padding: '0.8rem',
                  borderRadius: '8px',
                }}
              >
                ✅ Native Writers
              </li>
              <li
                style={{
                  background: '#f0f0f0',
                  padding: '0.8rem',
                  borderRadius: '8px',
                }}
              >
                ✅ Confidential & Secure Orders
              </li>
            </ul>
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
  )
}
