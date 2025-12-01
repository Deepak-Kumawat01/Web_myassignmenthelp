// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'My Assignment Help Malaysia | Assignment Helper',
  description:
    'My Assignment Help Malaysia is a leading assignment helper in Malaysia providing 100% AI-free assignment help.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-root">
          <Header />
          <main className="app-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
