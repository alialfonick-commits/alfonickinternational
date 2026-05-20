"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function SiteHeader() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateHeader = () => {
      const progress = clamp(window.scrollY / 320, 0, 1);
      setScrollProgress(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateHeader);
    };

    updateHeader();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const headerY = scrollProgress * -10;
  const logoScale = 1 - scrollProgress * 0.035;
  const buttonScale = 1 - scrollProgress * 0.025;
  const buttonBgOpacity = 0.08 + scrollProgress * 0.16;
  const buttonBorderOpacity = 0.28 + scrollProgress * 0.12;

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full px-4 pt-5 sm:px-6 sm:pt-7 lg:px-14 lg:pt-9 xl:px-14.5"
      style={{
        transform: `translateY(${headerY}px)`,
      }}
    >
      <div className="mx-auto flex max-w-420 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Alfonick International"
          className="inline-flex origin-left items-center transition-transform duration-300 ease-out"
          style={{
            transform: `scale(${logoScale})`,
          }}
        >
          <Image
            src="/images/alfonick-logo.png"
            alt="Alfonick International"
            width={160}
            height={48}
            priority
            className="h-auto w-29.5 sm:w-35 lg:w-38.5"
          />
        </Link>

        {/* Book Button */}
        <Link
          href="#contact"
          className="group font-archivo inline-flex origin-right items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-3 text-[12px] font-medium text-white shadow-[0_0_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 ease-out hover:border-[#D93433]/80 hover:bg-white/8 sm:gap-3 sm:pr-5 sm:text-[15px]"
          style={{
            transform: `scale(${buttonScale})`,
            backgroundColor: `rgba(0, 0, 0, ${buttonBgOpacity})`,
            borderColor: `rgba(255, 255, 255, ${buttonBorderOpacity})`,
          }}
        >
          <span className="grid size-8 place-items-center rounded-full bg-[#D93433] text-white transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-[#B81C15] sm:size-10">
            <ArrowUpRight
              size={17}
              strokeWidth={2.2}
              className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>

          <span className="hidden whitespace-nowrap sm:inline">Book a Demo</span>
          <span className="whitespace-nowrap sm:hidden">Book</span>
        </Link>
      </div>
    </header>
  );
}