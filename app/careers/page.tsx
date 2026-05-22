import React from 'react'

import { SiteHeader } from '@/components/layout/site-header'
import CareerHero from '@/components/sections/CareerHero'
import WhyWork from '@/components/sections/WhyWork'
import ApplicationProcess from '@/components/sections/ApplicationProcess'
import { AgencySnapsSection } from '@/components/sections/agency-snaps-section'
import { Footer } from '@/components/sections/footer'



const page = () => {
  return (
    <div>

      <SiteHeader />

      <main>
        <CareerHero />
        <WhyWork />
        <ApplicationProcess />
       <AgencySnapsSection />        
      </main>

      <Footer />


    </div>
  )
}

export default page
