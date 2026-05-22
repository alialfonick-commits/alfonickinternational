import Image from "next/image";


const LifeAgency = () => {
  return (
    <>
<section className="bg-[#EEEEEE] md:pt-20 pt-7 pb-7 md:pb-12 mb-10">
    <div className="w-full mx-auto">
   
        <div className="m-auto text-center lg:mb-10 mb-12">
          <h2 className="lg:text-[51px] md:text-5xl sm:text-4xl text-[34px] !font-bold leading-[1.1]">
            Life at the{" "}
            <span className="text-[#B81C15] italic">
               Agency
            </span>
          </h2>

          <p className="text-[#22222299] text-sm lg:text-xl mt-3">
            A glimpse into our day-to-day culture
          </p>
        </div>


        <div className="overflow-hidden">
          <div className="flex gap-8 [&_img]:h-auto [&_img]:rounded-xl pb-10 scrollLeft">

            <Image src="/images/agency_1.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_2.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_3.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_4.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_5.webp" alt="logo" width={500} height={100} />


             <Image src="/images/agency_1.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_2.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_3.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_4.webp" alt="logo" width={500} height={100} />

            <Image src="/images/agency_5.webp" alt="logo" width={500} height={100} />


          </div>
        </div>

                </div>
      </section>
    </>
  );
};

export default LifeAgency;
