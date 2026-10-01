const articles = [
  {
    title: "The Anatomy of a Brand That Outlives Trends",
    date: "12 July 2026",
    image: "/images/grey.png",
  },
  {
    title: "Attribution Is Broken. Here's What Replaces It",
    date: "21 Jun 2026",
    image: "/images/grey.png",
  },
  {
    title: "Designing Identity Systems for Scale",
    date: "02 March 2026",
    image: "/images/grey.png",
  },
  {
    title: "Attribution Is Broken. Here's What Replaces It",
    date: "12 Jun 2026",
    image: "/images/grey.png",
  },
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
            href="#"
            key={index}
            className="flex items-center gap-3 group"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-[90px] h-[75px] rounded-[20px] object-cover shrink-0"
            />

            <div>
              <h4 className="text-[16px] leading-[1.4] font-medium group-hover:text-[#b51f24] transition-colors">
                {article.title}
              </h4>

              <p className="text-[14px] text-[#222222B2] mt-1 font-medium">
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
