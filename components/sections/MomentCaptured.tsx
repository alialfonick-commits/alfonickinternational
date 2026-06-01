"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MomentCaptured() {
  const galleryData = {
    all: [
      "/images/Agency Snap_1.webp",
      "/images/agency_1.webp",
      "/images/agency_2.webp",
      "/images/agency_4.webp",
      "/images/Agency Snap_5.webp",
      "/images/agency_1.webp",
      "/images/agency_1.webp",
      "/images/Agency Snap_5.webp",
    ],

    fun: [
      "/images/agency_4.webp",
      "/images/agency_1.webp",
      "/images/agency_2.webp",
      "/images/agency_1.webp",
    ],

    birthdays: [
      "/images/Agency Snap_1.webp",
      "/images/agency_2.webp",
      "/images/agency_1.webp",
      "/images/Agency Snap_5.webp",
    ],

    team: [
      "/images/agency_2.webp",
      "/images/Agency Snap_5.webp",
      "/images/agency_1.webp",
      "/images/Agency Snap_1.webp",
    ],

    office: [
      "/images/agency_4.webp",
      "/images/agency_1.webp",
      "/images/Agency Snap_5.webp",
      "/images/agency_2.webp",
    ],
  };

  const renderGallery = (images: string[] = []) => (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {images?.[0] && (
          <div className="lg:col-start-1 lg:col-end-2 col-span-3">
            <Image
              src={images[0]}
              alt="gallery"
              width={500}
              height={300}
              className="w-full h-62.5 sm:h-75 md:h-100 object-cover rounded-xl"
            />
          </div>
        )}

        {images?.[1] && (
          <div className="lg:col-start-2 lg:col-end-4 col-span-3">
            <Image
              src={images[1]}
              alt="gallery"
              width={1000}
              height={300}
              className="w-full h-62.5 sm:h-75 md:h-100 object-cover rounded-xl"
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {images?.[2] && (
          <div className="lg:col-start-1 lg:col-end-3 col-span-3">
            <Image
              src={images[2]}
              alt="gallery"
              width={1000}
              height={300}
              className="w-full h-62.5 sm:h-75 md:h-100 object-cover rounded-xl"
            />
          </div>
        )}

        {images?.[3] && (
          <div className="lg:col-start-3 lg:col-end-4 col-span-3">
            <Image
              src={images[3]}
              alt="gallery"
              width={500}
              height={300}
              className="w-full h-62.5 sm:h-75 md:h-100 object-cover rounded-xl"
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {images?.[4] && (
          <div className="lg:col-start-1 lg:col-end-2 col-span-3">
            <Image
              src={images[4]}
              alt="gallery"
              width={500}
              height={300}
              className="w-full h-62.5 sm:h-75 md:h-100 object-cover rounded-xl"
            />
          </div>
        )}

        {images?.[5] && (
          <div className="lg:col-start-2 lg:col-end-4 col-span-3">
            <Image
              src={images[5]}
              alt="gallery"
              width={1000}
              height={300}
              className="w-full h-52.5 sm:h-75 md:h-100 object-cover rounded-xl"
            />
          </div>
        )}
      </div>

      {images?.[6] && images?.[7] && (
        <div className="grid grid-cols-3 gap-4">
          <div className="lg:col-start-1 lg:col-end-3 col-span-3">
            <Image
              src={images[6]}
              alt="gallery"
              width={1000}
              height={300}
              className="w-full h-62.5
             sm:h-75 md:h-100 object-cover rounded-xl"
            />
          </div>

          <div className="lg:col-start-3 lg:col-end-4 col-span-3">
            <Image
              src={images[7]}
              alt="gallery"
              width={500}
              height={300}
              className="w-full h-62.5
             sm:h-75 md:h-100 object-cover rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
  return (
    <section className="bg-[#EEEEEE] py-16 lg:p-24 pt-14 pb-10 sm:m-5 m-3 rounded-[20px]">
      <div className="max-w-380 mx-auto px-5">
        <div className="text-center mb-10">
          <div className="[&_span]:uppercase [&_span]:text-[#B81C15] text-center px-6 py-3 rounded-4xl w-fit m-auto bg-[#B81C15]/5">
            <span style={{ fontFamily: "Arial" }}> Image Gallery </span>
          </div>

          <h2 className="text-[36px] md:text-[44px] lg:text-[56px] font-normal! text-[#222] leading-[1.1] tracking-[-1px] mt-3.75">
            {" "}
            Moments Captured in{" "}
            <span className="text-[#B81C15] italic font-medium">
              Pixels
            </span>
          </h2>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList
            className="flex justify-start! md:flex-wrap md:justify-center gap-3 mb-10 bg-transparent h-auto p-0 w-full md:w-auto md:max-w-4xl
    mx-auto md:overflow-visible overflow-x-auto flex-nowrap whitespace-nowrap scroll-smooth no-scrollbar px-2"
          >
            <TabsTrigger
              value="all"
              className="cursor-pointer shrink-0 md:shrink lg:px-5 px-4 lg:py-5 py-4 rounded-full xl:text-[18px] text-sm transition-all duration-300 border border-[#2222221A] bg-white text-[#222] data-[state=active]:bg-[#B81C15] data-[state=active]:text-white! data-[state=active]:border-[#2222221A] hover:bg-[#B81C15] hover:text-white! shadow-[4px_4px_20px_0_#91919140]
      "
              style={{ fontFamily: "Arial" }}
            >
              All Photos
            </TabsTrigger>

            <TabsTrigger
              value="fun"
              className="cursor-pointer shrink-0 md:shrink lg:px-5 px-4 lg:py-5 py-4 rounded-full xl:text-[18px] text-sm transition-all duration-300 border border-[#2222221A] bg-white text-[#222]!

        data-[state=active]:bg-[#B81C15] data-[state=active]:text-white! data-[state=active]:border-[#2222221A] hover:bg-[#B81C15] hover:text-white! shadow-[4px_4px_20px_0_#91919140]"
              style={{ fontFamily: "Arial" }}
            >
              Fun Activities
            </TabsTrigger>

            <TabsTrigger
              value="birthdays"
              className="cursor-pointer shrink-0 md:shrink
        lg:px-5 px-4 lg:py-5 py-4 rounded-full xl:text-[18px] text-sm transition-all duration-300 border border-[#2222221A]
        bg-white text-[#222]! data-[state=active]:bg-[#B81C15] data-[state=active]:text-white!
        data-[state=active]:border-[#2222221A] hover:bg-[#B81C15]
        hover:text-white! shadow-[4px_4px_20px_0_#91919140]
      "
              style={{ fontFamily: "Arial" }}
            >
              Birthdays
            </TabsTrigger>
            <TabsTrigger
              value="team"
              className="cursor-pointer shrink-0 md:shrink lg:px-5 px-4 lg:py-5 py-4 rounded-full xl:text-[18px] text-sm transition-all duration-300 border border-[#2222221A] bg-white text-[#222]! data-[state=active]:bg-[#B81C15]
        data-[state=active]:text-white! data-[state=active]:border-[#2222221A] hover:bg-[#B81C15] hover:text-white! shadow-[4px_4px_20px_0_#91919140]"
              style={{ fontFamily: "Arial" }}
            >
              {" "}
              Team Moments
            </TabsTrigger>

            <TabsTrigger
              value="office"
              className="
       cursor-pointer shrink-0 md:shrink lg:px-5 px-4 lg:py-5 py-4 rounded-full xl:text-[18px] text-sm transition-all duration-300 border
        border-[#2222221A] bg-white text-[#222]! data-[state=active]:bg-[#B81C15] data-[state=active]:text-white! data-[state=active]:border-[#2222221A] hover:bg-[#B81C15] hover:text-white! shadow-[4px_4px_20px_0_#91919140]
      "
              style={{ fontFamily: "Arial" }}
            >
              Office Life
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {renderGallery(galleryData.all)}
          </TabsContent>

          <TabsContent value="fun">
            {renderGallery(galleryData.fun)}
          </TabsContent>

          <TabsContent value="birthdays">
            {renderGallery(galleryData.birthdays)}
          </TabsContent>

          <TabsContent value="team">
            {renderGallery(galleryData.team)}
          </TabsContent>

          <TabsContent value="office">
            {renderGallery(galleryData.office)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
