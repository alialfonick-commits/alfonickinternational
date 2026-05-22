"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

const platforms = [
  {
    name: "Spotify",
    logo: "/images/Spotify_logo.webp",
  },
  {
    name: "Upwork",
    logo: "/images/Upwork_logo.webp",
  },
  {
    name: "Loom",
    logo: "/images/Loom_logo.webp",
  },
  {
    name: "Slack",
    logo: "/images/Slack_logo.webp",
  },
  {
    name: "Trello",
    logo: "/images/Trello_logo.webp",
  },
  {
    name: "Spotify",
    logo: "/images/Spotify_logo.webp",
  },
  {
    name: "Upwork",
    logo: "/images/Upwork_logo.webp",
  },
];

export default function PlatformSlider() {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCurrent(api.selectedScrollSnap());
    };

    const frame = requestAnimationFrame(update);
    api.on("select", update);

    return () => {
      cancelAnimationFrame(frame);
      api.off("select", update);
    };
  }, [api]);

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-380 mx-auto px-4 overflow-hidden">

        <div className="pb-5 xl:[&>h2]:text-[50px] lg:[&>h2]:text-[46px] sm:[&>h2]:text-[36px] [&>h2]:mt-4 [&>h2]:text-[30px] sm:[&>h2]:pt-0 [&>h2]:pt-5 [&>h2]:leading-[1.1] [&>h2>span]:text-[#B81C15] [&>h2>span]:italic text-center [&>span]:px-6 [&>span]:py-3 [&>span]:italic [&>span]:rounded-4xl [&>span]:bg-[#B81C15]/5 [&>span]:text-[#B81C15]">
          <span>Core Values</span>

          <h2>
            Platform We
            <span> Use</span>
          </h2>
        </div>

        <div className="overflow-hidden pl-4">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
              skipSnaps: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3 flex items-stretch">
              {platforms.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="
            pl-4
            basis-1/2
            sm:basis-1/3
            md:basis-1/4
            lg:basis-1/5
          "
                >
                  <Card className="xl:h-60 lg:h-50 md:h-35 h-30 rounded-[12px] border border-[#22222280] shadow-none bg-white">
                    <CardContent className="flex items-center justify-center h-full">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={200}
                        height={80}
                        className="h-7 md:h-14 object-contain"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="flex justify-center items-center gap-[5px] mt-8">
          {platforms.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`
        w-4 h-4 rounded-full border-2
        flex items-center justify-center
        transition-all duration-300
        ${current === index ? "border-[#B81C15]" : "border-transparent"}
      `}
            >
              <span
                className={`
          rounded-full transition-all duration-300
          ${
            current === index
              ? "w-2 h-2 bg-[#B81C15]"
              : "w-2.5 h-2.5 bg-[#1E1E1E]"
          }
        `}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
