const AboutHero = () => {
  return (
    <>
      <section className="2xl:mt-5 mt-2 sm:mx-5 mx-2 rounded-[20px] relative overflow-hidden bg-black sm:py-40 pt-33 pb-33 z-0">

        {/* Background Glow Layer 1 (Main Core) */}
        <div
          className="
            pointer-events-none
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            lg:w-[1600px] w-[900px]
            lg:h-[1100px] h-[700px]
            rounded-full
            blur-[140px]
            opacity-90
            bg-[radial-gradient(ellipse_at_center,_#B81C15_0%,_rgba(184,28,21,0.55)_30%,_rgba(184,28,21,0.2)_55%,_transparent_75%)]
          "
        />

        {/* Background Glow Layer 2 (Outer soft spread) */}
        <div
          className="
            pointer-events-none
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            lg:w-[1900px] w-[1200px]
            lg:h-[1300px] h-[900px]
            rounded-full
            blur-[200px]
            opacity-60
            bg-[radial-gradient(ellipse_at_center,_rgba(184,28,21,0.35)_0%,_transparent_70%)]
          "
        />

        {/* Content */}
        <div
          className="relative z-10 px-5 text-center xl:[&>h1]:text-[90px] lg:[&>h1]:text-[70px] md:[&>h1]:text-[50px] sm:[&>h1]:text-[36px] [&>h1]:text-[32px] [&>h1]:leading-[1.2] [&>h1]:text-white [&>p]:text-white lg:[&>p]:text-[20px] sm:[&>p]:text-[18px] [&>p]:text-[16px] [&>p]:m-auto [&>p]:max-w-240"
        >
          <h1>About Us</h1>

          <p className="font-[inter]">
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