"use client";

import React from "react";
import Link from "next/link";

const CareerHero = () => {
  return (
    <section className="mt-5 mx-5 rounded-[20px] relative overflow-hidden bg-black sm:py-40 pt-35 py-20 z-0">
      
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2 
          -translate-x-1/2 -translate-y-1/2
          w-150 h-150 
          sm:w-200 sm:h-200 
          lg:w-350 lg:h-350 
          rounded-full
          bg-[radial-gradient(circle,_rgba(255,0,0,0.9)_0%,_rgba(255,0,0,0.45)_25%,_rgba(255,0,0,0.12)_55%,_transparent_100%)]
        "
      />

      {/* Badge */}
      <span
        className="relative z-20  text-white text-[16px] font-bold uppercase block text-center italic m-auto px-6 py-2 border border-[2px] border-white/50 w-fit rounded-4xl md:mb-1 mb-4"
        style={{ fontFamily: "Arial" }}
      >
        Our Gallery
      </span>

      {/* Content */}
      <div className="relative z-20 px-5 text-center xl:[&>h1]:text-[90px] lg:[&>h1]:text-[70px] md:[&>h1]:text-[50px] sm:[&>h1]:text-[36px] [&>h1]:text-[32px] [&>h1]:leading-[1.2] [&>h1]:text-white [&>p]:text-white lg:[&>p]:text-[20px] sm:[&>p]:text-[18px] [&>p]:text-[16px] [&>p]:m-auto [&>p]:max-w-225 [&_p]:font-[inter]">
        
        <h1>Join Our Team</h1>

        <p style={{ fontFamily: "Arial" }}>
          Build your future with creativity, innovation, and growth
        </p>

        <Link
          href="/careers"
          className="relative z-30 inline-block bg-white hover:bg-[#B81C15] hover:text-white transition-all duration-300 text-[18px] px-7 py-3 rounded-4xl text-[#B81C15] mt-5 cursor-pointer"
        >
          View Open Positions
        </Link>

      </div>
    </section>
  );
};

export default CareerHero;