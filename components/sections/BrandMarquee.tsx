"use client";

import Image from "next/image";
import Link from "next/link";

const logos = [
  { src: "/images/logoi_1.webp", link: "#" },
  { src: "/images/logoi_2.webp", link: "#" },
  { src: "/images/logoi_3.webp", link: "#" },
  { src: "/images/logoi_4.webp", link: "#" },
  { src: "/images/logoi_5.webp", link: "#" },
  { src: "/images/logoi_6.webp", link: "#" },
  { src: "/images/logoi_7.webp", link: "#" },
];

export default function BrandMarquee() {
  return (
    <section className="w-full sm:pt-22 pt-16 sm:pb-25 pb-15 overflow-hidden">
      <div className="pb-5 xl:[&>h2]:text-[56px] lg:[&>h2]:text-[46px] sm:[&>h2]:text-[36px] [&>h2]:mt-4 [&>h2]:text-[30px] sm:[&>h2]:pt-0 [&>h2]:font-normal! [&>h2]:pt-5 [&>h2]:leading-[1.1] [&>h2_span]:text-[#B81C15] [&>h2_span]:italic text-center [&>span]:px-6 [&>span]:py-3 [&>span]:italic [&>span]:font-bold [&>span]:rounded-4xl [&>span]:bg-[#B81C15]/5 [&>span]:text-[#B81C15]">
        <span className=""> Core Values </span>
        <h2>
          Brand We Have{" "}
          <div className="block [&>span]:font-medium">
            {" "}
            <span> Worked </span> With
          </div>{" "}
        </h2>
      </div>

      <div className="max-w-390 mx-auto px-5 space-y-6 pt-5">
        <div className="overflow-hidden">
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((item, i) => (
              <Link href={item.link} key={i}>
                <div className="w-45 h-14.5 flex items-center justify-center rounded-[20px] border border-[#2222224D] bg-white transition [&>img]:h-7.5 ">
                  <Image
                    src={item.src}
                    alt="brand"
                    width={100}
                    height={30}
                    className="object-contain opacity-100 hover:invert-[1] transition"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-3 animate-marquee-reverse whitespace-nowrap">
            {[...logos, ...logos].map((item, i) => (
              <Link href={item.link} key={i}>
                <div className="w-45 h-14.5 flex items-center justify-center rounded-[20px] border border-[#2222224D] bg-white transition [&>img]:h-7.5">
                  <Image
                    src={item.src}
                    alt="brand"
                    width={100}
                    height={30}
                    className="object-contain opacity-100 hover:invert-[1] transition"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
