"use client";

import React from "react";
import Link from "next/link";
// import { ArrowDownToLine } from "lucide-react";
import { ChevronDown } from "lucide-react";

const CareerHero = () => {
  return (
    <section className="2xl:mt-5 mt-2 sm:mx-5 mx-2 rounded-[20px] relative overflow-hidden bg-black sm:py-40 pt-35 py-20 z-0">
      {/* Background Glow Layer 1 (Main Core Glow) */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 bottom-[-55%]
          -translate-x-1/2
          w-350 h-225
          sm:w-400 sm:h-250
          lg:w-475 lg:h-300
          rounded-full
          blur-[140px]
          opacity-90
          bg-[radial-gradient(ellipse_at_center,_#B81C15_0%,_rgba(184,28,21,0.55)_30%,_rgba(184,28,21,0.2)_55%,_transparent_75%)]
        "
      />

      {/* Background Glow Layer 2 (Soft outer spread like Figma) */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 bottom-[-65%]
          -translate-x-1/2
          w-450 h-300
          rounded-full
          blur-[200px]
          opacity-60
          bg-[radial-gradient(ellipse_at_center,_rgba(184,28,21,0.35)_0%,_transparent_70%)]
        "
      />

      {/* Badge */}
      <span
        className="relative z-20 text-white sm:text-[16px] text-[14px] font-bold uppercase block text-center italic m-auto px-6 py-2 border-2 border-white/50 w-fit rounded-4xl md:mb-1 mb-4"
        style={{ fontFamily: "Arial" }}
      >
        Our Careers
      </span>

      {/* Content */}
      <div className="relative z-20 px-5 text-center xl:[&>h1]:text-[90px] lg:[&>h1]:text-[70px] md:[&>h1]:text-[50px] [&>h1]:text-[36px] [&>h1]:leading-[1.2] [&>h1]:text-white [&>p]:text-white lg:[&>p]:text-[20px] sm:[&>p]:text-[18px] [&>p]:text-[16px] [&>p]:m-auto [&>p]:max-w-225 [&_p]:font-[inter]">
        <h1>Join Our Team</h1>

        <p style={{ fontFamily: "Arial" }}>
          Build your future with creativity, innovation, and growth
        </p>

        <Link
          href="/careers"
          className="relative z-30 inline-flex items-center gap-2 bg-white hover:bg-[#B81C15] hover:text-white transition-all duration-300 sm:text-[18px] font-semibold md:px-7 pl-5 pr-4 md:py-3 py-2 rounded-4xl text-[#B81C15] mt-5 cursor-pointer"
        >
          View Open Positions
          <ChevronDown size={18} />
        </Link>
      </div>
    </section>
  );
};

export default CareerHero;