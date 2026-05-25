import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const snapImages = [
  {
    src: "/images/snap-gallery1.png",
    alt: "Alfonick office creative space",
  },
  {
    src: "/images/snap-gallery2.png",
    alt: "Alfonick team meeting",
  },
  {
    src: "/images/snap-gallery3.png",
    alt: "Alfonick workshop session",
  },
  {
    src: "/images/snap-gallery4.png",
    alt: "Alfonick agency snap",
  },
  {
    src: "/images/snap-gallery5.png",
    alt: "Alfonick creative team",
  },
];

export function CareerAgencySnap() {
  const duplicatedImages = [...snapImages, ...snapImages];

  return (
    <section
      id="agency-snaps"
      className="overflow-hidden bg-[#EEEEEE] mx-5 rounded-xl py-16 sm:py-20 xl:py-24"
    >
      <style>
        {`
          @keyframes agencySnapsMarquee {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              transform: translate3d(-50%, 0, 0);
            }
          }

          .agency-snaps-track {
            animation: agencySnapsMarquee 34s linear infinite;
          }

          .agency-snaps-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

<div className="text-center">
                    <h2 className="lg:text-[51px] md:text-5xl sm:text-4xl text-[34px] font-bold! leading-[1.1]">
                        Life at the 
                        <span className="text-[#B81C15] font-bold!">
                           Agency
                        </span>
                    </h2>

                    <p className="text-[#22222299] text-base lg:text-xl mt-3">
                        A glimpse into our day-to-day culture
                    </p>
                </div>



      {/* Infinite right-to-left image slider */}
      <div className="mt-10 w-full overflow-hidden">
        <div className="agency-snaps-track flex w-max gap-4 pr-4 will-change-transform sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-6">
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative h-[230px] w-[320px] shrink-0 overflow-hidden rounded-[18px] bg-[#EFF0F0] sm:h-[300px] sm:w-[520px] lg:h-[390px] lg:w-[720px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 520px, 720px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center sm:mt-12">
        <Link
          href="/gallery"
          className="font-archivo group inline-flex items-center gap-4 rounded-full border border-[#C1C1C2] bg-white py-2.5 pl-2.5 pr-8 text-lg font-medium text-[#222222] transition-all duration-300 hover:border-[#B81C15] hover:bg-[#F5D5D2]"
        >
          <span className="grid size-10 place-items-center rounded-full bg-[#B81C15] text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-[#D93433]">
            <ArrowRight
              size={21}
              strokeWidth={2.2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
          View All
        </Link>
      </div>
    </section>
  );
}
