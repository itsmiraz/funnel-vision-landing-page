/* eslint-disable react/no-unescaped-entities */

"use client";
import Image from "next/image";
import React from "react";
import AnimatedDOt from "@/assets/icons/animatedDot.svg";
import FunnelBuilderImage from "@/assets/images/funnel-builder.webp";


const FunnelBuilder = () => {
  return (
    <div className="pb-[60px] md:pb-[140px] px-[20px] relative">
      <div className="max-w-[1062px] gap-y-[80px] gap-x-[66px]  flex    md:flex-row flex-col justify-between items-center py-[46px] linier-gradient-right-to-left  mx-auto rounded-[20px]">
        <div>

        <Image src={FunnelBuilderImage} alt="funnel-vision" className="" />
        </div>
 
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
      <div className="absolute left-1/4   md:block hidden -translate-x-64 bottom-72 ">
        <AnimatedDOt />
      </div>
      <div className="absolute rotate-180  md:block hidden right-1/4  translate-x-64 top-24 ">
        <AnimatedDOt />
      </div>
    </div>
  );
};

export default FunnelBuilder;
