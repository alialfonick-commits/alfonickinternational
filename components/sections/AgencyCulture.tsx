import Image from "next/image";

export default function AgencyCulture() {
  return (
    <section className="bg-white pt-16 sm:pb-16 pb-12">
      <div className="max-w-430 mx-auto px-5">
        <div className="span:text-[#B81C15] text-center px-6 py-3 rounded-4xl w-fit m-auto bg-[#B81C15]/5 text-[#B81C15]">
          <span className="font-[inter]!"> OUR CULTURE </span>
        </div>

        <div className="text-center sm:mb-12 mb-6 [&>h2]">
          <h2 className="text-[36px] md:text-[44px] lg:text-[56px] font-bold text-[#222] leading-[1.1] tracking-[-1px] mt-3.75">
            Agency <span className="text-[#B81C15] italic">Culture</span>
          </h2>

          <p className="text-[#222] text-base lg:text-lg md:text-[17px] mt-4 font-[inter]!">
            Where creativity meets collaboration
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="grid col-span-12 lg:col-span-7 gap-[25px]">
            <div className="gap-12.5! h-full relative rounded-2xl overflow-hidden">
              <Image
                src="/images/AgencyCulture1.webp"
                alt="team"
                width={960}
                height={546}
                className="w-full h-full object-cover"
              />

              <div className="absolute sm:top-8 sm:left-7 top-5 left-5 md:top-8 md:left-9 
              backdrop-blur-2xl text-white border border-[#a1a1a7] md:px-7 md:py-3 px-5 py-1.75 rounded-full text-sm flex items-center gap-2 sm:text-[24px]! text-[16px]!">
                <span className="w-3 h-3 bg-[#B81C15] rounded-full"></span>
                TEAM WORK
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6.25 items-stretch">
              <div className="col-span-12 sm:col-span-7 relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/AgencyCulture2.webp"
                  alt="team"
                  width={520}
                  height={320}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-8 left-4 lg:bottom-5 lg:left-5 xl:bottom-10 xl:left-2 backdrop-blur-2xl text-white border border-[#a1a1a7] px-6 py-2.5 xl:px-6 xl:py-2.5 lg:px-4 ml-[20px] lg:py-1.25 rounded-full text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#B81C15] rounded-full"></span>
                  TEAM WORK
                </div>
              </div>

              <div className="col-span-12 sm:col-span-5 relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/AgencyCulture3.webp"
                  alt="office"
                  width={408}
                  height={320}
                  className="w-full h-full object-cover"
                />

                <p className="absolute 2xl:left-3 2xl:bottom-4 lg:left-2.5 lg:bottom-5 text-white font-normal lg:text-[24px] 2xl:text-[28px]">
                  Office Vibes
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative rounded-2xl overflow-hidden group h-full">
            <Image
              src="/images/AgencyCulture4.webp"
              alt="social"
              width={648}
              height={898}
              className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-110"
            />

            <div className="absolute top-7 sm:top-27 md:top-22 lg:top-15 left-7.5 sm:left-0 sm:right-0 sm:mx-auto w-fit bg-[#363938]/70 backdrop-blur-2xl border border-[#a1a1a7] text-white px-5 py-2 sm:px-7 sm:py-3 rounded-full text-sm flex items-center gap-2 sm:text-[24px]! text-[16px]! z-20">
              <span className="w-3 h-3 bg-[#B81C15] rounded-full"></span>
              SOCIAL FREAKS
            </div>

            <div className="absolute left-6 bottom-11 translate-y-10 opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 z-20">
              <div className="text-white text-[40px] leading-px">Social Freaks</div>
            </div>

            <div
              className="absolute inset-0 
            bg-linear-to-t from-black/50 to-transparent"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
