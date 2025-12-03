'use client'

import Header from '@/components/header'
import HeroWithForm from '@/components/hero-with-form'
import ServicesGrid from '@/components/services-grid'
import ProcessSection from '@/components/process-section'
import StatsSection from '@/components/stats-section'
import QuickAssistanceGrid from '@/components/quick-assistance-grid'
import CTABanner from '@/components/cta-banner'
import FAQSection from '@/components/faq-section'
import ReviewsSection from '@/components/reviews-section'
import HireHelperSection from '@/components/hire-helper-section'
import Footer from '@/components/footer'
import DiscountBanner from '@/components/discount-banner'

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <HeroWithForm />
      <ServicesGrid />
      <DiscountBanner />
      <ProcessSection />
      <StatsSection />
      <QuickAssistanceGrid />
      <CTABanner />
      <FAQSection />
      <ReviewsSection />
      <HireHelperSection />
      <Footer />
    </main>
  )
}
