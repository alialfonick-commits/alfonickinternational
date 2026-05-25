import { ArrowUpRight, Clock, Lightbulb, TrendingUp } from "lucide-react";
import { Send } from 'lucide-react';
import { FileUser } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { BadgeDollarSign } from 'lucide-react';


export default function ApplicationProcess() {
  const steps = [
    {
      id: "01",
      step: "STEP 1",
      title: "Apply",
      desc: "Submit your application and portfolio through our simple online form.",
      side: "left",
      top: "top-[0px]",
    //   icon: ArrowUpRight,
      icon: Send,
    },
    {
      id: "02",
      step: "STEP 2",
      title: "Screening",
      desc: "Our talent team reviews your profile and reaches out within 48 hours.",
      side: "right",
      top: "top-[210px]",
      icon: FileUser,
    },
    {
      id: "03",
      step: "STEP 3",
      title: "Interview",
      desc: "Meet the team through a series of conversations to explore mutual fit.",
      side: "left",
      top: "top-[420px]",
      icon: MessageSquare,
    },
    {
      id: "04",
      step: "STEP 4",
      title: "Offer",
      desc: "Receive a competitive offer and start your journey with us!",
      side: "right",
      top: "top-[630px]",
      icon: BadgeDollarSign,
    },
  ];

  return (
    <section className="bg-white sm:py-20 pt-5 pb-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center lg:mb-24 mb-15">
          <h2 className="lg:text-[51px] md:text-5xl sm:text-4xl text-[34px] font-bold! leading-[1.1]">
            Application{" "}
            <span className="text-[#B81C15] font-bold!">Process</span>
          </h2>

          <p className="text-[#22222299] text-base lg:text-xl mt-3">
            Four simple steps to join the team
          </p>
        </div>
        <div className="hidden lg:block relative h-212.5 max-w-6xl mx-auto">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`absolute left-1/2 -translate-x-1/2 ${item.top} w-full`}
              >
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                  <h3
                    className="md:text-[66px] text-[66px] font-semibold leading-none text-[#B81C15]!"
                    style={{
                      textShadow: "0px 0px 30px rgba(221,66,66,0.9)", fontFamily: "Unbounded" }}>
                    {item.id}
                  </h3>

                  {index !== steps.length - 1 && (
                    <div
                      className="w-0.5 h-26.25 mt-4"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(184, 28, 21, 0) 10.1%, #B81C15 100%)",
                      }}
                    />
                  )}
                </div>

                <div
                  className={`absolute top-0 ${
                    item.side === "left" ? "sm:right-[60%] right-[54%]" : "sm:left-[61%] left-[55%]"
                  }`}
                >
                  <div
                    className={`w-92 bg-white rounded-[14px] border border-[#E6E6E6] shadow-[0px_4px_24px_rgba(0,0,0,0.08)] p-5 ${
                      item.side === "left" ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-5 ${
                        item.side === "left" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#E31C1C1A] flex items-center justify-center">
                        <Icon className="size-5 text-[#B81C15]" />
                      </div>

                      <span className="text-[12px] font-bold tracking-[-0.6px] text-[#B81C15] uppercase">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold! text-[#222] leading-none mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-normal text-[#737373]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:hidden relative max-w-md mx-auto">
          <div className="space-y-12">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative pl-20">
                  <div className="absolute left-0 top-0 flex flex-col items-center">
                    <h3
                      className="text-[42px] font-semibold leading-none text-[#B81C15]!"
                      style={{
                        textShadow: "0px 0px 30px rgba(221,66,66,0.9)",
                      }}
                    >
                      {item.id}
                    </h3>
                    {index !== steps.length - 1 && (
                      <div
                        className="w-0.5 h-22.5 mt-4"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(184, 28, 21, 0) 10.1%, #B81C15 100%)",
                        }}
                      />
                    )}
                  </div>

                  <div className="bg-white rounded-[14px] border border-[#ECECEC] shadow-[0px_6px_20px_rgba(0,0,0,0.05)] p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#FFF2F1] flex items-center justify-center">
                        <Icon className="size-3.5 text-[#B81C15]" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-[1px] text-[#B81C15] uppercase">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-[18px] font-bold! text-[#222] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[13px] leading-normal text-[#737373]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
