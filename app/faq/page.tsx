import React from 'react'

import { SiteHeader } from '@/components/layout/site-header'
import FaqHero from '@/components/sections/FaqHero'
import FAQ from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/footer'



const page = () => {
  return (
    <div>

      <SiteHeader />

      <main>
    <FaqHero />
    <FAQ/>
      </main>

      <Footer />

    </div>
  )
}

export default page
