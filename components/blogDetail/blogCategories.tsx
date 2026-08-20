import React from "react";

const categories = [
  "Digital Marketing",
  "UI/UX Design",
  "SEO",
  "Content Marketing",
  "PPC",
  "Marketing Trends",
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
            href="#"
            key={category}
            className={`px-4 py-[7px] rounded-full border text-[10px] transition-colors ${
              index === 0
                ? "bg-[#b51f24] border-[#b51f24] text-white"
                : "border-[#cfcfcf] text-[#555] hover:bg-[#b51f24] hover:border-[#b51f24] hover:text-white"
            }`}
          >
            {category}
          </a>
        ))}
      </div>

    </div>
  );
};

export default BlogCategories;