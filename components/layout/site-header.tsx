"use client";

import Image from "next/image";
import Link from "next/link";
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

  return (
    <header
    className={`fixed left-0 top-0 z-50 w-full px-4 pt-5 transition-all duration-300 sm:px-6 sm:pt-7 lg:px-14 lg:pt-9 xl:px-14.5 ${
      scrollProgress > 0.05
        ? "bg-[#22222245] backdrop-blur-[20px] pt-5! pb-3!"
        : "bg-transparent"
    }`}
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
            src="/images/alfonick.webp"
            alt="Alfonick International"
            width={160}
            height={48}
            priority
            className="h-auto w-29.5 sm:w-35 lg:w-38.5"
          />
        </Link>

        <Link href="#" className="headerBtn group border rounded-full md:py-3 sm:py-4 py-3! sm:pr-5 pr-3 sm:pl-15 pl-12 hover:pr-15 hover:pl-5 active:pl-5 sm:active:pr-15 active:pr-12 text-white transition-all duration-300">
          <span className="inline-block transition-all duration-300 lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]">
            Book A Demo
          </span>
        </Link>

      </div>
    </header>
  );
}
