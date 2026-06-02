const GalleryHero = () => {
  return (
    <>
      <section className="2xl:mt-5 mt-2 sm:mx-5 mx-3 rounded-[20px] relative overflow-hidden bg-black pt-35 sm:pb-30 pb-25 z-0">

        {/* Background Glow Layer 1 (Core Red Ellipse) */}
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

        {/* Background Glow Layer 2 (Soft Spread / Ambient Glow) */}
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

        {/* Badge */}
        <span
          className="relative z-10 border-2 border-white/30 text-[#B81C15] sm:text-[16px] text-[14px] font-bold uppercase block text-center italic m-auto px-6 py-2 w-fit rounded-4xl mb-1"
          style={{ fontFamily: "Arial" }}
        >
          Our Gallery
        </span>

        {/* Content */}
        <div className="relative z-10 px-5 text-center xl:[&>h1]:text-[90px] lg:[&>h1]:text-[70px] md:[&>h1]:text-[50px] sm:[&>h1]:text-[36px] [&>h1]:text-[32px] [&>h1]:text-white [&>h1]:leading-[1.2] [&>p]:text-white lg:[&>p]:text-[20px] sm:[&>p]:text-[18px] [&>p]:text-[16px] [&>p]:m-auto [&>p]:max-w-225 [&>h1]:mt-2 [&>h1]:mb-2">

          <h1>Our Culture & Moments</h1>

          <p style={{ fontFamily: "Arial" }}>
            A visual journey through our creativity, teamwork, and success stories
          </p>

        </div>

      </section>
    </>
  );
};

export default GalleryHero;