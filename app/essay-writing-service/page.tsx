import type { Metadata } from 'next'
import Header from '@/components/header'
import EssayHeroSection from '@/components/essay-hero-section'
import EssayTypesSection from '@/components/essay-types-section'
import EssayGenuineSection from '@/components/essay-genuine-section'
import EssayCustomSection from '@/components/essay-custom-section'
import EssayFormattingSection from '@/components/essay-formatting-section'
import StatsSection from '@/components/stats-section'
import FAQSection from '@/components/faq-section'
import Footer from '@/components/footer'
import EssayWhyChooseUsBar from '@/components/essay-why-choose-us-bar'
import EssayHireHelperSection from '@/components/essay-hire-helper-section'

export const metadata: Metadata = {
  title: 'Essay Writing Service Malaysia | My Assignment Help',
  description:
    'Professional essay writing services in Malaysia. Get high-quality essays from experienced writers. All essay types covered - Expository, Descriptive, Narrative, and more.',
  openGraph: {
    title: 'Essay Writing Service Malaysia | My Assignment Help',
    description:
      'Professional essay writing services in Malaysia. Get high-quality essays from experienced writers.',
  },
}

export default function EssayWritingService() {
  return (
    <main className="bg-white">
      <Header />
      <EssayHeroSection />
      <EssayWhyChooseUsBar />
      <EssayHireHelperSection />
      <EssayTypesSection />
      <EssayGenuineSection />
      <EssayCustomSection />
      <EssayFormattingSection />
      <StatsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
