// import Image from "next/image";

// const stats = [
//   { value: "12K", label: "Overall Experience" },
//   { value: "1K", label: "Creative Professional" },
//   { value: "3K", label: "Finished Projects" },
//   { value: "5K", label: "Satisfied Customer" },
// ];

// const avatarImages = [
//   {
//     src: "/images/agency-card-01.png",
//     alt: "Creative team member",
//     position: "object-[50%_20%]",
//   },
//   {
//     src: "/images/agency-card-02.png",
//     alt: "Marketing specialist",
//     position: "object-[50%_38%]",
//   },
//   {
//     src: "/images/agency-card-03.png",
//     alt: "Brand strategist",
//     position: "object-[50%_56%]",
//   },
// ];

// function InlineImagePill() {
//   return (
//     <span className="mx-2 inline-flex h-9 w-24 translate-y-1 overflow-hidden rounded-full border-2 border-white bg-[#EFF0F0] align-middle shadow-sm sm:h-11 sm:w-32">
//       <span className="relative block h-full w-full">
//         <Image
//           src="/images/section-img.png"
//           alt="Creative marketing preview"
//           fill
//           sizes="128px"
//           className="object-cover object-[50%_35%]"
//         />
//       </span>
//     </span>
//   );
// }

// function AvatarStack() {
//   return (
//     <span className="mx-2 inline-flex translate-y-1 items-center align-middle">
//       {avatarImages.map((avatar, index) => (
//         <span
//           key={`${avatar.alt}-${index}`}
//           className="-ml-3 first:ml-0 relative block size-9 overflow-hidden rounded-full border-2 border-white bg-[#EFF0F0] shadow-sm sm:size-11"
//         >
//           <Image
//             src={avatar.src}
//             alt={avatar.alt}
//             fill
//             sizes="44px"
//             className={`object-cover ${avatar.position}`}
//           />
//         </span>
//       ))}
//     </span>
//   );
// }

// export function BrandPotentialSection() {
//   return (
//     <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20 xl:px-12">
//       <div className="mx-auto max-w-7xl text-center">
//         <h2 className="font-archivo mx-auto max-w-6xl text-[32px] font-bold leading-[1.28] tracking-[-0.035em] text-[#222222] sm:text-[44px] lg:text-[60px]">
//           Unlock Your{" "}
//           <em className="font-semibold italic">Brand&apos;s</em> Potential With{" "}
//           <span className="text-[#B81C15]">Strategic</span> Digital Marketing{" "}
//           <em className="font-semibold italic">That</em> Drives Engagement,
//           <InlineImagePill /> Growth, And Measurable{" "}
//           <span className="text-[#B81C15]">Results In</span>
//           <AvatarStack /> Today&apos;s Competitive.
//         </h2>

//         <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
//           {stats.map((stat) => (
//             <article
//               key={stat.label}
//               className="rounded-2xl border border-[#C1C1C2]/45 bg-white px-6 py-7 text-center"
//             >
//               <p className="font-archivo text-[42px] font-bold leading-none tracking-[-0.04em] text-[#222222] sm:text-[48px]">
//                 {stat.value}
//               </p>
//               <p className="font-archivo mt-3 text-base font-bold leading-tight text-[#222222]">
//                 {stat.label}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export function BrandPotentialSection() {
  return (
    <div>
      <section className="sm:pt-20 pt-4 pb-16">
        <div className="max-w-290 mx-auto px-4 text-center">
          <h2 className="lg:text-[32px] md:text-[30px] text-[26px] xl:text-[40px] lg:leading-12 md:leading-10 leading-8 font-bold!">
            Unlock Your <span className="italic font-semi-bold!">Brand </span>{" "}
            Potential With
            <span className="text-[#B81C15] font-bold!"> Strategic</span>{" "}
            Digital Marketing
            <span className="italic">That </span> Drives Engagement,{" "}
            <Image
              src="/images/count img_1.webp"
              alt="logo"
              width={70}
              height={12}
              className="inline rounded-4xl mb-2"
            />{" "}
            Growth, And Measurable{" "}
            <span className="text-[#B81C15] font-bold!">Results In</span>{" "}
            <Image
              src="/images/people.webp"
              alt="logo"
              width={100}
              height={20}
              className="inline mb-0.5] pr-2"
            />
            Today Competitive.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 [&_div>h3]:md:leading-20 [&_div>h3]:sm:leading-12 [&_div>h3]:leading-10 [&_div>h3]:xl:text-[80px] [&_div>h3]:md:text-[60px] [&_div>h3]:sm:text-[40px] [&_div>h3]:text-[34px] [&_div>h3]:font-bold! xl:[&_div_p]:text-2xl lg:[&_div_p]:text-xl sm:[&_div_p]:text-base [&_div_p]:font-[inter]! [&_div_p]:font-bold!">
            <div>
              <h3>12K</h3>
              <p>Overall Experience</p>
            </div>

            <div>
              <h3>1K</h3>
              <p>Creative Professional</p>
            </div>

            <div>
              <h3>3K</h3>
              <p>Finished Projects</p>
            </div>

            <div>
              <h3>5K</h3>
              <p>Satisfied Customer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

