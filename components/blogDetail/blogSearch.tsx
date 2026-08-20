import React from "react";

const BlogSearch = () => {
  return (
    <div className="w-full">
      <div className="flex items-center border-b border-[#d9d9d9]">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-[48px] bg-transparent outline-none text-[13px] placeholder:text-[#777]"
        />

        <button
          type="button"
          className="w-[42px] h-[42px] bg-[#a62429] text-white flex items-center justify-center shrink-0 hover:bg-black transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogSearch;