import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Are cobots the next wave of warehouse automation?",
    time: "4 Mins",
    image: "/images/article-01.jpg",
    tags: ["COBOT", "AUTOMATION", "COLLABORATION"],
  },
  {
    title: "Trakr: India’s homegrown Robotic Dog/ Quadruped",
    time: "4 Mins",
    image: "/images/article-02.jpg",
    tags: ["QUADRUPED", "TRAKR", "INDUSTRIAL ROBOTICS"],
  },
  {
    title: "Addverbs Leap into Humanoid Robotics",
    time: "8 Mins",
    image: "/images/article-03.jpg",
    tags: ["HUMANOID ROBOT", "PHYSICAL AI", "DEXTROUS"],
  },
];

function SectionEyebrow() {
  return (
    <div className="flex items-center gap-4">
      <span className="relative h-[2px] w-16 bg-[#B81C15]">
        <span className="absolute -left-1.5 top-1/2 size-3 -translate-y-1/2 rounded-full bg-[#B81C15]" />
      </span>

      <p className="font-archivo text-xl font-medium text-[#222222] sm:text-2xl">
        News & Blogs
      </p>
    </div>
  );
}

export function ArticlesSection() {
  return (
    <section
      id="blogs"
      className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-12 xl:py-24"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:items-start xl:grid-cols-[340px_1fr]">
          <SectionEyebrow />

          <h2 className="font-archivo max-w-[780px] text-[42px] font-medium leading-[1.08] tracking-[-0.055em] text-[#222222] sm:text-[58px] lg:text-[72px] xl:text-[82px]">
            Explore{" "}
            <span className="font-medium italic text-[#B81C15]">
              Articles And
            </span>
            <br />
            <span className="font-medium italic text-[#B81C15]">
              Real-World
            </span>{" "}
            Cases
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8 xl:gap-10">
          {articles.map((article) => (
            <article key={article.title} className="group">
              <Link href="#blogs" className="block">
                <div className="relative aspect-[1.08/1] overflow-hidden rounded-[12px] bg-[#EFF0F0]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

                  <span className="absolute right-4 top-4 grid size-11 translate-y-2 place-items-center rounded-full bg-white text-[#B81C15] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={21} strokeWidth={2.2} />
                  </span>
                </div>

                <h3 className="font-archivo mt-6 max-w-[360px] text-[20px] font-medium leading-[1.25] tracking-[-0.03em] text-[#222222] transition-colors duration-300 group-hover:text-[#B81C15] sm:text-[22px]">
                  {article.title}
                </h3>

                <p className="mt-4 font-[Arial] text-sm text-[#777777]">
                  {article.time}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-archivo rounded-full border border-[#C1C1C2] bg-[#EFF0F0] px-4 py-2 text-[12px] font-medium uppercase text-[#777777] transition-all duration-300 group-hover:border-[#B81C15]/40 group-hover:bg-[#F5D5D2] group-hover:text-[#B81C15]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}