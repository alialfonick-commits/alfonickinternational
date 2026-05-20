import { SiteHeader } from '@/components/layout/site-header'
import { AboutAgencyVideoSection } from '@/components/sections/about-agency-video-section'
import { AgencyIntroSection } from '@/components/sections/agency-intro-section'
import { AgencySnapsSection } from '@/components/sections/agency-snaps-section'
import { ArticlesSection } from '@/components/sections/articles-section'
import { BrandPotentialSection } from '@/components/sections/brand-potential-section'
import { CreativityStrategySection } from '@/components/sections/creativity-strategy-section'
import { Footer } from '@/components/sections/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSpectrumSection } from '@/components/sections/services-spectrum-section'
import { TestimonialSection } from '@/components/sections/testimonial-section'
import { ValuesSection } from '@/components/sections/values-section'

export default function HomePage () {
  return (
    <>
      <SiteHeader />

      <main>
        <HeroSection />
        {/* next section placeholder only for scroll reveal testing */}
        <AgencyIntroSection />
        <ServicesSpectrumSection />
        <ValuesSection />
        <BrandPotentialSection />
        <AboutAgencyVideoSection />
        <CreativityStrategySection />
        <TestimonialSection />
        <AgencySnapsSection />
        <ArticlesSection />
      </main>

      <Footer />
    </>
  )
}
