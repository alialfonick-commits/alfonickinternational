const categories = [
  { name: "Digital Marketing", href: "#" },
  { name: "UI/UX Design", href: "#" },
  { name: "SEO", href: "#" },
  { name: "Content Marketing", href: "#" },
  { name: "PPC", href: "#" },
  { name: "Marketing Trends", href: "#" },
];

const BlogCategories = () => {
  return (
    <div className="border border-[#66666680] rounded-[20px] px-3.75 py-4.25">
      <div className="flex items-center gap-2 mb-5">
        <span className="w-[3px] h-[20px] bg-[#B81C15]"></span>

        <h3 className="text-[18px] font-semibold uppercase">
          Categories
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <a
            href={category.href}
            key={category.name}
            className={`px-4 py-[7px] rounded-full border text-[14px] transition-colors ${
              index === 0
                ? "bg-[#B81C15] border-[#B81C15] text-[#FFFFFFCC]"
                : "border-[#666666] text-[#000000CC] hover:bg-[#B81C15] hover:border-[#B81C15] hover:text-[#FFFFFFCC]"
            }`}
          >
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;
