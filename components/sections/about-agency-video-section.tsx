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
      className="relative overflow-hidden bg-white px-4 py-16 pt-0 sm:px-6 sm:py-20 lg:px-10 xl:px-12"
    >
      <div className="mx-auto max-w-420">
        {/* Heading */}
        <div className="relative z-10 mx-auto mb-10 text-center sm:mb-12 lg:mb-14">
          <div className="font-archivo relative inline-block">
            <p className="absolute -left-10 -top-2 text-[34px] font-bold uppercase leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_#222222] sm:-left-20 sm:text-[52px] lg:-left-28 lg:text-[64px]">
              About
            </p>

            <p className="absolute left-0 top-8.5 text-[30px] font-bold uppercase leading-none tracking-[-0.04em] text-[#C1C1C2]/65 sm:top-12 sm:text-[46px] lg:top-14.5 lg:text-[58px]">
              Our
            </p>

            <h2 className="relative text-[54px] font-bold uppercase leading-none tracking-[-0.055em] text-[#222222] sm:text-[86px] lg:text-[112px] xl:text-[126px]">
              Agency
            </h2>
          </div>
        </div>

        {/* Video container */}
        <div className="relative mx-auto max-w-375 cursor-pointer">
          <div className="absolute left-1/2 -bottom-1/2 h-[70%] w-screen -translate-x-1/2 -translate-y-1/2 bg-[#EEEEEE]" />

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
