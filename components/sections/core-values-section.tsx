"use client";

import { useEffect, useRef, useState } from "react";

type ValueLabel = {
  label: string;
  x: number;
  y: number;
  rotate: string;
  delay: number;
};

const valueLabels: ValueLabel[] = [
  { label: "Customer Support", x: 36, y: 38, rotate: "-10deg", delay: 0 },
  { label: "Passion", x: 59, y: 34, rotate: "12deg", delay: 110 },
  { label: "Positive Experience", x: 51, y: 47, rotate: "-4deg", delay: 220 },
  { label: "Trustworthiness", x: 35, y: 56, rotate: "8deg", delay: 330 },
  { label: "Customer Focus", x: 63, y: 56, rotate: "-9deg", delay: 440 },
  { label: "Long-Term Relationships", x: 53, y: 67, rotate: "5deg", delay: 550 },
  { label: "Innovation", x: 34, y: 73, rotate: "-6deg", delay: 660 },
  { label: "Collaboration", x: 66, y: 73, rotate: "10deg", delay: 770 },
  { label: "Personalization", x: 48, y: 82, rotate: "-8deg", delay: 880 },
  { label: "Reliability", x: 65, y: 44, rotate: "7deg", delay: 990 },
  { label: "Quality", x: 43, y: 30, rotate: "4deg", delay: 1100 },
];

export function CoreValuesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasEnteredView) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      const frame = requestAnimationFrame(() => setHasEnteredView(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        setHasEnteredView(true);
        observer.disconnect();
      },
      {
        root: null,
        threshold: 0.35,
        rootMargin: "-8% 0px -12% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasEnteredView]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-10 xl:px-12"
    >
      <style>
        {`

          @keyframes valueDropSettle {
            0% {
              opacity: 0;
              transform: translate3d(-50%, calc(-50% - var(--drop-distance)), 0) rotate(var(--value-rotate)) scale(0.94);
            }
            48% {
              opacity: 1;
              transform: translate3d(-50%, calc(-50% + 30px), 0) rotate(var(--value-rotate)) scale(1.03);
            }
            66% {
              transform: translate3d(-50%, calc(-50% - 16px), 0) rotate(var(--value-rotate)) scale(0.985);
            }
            82% {
              transform: translate3d(-50%, calc(-50% + 8px), 0) rotate(var(--value-rotate)) scale(1.01);
            }
            100% {
              opacity: 1;
              transform: translate3d(-50%, -50%, 0) rotate(var(--value-rotate)) scale(1);
            }
          }
        `}
      </style>

      <div className="mx-auto max-w-420">
        <div className="relative flex items-center justify-center">
          <h2
            aria-label="Values"
            className="font-archivo pointer-events-none select-none text-center text-[clamp(5.4rem,22vw,21rem)] font-black uppercase leading-none tracking-[-0.08em] text-[#222222]"
          >
            VALUES
          </h2>

          <div
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#B81C15] bg-white/45 backdrop-blur-md"
            style={{
              width: "clamp(20rem, 100%, 4rem)",
              height: "clamp(20rem, 100%, 4rem)",
            }}
          >
            {/* <div className="absolute inset-[7%] rounded-full bg-[radial-gradient(circle_at_36%_28%,rgba(255,255,255,0.98)_0%,rgba(245,245,245,0.82)_18%,rgba(189,189,189,0.42)_41%,rgba(34,34,34,0.2)_67%,rgba(255,255,255,0.55)_100%)]" /> */}
            {/* <div className="absolute inset-[12%] rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.7),transparent_36%,rgba(184,28,21,0.18)_58%,transparent_82%)]" /> */}
            {/* <div
              className="absolute inset-[10%] rounded-full opacity-45"
              style={{
                background:
                  "conic-gradient(from 120deg, transparent, rgba(255,255,255,0.92), transparent, rgba(184,28,21,0.24), transparent)",
                animation: "valuesSphereShine 16s linear infinite",
              }}
            /> */}
            {/* <div className="absolute inset-0.5 rounded-full ring-1 ring-white/70" /> */}

            <div className="absolute inset-0" style={{ "--drop-distance": "clamp(150px, 36vw, 330px)" } as React.CSSProperties}>
              {valueLabels.map((item) => (
                <span
                  key={item.label}
                  className="font-archivo absolute z-10 max-w-[58%] whitespace-nowrap rounded-full bg-[#B81C15] px-2.5 py-1.5 text-center text-[9px] font-semibold leading-none text-white shadow-[0_15px_35px_rgba(184,28,21,0.32)] sm:px-3.5 sm:py-2 sm:text-[11px] md:px-4 md:text-[12px] lg:text-[13px]"
                  style={
                    {
                      left: `${item.x}%`,
                      top: `${item.y}%`,
                      "--value-rotate": item.rotate,
                      opacity: hasEnteredView ? undefined : 0,
                      transform: hasEnteredView
                        ? undefined
                        : "translate3d(-50%, calc(-50% - var(--drop-distance)), 0) rotate(var(--value-rotate)) scale(0.94)",
                      animation: hasEnteredView
                        ? `valueDropSettle 1120ms cubic-bezier(0.16, 1, 0.3, 1) ${item.delay}ms both`
                        : "none",
                    } as React.CSSProperties
                  }
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
