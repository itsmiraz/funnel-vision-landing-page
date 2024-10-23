"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import Company from "@/assets/images/successStories/company1.png";
import Company2 from "@/assets/images/successStories/company2.png";
import Company3 from "@/assets/images/successStories/company3.png";
import Profile from "@/assets/images/successStories/image1.png";
import Profile2 from "@/assets/images/successStories/profile2.png";
import Profile3 from "@/assets/images/successStories/profile3.png";
import Profile4 from "@/assets/images/successStories/profile-4.png";
import Profile5 from "@/assets/images/successStories/profile5.png";


interface SuccessStory {
  profile: StaticImageData; // Assuming you're using static image imports from `next/image`
  company: StaticImageData;
  name: string;
  title: string;
  review: string;
}

const SuccessStories = () => {
  const topSliderRef = useRef<HTMLDivElement | null>(null);
  const midSliderRef = useRef<HTMLDivElement | null>(null);
  const bottomSliderRef = useRef<HTMLDivElement | null>(null);
  const data: SuccessStory[] = [
    {
      profile: Company,
      company: Profile,
      name: "Amir Hamza",
      title: "Business Owner",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
    },
    {
      profile: Profile2,
      company: Company2,
      name: "Amir Hamza",
      title: "Business Owner",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
    },
    {
      profile: Profile3,
      company: Company3,
      name: "Adam Morisckao",
      title: "Business Owner",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
    },
    {
      profile: Profile4,
      company: Profile,
      name: "Amir Hamza",
      title: "Business Owner",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
    },
    {
      profile: Profile5,
      company: Profile,
      name: "Leo Costa",
      title: "Business Owner",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ",
    },
  ];

  const doubledData = [...data, ...data, ...data, ...data]; // Duplicated data for infinite scrolling

  useEffect(() => {
    const topSlider = topSliderRef.current;
    const midSlider = midSliderRef.current;
    const bottomSlider = bottomSliderRef.current;

    const startSlider = (slider: HTMLDivElement) => {
      slider.style.animationPlayState = "running";
    };

    // const stopSlider = (slider: HTMLDivElement) => {
    //   slider.style.animationPlayState = "paused";
    // };

    if (topSlider && bottomSlider ) {
      // Top slider (right to left)
      topSlider.style.animation = "slide-left 20s linear infinite";
      // topSlider.addEventListener("mouseenter", () => stopSlider(topSlider));
      topSlider.addEventListener("mouseleave", () => startSlider(topSlider));

      // Bottom slider (left to right)
      bottomSlider.style.animation = "slide-right 20s linear infinite";
      // bottomSlider.addEventListener("mouseenter", () => stopSlider(bottomSlider));
      bottomSlider.addEventListener("mouseleave", () =>
        startSlider(bottomSlider)
      );
    }

    if(midSlider){
      midSlider.style.animation = "slide-left 20s linear infinite";
      midSlider.addEventListener("mouseleave", () => startSlider(midSlider));

    }
    return () => {
      // topSlider?.removeEventListener("mouseenter", () => stopSlider(topSlider));
      topSlider?.removeEventListener("mouseleave", () =>
        startSlider(topSlider)
      );
      // bottomSlider?.removeEventListener("mouseenter", () => stopSlider(bottomSlider));
      bottomSlider?.removeEventListener("mouseleave", () =>
        startSlider(bottomSlider)
      );
      midSlider?.removeEventListener("mouseleave", () =>
        startSlider(midSlider)
      );
    };
  }, []);

  return (
    <div className="relative pb-[140px]">
      <h1 className="text-3xl px-[24px] font-bold text-center text-[#F7F9FB]">
        Success stories from the Funnel Vision community
      </h1>
      <div className="mt-[50px] relative">
        {/* Top Slider (Right to Left) */}
        <div className="slider-container overflow-hidden w-full">
          <div
            className="slider flex gap-6 w-[calc(409px*6)]"
            ref={topSliderRef}
          >
            {doubledData.map((item, i) => (
              <div
                className="rounded-[20px] custom-card-inner-shadow  md:w-[409px] min-w-[409px] py-[31px] px-[20px] bg-[#001B2E99] shadow-lg"
                key={i}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-x-3">
                    <Image src={item.profile} alt="Profile" />
                    <div>
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <p className="text-sm font-semibold">{item.title}</p>
                    </div>
                  </div>
                  <div className="w-[100px]">
                    <Image
                      className="w-full"
                      src={item.company}
                      alt="Company"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-opensans  pt-6">{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Slider (Left to Right) */}
        <div className="slider-container overflow-hidden mt-10 w-full">
          <div
            className="slider flex gap-6 w-[calc(409px*6)]"
            ref={bottomSliderRef}
          >
            {doubledData.map((item, i) => (
              <div
                className="rounded-[20px] custom-card-inner-shadow  md:w-[409px]  min-w-[409px] py-[31px] px-[20px] bg-[#001B2E99] shadow-lg"
                key={i}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-x-3">
                    <Image src={item.profile} alt="Profile" />
                    <div>
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <p className="text-sm font-semibold">{item.title}</p>
                    </div>
                  </div>
                  <div className="w-[100px]">
                    <Image
                      className="w-full"
                      src={item.company}
                      alt="Company"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-opensans pt-6">{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slider-container md:hidden block overflow-hidden mt-10 w-full">
          <div
            className="slider flex gap-6 w-[calc(409px*6)]"
            ref={midSliderRef}
          >
            {doubledData.map((item, i) => (
              <div
                className="rounded-[20px] custom-card-inner-shadow  md:w-[409px]  min-w-[409px] py-[31px] px-[20px] bg-[#001B2E99] shadow-lg"
                key={i}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-x-3">
                    <Image src={item.profile} alt="Profile" />
                    <div>
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <p className="text-sm font-semibold">{item.title}</p>
                    </div>
                  </div>
                  <div className="w-[100px]">
                    <Image
                      className="w-full"
                      src={item.company}
                      alt="Company"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-opensans pt-6">{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Gradient */}

        <div className="h-full md:block hidden w-[165px] z-30 absolute left-0 top-0 bg-gradient-to-l to-[#001B2E] from-transparent"></div>

        {/* RighT sIDE GRADIENT */}
        <div className="h-full md:block hidden w-[165px] z-30 absolute right-0 top-0 bg-gradient-to-l from-[#001B2E] to-transparent"></div>
      </div>
    </div>
  );
};

export default SuccessStories;
