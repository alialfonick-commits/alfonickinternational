"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export function AboutAgencyVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoSrc = "";
  const hasVideo = Boolean(videoSrc);

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (!hasVideo) return;

    if (video.paused) {
      await video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="about-agency"
      className="relative overflow-hidden bg-white px-4 py-16 pt-0 sm:px-6 sm:pt-0 lg:px-10 xl:px-12"
    >
      <div className="mx-auto max-w-420">
        {/* Heading */}
        <div className="relative z-10 mx-auto text-center sm:mb-2 mb-3">
          {/* <div className="font-archivo relative inline-block">
            <p className="absolute -left-40! top-2 text-[32px] font-bold uppercase leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_#222222] sm:-left-20 sm:text-[38px] lg:-left-28 lg:text-[45px]"> About </p>

            <p className="absolute -left-25.75 top-11! text-[32px] font-bold uppercase leading-none tracking-[-0.04em] text-[#C1C1C2]/65 sm:top-12 sm:text-[38px] lg:top-14.5 lg:text-[45px]">
              Our
            </p>

            <h2 className="relative text-[40px] font-extrabold! uppercase leading-none tracking-[-0.055em] text-[#222222] sm:text-[70px] lg:text-[80px] xl:text-[98px]">
              Agency
            </h2>
          </div> */}

          
           <div className="flex justify-center lg:[&>h2]:text-[98px] md:[&>h2]:text-[70px] sm:[&>h2]:text-[50px] [&>h2]:text-[34px] [&>h2]:font-bold! [&>h2]:uppercase items-center gap-2">
          <div className="flex flex-col items-center text-end lg:[&_span]:text-[45px] md:[&_span]:text-[32px] sm:[&_span]:text-[30px] [&_span]:text-[24px] sm:-mb-7 -mb-3">
            <span className="text-white font-extrabold! [-webkit-text-stroke:0.54px_black] uppercase tracking-[-0.5px] leading-[0.8px] lg:pt-2.5 pt-0 ">
              About
            </span>
            <span className="text-[#D4D4D4] uppercase block font-extrabold! pt-2 ml-auto">
              Our
            </span>
          </div>
          <h2 className="tracking-[-0.8px]!">Agency</h2>
        </div>  


        </div>

        {/* Video container */}
        <div className="relative mx-auto max-w-375 cursor-pointer">
          <div className="absolute left-1/2 -bottom-1/2 lg:h-[70%] md:h-[60%] h-[45%] w-screen -translate-x-1/2 -translate-y-1/2 bg-[#EEEEEE]" />

          <button
            type="button"
            onClick={toggleVideo}
            className="group relative z-10 block w-full overflow-hidden rounded-[22px] bg-[#EFF0F0] text-left shadow-[0_30px_80px_rgba(0,0,0,0.08)] sm:rounded-[28px] lg:rounded-4xl"
            aria-label={
              hasVideo
                ? isPlaying
                  ? "Pause agency video"
                  : "Play agency video"
                : "Agency video preview"
            }
          >
            <video
              ref={videoRef}
              src={hasVideo ? videoSrc : undefined}
              poster="/images/video-cover.webp"
              className="aspect-[16/7.6] w-full object-cover transition-transform duration-700 group-hover:scale-[1.015] max-lg:aspect-video max-sm:aspect-4/3"
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/5 cursor-pointer" />

            {/* Play / Pause button */}
            <div className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/85 bg-white/10 text-white backdrop-blur-[2px] transition-all duration-300 group-hover:scale-105 sm:size-32 cursor-pointer">
              <div className="grid size-16 place-items-center sm:size-24">
                {isPlaying ? (
                  <Pause
                    size={34}
                    strokeWidth={2.2}
                    fill="currentColor"
                    className="text-white sm:size-10"
                  />
                ) : (
                  <Play
                    size={34}
                    strokeWidth={2.2}
                    fill="currentColor"
                    className="ml-1 text-white sm:size-10"
                  />
                )}
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
