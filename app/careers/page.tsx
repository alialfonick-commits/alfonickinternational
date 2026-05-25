import React from 'react'

import { SiteHeader } from '@/components/layout/site-header'
import CareerHero from '@/components/sections/CareerHero'
import WhyWork from '@/components/sections/WhyWork'
import ApplicationProcess from '@/components/sections/ApplicationProcess'
// import { AgencySnapsSection } from '@/components/sections/agency-snaps-section'
import { CareerAgencySnap }  from '@/components/sections/CareerAgencySnap'
import { Footer } from '@/components/sections/footer'



const page = () => {
  return (
    <div>

      <SiteHeader />

      <main>
        <CareerHero />
        <WhyWork />
        <ApplicationProcess />
        {/* <AgencySnapsSection />   */}
        <CareerAgencySnap />

      </main>

      <Footer />

    </div>
  )
}

export default page
