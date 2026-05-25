"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      question: "What is SEO and why is it important?",
      answer:
        "SEO (Search Engine Optimization) is the process of improving your website to increase its visibility on search engines like Google. It helps your website appear higher in search results when users search for relevant keywords. This leads to more organic traffic without paid ads. SEO also builds trust and credibility for your brand. Overall, it is essential for long-term online growth.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is not instant and usually takes time to show meaningful results. In most cases, you can expect noticeable improvements within 3 to 6 months. However, this depends on competition, keyword difficulty, and your strategy. Consistency in content and optimization plays a big role. Long-term effort brings the best results.",
    },
    {
      question: "What are the key factors that influence SEO rankings?",
      answer:
        "There are multiple factors that impact SEO rankings on search engines. High-quality content is one of the most important elements. Backlinks from trusted websites also improve authority. Website speed and mobile responsiveness matter a lot. Technical SEO like proper structure and indexing is also critical. All these factors together improve rankings.",
    },
    {
      question: "Do I need to hire an SEO agency, or can I do SEO myself?",
      answer:
        "You can definitely learn and implement SEO on your own with enough time and effort. However, SEO agencies bring experience, tools, and proven strategies. They can help you achieve results faster and avoid common mistakes. If your project is serious or competitive, hiring experts can be beneficial. Otherwise, self-learning is also a good start.",
    },
    {
      question: "How much does SEO cost?",
      answer:
        "SEO costs vary depending on the scope of work and expertise required. Small businesses may spend a few hundred dollars per month. Larger companies can spend thousands for advanced strategies. Pricing depends on services like content creation, backlinks, and technical optimization. It is usually a long-term investment rather than a one-time cost. Good SEO delivers strong ROI over time.",
    },
    {
      question: "Can I rank #1 on Google for any keyword?",
      answer:
        "Ranking #1 on Google is possible but not guaranteed for every keyword. Highly competitive keywords are difficult and require strong authority. Your website's quality, backlinks, and content all matter. Consistent effort improves your chances over time. Targeting the right keywords is also very important. Smart strategy leads to better success.",
    },
    {
      question:
        "Is SEO a one-time effort, or does it require ongoing maintenance?",
      answer:
        "SEO is not a one-time task and requires continuous effort. Search engine algorithms keep changing regularly. Competitors are also constantly improving their websites. You need to update content and optimize regularly. Monitoring performance and fixing issues is also important. Ongoing SEO ensures long-term success.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <main className="px-6 md:px-10 lg:px-20 sm:pt-16 pt-12 pb-22">
      <div className="max-w-250 mx-auto">
        <div className="pb-5 xl:[&>h2]:text-[50px] lg:[&>h2]:text-[46px] sm:[&>h2]:text-[36px] [&>h2]:mt-4 [&>h2]:text-[30px] sm:[&>h2]:pt-0 [&>h2]:pt-5 [&>h2]:leading-[1.1] [&>h2_span]:text-[#B81C15] [&>h2_span]:italic text-center [&>span]:px-6 [&>span]:py-3 [&>span]:italic [&>span]:rounded-4xl [&>span]:bg-[#B81C15]/5 [&>span]:text-[#B81C15]">
          <span className="" style={{fontFamily: "Arial"}}> Frequently Asked Questions </span>
          <h2>
            Got Questions?{" "}
            <div className="block">
              {" "}
              We&apos;ve <span>Got Answers!</span>{" "}
            </div>
          </h2>
        </div>

        <div className="max-w-250 m-auto flex flex-col gap-4 pt-5">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-[#eeeeee] border border-[#0D0D0D1A] rounded-[30px] overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4 cursor-pointer"
              >
                <p className="text-[#222] text-[16px] md:text-[17px] lg:text-[18px] text-left" style={{fontFamily: "Arial"}}>
                  {item.question}
                </p>

                <div className="w-9 h-9 flex items-center justify-center p-3 rounded-[10px] bg-[#B81C15]">
                  <ArrowRight
                    size={18}
                    strokeWidth={2.4}
                    className={`text-white text-sm transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""}`}
                  />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-75 " : "max-h-0"
                }`}
              >
                <div className="rounded-[20px] px-5 pb-4 pt-0!">
                  <p className="text-[#222] text-sm leading-6" style={{fontFamily: "Arial"}}>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
