/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import AnimatedDOt from "@/assets/icons/animatedDot.svg";
import FunnelBuilderImage from "@/assets/images/funnel-builder.webp";
const FunnelBuilder = () => {
  return (
    <div className="pb-[60px] md:py-[140px] px-[20px] relative">
      <div className="max-w-[1062px] gap-y-[80px] gap-x-[66px]  flex    md:flex-row flex-col justify-between items-center py-[46px] linier-gradient-right-to-left  mx-auto rounded-[20px]">
        <Image src={FunnelBuilderImage} alt="funnel-vision" className=" w-full  md:max-w-[540px]" />
        <div className="md:pr-[103px]">
          <h2 className="text-[#F7F9FB] text-center md:text-start font-roboto text-[36px] leading-[50px] font-bold">
            Meet your AI <br className="md:block hidden" />
            funnel-building partner
          </h2>
          <p className="text-[16px] pt-[23px] text-center md:text-start font-opensans  font-semibold">
            Meet Funnel Vision: Your AI partner in funnel{" "}
            <br className="md:block hidden" /> building and profit-making.
            Whether you're <br className="md:block hidden" /> launching your
            first product, diversifying from <br className="md:block hidden" />{" "}
            affiliate marketing, or monetizing your influence,{" "}
            <br className="md:block hidden" /> we've got you covered.
          </p>
          <br  />
          <p className="text-[16px] text-center md:text-start  font-opensans font-semibold ">
            Just tell us your niche, and we'll handle the rest -{" "}
            <br className="md:block hidden" /> from audience research to product
            creation, <br className="md:block hidden" /> copywriting to funnel
            design. No more technical <br className="md:block hidden" />{" "}
            hurdles, no more writer's block. Just ideas that sell.
          </p>
        </div>
      </div>
      <div className="absolute left-1/4   md:block hidden -translate-x-64 bottom-64 ">
        <AnimatedDOt />
      </div>
      <div className="absolute rotate-180  md:block hidden right-1/4  translate-x-64 top-52 ">
        <AnimatedDOt />
      </div>
    </div>
  );
};

export default FunnelBuilder;
