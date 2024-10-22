/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import AnimatedDOt from "@/assets/icons/animatedDot.svg";
import FunnelBuilderImage from "@/assets/images/funnel-builder.webp";
const FunnelBuilder = () => {
  return (
    <div className="py-[140px] relative">
      <div className="max-w-[1062px] gap-x-[66px]  flex justify-between items-center py-[46px] linier-gradient-right-to-left  mx-auto rounded-[20px]">
        <Image
          src={FunnelBuilderImage}
          width={505}
          height={447}
          alt="funnel-vision"
          className=""
        />
        <div className="pr-[103px]">
          <h2 className="text-[#F7F9FB] font-roboto text-[36px] leading-[50px] font-bold">
            Meet your AI <br />
            funnel-building partner
          </h2>
          <p className="text-[16px] pt-[23px] font-opensans  font-semibold">
            Meet Funnel Vision: Your AI partner in funnel <br /> building and
            profit-making. Whether you're <br /> launching your first product,
            diversifying from <br /> affiliate marketing, or monetizing your
            influence, <br /> we've got you covered.
          </p>
          <br />
          <p className="text-[16px]  font-opensans font-semibold ">
            Just tell us your niche, and we'll handle the rest - <br /> from
            audience research to product creation, <br /> copywriting to funnel
            design. No more technical <br /> hurdles, no more writer's block.
            Just ideas that sell.
          </p>
        </div>
      </div>
      <div className="absolute left-1/4  -translate-x-64 bottom-64 ">
        <AnimatedDOt />
      </div>
      <div className="absolute rotate-180 right-1/4  translate-x-64 top-52 ">
        <AnimatedDOt />
      </div>
    </div>
  );
};

export default FunnelBuilder;
