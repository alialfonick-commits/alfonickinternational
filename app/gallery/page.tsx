import React from 'react'

import { SiteHeader } from '@/components/layout/site-header'
import GalleryHero from '@/components/sections/GalleryHero'
import AgencyCulture from '@/components/sections/AgencyCulture'
import MomentCaptured from '@/components/sections/MomentCaptured'
import GallerySlider from '@/components/sections/GallerySlider'
import { Footer } from '@/components/sections/footer'


const page = () => {
  return (

    <div>

      <SiteHeader />

      <main>

        <GalleryHero/>
        <AgencyCulture />
        <MomentCaptured />
        <GallerySlider />

      </main>

      <Footer/>

    </div>
  )
}

export default page
