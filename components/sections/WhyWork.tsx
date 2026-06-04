import { Clock, Lightbulb, TrendingUp } from "lucide-react";

export default function CareersPage() {
  return (
    <section className="sm:pt-25 pt-16 sm:pb-4 pb-8 px-6 md:px-16">
      <div className="max-w-350 mx-auto">
        <div
          className="flex flex-col lg:flex-row justify-between lg:gap-10 gap-3 mb-8
         "
        >
          <div className="[&>span]:text-[#B81C15] [&>span]:text-center [&>span]:px-6 [&>span]:py-3 [&>span]:rounded-4xl [&>span]:bg-[#B81C15]/5 [&>span]:font-arial! max-sm:[&>span]:text-[14px]">
            <span> OUR CULTURE</span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[56px] font-bold text-[#222] leading-[1.1] tracking-[-1px] mt-6">
              Why Work{" "}
              <span className="text-[#B81C15] italic block">With Us</span>
            </h2>
          </div>
          <p className="text-[#22222299] text-base md:text-lg lg:text-2xl max-w-150 leading-[1.763]" style={{fontFamily: "Arial"}}>
            We don&apos;t just build products — we build careers. Join a team where
            your growth is our mission and every voice shapes the future.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5 bg-white border border-[#e6e6e6] rounded-2xl p-6 relative overflow-hidden shadow-[0px_4px_24px_-4px_#00000014]">
            <div className="w-14 h-14 flex items-center justify-center bg-[#E31C1C1A] rounded-2xl mb-10">
              <TrendingUp className="size-6 text-[#E31C1C]" />
            </div>

            <div className="absolute top-4 right-4 text-right mb-10">
              <p className="text-[#E31C1C] font-bold text-[30px] font-arial">200+</p>
              <p className="text-xs text-[#222222B2]">
                Hours of training yearly
              </p>
            </div>

            <h3 className="font-bold! text-2xl text-[#222]">Growth</h3>

            <p className="text-[14px] text-[#222222B2] mt-2" style={{ fontFamily: 'Arial, sans-serif', }}>
              Continuous learning with mentorship programs, conferences, and
              personal development budgets.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E31C1C]" />
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-6 bg-white border border-[#e6e6e6] rounded-2xl p-6 relative flex flex-col overflow-hidden shadow-[0px_4px_24px_-4px_#00000014]">
                <div className="w-14 h-14 flex items-center justify-center bg-[#E31C1C1A] rounded-2xl mb-10">
                  <Lightbulb className="size-6 text-[#E31C1C]" />
                </div>

                <div className="absolute top-4 right-4 text-right mb-10">
                  <p className="text-[#E31C1C] font-bold text-[30px] font-arial">40%</p>
                  <p className="text-xs text-[#222222B2]">
                    Time for passion projects
                  </p>
                </div>

                <h3 className="font-bold! text-2xl text-[#222]">Innovation</h3>

                <p className="text-[14px] text-[#222222B2] mt-2 " style={{ fontFamily: 'Arial, sans-serif', }} >
                  Freedom to experiment with cutting-edge tech and bring bold
                  ideas to life every day.
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E31C1C]" />
              </div>

              <div className="col-span-12 md:col-span-6 bg-white border border-[#e6e6e6] rounded-2xl p-6 relative flex flex-col overflow-hidden shadow-[0px_4px_24px_-4px_#00000014]">
                <div className="w-14 h-14 flex items-center justify-center bg-[#E31C1C1A] rounded-2xl mb-10">
                  <Clock className="size-6 text-[#E31C1C]" />
                </div>

                <div className="absolute top-4 right-4 text-right mb-10">
                  <p className="text-[#E31C1C] font-bold text-[30px] font-arial">100%</p>
                  <p className="text-xs text-[#222222B2]">
                    Remote-friendly roles
                  </p>
                </div>

                <h3 className="font-bold! text-2xl text-[#222]">Flexibility</h3>

                <p className="text-[14px] text-[#222222B2] mt-2 " style={{ fontFamily: 'Arial, sans-serif', }}>
                  Hybrid schedules, async-first culture, and unlimited PTO to
                  keep you at your best.
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E31C1C]" />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-6 bg-white border border-[#e6e6e6] rounded-2xl p-6 relative flex flex-col overflow-hidden shadow-[0px_4px_24px_-4px_#00000014]">
                <div className="w-14 h-14 flex items-center justify-center bg-[#E31C1C1A] rounded-2xl mb-10">
                  <Lightbulb className="size-6 text-[#E31C1C]" />
                </div>

                <div className="absolute top-4 right-4 text-right mb-10">
                  <p className="text-[#E31C1C] font-bold text-[30px] font-arial">40%</p>
                  <p className="text-xs text-[#222222B2]">
                    Time for passion projects
                  </p>
                </div>

                <h3 className="font-bold! text-2xl text-[#222]">Innovation</h3>

                <p className="text-[14px] text-[#222222B2] mt-2 " style={{ fontFamily: 'Arial, sans-serif', }}>
                  Freedom to experiment with cutting-edge tech and bring bold
                  ideas to life every day.
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E31C1C]" />
              </div>

              <div className="col-span-12 md:col-span-6 bg-white border border-[#e6e6e6] rounded-2xl p-6 relative flex flex-col overflow-hidden shadow-[0px_4px_24px_-4px_#00000014]">
                <div className="w-14 h-14 flex items-center justify-center bg-[#E31C1C1A] rounded-2xl mb-10">
                  <Clock className="size-6 text-[#E31C1C]" />
                </div>

                <div className="absolute top-4 right-4 text-right mb-10">
                  <p className="text-[#E31C1C] font-bold text-[30px] font-arial">100%</p>
                  <p className="text-xs text-[#222222B2]">
                    Remote-friendly roles
                  </p>
                </div>

                <h3 className="font-bold! text-2xl text-[#222]">Flexibility</h3>

                <p className="text-[14px] text-[#222222B2] mt-2 " style={{ fontFamily: 'Arial, sans-serif', }}>
                  Hybrid schedules, async-first culture, and unlimited PTO to
                  keep you at your best.
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E31C1C]" />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 bg-white border border-[#e6e6e6] relative rounded-2xl p-6 overflow-hidden shadow-[0px_4px_24px_-4px_#00000014]">
            <div className="w-14 h-14 flex items-center justify-center bg-[#E31C1C1A] rounded-2xl mb-10">
              <TrendingUp className="size-6 text-[#E31C1C]" />
            </div>

            <div className="absolute top-4 right-4 text-right mb-10">
              <p className="text-[#E31C1C] font-bold text-[30px] font-arial">50%</p>
              <p className="text-xs text-[#222222B2]">Team events per year</p>
            </div>

            <h3 className="font-bold! text-2xl text-[#222]">Team Culture</h3>

            <p className="text-[14px] text-[#222222B2] mt-2 " style={{ fontFamily: 'Arial, sans-serif', }}>
              Collaborative, inclusive teams that celebrate wins together and
              support each other.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E31C1C]" />
          </div>
        </div>
      </div>
    </section>
  );
}
