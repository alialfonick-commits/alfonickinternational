import React from 'react'


import { SiteHeader } from '@/components/layout/site-header'
import AboutHero from '@/components/sections/AboutHero'
import AboutCompany from '@/components/sections/AboutCompany'
import BrandMarquee from '@/components/sections/BrandMarquee'
import Process from '@/components/sections/Process'
import AboutWhyChoose from '@/components/sections/AboutWhyChoose'
import PlatformSlider from '@/components/sections/PlatformSlider'
import AgencySnap from '@/components/sections/AgencySnap'
import FAQ from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/footer'
import { CoreValuesSection } from '@/components/sections/core-values-section'


// import { Footer } from '@/components/sections/footer'

const page = () => {
  return (
    <div>

      <SiteHeader />

      <main>

        <AboutHero />
        <AboutCompany />
        <BrandMarquee />
        <Process />
        <AboutWhyChoose />
        <CoreValuesSection />
        <PlatformSlider />
        <AgencySnap />
        <FAQ />

      </main>

      <Footer />

    </div>
  )
}

export default page
