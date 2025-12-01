// components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <div className="logo">
            <span>My Assignment Help Malaysia</span>
            <span>Trusted · Affordable · Plagiarism-Free</span>
          </div>
          <p style={{ marginTop: '0.6rem', fontSize: '0.85rem' }}>
            We provide model assignments and study materials to help Malaysian
            students learn better. These are not meant to be submitted as it is.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Quick Links</div>
          <div className="footer-links">
            <Link href="/services">Our Services</Link>
            <Link href="/experts">Our Experts</Link>
            <Link href="/reviews">Student Reviews</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>

        <div>
          <div className="footer-col-title">Assignment Help</div>
          <div className="footer-links">
            <span>Management Assignment Help</span>
            <span>IT Assignment Help</span>
            <span>Nursing Assignment Help</span>
            <span>Law Assignment Helper</span>
            <span>Programming Assignment Helper</span>
            <span>Finance Assignment Help</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div>
          Disclaimer: The reference papers provided by MyAssignmentHelp.my serve
          as model papers for students and are not to be submitted as it is.
        </div>
        <div style={{ marginTop: '0.6rem' }}>
          © {new Date().getFullYear()} My Assignment Help Malaysia. All rights
          reserved.
        </div>
      </div>
    </footer>
  )
}
