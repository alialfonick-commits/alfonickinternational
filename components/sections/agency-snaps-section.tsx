import Image from "next/image";
import Link from "next/link";

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

export function AgencySnapsSection() {
  const duplicatedImages = [...snapImages, ...snapImages];

  return (
    <section
      id="agency-snaps"
      className="overflow-hidden bg-white pt-16 sm:pt-20 xl:pt-24 xl:pb-5"
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

      <div className="mx-auto max-w-420 xl:px-15 md:px-12 px-3">
        {/* Top heading area */}
        <div className="grid gap-8 lg:grid-cols-[340px_1fr] lg:items-start xl:grid-cols-[390px_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="relative h-0.5 w-16 bg-[#B81C15]">
                <span className="absolute -left-1.5 top-1/2 size-3 -translate-y-1/2 rounded-full bg-[#B81C15]" />
              </span>

              <p className="font-archivo text-xl font-medium text-[#222222] sm:text-2xl">
                Creative Space
              </p>
            </div>

            <p className="mt-10 max-w-100 font-[Arial] text-base leading-[1.65] text-[#22222299] sm:text-lg">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy
              Text Ever Since The 1500s,
            </p>
          </div>

          <h2 className="font-archivo text-[42px] font-medium leading-[1.06] tracking-[-0.055em] text-[#222222] sm:text-[58px] lg:text-[72px] xl:text-[82px]">
            Our Agency <span className="italic text-[#B81C15]">Snaps</span>
          </h2>
        </div>
      </div>

      {/* Infinite right-to-left image slider */}
      <div className="mt-14 w-full overflow-hidden sm:mt-16 lg:mt-20">
        <div className="agency-snaps-track flex w-max gap-4 pr-4 will-change-transform sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-6">
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative h-57.5 w-[320px] shrink-0 overflow-hidden rounded-[18px] bg-[#EFF0F0] sm:h-75 sm:w-130 lg:h-97.5 "
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 520px, 720px"
                className="object-cover cursor-pointer transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center sm:mt-12">
        <Link
          href="#"
          className="headerBtn group relative inline-block border rounded-full md:py-3 sm:py-4 py-3! sm:pr-5 pr-3 sm:pl-15 pl-12 hover:pr-15 hover:pl-5 active:pr-15 active:pl-5 text-black hover:text-white hover:border-[#b81c15] transition-all duration-300 mt-5 hover:bg-[#b81c15]"
        >
          <span className="inline-block transition-all duration-300 lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]">
            View All
          </span>
        </Link>
      </div>
    </section>
  );
}
