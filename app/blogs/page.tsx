import React from 'react'

import { SiteHeader } from '@/components/layout/site-header'
import BlogsHero from '@/components/sections/BlogsHero'
import Blogs from '@/components/sections/Blogs'
import { Footer } from '@/components/sections/footer'



const page = () => {
    return (
        <div>
            <SiteHeader />
            <main>
                <BlogsHero />
                <Blogs />
            </main>

            <Footer />

        </div>
    )
}

export default page
