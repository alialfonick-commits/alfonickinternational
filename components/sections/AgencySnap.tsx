import React from "react";
import Image from "next/image";

const AgencySnap = () => {
  return (


    <div className="max-w-371 mx-auto px-4 sm:pt-5 pt-10 pb-10">
      <div className="flex flex-col lg:flex-row items-start justify-between lg:gap-8 sm:gap-4 gap-2 pb-10">
        <div className="flex flex-col sm:flex-row items-center gap-4 pb-5">
          <span className="px-6 py-3 rounded-full bg-[#B81C15]/5 text-[#B81C15] text-sm whitespace-nowrap italic" style={{fontFamily: "Arial"}}>
            Who we are
          </span>
          <h2 className="mt-2 sm:mt-0 text-[30px] sm:text-[36px] lg:text-[46px] xl:text-[56px] leading-[1.1] font-semibold">
            Our Agency{" "}
            <span className="text-[#B81C15]! italic">Snaps</span>
          </h2>
        </div>

        <div className="max-w-150">
          <p className="text-[#222222] lg:text-[21px] sm:text-[20px] text-[17px] leading-loose">
            Let&apos;s get acquainted! We&apos;re not your average digital marketing
            agency - we&apos;re a team of passionate individuals who eat, sleep, and
            breathe creativity, innovation, and all things digital.
          </p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-4">
          <div className="lg:col-start-1 lg:col-end-2 col-start-1 col-end-4 [&>img]:w-full md:[&>img]:h-100 sm:[&>img]:h-75 [&>img]:h-62.5 [&>img]:rounded-3xl">
            <Image
              src="/images/Agency Snap_1.webp"
              alt="logo"
              width={500}
              height={100}
            />
          </div>

          <div className="lg:col-start-2 lg:col-end-4 col-start-1 col-end-4 md:[&>img]:h-100 sm:[&>img]:h-75 [&>img]:h-62.5 [&>img]:w-full [&>img]:rounded-3xl">
            <Image
              src="/images/Agency Snap_2.webp"
              alt="logo"
              width={500}
              height={100}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="lg:col-start-1 lg:col-end-3 col-start-1 col-end-4 md:[&>img]:h-100 sm:[&>img]:h-75 [&>img]:h-62.5 [&>img]:w-full [&>img]:rounded-3xl">
            <Image
              src="/images/Agency Snap_3.webp"
              alt="logo"
              width={500}
              height={100}
            />
          </div>

          <div className="lg:col-start-3 lg:col-end-4 col-start-1 col-end-4 [&>img]:w-full md:[&>img]:h-100 sm:[&>img]:h-75 [&>img]:h-62.5 [&>img]:rounded-3xl">
            <Image
              src="/images/Agency Snap_4.webp"
              alt="logo"
              width={500}
              height={100}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="lg:col-start-1 lg:col-end-2 col-start-1 col-end-4 [&>img]:w-full md:[&>img]:h-100 sm:[&>img]:h-75 [&>img]:h-62.5 [&>img]:rounded-3xl">
            <Image
              src="/images/Agency Snap_5.webp"
              alt="logo"
              width={500}
              height={100}
            />
          </div>

          <div className="lg:col-start-2 lg:col-end-4 col-start-1 col-end-4 md:[&>img]:h-100 sm:[&>img]:h-75 [&>img]:h-62.5 [&>img]:w-full [&>img]:rounded-3xl">
            <Image
              src="/images/Agency Snap_2.webp"
              alt="logo"
              width={500}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencySnap;
