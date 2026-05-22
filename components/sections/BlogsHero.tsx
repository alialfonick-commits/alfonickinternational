import React from 'react'

const CareerHero = () => {
  return (
    <>

      <section className="mt-5 mx-5 rounded-[20px] -z-9 relative overflow-hidden bg-black pt-35! pb-20">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
    lg:w-300 w-150 lg:h-300 h-150 rounded-full bg-[radial-gradient(circle,_#ff0000_0%,_rgba(255,0,0,0.95)_8%,_rgba(255,0,0,0.75)_18%,_rgba(100,0,0,0.45)_60%,_rgba(90,0,0,0.18)_52%,_rgba(30,0,0,0.08)_65%,_transparent_78%)]
  
    blur-[80px] opacity-90 -z-99"></div>

        <span className="bg-[#750200ad] border-2 border-white/30 shadow-[0_-1px_7px_1px_#B81C15] text-[#B81C15]! sm:text-[16px] text-[14px] text:font-bold uppercase block text-center italic m-auto px-6 py-2 w-fit rounded-4xl mb-1 z-99 " style={{ fontFamily: "Arial" }}>
          {" "}
          Our Gallery{" "}
        </span>

        <div
          className="relative z-10 px-5 text-center xl:[&>h1]:text-[90px] lg:[&>h1]:text-[70px] md:[&>h1]:text-[50px] sm:[&>h1]:text-[36px] [&>h1]:text-[32px] [&>h1]:text-white! [&>h1]:leading-[1.2] [&>p]:text-white! lg:[&>p]:text-[20px] sm:[&>p]:text-[18px] [&>p]:text-[16px] [&>p]:m-auto [&>p]:max-w-225 md:[&>h1]:my-0 [&>h1]:mt-2.5 [&>h1]:mb-1.75 ">
          <h1> News & Insights </h1>
          <p style={{ fontFamily: "Arial" }}>
            A visual journey through our creativity, teamwork, and success stories
          </p>
        </div>
      </section>

    </>
  )
}

export default CareerHero