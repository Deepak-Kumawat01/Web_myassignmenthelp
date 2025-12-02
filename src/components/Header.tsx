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
        <Link
          href="/"
          style={{
            alignItems: 'center',
            display: 'flex',
            borderRadius: '8px',
            backgroundColor: 'white',
            padding: '4px',
          }}
        >
          <Image
            src="/logo.png"
            alt="My Assignment Help Logo"
            width={120}
            height={60}
            priority
            style={{
              width: '140px',
              height: '60px',
            }}
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav">
          <Link
            style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}
            href="/"
          >
            Home
          </Link>

          <div className="dropdown">
            <span className="dropdown-trigger">
              Services{' '}
              <span style={{ fontSize: '18px', marginLeft: '4px' }}>▾</span>
            </span>

            <div className="dropdown-menu">
              <Link href="/essay-writing" className="dropdown-item">
                Essay Writing Service
              </Link>
              <div className="dropdown-separator"></div>

              <Link href="/homework-help" className="dropdown-item">
                Homework Helper
              </Link>
              <div className="dropdown-separator"></div>

              <Link href="/thesis-writing" className="dropdown-item">
                Thesis Writing Service
              </Link>
              <div className="dropdown-separator"></div>

              <Link href="/online-exam-help" className="dropdown-item">
                Online Exam Help
              </Link>
              <div className="dropdown-separator"></div>

              <Link
                href="/do-my-assignment"
                className="dropdown-item"
                style={{ fontWeight: 600 }}
              >
                Do My Assignment
              </Link>
              <div className="dropdown-separator"></div>

              <Link href="/programming-help" className="dropdown-item">
                Programming Assignment Help
              </Link>
            </div>
          </div>

          <Link
            style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}
            href="/experts"
          >
            Experts
          </Link>
          <Link
            style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}
            href="/questions"
          >
            Questions
          </Link>
          <Link
            style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}
            href="/answers"
          >
            Answers
          </Link>

          <span className="flex items-center gap-2">
            <Link
              href="/reviews"
              style={{ color: 'white', marginRight: '4px' }}
            >
              Reviews
            </Link>
            <span className="review-badge">4.9/5</span>
          </span>

          <Link
            style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}
            href="/blog"
          >
            Blog
          </Link>
        </nav>

        <div className="header-cta">
          <Link href="/contact">
            <button className="order-btn">Order Now &gt;&gt;</button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="header-mobile-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span style={{ color: 'white', fontSize: '24px' }}>☰</span>
        </button>
      </div>
    </header>
  )
}
