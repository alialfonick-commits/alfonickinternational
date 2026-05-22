"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const cards = [
  {
    number: "01",
    title: "UI UX Designing",
    image: "/images/agency-card-01.png",
    description:
      "We design clean digital experiences that help brands look modern, clear, and conversion focused.",
  },
  {
    number: "02",
    title: "UI UX Designing",
    image: "/images/agency-card-02.png",
    description:
      "We create user-friendly interfaces with smart layouts, strong visuals, and smooth interaction flow.",
  },
  {
    number: "03",
    title: "UI UX Designing",
    image: "/images/agency-card-03.png",
    description:
      "We build visual systems that make digital products easier to use, understand, and remember.",
  },
];

const services = [
  {
    number: "01.",
    title: "Design Mastry",
    description:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took",
  },
  {
    number: "02.",
    title: "Digital Leaders",
    description:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took",
  },
  {
    number: "03.",
    title: "Web Experts",
    description:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took",
  },
];

export function AgencyIntroSection() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section
      id="agency-intro"
      className="relative z-10 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-12 xl:py-24"
    >
      <div className="mx-auto max-w-420">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.92fr] xl:gap-16">
          {/* Left content */}
          <div className="max-w-190 relative">
            <div className="mb-6 flex items-center gap-4">
              <span className="relative h-0.5 w-16 bg-[#B81C15]">
                <span className="absolute -left-1.5 top-1/2 size-3 -translate-y-1/2 rounded-full bg-[#B81C15]" />
              </span>

              <p className="font-archivo text-xl font-medium text-[#222222] sm:text-2xl">
                Who Are We
              </p>
            </div>

            <h2 className="font-archivo max-w-190 text-[42px] font-semibold leading-[1.1] tracking-[-0.055em] text-black sm:text-[58px] md:text-[70px] xl:text-[78px]">
              We are <span className="text-[#B81C15]">CREATIVE</span>
              <br />
              Digital Marketing
              <br />
              Agency from Pakistan
            </h2>

            <div className="absolute top-12 right-10">
              <Image
                src="/images/star-img.png"
                alt="red star"
                width={70}
                height={70}
                className="animate-spin-slow"
              />
            </div>

            <div className="absolute top-26 right-6">
              <Image
                src="/images/grey-star-img.png"
                alt="gray star"
                width={35}
                height={35}
                className="animate-spin-slow"
              />
            </div>

            <p className="mt-6 max-w-185 font-[Arial] text-base leading-[1.65] text-[#777777] sm:text-lg">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy
              Text Ever Since The 1500s, When An Unknown Printer Took
            </p>

            <Link
              href="#"
              className="headerBtn group relative inline-block border rounded-full md:py-3 sm:py-4 py-3! sm:pr-5 pr-3 sm:pl-15 pl-12 hover:pr-15 hover:pl-5 active:pr-15 active:pl-5 text-black hover:text-white hover:border-[#b81c15] transition-all duration-300 mt-5 hover:bg-[#b81c15]"
            >
              <span className="inline-block transition-all duration-300 lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]">
                Read more
              </span>
            </Link>
            
          </div>

          {/* Right expanding cards */}
          <div className="relative">
            {/* Stars */}
            {/* <div className="pointer-events-none absolute -left-20 top-8 hidden lg:block">
              <div className="relative size-28">
                <span className="absolute left-0 top-0 h-20 w-20 bg-[#B81C15] [clip-path:polygon(50%_0%,62%_38%,100%_50%,62%_62%,50%_100%,38%_62%,0%_50%,38%_38%)]" />
                <span className="absolute bottom-0 right-0 h-14 w-14 bg-[#C1C1C2] [clip-path:polygon(50%_0%,62%_38%,100%_50%,62%_62%,50%_100%,38%_62%,0%_50%,38%_38%)]" />
              </div>
            </div> */}

            <div className="flex h-90 gap-3 sm:h-107.5 md:h-125 lg:h-110 xl:h-125">
              {cards.map((card, index) => {
                const isActive = activeCard === index;

                return (
                  <button
                    key={card.number}
                    type="button"
                    onClick={() => setActiveCard(index)}
                    onMouseEnter={() => setActiveCard(index)}
                    className={`group relative overflow-hidden rounded-[14px] text-left transition-all duration-500 ease-out ${
                      isActive
                        ? "basis-[62%] sm:basis-[68%]"
                        : "basis-[19%] sm:basis-[16%]"
                    }`}
                    aria-label={`Open ${card.title}`}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 80vw, 40vw"
                      className={`object-cover transition-all duration-700 ease-out ${
                        isActive
                          ? "scale-100 grayscale-0"
                          : "scale-110 grayscale"
                      }`}
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/10" />

                    {!isActive && (
                      <>
                        <p className="font-archivo absolute right-4 top-5 origin-top-right rotate-90 whitespace-nowrap text-sm font-medium uppercase tracking-[0.16em] text-white">
                          {card.title}
                        </p>

                        <p className="font-archivo absolute bottom-7 left-1/2 -translate-x-1/2 text-[54px] font-medium leading-none text-white/80 [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_rgba(255,255,255,0.9)]">
                          {card.number}
                        </p>
                      </>
                    )}

                    {isActive && (
                      <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                        <h3 className="font-archivo text-2xl font-bold uppercase tracking-[-0.04em] sm:text-3xl">
                          {card.title}
                        </h3>

                        <p className="mt-3 max-w-110 font-[Arial] text-sm font-medium leading-[1.55] text-white/90 sm:text-base">
                          {card.description}
                        </p>

                        <div className="mt-5 flex items-end gap-3">
                          <span className="grid size-11 place-items-center rounded-full border border-white/40 bg-black/35 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-[#B81C15]">
                            <ArrowUpRight size={20} strokeWidth={2.2} />
                          </span>

                          <span className="font-archivo text-[68px] font-medium leading-none text-white/70 [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_rgba(255,255,255,0.95)] sm:text-[82px]">
                            {card.number}
                          </span>
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom service columns */}
        <div className="mt-16 grid gap-10 md:grid-cols-3 lg:mt-20 xl:mt-24">
          {services.map((service) => (
            <article key={service.number} className="max-w-120">
              <h3 className="font-archivo flex items-end gap-2 text-3xl font-semibold leading-none text-black sm:text-4xl">
                <span className="text-[56px] font-medium leading-none text-white [-webkit-text-stroke:1px_#222222] sm:text-[64px]">
                  {service.number}
                </span>
                <span className="mb-2">{service.title}</span>
              </h3>

              <p className="mt-4 font-[Arial] text-base leading-[1.65] text-[#777777] sm:text-lg">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
