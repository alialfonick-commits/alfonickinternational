import React from "react";
import Link from "next/link";

const CareerHero = () => {
    return (
        <>
            <section className="mt-5 mx-5 rounded-[20px] -z-9 relative overflow-hidden bg-black sm:py-40 pt-35! py-20!">
                <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
w-150 h-150 sm:w-200 sm:h-200 lg:w-350 lg:h-350 rounded-full 
bg-[radial-gradient(circle,_rgba(255,0,0,0.9)_0%,_rgba(255,0,0,0.45)_25%,_rgba(255,0,0,0.12)_55%,_transparent_100%)]"
                ></div>

                <span
                    className="shadow-[0_-1px_7px_1px_#FFFFFF80] text-white text-[16px] text:font-bold uppercase block text-center italic m-auto px-6 py-2 border w-fit rounded-4xl md:mb-1 mb-4!"
                    style={{ fontFamily: "Arial" }}
                >
                    {" "}
                    Our Gallery{" "}
                </span>

                <div className="relative z-10 px-5 text-center xl:[&>h1]:text-[90px] lg:[&>h1]:text-[70px] md:[&>h1]:text-[50px] sm:[&>h1]:text-[36px] [&>h1]:text-[32px] [&>h1]:leading-[1.2] [&>h1]:text-white! [&>p]:text-white lg:[&>p]:text-[20px] sm:[&>p]:text-[18px] [&>p]:text-[16px] [&>p]:m-auto [&>p]:max-w-225 [&_p]:font-[inter]!">
                    <h1>Join Our Team</h1>

                    <p style={{ fontFamily: "Arial" }}>
                        {" "}
                        Build your future with creativity, innovation, and growth{" "}
                    </p>

                    <Link
                        href="/careers"
                        className="bg-white hover:bg-[#B81C15] text-[18px] px-7 py-3 rounded-4xl z-30 text-[#B81C15] block w-fit m-auto mt-5 cursor-pointer"
                    >
                        {" "}
                        View Open Positions{" "}
                    </Link>
                </div>
            </section>
        </>
    );
};

export default CareerHero;
