const values = [
  {
    number: "1.",
    title: "Innovation-Driven",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    number: "2.",
    title: "Ethical Excellence",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    number: "3.",
    title: "Collaborative Spirit",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    number: "4.",
    title: "Continuous Growth",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
];

export function ValuesSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10 xl:px-12">
      <div className="">
        <div className="relative overflow-hidden rounded-[18px] bg-black px-4 py-16 sm:px-8 sm:py-20 lg:px-12 2xl:px-30 xl:py-24 max-w-[1920px] m-auto">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero-bg-img.png')",
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Red depth overlay */}
          <div className="absolute -bottom-24 left-1/2 h-105 w-[85%] -translate-x-1/2 rounded-full bg-[#B81C15]/35 blur-3xl" />
          <div className="absolute left-[-12%] top-[20%] h-105 w-105 rounded-full bg-[#B81C15]/25 blur-3xl" />

          <div className="relative z-10">
            {/* Heading */}
            {/* <div className="mx-auto mb-14 max-w-4xl text-center sm:mb-16 lg:mb-20">
              <span className="font-archivo inline-flex rounded-full border border-white/25 bg-black/20 px-14 py-3 text-sm font-medium text-white backdrop-blur-md">
                Our Culture
              </span>

              <h2 className="font-archivo mt-5 text-[38px] font-medium leading-[1.05] tracking-[-0.045em] text-white sm:text-[54px] lg:text-[66px]">
                Values That Define Us
              </h2>
            </div> */}

            <div className="mt-2 sm:mt-4 max-w-236 m-auto text-center [&>span]:border [&>span]:border-[#FFFFFF26] [&>span]:text-white [&>span]:w-fit [&>span]:m-auto [&>span]:block [&>span]:shadow-[0_1px_7px_1px_#FFFFFF1A] [&>span]:rounded-full [&>span]:px-10 [&>span]:py-3 [&>span]:text-sm [&>h2]:text-[28px] sm:[&>h2]:text-[36px] md:[&>h2]:text-[42px] lg:[&>h2]:text-[56px] [&>h2]:text-white! [&>h2]:mb-4 [&>h2]:mt-6 sm:[&>h2]:mt-4">
              <span style={{ fontFamily: "Arial" }}>Our Culture</span>
              <h2>Values That Define Us</h2>
            </div>

            {/* Cards */}
            <div className="mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {values.map((item, index) => {
                const offsetClass =
                  index === 0
                    ? "lg:mt-20"
                    : index === 1
                      ? "lg:mt-0"
                      : index === 2
                        ? "lg:mt-20"
                        : "lg:mt-0";

                return (
                  <article
                    key={item.number}
                    className={`group h-fit rounded-2xl border border-white/10 bg-white/20 p-3 text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#B81C15] hover:bg-transparent hover:shadow-[0_28px_80px_rgba(184,28,21,0.22)] sm:p-4 cursor-pointer ${offsetClass}`}
                  >
                    <div className="font-archivo text-[60px] font-bold leading-none tracking-[-0.06em] text-white transition-colors duration-500 lg:text-[96px] sm:text-[66px]">
                      {item.number}
                    </div>

                    <div className="mt-16 sm:mt-22 lg:mt-20">
                      <h3 className="font-archivo text-[22px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[25px]">
                        {item.title}
                      </h3>

                      <p className="mt-4 font-[Arial] text-[15px] leading-[1.45] text-white/88 sm:text-[16px]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
