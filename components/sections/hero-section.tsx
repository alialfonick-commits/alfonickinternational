"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function clamp(value: number, min: number, max: number) {
 return Math.min(Math.max(value, min), max);
}

export function HeroSection() {
 const sectionRef = useRef<HTMLElement | null>(null);
 const [progress, setProgress] = useState(0);

 useEffect(() => {
  let frame = 0;

  const updateProgress = () => {
   if (!sectionRef.current) return;

   const section = sectionRef.current;
   const rect = section.getBoundingClientRect();
   const scrollable = section.offsetHeight - window.innerHeight;

   if (scrollable <= 0) {
    setProgress(0);
    return;
   }

   const next = clamp(Math.abs(rect.top) / scrollable, 0, 1);
   setProgress(next);
  };

  const onScroll = () => {
   cancelAnimationFrame(frame);
   frame = requestAnimationFrame(updateProgress);
  };

  updateProgress();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateProgress);

  return () => {
   cancelAnimationFrame(frame);
   window.removeEventListener("scroll", onScroll);
   window.removeEventListener("resize", updateProgress);
  };
 }, []);

 const heroTranslateY = progress * -22;
 const backgroundScale = 1 + progress * 0.05;
 const backgroundTranslateY = progress * -18;
 const contentTranslateY = progress * -70;
 const contentOpacity = 1 - progress * 0.32;
 const indicatorOpacity = clamp(1 - progress * 1.75, 0, 1);
 const indicatorTranslateY = progress * 20;
 const ellipseScale = 1 + progress * 0.06;

 return (
  <section ref={sectionRef} className="relative h-[165svh] bg-white">
   <div className="sticky top-0 h-svh overflow-hidden bg-black">
    <div
     className="relative h-full will-change-transform"
    // style={{
    //   transform: `translateY(${heroTranslateY}vh)`,
    // }}
    >
     {/* Background image */}
     <Image
      src="/images/hero-bg-img.png"
      alt="Alfonick hero background"
      fill
      priority
      sizes="100vw"
      className="object-cover will-change-transform"
      style={{
       transform: `translateY(${backgroundTranslateY}px) scale(${backgroundScale})`,
      }}
     />

     {/* Dark overlay */}
     <div className="absolute inset-0 bg-black/42" />

     {/* Top / bottom depth */}
     <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/70 via-black/25 to-transparent" />
     <div className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

     {/* Main big red ellipse */}
     <div
      className="pointer-events-none absolute left-1/2 top-[6%] h-[84vw] min-h-155 w-[95vw] min-w-245 max-w-475 rounded-t-full bg-[#B81C15]/10 will-change-transform"
      style={{
       transform: `translateX(-50%) scale(${ellipseScale})`,
       filter: "blur(1px)",
      }}
     />

     {/* Inner bright center glow */}
     <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D93433]/28 blur-3xl sm:h-105 sm:w-105" />

     {/* Left red atmosphere */}
     <div className="pointer-events-none absolute left-[-10%] top-[20%] h-105 w-105 rounded-full bg-[#B81C15]/20 blur-3xl" />

     {/* Content */}
     <div
      className="relative z-10 flex h-full items-center justify-center px-4 pb-28 pt-24 text-center text-white sm:px-6 sm:pt-28 lg:px-8 lg:pb-32"
      style={{
       transform: `translateY(${contentTranslateY}px)`,
       opacity: contentOpacity,
      }}
     >
      <div className="mx-auto flex max-w-295 flex-col items-center">
       <div className="relative inline-block mb-5 [&_span]:absolute sm:[&_span]:h-3 [&_span]:h-1.5 sm:[&_span]:w-3 [&_span]:w-1.5 [&_span]:border-[#FFFFFF80] [&_span]:rounded-[1px]">
        <p className="font-archivo mb-0! 2xl:text-[42px] sm:text-[28px] text-[20px] font-normal tracking-[-0.94px] text-[#EFF0F0] sm:mb-7">
         Intelligence, unleashed.
        </p>

        <span className="-left-1 top-0 border-l border-t" />

        <span className="-right-1 top-0 border-r border-t" />

        <span className="bottom-0 -left-1 border-l border-b" />

        <span className="bottom-0 -right-1 border-r border-b" />
       </div>

       <h1 className="font-archivo max-w-280 text-[30px] font-medium leading-[0.96] tracking-tighter text-white sm:text-[56px] md:text-[68px] lg:text-[79px] 2xl:text-[102px] xl:text-[90px]">
        Marketing agency for
        <br className="hidden sm:block" /> creative business solutions
       </h1>

       <p className="mt-6 max-w-230 font-[Arial] text-[14px] leading-[1.45] text-white sm:mt-7 sm:text-[15px] md:text-[16px] 2xl:text-[18px] font-normal">
        We specialize in website development, branding, and promotion
        for developers, large manufacturing companies, transportation
        companies, and FMCG companies.
       </p>

       <div className="mt-8 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">
        {/* <Link
                  href="#contact"
                  className="font-archivo group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#D93433] px-6 text-[12px] font-semibold uppercase tracking-[-0.01em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B81C15] sm:min-h-12.5 sm:px-7"
                >
                  Discuss the Project
                  <span className="size-2 rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1" />
                </Link> */}

        <Link
         href="#"
         className="font-archivo group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#B81C15] px-5 py-[18.25px] pr-11! text-[12px] sm:text-[13px] font-semibold uppercase tracking-[-0.01em] leading-[normal] text-white transition-all duration-300  hover:text-[#B81C15]"
        >
         {/* expanding white bg */}
         <span className="absolute right-5 size-2.5 rounded-full bg-[#F5D5D2] transition-all duration-500 ease-out group-hover:right-0 group-hover:h-full group-hover:w-full" />

         {/* text */}
         <span className="relative z-10">
          Discuss the Project
         </span>

         {/* icon area */}
         <div className="absolute z-10 left-0 -right-25 group-hover:-right-38.5 transition-all duration-300 top-0 bottom-0 m-auto w-fit h-fit">


          {/* arrow after hover */}
          <img
           src="images/red-arrow.webp"
           alt="Arrow Icon"
           width={16}
           height={16}
           className="size-4 scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 -rotate-40"
          />
         </div>
        </Link>

        <Link
         href="#"
         className="font-archivo group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-5 py-[18.25px] pr-11! text-[12px] sm:text-[13px] font-semibold uppercase tracking-[-0.01em] leading-[normal] text-[#B81C15] transition-all duration-300 hover:text-white! hover:bg-white"
        >
         {/* expanding white bg */}
         <span className="absolute right-5 size-2.5 rounded-full bg-[#B81C15] transition-all duration-500 ease-out group-hover:right-0 group-hover:h-full group-hover:w-full" />

         {/* text */}
         <span className="relative z-10">
          Get Free Quote
         </span>

         {/* icon area */}
         <div className="absolute z-10 left-0 -right-25 group-hover:-right-28 transition-all duration-300 top-0 bottom-0 m-auto w-fit h-fit">


          {/* arrow after hover */}
          <img
           src="images/red-arrow.webp"
           alt="Arrow Icon"
           width={16}
           height={16}
           className="size-4 scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 -rotate-40 brightness-0 invert"
          />
         </div>
        </Link>






       </div>
      </div>
     </div>

     {/* Scroll indicator */}
     <div
      className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 sm:bottom-10"
      style={{
       opacity: indicatorOpacity,
       // transform: `translateX(-50%) translateY(${indicatorTranslateY}px)`,
      }}
     >
      <Link
       href="#agency-intro"
       className="font-archivo group inline-flex h-11.5 items-center rounded-full bg-white px-6 text-[15px] font-medium text-[#222222] shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#EFF0F0]"
      >
       Scroll to Discover
      </Link>

      <Link
       href="#agency-intro"
       aria-label="Scroll to Discover"
       className="group grid size-11.5 place-items-center rounded-full bg-white text-[#222222] shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105 hover:bg-[#F5D5D2] hover:text-[#B81C15]"
      >
       <Menu
        size={20}
        strokeWidth={2}
        className="transition-transform duration-300 group-hover:rotate-90"
       />
      </Link>
     </div>
    </div>
   </div>
  </section>
 );
}