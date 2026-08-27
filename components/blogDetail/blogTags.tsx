const tags = [
  { name: "Digital", href: "#" },
  { name: "Creative", href: "#" },
  { name: "Branding", href: "#" },
  { name: "Design", href: "#" },
  { name: "Marketing", href: "#" },
  { name: "Business", href: "#" },
];

const BlogTags = () => {
  return (
    <div className="border border-[#66666680] rounded-[20px] px-3.75 py-4.25">
      <div className="flex items-center gap-2 mb-5">
        <span className="w-[3px] h-[20px] bg-[#B81C15]"></span>

        <h3 className="text-[18px] font-semibold uppercase">
          Tags
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <a
            href={tag.href}
            key={tag.name}
            className={`px-4 py-[7px] rounded-full border text-[14px] transition-colors ${
              index === 0
                ? "bg-[#B81C15] border-[#B81C15] text-[#FFFFFFCC]"
                : "border-[#666666] text-[#000000CC] hover:bg-[#B81C15] hover:border-[#B81C15] hover:text-[#FFFFFFCC]"
            }`}
          >
            {tag.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogTags;
