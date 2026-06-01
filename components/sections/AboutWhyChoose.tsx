import Image from "next/image";
import Link from "next/link";

export default function AboutWhyChoose() {
  return (
    <section className="pt-22 pb-10 px-4 md:px-16">
      <div className="pb-5 xl:[&>h2]:text-[50px] lg:[&>h2]:text-[46px] sm:[&>h2]:text-[36px] [&>h2]:mt-4 [&>h2]:text-[30px] sm:[&>h2]:pt-0 [&>h2]:pt-5 [&>h2]:leading-[1.1] [&>h2>span]:text-[#B81C15] [&>h2>span]:italic text-center [&>span]:px-6 [&>span]:py-3 [&>span]:uppercase [&>span]:rounded-4xl [&>span]:bg-[#B81C15]/5 [&>span]:text-[#B81C15]">
        <span className="font-Arial">Built For Intelligent</span>

        <h2>
          Why Choose <span className="block">Alfonick International</span>
        </h2>
      </div>

      <div className="max-w-371 m-auto sm:px-4 px-0 pt-4 grid md:grid-cols-2 gap-6 lg:gap-16 items-center">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/About Why Choose.webp"
            alt="TV"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <h3 className="text-[22px] md:text-[28px] lg:text-[32px] 2xl:text-[40px] font-normal! text-[#222] mb-2 lg:mb-4 leading-snug">
            WHY BUSINESSES TRUST US TO DELIVER EXCELLENCE
          </h3>

          <p
            className="text-[#222] font-regular mb-4 text-[15px] md:text-[16px] lg:text-[17px] 2xl:text-[18px] leading-[1.556]"
            style={{ fontFamily: "Arial" }}
          >
            At our agency, we combine creativity, strategy, and technology to
            deliver solutions that truly make an impact. Our team of experts
            works closely with each client to understand their unique
          </p>

          <ul className="space-y-4 mb-4 lg:[&_li]:text-[20px] [&_li]:text-[16px] [&_li]:text-[#222]">
            <li className="flex mb-2 gap-3 items-center">
              <Image
                src="/images/About Why Icon.webp"
                alt="icon"
                width={18}
                height={18}
                className="lg:mt-1.25 mt-0"
              />
              Struggling to communicate your brand message
            </li>

            <li className="flex items-center mb-2 gap-3">
              <Image
                src="/images/About Why Icon.webp"
                alt="icon"
                width={18}
                height={18}
                className="lg:mt-1.25 mt-0"
              />
              Struggling to communicate your brand's message
            </li>

            <li className="flex items-center mb-2 gap-3">
              <Image
                src="/images/About Why Icon.webp"
                alt="icon"
                width={18}
                height={18}
                className="lg:mt-1.25 mt-0"
              />
              Struggling to communicate your brand's message
            </li>

            <li className="flex items-center mb-2 gap-3">
              <Image
                src="/images/About Why Icon.webp"
                alt="icon"
                width={18}
                height={18}
                className="lg:mt-1.25 mt-0"
              />
              Struggling to communicate your brand's message
            </li>
          </ul>

          <Link
            href="#"
            className="mt-3 font-archivo group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-black px-6 text-[16px] font-semibold uppercase tracking-[-0.01em] text-white transition-all duration-300 sm:min-h-12.5 sm:px-7 pl-11.25! hover:text-black"
          >
            {/* expanding white bg */}
            <span className="absolute left-6 size-2 rounded-full bg-white transition-all duration-500 ease-out group-hover:left-0 group-hover:h-full group-hover:w-full" />

            {/* text */}
            <span className="relative z-10">
              Contact Us
            </span>

            {/* icon area */}
            <div className="absolute z-10 right-0 -left-25 group-hover:-left-38.5 transition-all duration-300 top-0 bottom-0 m-auto w-fit h-fit">

            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
