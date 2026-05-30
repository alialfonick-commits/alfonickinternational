"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SLIDE_DURATION = 4800;

const testimonials = [
  {
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "Helena Wound",
    role: "Business Owner",
    // image: "/images/personimage1.webp",
    image: "/images/testimonial_people.webp",
  },
  {
    quote:
      "Alfonick helped us shape our brand direction with clarity, strong visuals, and a digital experience that feels premium, strategic, and conversion focused.",
    name: "Sarah Mitchell",
    role: "Founder",
    // image: "/images/personimage2.webp",
    image: "/images/testimonial_people.webp",

  },
  {
    quote:
      "The team understood our business goals quickly and delivered a clean strategy, modern design system, and smooth website experience.",
    name: "Daniel Brooks",
    role: "Marketing Director",
    // image: "/images/personimage3.webp",
    image: "/images/testimonial_people.webp",

  },
];

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const nextProgress = Math.min(elapsed / SLIDE_DURATION, 1);

      setProgress(nextProgress);

      if (nextProgress >= 1) {
        setPreviousIndex(activeIndex);
        setActiveIndex((current) => (current + 1) % testimonials.length);
        startTimeRef.current = timestamp;
        setProgress(0);
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [activeIndex]);

  const goToSlide = (index: number) => {
    if (index === activeIndex) return;

    setPreviousIndex(activeIndex);
    setActiveIndex(index);
    setProgress(0);
    startTimeRef.current = null;
  };

  return (
    <section className="overflow-hidden bg-[#222222] px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-10 xl:px-12">
      <div className="mx-auto max-w-420">
        <div className="grid items-center lg:grid-cols-[300px_1fr_36px] xl:grid-cols-[380px_1fr_46px] 2xl:grid-cols-[430px_1fr_50px] gap-2">

          {/* Left single image */}
          <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-[14px] lg:max-w-[320px]">
            {testimonials.map((item, index) => {
              const isActive = index === activeIndex;
              const isPrevious = index === previousIndex;

              return (
                <div
                  key={item.name}
                  className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      ? "translateY(0)"
                      : isPrevious
                      ? "translateY(-24px)"
                      : "translateY(24px)",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>


          {/* Text vertical slider */}
          <div className="relative overflow-hidden text-center text-white min-h-[430px] md:min-h-[390px] lg:min-h-[340px] lg:text-left xl:min-h-[350px]">
          {/* Text section */}
          <div className="relative overflow-hidden text-center text-white lg:text-left lg:h-full h-92.5">
            {testimonials.map((item, index) => {
              const isActive = index === activeIndex;
              const isPrevious = index === previousIndex;

              return (
                <article
                  key={item.name}
                  className="absolute inset-0 flex flex-col md:justify-between justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      ? "translateY(0)"
                      : isPrevious
                      ? "translateY(-76px)"
                      : "translateY(76px)",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div>
                    <Quote
                      size={58}
                      strokeWidth={0}
                      fill="currentColor"
                      className="mx-auto mb-4 text-[#D93433] lg:mx-0 sm:size-17 xl:size-19"
                    />

                    <p className="mx-auto max-w-245 font-[Arial] text-[21px] leading-[1.2] text-white sm:text-[25px] md:text-[28px] lg:mx-0">
                      {item.quote}
                    </p>
                  </div>

                  <div className="mt-9 sm:mt-11 xl:mt-14">
                    <h3 className="font-archivo text-[25px] font-bold leading-none tracking-[-0.03em] text-white sm:text-[30px] xl:text-[34px]">
                      {item.name}
                    </h3>

                    <p className="mt-2 font-[Arial] text-[17px] leading-none text-white sm:text-[20px] xl:text-[22px]">
                      {item.role}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
          </div>

          {/* Desktop dots */}
          <div className="hidden flex-col items-center justify-center gap-3 lg:flex">
            {testimonials.map((_, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden rounded-full transition-all cursor-pointer duration-300 ${
                    isActive
                      ? "h-11 w-3 bg-white/30"
                      : "size-3 bg-white hover:bg-[#D93433]"
                  }`}
                >
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full rounded-full bg-[#D93433]"
                      style={{ height: `${progress * 100}%` }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile dots */}
        <div className="mt-8 flex items-center justify-center gap-3 lg:hidden">
          {testimonials.map((_, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  isActive ? "h-3 w-12 bg-white/30" : "size-3 bg-white"
                }`}
              >
                {isActive && (
                  <span
                    className="absolute left-0 top-0 h-full rounded-full bg-[#D93433]"
                    style={{ width: `${progress * 100}%` }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}