"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const marqueeItems = [
  "Brand Strategy",
  "UI/UX Design",
  "Motion Graphics",
  "Web Development",
  "Digital Marketing",
  "Creative Design",
];

const services = [
  {
    number: "01",
    title: "Art Direction",
    description: "Brand Identity, Strategy & Consult, Position, Rebrand",
  },
  {
    number: "02",
    title: "Brand Identity",
    description: "Logo System, Visual Direction, Brand Guidelines",
  },
  {
    number: "03",
    title: "Web Development",
    description: "Modern Websites, Landing Pages, Conversion Systems",
  },
  {
    number: "04",
    title: "Digital Marketing",
    description: "Campaign Strategy, Social Growth, Performance Marketing",
  },
];

function SparkIcon({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block bg-[#B81C15] [clip-path:polygon(50%_0%,62%_38%,100%_50%,62%_62%,50%_100%,38%_62%,0%_50%,38%_38%)] ${className}`}
    />
  );
}

export function ServicesSpectrumSection() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <style>
        {`
          @keyframes alfonick-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .alfonick-marquee-track {
            animation: alfonick-marquee 28s linear infinite;
          }

          .alfonick-marquee:hover .alfonick-marquee-track {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Top moving service marquee */}
      <div className="alfonick-marquee mb-16 flex w-full overflow-hidden whitespace-nowrap sm:mb-20 lg:mb-24">
        <div className="alfonick-marquee-track flex min-w-max items-center gap-10 pr-10">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-10">
              <h3
                className={`font-archivo text-[34px] font-bold uppercase leading-none tracking-[-0.04em] sm:text-[48px] lg:text-[58px] ${
                  index % 2 === 1 ? "text-[#B81C15]" : "text-[#000000]"
                }`}
              >
                {item}
              </h3>
              <SparkIcon className="size-10 shrink-0 sm:size-12" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-420 px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid gap-10 lg:grid-cols-[360px_1fr] xl:grid-cols-[390px_1fr] xl:gap-14">
          {/* Left side */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="relative h-0.5 w-16 bg-[#B81C15]">
                <span className="absolute -left-1.5 top-1/2 size-3 -translate-y-1/2 rounded-full bg-[#B81C15]" />
              </span>

              <p className="font-archivo text-xl font-medium text-[#222222] sm:text-2xl">
                Our Services
              </p>
            </div>

            <p className="max-w-82.5 font-[Arial] text-base leading-[1.65] text-[#777777]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry&apos;s Standard
            </p>

            <div className="mt-10 overflow-hidden rounded-[18px] bg-[#EFF0F0] sm:mt-12">
              <Image
                src="/images/services-spectrum.png"
                alt="Digital service preview"
                width={620}
                height={620}
                className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="lg:pt-5">
            <h2 className="font-archivo max-w-245 text-[40px] font-medium leading-[1.08] tracking-[-0.055em] text-[#222222] sm:text-[58px] lg:text-[72px] xl:text-[78px]">
              Explore Our Full Spectrum
              <br />
              Of{" "}
              <span className="font-medium italic text-[#B81C15]">
                Innovative Solutions
              </span>
            </h2>

            <div className="mt-10 space-y-3 sm:mt-12">
              {services.map((service, index) => {
                const isActive = activeService === index;

                return (
                  <button
                    key={service.number}
                    type="button"
                    onMouseEnter={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    className={`group grid w-full items-center cursor-pointer rounded-[10px] px-5 py-5 text-left transition-all duration-300 sm:grid-cols-[1fr_0.9fr_auto] sm:px-7 ${
                      isActive
                        ? "bg-[#B81C15] text-white shadow-[0_18px_40px_rgba(184,28,21,0.22)]"
                        : "bg-[#EFF0F0] text-[#222222] hover:bg-[#F5D5D2]"
                    }`}
                   >
                    <div className="flex items-center gap-5 group">
                      <span
                        className={`font-archivo text-[20px] font-semibold transition-all duration-300 ${
                          isActive ? "opacity-100" : "hidden -ml-10 opacity-0 sm:block"
                        }`}
                      >
                        {service.number}
                      </span>

                      <h3 className="font-archivo text-[24px] font-semibold tracking-[-0.04em] sm:text-[30px]">
                        {service.title}
                      </h3>
                    </div>

                    <p
                      className={`mt-3 max-w-90 font-[Arial] text-sm leading-[1.55] sm:mt-0 ${
                        isActive ? "text-white/78" : "text-[#777777]"
                      }`}
                    >
                      {service.description}
                    </p>

                    <span
                      className={`mt-4 grid size-12 place-items-center rounded-full transition-all duration-400 sm:mt-0 ${
                        isActive
                          ? "bg-white text-[#222222]"
                          : "bg-[#D9D9D9] text-black group-hover:bg-white"
                      }`}
                    >
                      <ArrowUpRight
                        size={24}
                        strokeWidth={2.3}
                        className={`transition-transform rotate-45 duration-400 ${
                          isActive
                            ? "group-hover:rotate-90"
                            : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
