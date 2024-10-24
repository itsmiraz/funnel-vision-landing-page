/* eslint-disable react/no-unescaped-entities */

"use client";
import Image from "next/image";
import React from "react";
import AnimatedDOt from "@/assets/icons/animatedDot.svg";
// import FunnelBuilderImage from "@/assets/images/funnel-builder.webp";

import MainImage from "@/assets/images/funnelBuilder/mainImage.png";
import BackgroundGradient from "@/assets/images/funnelBuilder/backgroundGradient.png";
import StartWith from "@/assets/images/funnelBuilder/start.png";
import Ready from "@/assets/images/funnelBuilder/ready.png";
import Instant from "@/assets/images/funnelBuilder/instant.png";
import AiPowered from "@/assets/images/funnelBuilder/ai.png";

const FunnelBuilder = () => {
  return (
    <div className="pb-[60px] overflow-hidden md:pb-[140px] px-[20px] relative">
      <div className="max-w-[1062px] gap-y-[80px] gap-x-[66px]  flex    md:flex-row flex-col justify-between items-center py-[46px] linier-gradient-right-to-left  mx-auto rounded-[20px]">
        <div className="relative md:px-0 px-[20px]  w-full  md:max-w-[431px]">
          <div
            style={{
              backgroundImage: `url(${BackgroundGradient.src})`,
              backgroundSize: "200% 200%", // Double the size for continuous looping
              backgroundPosition: "0% 100%",
              backgroundRepeat: "no-repeat",
              animation: "moveBackground 15s linear infinite",
            }}
            className=" w-full rounded-[20px] overflow-hidden relative   p-[26px] md:max-w-[431px]"
          >
            <Image
              src={MainImage}
              alt="main-cover"
              className="w-full md:max-w-[381px] mx-auto"
            />
            <style jsx>{`
              @keyframes moveBackground {
                0% {
                  background-position: 0% 100%; /* Bottom-left */
                }
                50% {
                  background-position: 100% 0%; /* Top-right */
                }
                100% {
                  background-position: 0% 100%; /* Return to bottom-left */
                }
              }
            `}</style>
          </div>

       <div className="absolute top-24 md:top-32 z-20  -left-2 md:-left-16 max-w-[138px]  md:max-w-[214px]">
            <Image src={StartWith} className=" " alt="" />
          </div>
          <div className="absolute bottom-24 z-20  -left-2 md:-left-16  max-w-[138px] md:max-w-[214px]">
            <Image src={Ready} className=" " alt="" />
          </div>
          <div className="absolute top-14 md:top-10 z-20 -right-4  md:-right-10  max-w-[198px] md:max-w-[306px]">
            <Image src={AiPowered} className=" " alt="" />
          </div>
            <div className="absolute bottom-12 z-20 -right-4 md:-right-10  max-w-[140px] md:max-w-[217px]">
            <Image src={Instant} className=" " alt="" />
          </div> 
        </div>
        {/* <Image src={FunnelBuilderImage} alt="funnel-vision" className="" /> */}

        <div className="">
          <h2 className="text-[#F7F9FB] text-center md:text-start font-roboto text-[36px] leading-[50px] font-bold">
            Meet your AI <br className="md:block hidden" />
            funnel-building partner
          </h2>
          <p className="text-[16px]  md:pr-[90px] pt-[23px] text-center md:text-start font-opensans  font-semibold">
            Meet Funnel Vision: Your AI partner in funnel building and
            profit-making. Whether you're launching your first product,
            diversifying from affiliate marketing, or monetizing your influence,{" "}
            we've got you covered.
          </p>
          <br />
          <p className="text-[16px] md:pr-[90px] text-center md:text-start  font-opensans font-semibold ">
            Just tell us your niche, and we'll handle the rest - from audience
            research to product creation, copywriting to funnel design. No more
            technical hurdles, no more writer's block. Just ideas that sell.
          </p>
        </div>
      </div>
      <div className="absolute left-1/4   md:block hidden -translate-x-80 bottom-72 ">
        <AnimatedDOt />
      </div>
      <div className="absolute rotate-180  md:block hidden right-1/4  translate-x-64 top-24 ">
        <AnimatedDOt />
      </div>
    </div>
  );
};

export default FunnelBuilder;
