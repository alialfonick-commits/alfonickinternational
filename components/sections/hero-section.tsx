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
            className="pointer-events-none absolute left-1/2 top-[6%] h-[84vw] min-h-155 w-[122vw] min-w-245 max-w-475 rounded-t-full bg-[#B81C15]/10 will-change-transform"
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
              <p className="font-archivo mb-6 text-[11px] font-medium tracking-[0.34em] text-white/78 sm:mb-7">
                Intelligence, unleashed.
              </p>

              <h1 className="font-archivo max-w-280 text-balance text-[38px] font-semibold leading-[0.96] tracking-tighter text-white sm:text-[56px] md:text-[74px] lg:text-[92px] 2xl:text-[106px] xl:text-[90px]">
                Marketing agency for
                <br className="hidden sm:block" /> creative business solutions
              </h1>

              <p className="mt-6 max-w-230 font-[Arial] text-[14px] leading-[1.45] text-white/88 sm:mt-7 sm:text-[15px] md:text-[17px]">
                We specialize in website development, branding, and promotion
                for developers, large manufacturing companies, transportation
                companies, and FMCG companies.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">
                <Link
                  href="#contact"
                  className="font-archivo group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#D93433] px-6 text-[12px] font-semibold uppercase tracking-[-0.01em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B81C15] hover:shadow-[0_12px_30px_rgba(217,52,51,0.35)] sm:min-h-12.5 sm:px-7"
                >
                  Discuss the Project
                  <span className="size-2 rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#contact"
                  className="font-archivo group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 text-[12px] font-semibold uppercase tracking-[-0.01em] text-[#B81C15] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5D5D2] hover:shadow-[0_12px_30px_rgba(255,255,255,0.14)] sm:min-h-12.5 sm:px-7"
                >
                  Get Free Quote
                  <span className="size-2 rounded-full bg-[#B81C15] transition-transform duration-300 group-hover:translate-x-1" />
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