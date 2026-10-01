"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export function AboutAgencyVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoSrc = "/videos/Home%20Agency%20Video.mp4";

  const toggleVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error("Video play error:", error);
    }
  };

  return (
    <section
      id="about-agency"
      className="relative overflow-hidden bg-white px-4 py-16 pt-0 sm:px-6 sm:pt-0 lg:px-10 xl:px-12"
    >
      <div className="mx-auto max-w-420">
        {/* Heading */}
        <div className="relative z-10 mx-auto mb-3 text-center sm:mb-2">
          <div className="flex items-center justify-center gap-2 lg:[&>h2]:text-[98px] md:[&>h2]:text-[70px] sm:[&>h2]:text-[50px] [&>h2]:text-[34px] [&>h2]:font-extrabold! [&>h2]:tracking-[-0.8px]! [&>h2]:uppercase">
            <div className="flex flex-col items-center text-end lg:[&_span]:text-[45px] md:[&_span]:text-[32px] sm:[&_span]:text-[30px] [&_span]:text-[24px] sm:-mb-7 -mb-3">
              <span className="text-white font-extrabold! uppercase tracking-[-0.5px] leading-[0.8px] [-webkit-text-stroke:0.54px_black] lg:pt-2.5 pt-0">
                About
              </span>

              <span className="ml-auto block pt-2 font-extrabold! uppercase text-[#D4D4D4]">
                Our
              </span>
            </div>

            <h2>Agency</h2>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative mx-auto max-w-375">
          {/* Background Shape */}
          <div className="pointer-events-none absolute left-1/2 -bottom-1/2 h-[45%] w-screen -translate-x-1/2 -translate-y-1/2 bg-[#EEEEEE] md:h-[60%] lg:h-[70%]" />

          {/* Video Wrapper */}
          <div className="group relative z-10 block w-full overflow-hidden rounded-[22px] bg-[#EFF0F0] shadow-[0_30px_80px_rgba(0,0,0,0.08)] sm:rounded-[28px] lg:rounded-4xl">
            {/* Video */}
            <video
              ref={videoRef}
              src={videoSrc}
              className="aspect-[16/7.6] w-full object-cover transition-transform duration-700 group-hover:scale-[1.015] max-lg:aspect-video max-sm:aspect-4/3"
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Soft Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/5" />

            {/* Play / Pause Button */}
            <button
              type="button"
              onClick={toggleVideo}
              className="absolute left-1/2 top-1/2 z-20 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/85 text-white transition-all duration-300 hover:scale-105 sm:size-32 cursor-pointer"
              aria-label={isPlaying ? "Pause agency video" : "Play agency video"}
            >
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}