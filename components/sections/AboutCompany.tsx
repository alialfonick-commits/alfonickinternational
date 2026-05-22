"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const AboutCompany = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      question: "Our History",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Our Mission",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Our Vision",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className="container px-5 pt-20!">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div>
            <div className="flex flex-col sm:flex-row items-start gap-4 pb-5">
              <span className="px-6 py-3 rounded-full bg-[#B81C15]/5 text-[#B81C15] text-sm whitespace-nowrap italic">
                Who we are
              </span>

              <h2 className="mt-2 sm:mt-0 text-[30px] sm:text-[36px] lg:text-[46px] xl:text-[56px] leading-[1.1] font-semibold">
                About our Company
              </h2>
            </div>

            <p className="text-[#555] xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[17px] xl:leading-10 leading-6 font-[inter]!">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry standard dummy text ever since the
              1500s
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-4">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#eeeeee] border border-[#0D0D0D1A] rounded-[30px] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between px-4 py-5"
                  >
                    <div className="flex items-center">
                      <span className="text-[#222222] text-[16px] font-light min-w-11.25">
                        {String(index + 1).padStart(2, "0")}.
                      </span>

                      <p className="text-[#222] text-[16px] md:text-[17px] lg:text-[18px] text-left">
                        {item.question}
                      </p>
                    </div>

                    <div className="w-9 h-9 flex items-center justify-center rounded-[10px] bg-[#B81C15]">
                      <ArrowRight
                        size={14}
                        strokeWidth={2.4}
                        className={`text-white text-sm transition-transform duration-300 ${
                          openIndex === index ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-72 opacity-100 pb-5"
                        : "max-h-0 opacity-0 pb-0"
                    }`}
                  >
                    <div className="px-5 pl-16.25">
                      <p className="text-[#555] text-[15px] leading-7">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
