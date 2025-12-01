// components/Header.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header-inner">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="My Assignment Help Logo"
            width={120}
            height={30}
            priority
            style={{ height: 'auto', width: 'auto' }}
          />
        </Link>

        {/* NAVIGATION (desktop) */}
        <nav className="nav">

          {/* HOME */}
          <Link href="/">Home</Link>

          {/* SERVICES DROPDOWN */}
          <div className="dropdown">
            <span className="dropdown-trigger">
              Services <span style={{ fontSize: '12px' }}>▾</span>
            </span>

            <div className="absolute top-full left-0 p-4 w-48 bg-white border border-gray-200 rounded shadow-lg z-10 display-none dropdown-menu">  

              <Link href="/services/essay-writing" className="dropdown-item">
                Essay Writing Service
              </Link>
              <div className="dropdown-separator"></div>

              <Link href="/services/homework-help" className="dropdown-item">
                Homework Helper
              </Link>
              <div className="dropdown-separator"></div>

              <Link href="/services/thesis-writing" className="dropdown-item">
                Thesis Writing Service
              </Link>
              <div className="dropdown-separator"></div>

              <Link href="/services/online-exam-help" className="dropdown-item">
                Online Exam Help
              </Link>
              <div className="dropdown-separator"></div>

              <Link href="/services/do-my-assignment" className="dropdown-item">
                Do My Assignment
              </Link>
              <div className="dropdown-separator"></div>

              <Link href="/services/programming-help" className="dropdown-item">
                Programming Assignment Help
              </Link>

            </div>
          </div>

          {/* OTHER MENU ITEMS */}
          <Link href="/experts">Experts</Link>
          <Link href="/questions">Questions</Link>
          <Link href="/answers">Answers</Link>
          <Link href="/reviews">Reviews 4.9/5</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        {/* CTA BUTTONS */}
        <div className="header-cta">
          <Link href="/contact" className="btn btn-sm btn-outline">
            Contact Us
          </Link>
          <Link href="/contact" className="btn btn-sm">
            Order Now
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="header-mobile-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span>☰</span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`container header-mobile-menu ${open ? 'open' : ''}`}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>

        {/* mobile services dropdown simple */}
        <details style={{ padding: '0.4rem 0' }}>
          <summary>Services</summary>
          <div style={{ paddingLeft: '1rem', display: 'grid', gap: '0.3rem' }}>
            <Link href="/services/essay-writing">Essay Writing Service</Link>
            <Link href="/services/homework-help">Homework Helper</Link>
            <Link href="/services/thesis-writing">Thesis Writing Service</Link>
            <Link href="/services/online-exam-help">Online Exam Help</Link>
            <Link href="/services/do-my-assignment">Do My Assignment</Link>
            <Link href="/services/programming-help">Programming Assignment Help</Link>
          </div>
        </details>

        <Link href="/experts" onClick={() => setOpen(false)}>Experts</Link>
        <Link href="/questions" onClick={() => setOpen(false)}>Questions</Link>
        <Link href="/answers" onClick={() => setOpen(false)}>Answers</Link>
        <Link href="/reviews" onClick={() => setOpen(false)}>Reviews 4.9/5</Link>
        <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>

        <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
          <Link href="/contact" className="btn btn-sm btn-outline">
            Contact
          </Link>
          <Link href="/contact" className="btn btn-sm">
            Order Now
          </Link>
        </div>
      </div>
    </header>
  )
}
