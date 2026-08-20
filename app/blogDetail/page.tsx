import React from "react";

import { SiteHeader } from "@/components/layout/site-header";
import Blogs from "@/components/sections/Blogs";
import { Footer } from "@/components/sections/footer";

import BlogSearch from "@/components/blogDetail/blogSearch";
import RecentArticle from "@/components/blogDetail/recentArticle";
import BlogCategories from "@/components/blogDetail/blogCategories";
import BlogTags from "@/components/blogDetail/blogTags";

const page = () => {
  return (
    <div>
      <SiteHeader />

      <main>
        <section className="pt-10 pb-16">
          <div className="px-5 md:px-8">
            

            {/* Main Featured Image */}
            <div className="w-full overflow-hidden rounded-[20px]">
              <img
                src="/images/unlock-blog-image.webp"
                alt="Digital Marketing"
                className="w-full object-cover"
              />
            </div>

            {/* Blog Heading */}
            <div className="mt-6">
              <p className="text-[#B81C15] text-[16px] font-semibold mb-2">
                Digital Marketing
              </p>

              <h1 className="text-[28px] md:text-[42px] leading-[1.15] font-medium text-black">
                Aladdin: Unlocking The Magic Of Imaginative Design Top-Notch
              </h1>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-4 text-[12px] text-[#777]">
                <span>By Sammy Dhani</span>

                <span className="w-[3px] h-[3px] rounded-full bg-[#999]"></span>

                <span>Nov, 13 2024</span>

                <span className="w-[3px] h-[3px] rounded-full bg-[#999]"></span>

                <span>10 Min Read</span>
              </div>
            </div>

            {/* Content + Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-12 lg:gap-16 mt-12">
              
              {/* LEFT CONTENT */}
              <article className="blog-detail-content">
                <h2 className="text-[25px] md:text-[30px] leading-tight font-medium mb-4">
                  Digital Marketing: Building Brands That Glow Online
                </h2>

                <p className="text-[14px] md:text-[15px] leading-[1.8] text-[#555] mb-7">
                  In today&apos;s competitive digital world, businesses need more
                  than just an online presence. They need a brand digital
                  marketing strategy. From increasing brand awareness to
                  connecting qualified leads, digital marketing helps businesses
                  connect with the right audience at the right time.
                </p>

                <h2 className="text-[25px] md:text-[30px] leading-tight font-medium mb-4">
                  Why Digital Marketing Matters
                </h2>

                <p className="text-[14px] md:text-[15px] leading-[1.8] text-[#555] mb-7">
                  Digital marketing allows businesses to reach potential
                  customers across multiple online channels, including search
                  engines, social media, email and websites. Unlike traditional
                  marketing, it provides real-time performance insights,
                  allowing brands to optimize campaigns and maximize return on
                  investment.
                </p>

                {/* Content Image */}
                <div className="w-full rounded-[20px] mb-8 overflow-hidden">
                <img
                src="/images/unlock-inner-image.webp"
                alt="Digital Marketing"
                className="w-full object-cover"
              />
                </div>

                <h2 className="text-[25px] md:text-[30px] leading-tight font-medium mb-4">
                  Core Digital Marketing Services
                </h2>

                <p className="text-[14px] md:text-[15px] leading-[1.8] text-[#555] mb-4">
                  A successful digital marketing strategy combines multiple
                  services that work together to achieve business goals.
                </p>

                <ul className="text-[14px] md:text-[15px] leading-[2] text-[#555] list-disc pl-5 mb-8">
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Pay Per Click (PPC) Advertising</li>
                  <li>Social Media Marketing</li>
                  <li>Content Marketing</li>
                  <li>Email Marketing</li>
                  <li>Conversion Rate Optimization (CRO)</li>
                  <li>Analytics &amp; Performance Tracking</li>
                </ul>

                <h2 className="text-[25px] md:text-[30px] leading-tight font-medium mb-4">
                  How We Help Businesses Grow
                </h2>

                <p className="text-[14px] md:text-[15px] leading-[1.8] text-[#555] mb-8">
                  At Alfonick, we develop customized digital marketing strategies
                  tailored to each client&apos;s goals. Our team combines
                  creative content, strategic planning and performance-driven
                  campaigns to help businesses stand out, attract the right
                  audience and achieve sustainable growth.
                </p>

                <h2 className="text-[25px] md:text-[30px] leading-tight font-medium mb-4">
                  Conclusion
                </h2>

                <p className="text-[14px] md:text-[15px] leading-[1.8] text-[#555]">
                  Digital marketing is no longer optional. It&apos;s an essential
                  part of every successful business strategy. By leveraging the
                  right channels, creating valuable content and continuously
                  optimizing campaigns, businesses can stay ahead of the
                  competition and build meaningful connections with their
                  audience.
                </p>
              </article>

              {/* RIGHT SIDEBAR */}
              <aside className="space-y-9">
                <BlogSearch />

                <RecentArticle />

                <BlogCategories />

                <BlogTags />
              </aside>
            </div>
          </div>
        </section>

        {/* Existing Blog Cards Section */}
        <Blogs />
      </main>

      <Footer />
    </div>
  );
};

export default page;