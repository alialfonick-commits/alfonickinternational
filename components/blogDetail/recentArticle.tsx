import React from "react";

const articles = [
  {
    title: "The Anatomy of a Brand That Outlives Trends",
    date: "12 July 2026",
  },
  {
    title: "Attribution Is Broken. Here's What Replaces It",
    date: "21 Jun 2026",
  },
  {
    title: "Designing Identity Systems for Scale",
    date: "02 march 2026",
  },
  {
    title: "Attribution Is Broken. Here's What Replaces It",
    date: "12 Jun 2026",
  }
];

const RecentArticle = () => {
  return (
    <div className="border border-[#66666680] rounded-[20px] px-3.75 py-4.25">
      <div className="flex items-center gap-2 mb-5">
        <span className="w-[3px] h-[20px] bg-[#B81C15]"></span>

        <h3 className="text-[18px] font-semibold uppercase">
          Recent Articles
        </h3>
      </div>

      <div className="space-y-4">
        {articles.map((article, index) => (
          <a
            href="/blogDetail"
            key={index}
            className="flex items-center gap-3 group"
          >
            <div className="w-[62px] h-[58px] rounded-[10px] bg-[#bdbdbd] shrink-0"></div>

            <div>
              <h4 className="text-[15px] leading-[1.4] font-medium group-hover:text-[#b51f24] transition-colors">
                {article.title}
              </h4>

              <p className="text-[10px] text-[#888] mt-1">
                {article.date}
              </p>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
};

export default RecentArticle;