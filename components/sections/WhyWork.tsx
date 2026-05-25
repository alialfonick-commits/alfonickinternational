import { Clock, Lightbulb, TrendingUp } from "lucide-react";

export default function CareersPage() {
  return (
    <section className="py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div
          className="flex flex-col lg:flex-row justify-between lg:gap-10 gap-3 mb-8
         "
        >
          <div className="[&>span]:text-[#B81C15] [&>span]:text-center [&>span]:px-6 [&>span]:py-3 [&>span]:italic [&>span]:rounded-4xl [&>span]:bg-[#B81C15]/5 [&>span]:font-[inter]!">
            <span> Core Values </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[56px] font-bold text-[#222] leading-[1.1] tracking-[-1px] mt-3.75">
              Why Work{" "}
              <span className="text-[#B81C15] italic block">With Us</span>
            </h2>
          </div>
          <p className="text-[#22222299] text-base md:text-lg lg:text-2xl max-w-150" style={{fontFamily: "Arial"}}>
            We don&apos;t just build products — we build careers. Join a team where
            your growth is our mission and every voice shapes the future.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5 bg-white border border-[#e6e6e6] rounded-2xl p-6 relative shadow-md overflow-hidden">
            <div className="w-10 h-10 flex items-center justify-center bg-[#E31C1C1A] rounded-lg mb-10">
              <TrendingUp className="size-5 text-[#B81C15]" />
            </div>

            <div className="absolute top-4 right-4 text-right mb-10">
              <p className="text-[#E31C1C] font-bold text-[30px]">200+</p>
              <p className="text-xs text-[#222222B2]">
                Hours of training yearly
              </p>
            </div>

            <h3 className="font-bold! text-2xl text-[#222]">Growth</h3>

            <p className="text-[14px] text-[#222222B2] mt-2 font-[inter]!">
              Continuous learning with mentorship programs, conferences, and
              personal development budgets.
            </p>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E31C1C]" />
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-6 bg-white border border-[#e6e6e6] rounded-2xl p-6 relative flex flex-col overflow-hidden">
                <div className="w-10 h-10 flex items-center justify-center bg-[#E31C1C1A] rounded-lg mb-10">
                  <Lightbulb className="size-5 text-[#B81C15]" />
                </div>

                <div className="absolute top-4 right-4 text-right mb-10">
                  <p className="text-[#E31C1C] font-bold text-[30px]">40%</p>
                  <p className="text-xs text-[#222222B2]">
                    Time for passion projects
                  </p>
                </div>

                <h3 className="font-bold! text-2xl text-[#222]">Innovation</h3>

                <p className="text-[14px] text-[#222222B2] mt-2 font-[inter]!">
                  Freedom to experiment with cutting-edge tech and bring bold
                  ideas to life every day.
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E31C1C]" />
              </div>

              <div className="col-span-12 md:col-span-6 bg-white border border-[#e6e6e6] rounded-2xl p-6 relative flex flex-col overflow-hidden">
                <div className="w-10 h-10 flex items-center justify-center bg-[#E31C1C1A] rounded-lg mb-10">
                  <Clock className="size-5 text-[#B81C15]" />
                </div>

                <div className="absolute top-4 right-4 text-right mb-10">
                  <p className="text-[#E31C1C] font-bold text-[30px]">100%</p>
                  <p className="text-xs text-[#222222B2]">
                    Remote-friendly roles
                  </p>
                </div>

                <h3 className="font-bold! text-2xl text-[#222]">Flexibility</h3>

                <p className="text-[14px] text-[#222222B2] mt-2 font-[inter]!">
                  Hybrid schedules, async-first culture, and unlimited PTO to
                  keep you at your best.
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E31C1C]" />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-6 bg-white border border-[#e6e6e6] rounded-2xl p-6 relative flex flex-col overflow-hidden">
                <div className="w-10 h-10 flex items-center justify-center bg-[#E31C1C1A] rounded-lg mb-10">
                  <Lightbulb className="size-5 text-[#B81C15]" />
                </div>

                <div className="absolute top-4 right-4 text-right mb-10">
                  <p className="text-[#E31C1C] font-bold text-[30px]">40%</p>
                  <p className="text-xs text-[#222222B2]">
                    Time for passion projects
                  </p>
                </div>

                <h3 className="font-bold! text-2xl text-[#222]">Innovation</h3>

                <p className="text-[14px] text-[#222222B2] mt-2 font-[inter]!">
                  Freedom to experiment with cutting-edge tech and bring bold
                  ideas to life every day.
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E31C1C]" />
              </div>

              <div className="col-span-12 md:col-span-6 bg-white border border-[#e6e6e6] rounded-2xl p-6 relative flex flex-col overflow-hidden">
                <div className="w-10 h-10 flex items-center justify-center bg-[#E31C1C1A] rounded-lg mb-10">
                  <Clock className="size-5 text-[#B81C15]" />
                </div>

                <div className="absolute top-4 right-4 text-right mb-10">
                  <p className="text-[#E31C1C] font-bold text-[30px]">100%</p>
                  <p className="text-xs text-[#222222B2]">
                    Remote-friendly roles
                  </p>
                </div>

                <h3 className="font-bold! text-2xl text-[#222]">Flexibility</h3>

                <p className="text-[14px] text-[#222222B2] mt-2 font-[inter]!">
                  Hybrid schedules, async-first culture, and unlimited PTO to
                  keep you at your best.
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#E31C1C]" />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 bg-white border border-[#e6e6e6] relative rounded-2xl p-6 shadow-md overflow-hidden">
            <div className="w-10 h-10 flex items-center justify-center bg-[#E31C1C1A] rounded-lg mb-10">
              <TrendingUp className="size-5 text-[#B81C15]" />
            </div>

            <div className="absolute top-4 right-4 text-right mb-10">
              <p className="text-[#E31C1C] font-bold text-[30px]">50%</p>
              <p className="text-xs text-[#222222B2]">Team events per year</p>
            </div>

            <h3 className="font-bold! text-2xl text-[#222]">Team Culture</h3>

            <p className="text-[14px] text-[#222222B2] mt-2 font-[inter]!">
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
