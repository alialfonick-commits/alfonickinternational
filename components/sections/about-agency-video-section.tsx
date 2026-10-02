"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export function AboutAgencyVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // User ne kabhi video start ki hai ya nahi
  const hasStartedRef = useRef(false);

  // Section se bahar jane se pehle video play thi ya pause
  const wasPlayingBeforeLeaveRef = useRef(false);

  const videoSrc = "/videos/Home%20Agency%20Video.mp4";

  // ==========================================
  // PLAY / PAUSE
  // ==========================================
  const toggleVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        // USER MANUALLY PLAYED VIDEO
        hasStartedRef.current = true;

        await video.play();
      } else {
        // USER MANUALLY PAUSED VIDEO
        video.pause();

        // Important:
        // User ne manually pause kiya hai,
        // isliye scroll ke baad automatically resume nahi karna.
        wasPlayingBeforeLeaveRef.current = false;
      }
    } catch (error) {
      console.error("Video playback error:", error);
    }
  };

  // ==========================================
  // SECTION VISIBILITY
  // ==========================================
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        setIsSectionVisible(visible);

        if (!visible) {
          // ======================================
          // SECTION SCREEN SE BAHAR JA RAHA HAI
          // ======================================

          // Pehle remember karo ke video chal rahi thi
          wasPlayingBeforeLeaveRef.current = !video.paused;

          // Agar video chal rahi hai to pause karo
          if (!video.paused) {
            video.pause();
          }

          // Button section ke bahar visible nahi hoga
          setIsHovered(false);
        } else {
          // ======================================
          // SECTION SCREEN PAR WAPAS AA GAYA
          // ======================================

          // Sirf tab resume karo agar:
          // 1. User ne video pehle start ki thi
          // 2. Section se bahar jane se pehle video PLAYING thi
          if (
            hasStartedRef.current &&
            wasPlayingBeforeLeaveRef.current &&
            video.paused
          ) {
            video.play().catch((error) => {
              console.error("Video resume error:", error);
            });
          }
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  // ==========================================
  // BUTTON VISIBILITY
  // ==========================================
  //
  // PAUSED:
  //      Play icon show
  //
  // PLAYING:
  //      Normal = hidden
  //      Hover = Pause icon
  //
  const showButton =
    isSectionVisible && (!isPlaying || isHovered);

  return (
    <section
      ref={sectionRef}
      id="about-agency"
      className="relative overflow-hidden bg-white px-4 py-16 pt-0 sm:px-6 sm:pt-0 lg:px-10 xl:px-12"
    >
      <div className="mx-auto max-w-420">

        {/* ==========================================
            HEADING
        ========================================== */}
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


        {/* ==========================================
            VIDEO CONTAINER
        ========================================== */}
        <div className="relative mx-auto max-w-375">

          {/* BACKGROUND SHAPE */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              -bottom-1/2
              h-[45%]
              w-screen
              -translate-x-1/2
              -translate-y-1/2
              bg-[#EEEEEE]
              md:h-[60%]
              lg:h-[70%]
            "
          />


          {/* ==========================================
              VIDEO WRAPPER
          ========================================== */}
          <div
            className="
              group
              relative
              z-10
              block
              w-full
              overflow-hidden
              rounded-[22px]
              bg-[#EFF0F0]
              shadow-[0_30px_80px_rgba(0,0,0,0.08)]
              sm:rounded-[28px]
              lg:rounded-4xl
            "
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >

            {/* ==========================================
                VIDEO
            ========================================== */}
            <video
              ref={videoRef}
              src={videoSrc}
              className="
                aspect-[16/7.6]
                w-full
                cursor-pointer
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.015]
                max-lg:aspect-video
                max-sm:aspect-4/3
              "
              muted
              loop
              playsInline
              preload="metadata"

              // Video par direct click
              onClick={toggleVideo}

              // VIDEO PLAY
              onPlay={() => {
                setIsPlaying(true);

                // Play hone ke baad icon hide
                setIsHovered(false);
              }}

              // VIDEO PAUSE
              onPause={() => {
                setIsPlaying(false);

                // Pause hone par Play icon show
                setIsHovered(true);
              }}
            />


            {/* ==========================================
                SOFT OVERLAY
            ========================================== */}
            <div
              className={`
                pointer-events-none
                absolute
                inset-0
                transition-colors
                duration-300
                ${
                  isPlaying
                    ? "bg-transparent"
                    : "bg-black/10"
                }
              `}
            />


            {/* ==========================================
                PLAY / PAUSE BUTTON
            ========================================== */}
            <button
              type="button"
              onClick={toggleVideo}
              aria-label={
                isPlaying
                  ? "Pause agency video"
                  : "Play agency video"
              }
              className={`
                absolute
                left-1/2
                top-1/2
                z-20
                grid
                size-24
                -translate-x-1/2
                -translate-y-1/2
                cursor-pointer
                place-items-center
                rounded-full
                border
                border-white/85
                text-white
                transition-all
                duration-300
                hover:scale-105
                sm:size-32

                ${
                  showButton
                    ? "visible opacity-100 pointer-events-auto"
                    : "invisible opacity-0 pointer-events-none"
                }
              `}
            >

              <div className="grid size-16 place-items-center sm:size-24">

                {/* ======================================
                    PLAY ICON
                    Video PAUSED ho
                ====================================== */}
                {!isPlaying && (
                  <Play
                    size={34}
                    strokeWidth={2.2}
                    fill="currentColor"
                    className="ml-1 text-white sm:size-10"
                  />
                )}


                {/* ======================================
                    PAUSE ICON
                    Video PLAYING + HOVER ho
                ====================================== */}
                {isPlaying && isHovered && (
                  <Pause
                    size={34}
                    strokeWidth={2.2}
                    fill="currentColor"
                    className="text-white sm:size-10"
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

