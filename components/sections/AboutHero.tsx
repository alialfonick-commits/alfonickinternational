import React from "react";

const AboutHero = () => {
  return (
    <>
      <section className="max-w-460 m-auto mt-4npm run dev mx-5 rounded-[20px] -z-9 relative overflow-hidden bg-black sm:py-40 pt-33! pb-33!">
        <div
          className="    
    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    lg:w-300 w-150 lg:h-300 h-150 rounded-full 
    bg-[radial-gradient(circle_at_center,_#B81C15_0%,_rgba(184,28,21,0.85)_18%,_rgba(80,0,0,0.70)_45%,_rgba(20,0,0,0.55)_65%,_rgba(0,0,0,0.95)_100%)]
    blur-[80px] opacity-90 -z-99
    "
        ></div>

        <div
          className="relative z-10 px-5 text-center xl:[&>h1]:text-[90px]
    lg:[&>h1]:text-[70px] md:[&>h1]:text-[50px] sm:[&>h1]:text-[36px] [&>h1]:text-[32px] [&>h1]:leading-[1.2] [&>h1]:text-white! [&>p]:text-white lg:[&>p]:text-[20px] sm:[&>p]:text-[18px] [&>p]:text-[16px] [&>p]:m-auto [&>p]:max-w-240"
        >
          <h1>About Us</h1>

          <p className="font-[inter]!">
            We specialize in website development, branding, and promotion for
            developers, large manufacturing companies, transportation companies,
            and FMCG companies.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
