import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: 1,
    image: "/images/Blog_img.webp",
    date: "June 24, 2025",
    category: "TECH",
    title: "Aladdin: unlocking the magic of imaginative design top-notch",
    link: "/#",
  },
  {
    id: 2,
    image: "/images/Blog_img.webp",
    date: "June 24, 2025",
    category: "TECH",
    title: "Aladdin: unlocking the magic of imaginative design top-notch",
    link: "/#",
  },
  {
    id: 3,
    image: "/images/Blog_img.webp",
    date: "June 24, 2025",
    category: "TECH",
    title: "Aladdin: unlocking the magic of imaginative design top-notch",
    link: "/#",
  },
  {
    id: 4,
    image: "/images/Blog_img.webp",
    date: "June 24, 2025",
    category: "TECH",
    title: "Aladdin: unlocking the magic of imaginative design top-notch",
    link: "/#",
  },
  {
    id: 5,
    image: "/images/Blog_img.webp",
    date: "June 24, 2025",
    category: "TECH",
    title: "Aladdin: unlocking the magic of imaginative design top-notch",
    link: "/#",
  },
  {
    id: 6,
    image: "/images/Blog_img.webp",
    date: "June 24, 2025",
    category: "TECH",
    title: "Aladdin: unlocking the magic of imaginative design top-notch",
    link: "/#",
  },
  {
    id: 7,
    image: "/images/Blog_img.webp",
    date: "June 24, 2025",
    category: "TECH",
    title: "Aladdin: unlocking the magic of imaginative design top-notch",
    link: "/#",
  },
  {
    id: 8,
    image: "/images/Blog_img.webp",
    date: "June 24, 2025",
    category: "TECH",
    title: "Aladdin: unlocking the magic of imaginative design top-notch",
    tag: "",
    link: "/#",
  },
];

export default function Blog() {
  return (

    <section className="px-5 pt-22 pb-12">
      <div className="max-w-351 mx-auto">
      <div className="text-center mb-12 [&>span]:text-[#B81C15] [&>span]:px-6 [&>span]:py-3 [&>span]:rounded-4xl [&>span]:w-fit [&>span]:m-auto [&>span]:bg-[#B81C15]/5">
        <span style={{fontFamily: "Arial"}}> LATEST NEWS & INSIGHTS </span>

        <h2 className="text-[40px] md:text-[50px] lg:text-[70px] xl:text-[100px] 2xl:text-[120px] font-bold! text-[#222] leading-[0.917] mt-6.25 uppercase font-trump tracking-[1px]">
          Simple Tips That{" "}
          <span className="block font-bold!"> Actually Work</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-8">
        {articles.map((item) => (
          <div key={item.id}>
            <Link href={item.link} className="block overflow-hidden rounded-[20px]">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={428}
                className="w-full object-cover transition duration-500 hover:scale-105"
              />
            </Link>
            <div className="mt-2">
              <div className="flex items-center gap-2 text-lg text-[#B81C15] [&>span]:mt-2">
                <span>{item.date}</span>
                <span className="mx-2 w-6.5 h-0.5 rounded-full bg-[#B81C15] inline-block"></span>
                <span>{item.category}</span>
              </div>
              <Link href={item.link}>
                <h3 className="mt-2 lg:text-[24px] md:text-xl text-lg font-semibold text-[#222] leading-snug hover:text-[#B81C15] transition">
                  {item.title}
                </h3>
              </Link>
              <p className="mt-2 text-sm text-gray-600">{item.tag}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
