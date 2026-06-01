import Image from "next/image";

const leftItems = [
  {
    number: "01.",
    title: "Quality Work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    number: "02.",
    title: "Quality Work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    number: "03.",
    title: "Quality Work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
];

const rightItems = [
  {
    number: "04.",
    title: "Quality Work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    number: "05.",
    title: "Quality Work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    number: "06.",
    title: "Quality Work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
];

const sliderImagesA = [
  "/images/Combine 1.webp",
  "/images/Combine 2.webp",
  "/images/Combine 3.webp",
];

const sliderImagesB = [
  "/images/Combine 4.webp",
  "/images/Combine 1.webp",
  "/images/Combine 2.webp",
];

function Eyebrow() {
  return (
    <div className="flex items-center gap-4">
      <span className="relative h-0.5 w-16 bg-[#B81C15]">
        <span className="absolute -left-1.5 top-1/2 size-3 -translate-y-1/2 rounded-full bg-[#B81C15]" />
      </span>

      <p className="font-archivo text-xl font-medium text-[#222222] sm:text-2xl">
        Why Choose Us
      </p>
    </div>
  );
}

function FeatureItem({
  item,
  reverse = false,
}: {
  item: {
    number: string;
    title: string;
    description: string;
  };
  reverse?: boolean;
}) {
  return (
    <article
      className={`grid items-center xl:gap-9 md:gap-5 gap-2 ${
        reverse
          ? "text-right grid-cols-[1fr_auto] lg:text-right"
          : "text-left grid-cols-[auto_1fr]"
      }`}
    >
      {!reverse && (
        <span className="font-archivo xl:text-[56px] lg:text-[48px] md:text-[40px] text-[38px] font-semibold leading-none tracking-[-0.07em] text-[#222222] sm:text-[66px]">
          {item.number}
        </span>
      )}

      {/* lg:ml-auto right items ke content ko push krne k liye lg:text-right k sath wrap kia h */}
      <div className={reverse ? "lg:ml-auto ml-auto flex flex-col lg:items-end" : ""}>
        <h3 className="font-archivo text-[20px] font-bold! uppercase tracking-[0.08em] text-[#222222] sm:text-[24px] leading-[1.3]">
          {item.title}
        </h3>

        <p className="xl:mt-5 mt-2 max-w-90 font-[Arial] text-[16px] leading-[1.4] text-[#222222]/85 sm:text-[17px]">
          {item.description}
        </p>
      </div>

      {reverse && (
        <span className="font-archivo xl:text-[56px] lg:text-[48px] md:text-[40px] text-[38px] font-semibold leading-none tracking-[-0.07em] text-[#222222] sm:text-[66px]">
          {item.number}
        </span>
      )}
    </article>
  );
}

function ImageColumn({
  images,
  direction = "up",
}: {
  images: string[];
  direction?: "up" | "down";
}) {
  const animationClass =
    direction === "up" ? "alfonick-slider-up" : "alfonick-slider-down";

  return (
    <div className="relative h-155 overflow-hidden rounded-[18px]">
      <div className={`will-change-transform ${animationClass}`}>
        {[0, 1].map((group) => (
          <div key={group} className="flex flex-col gap-3 pb-3">
            {images.map((image, index) => (
              <div
                key={`${image}-${group}-${index}`}
                className="relative h-70 overflow-hidden rounded-2xl bg-[#EFF0F0] sm:h-80"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CreativityStrategySection() {
  return (
    <section className="overflow-hidden bg-[#ececec] pt-0 pb-14 sm:py-20 xl:pt-10 xl:pb-24">
      <style>
        {`
          @keyframes alfonickSliderUp {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              transform: translate3d(0, -50%, 0);
            }
          }

          @keyframes alfonickSliderDown {
            from {
              transform: translate3d(0, -50%, 0);
            }
            to {
              transform: translate3d(0, 0, 0);
            }
          }

          .alfonick-slider-up {
            animation: alfonickSliderUp 22s linear infinite;
          }

          .alfonick-slider-down {
            animation: alfonickSliderDown 22s linear infinite;
          }

          .alfonick-slider-up:hover,
          .alfonick-slider-down:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="mx-auto max-w-410 px-5">
        <div className="max-w-260 m-auto grid lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Eyebrow />

          <h2 className="font-archivo max-w-212.5 font-medium leading-[1.08] tracking-[-0.055em] text-[#222222] text-[34px] sm:text-[50px] lg:text-[60px] xl:text-[66px]">
            We Combine{" "}
            <span className="font-medium italic text-[#B81C15]">
              Creativity
            </span>
            <br />
            <span className="font-medium italic text-[#B81C15]">
              Storytelling
            </span>{" "}
            Strategy
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-[1fr_440px_1fr] xl:grid-cols-[1fr_500px_1fr] xl:gap-16 content-center">
          {/* Left list */}
          <div className="flex flex-col gap-14 lg:gap-20 lg:pt-12">
            {leftItems.map((item) => (
              <FeatureItem key={item.number} item={item} />
            ))}
          </div>

          {/* Center dual infinite slider */}
          <div className="relative mx-auto grid w-full max-w-130 grid-cols-2 gap-3 overflow-hidden">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-linear-to-b from-[#EFF0F0] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-linear-to-t from-[#EFF0F0] to-transparent" />

            <ImageColumn images={sliderImagesA} direction="up" />
            <ImageColumn images={sliderImagesB} direction="down" />
          </div>

          {/* Right list */}
          <div className="flex flex-col gap-14 lg:gap-20 lg:pt-12">
            {rightItems.map((item) => (
              <FeatureItem key={item.number} item={item} reverse />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}