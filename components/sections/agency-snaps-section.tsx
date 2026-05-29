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
      className="overflow-hidden bg-white py-16 sm:py-20 xl:py-24">
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

      <div className="mx-auto max-w-420">
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


            <p className="mt-10 max-w-82.5 font-[Arial] text-base leading-[1.65] text-[#22222299] sm:text-lg">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy
              Text Ever Since The 1500s,
            </p>
          </div>

          <h2 className="font-archivo text-[42px] font-medium leading-[1.06] tracking-[-0.055em] text-[#222222] sm:text-[58px] lg:text-[72px] xl:text-[82px]">
            Our Agency{" "}
            <span className="italic text-[#B81C15]">Snaps</span>
          </h2>
        </div>
      </div>

      {/* Infinite right-to-left image slider */}
      <div className="mt-14 w-full overflow-hidden sm:mt-16 lg:mt-20">
        <div className="agency-snaps-track flex w-max gap-4 pr-4 will-change-transform sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-6">
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative h-57.5 w-[320px] shrink-0 overflow-hidden rounded-[18px] bg-[#EFF0F0] sm:h-75 sm:w-130 lg:h-97.5 lg:w-75.5">
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

// import Image from "next/image";
// import Link from "next/link";

// export function AgencySnapsSection() {
//   return (
//     <>
//       <section className="md:pt-15 pt-7">
//         <div className="">
//           <div className="container m-auto grid sm:grid-cols-13 grid-cols-1 md:gap-14 gap-5 py-10!">
//             <div className="lg:col-start-1 lg:col-end-5 sm:col-start-1 sm:col-end-7 col-start-1 col-end-13 lg:[&_span]:text-2xl md:[&_span]:text-xl [&_span]:text-base sm:[&_p]:pt-8 [&_p]:pt-4 [&_p]:font-[inter]!">
//               <span className="relative inline-block pl-24 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:m-auto before:w-20 before:h-3 before:bg-[url('/images/line.webp')] before:bg-no-repeat before:bg-contain">
//                 Creative Space
//               </span>
//               <p>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry standard dummy text
//                 ever since the 1500s,
//               </p>
//             </div>
//             <div className="lg:col-start-5 lg:col-end-13 sm:col-start-7 sm:col-end-13 col-start-1 col-end-13 sm:[&>h2]:text-start [&>h2]:text-center 2xl:[&>h2]:text-[70px] xl:[&>h2]:text-[60px] lg:[&>h2]:text-[46px] sm:[&>h2]:text-[36px] [&>h2]:text-[30px] sm:[&>h2]:pt-0 [&>h2]:pt-5 [&>h2]:leading-[1.1] [&>h2_span]:text-[#B81C15] [&>h2_span]:italic ">
//               <h2>
//                 Our Agency <span> Snaps</span>
//               </h2>
//             </div>
//           </div>
//         </div>

//         <div className="overflow-hidden">
//            <div className="scrollLeft flex gap-8 w-max will-change-transform group-hover:paused">

//     <Image src="/images/agency_1.webp" alt="" width={500} height={100} className="rounded-xl h-auto" />
//     <Image src="/images/agency_2.webp" alt="" width={500} height={100} className="rounded-xl h-auto" />
//     <Image src="/images/agency_3.webp" alt="" width={500} height={100} className="rounded-xl h-auto" />
//     <Image src="/images/agency_4.webp" alt="" width={500} height={100} className="rounded-xl h-auto" />
//     <Image src="/images/agency_5.webp" alt="" width={500} height={100} className="rounded-xl h-auto" />

//     <Image src="/images/agency_1.webp" alt="" width={500} height={100} className="rounded-xl h-auto" />
//     <Image src="/images/agency_2.webp" alt="" width={500} height={100} className="rounded-xl h-auto" />
//     <Image src="/images/agency_3.webp" alt="" width={500} height={100} className="rounded-xl h-auto" />
//     <Image src="/images/agency_4.webp" alt="" width={500} height={100} className="rounded-xl h-auto" />
//     <Image src="/images/agency_5.webp" alt="" width={500} height={100} className="rounded-xl h-auto" />

//     <Image src="/images/agency_1.webp" alt="" width={500} height={100} className="rounded-xl h-auto" />
//     <Image src="/images/agency_2.webp" alt="" width={500} height={100} className="rounded-xl h-auto" />

//   </div>

//           <div className="text-center mt-7">
//            <Link
//             href="/our-gallery"
//             className="headerBtn group relative inline-block border rounded-full py-3.75 pr-5 pl-15 hover:pr-15 hover:pl-5 text-black transition-all duration-300 text-center"
//           >
//             <span className="inline-block transition-all duration-300">
//               View All
//             </span>
//           </Link>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };
