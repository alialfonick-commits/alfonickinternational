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
        <section className="pt-40 lg:pb-16">
          <div className="px-5 md:px-8">


            {/* Main Featured Image */}
            <div className="w-full overflow-hidden rounded-[20px]">
              <img
                src="/images/unlock-blog-image.webp"
                alt="Digital Marketing"
                className="w-full object-cover"
              />
            </div>

            <div className="mt-6">
              <p className="text-[#B81C15] text-[16px] font-semibold mb-2">
                Digital Marketing
              </p>

              <h1 className="text-[28px] md:text-[42px] leading-[1.15] font-medium text-black">
                Aladdin: Unlocking The Magic Of Imaginative Design Top-Notch
              </h1>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-[16px] text-[#22222280]">
                <span>By Sammy Brian</span>

                <span className="flex items-center gap-2">
                  <span
                    className="w-5 h-5 bg-center bg-contain bg-no-repeat"
                    style={{ backgroundImage: "url('/images/calendar.png')" }}
                  />
                  <span>Nov, 13 2024</span>
                </span>

                <span className="flex items-center gap-2">
                  <span
                    className="w-5 h-5 bg-center bg-contain bg-no-repeat"
                    style={{ backgroundImage: "url('/images/clock (2).png')" }}
                  />
                  <span>10 Min Read</span>
                </span>
              </div>
            </div>

            {/* Content + Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-12 lg:gap-16 mt-12 ">

              {/* LEFT CONTENT */}
              <article className="blog-detail-content [&_h2]:text-[25px] [&_h2]:md:text-[30px] [&_h2]:leading-tight [&_h2]:font-medium [&_h2]:mb-3 [&_p]:text-[16px] [&_p]:md:text-[18px] [&_p]:leading-[1.8] [&_p]:text-[#555] [&_p]:mb-7 [&_ul]:text-[16px] [&_ul]:md:text-[18px] [&_ul]:leading-loose [&_ul]:text-[#555] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-8">
                <h2>
                  Digital Marketing: Building Brands That Glow Online
                </h2>

                <p>
                  In today's competitive digital world, businesses need more than just an online presence—they need a smart digital marketing strategy. From increasing brand awareness to generating qualified leads, digital marketing helps businesses connect with the right audience at the right time. With the right mix of creativity, technology, and data, companies can build lasting customer relationships and achieve measurable growth.
                </p>

                <h2>
                  Why Digital Marketing Matters
                </h2>

                <p>
                  Digital marketing allows businesses to reach potential customers across multiple online channels, including search engines, social media, email, and websites. Unlike traditional marketing, it provides real-time performance insights, enabling brands to optimize campaigns and maximize return on investment. Whether you're a startup or an established business, a strong digital presence is essential for long-term success.
                </p>

                <div className="w-full rounded-[20px] mb-8 overflow-hidden">
                  <img
                    src="/images/unlock-inner-image.webp"
                    alt="Digital Marketing"
                    className="w-full object-cover"
                  />
                </div>

                <h2>
                  Core Digital Marketing Services
                </h2>

                <p>
                  A successful digital marketing strategy combines multiple services that work together to achieve business goals:
                </p>

                <ul>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Pay Per Click (PPC) Advertising</li>
                  <li>Social Media Marketing</li>
                  <li>Content Marketing</li>
                  <li>Email Marketing</li>
                  <li>Conversion Rate Optimization (CRO)</li>
                  <li>Analytics &amp; Performance Tracking</li>
                </ul>

                <h2>
                  How We Help Businesses Grow
                </h2>

                <p>
                  At Alfonick, we develop customized digital marketing strategies tailored to each client's goals. Our team combines creative content, strategic planning, and performance-driven campaigns to help businesses strengthen their online presence, attract new customers, and achieve sustainable growth in today's digital marketplace.
                </p>

                <h2>
                  Conclusion
                </h2>

                <p>
                  Digital marketing is no longer optional—it's an essential part of every successful business strategy. By leveraging the right channels, creating valuable content, and continuously optimizing campaigns, businesses can stay ahead of the competition and build meaningful connections with their audience. Whether your goal is to increase brand awareness, generate leads, or grow revenue, a well-executed digital marketing strategy can deliver lasting results.
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

        <Blogs />
      </main>

      <Footer />
    </div>
  );
};

export default page;