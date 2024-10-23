/* eslint-disable react/no-unescaped-entities */
import ResarchIcon from "@/assets/icons/marketReseachIcon.svg";
import ProductIcon from "@/assets/icons/productIon.svg";
import MagicIcon from "@/assets/icons/magicIcon.svg";
import BrandIdentity from "@/assets/icons/brandIdentity.svg";
import SalesConvert from "@/assets/icons/salesConvertion.svg";
import FunnelSetup from "@/assets/icons/funnelSetup.svg";
import GreenDot from "@/assets/icons/greenDot.svg";
import Graphic from "@/assets/icons/graphic.svg";
import Dots from "@/assets/icons/dots.svg";
import MobileGraphic from "@/assets/icons/mobileGraphic.svg";
import Image from "next/image";

import GlowingBubble from "@/assets/images/glowingBuble.png";

const AiPowerHouse = () => {
  const data = [
    {
      icon: <ResarchIcon />,
      title: "Smart market research",
      desc: "Uncover hidden opportunities in your niche.",
    },
    {
      icon: <ProductIcon />,
      title: "Products that deliver",
      desc: "Create valuable content your audience will love.",
    },
    {
      icon: <MagicIcon />,
      title: "Offer creation magic",
      desc: "Package your knowledge into products people can't resist.",
    },
    {
      icon: <BrandIdentity />,
      title: "Instant brand identity",
      desc: "Look professional without hiring a designer.",
    },
    {
      icon: <SalesConvert />,
      title: "Sales copy that converts",
      desc: "Say goodbye to staring at blank pages.",
    },
    {
      icon: <FunnelSetup />,
      title: "Easy funnel setup",
      desc: "Launch faster than ever before.",
    },
  ];

  return (
    <div className="pt-[60px] md:pt-[140px]">
      <div className="max-w-[1071px]  relative  pt-[50px]  md:px-[25px]  linier-gradient-left-to-right-always   mx-auto rounded-[20px]">
        <h1 className="text-3xl px-[16px] md:px-0 font-bold text-center text-[#F7F9FB]">
          Success stories from the Funnel Vision community
        </h1>
        <div className="flex relative   px-[16px] md:px-0 flex-wrap pt-[50px] gap-x-[33px] gap-y-[20px]">
          {data.map((item, i) => (
            <div
              key={i}
              className="md:w-[494px] w-full  rounded-[20px] custom-card-inner-shadow py-[24px] px-[20px] flex gap-x-[16px]"
            >
              <div>{item.icon}</div>
              <div>
                <h2 className="text-[20px] font-semibold font-roboto">
                  {item.title}
                </h2>
                <p className="text-[14px] pt-[6px] font-semibold font-opensans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden flex pt-[11px]  justify-between items-center">
          <div className="rotate-180  ">
            <MobileGraphic />
          </div>
          <div>
            <MobileGraphic />
          </div>
        </div>


        <div className="relative px-[16px] md:px-0 ">
          <div className="p-[13px] md:p-[20px] relative md:mt-[39px] h-fit w-fit mx-auto  rounded-[20px] overflow-hidden">
            <div className="md:w-[493px] z-30 relative bg-[#001B2E99] rounded-[20px] mx-auto  py-[36px] md:py-[40px] pl-[20px] md:pl-[30px] pr-[5px] md:pr-[20px] custom-card-inner-shadow   ">
              <h3 className="text-[40px] md:text-[60px]  font-roboto text-center font-bold leading-[80px] bg-clip-text text-transparent  bg-gradient-to-b from-[#0052CC] to-[#001B2E]">
                Coming Soon
              </h3>
              <p className="text-center pt-[19px] md:pt-[21px] text-[11px] md:text-[14px] font-semibold font-opensans text-white opacity-80">
                We're just getting started. Early birds who join during our beta
                launch will get exclusive access to upcoming features at no
                extra cost. Imagine having:
              </p>
              <ul className="pt-[32px] md:pt-[40px] space-y-[10px] md:space-y-[4px]">
                <li className="flex items-center gap-x-[10px] ">
                  <GreenDot />
                  <p className="text-[9px] md:text-[14px] leading-[26px] font-semibold font-opensans">
                    AI-crafted email sequences that nurture your list on
                    autopilot
                  </p>
                </li>
                <li className="flex items-center gap-x-[10px] ">
                  <GreenDot />
                  <p className="text-[9px] md:text-[14px] leading-[26px] font-semibold font-opensans">
                    Ad copy that aligns perfectly with your funnel
                  </p>
                </li>
                <li className="flex items-center gap-x-[10px] ">
                  <GreenDot />
                  <p className="text-[9px] md:text-[14px] leading-[26px] font-semibold font-opensans">
                    Video script generation for your sales videos and content
                  </p>
                </li>
                <li className="flex items-center gap-x-[10px] ">
                  <GreenDot />
                  <p className="text-[9px] md:text-[14px] leading-[26px] font-semibold font-opensans">
                    Webinar funnel creation to showcase your expertise
                  </p>
                </li>
              </ul>
              <p className="text-[11px] md:text-[14px] leading-[26px] font-semibold font-opensans pl-4">
                ...and much more. The future of funnel building is here, <br />{" "}
                and it's evolving fast!"
              </p>
            </div>
            <Image
              className="absolute w-[428px] rotate-180 top-[-100px] left-[-200px] animate-ai-power-gradient-animation "
              src={GlowingBubble}
              alt=""
            />
          </div>

          {/* Left Side Graphics */}
          <div className="absolute rotate-180 md:block hidden md:left-10 top-20">
            <Graphic />
          </div>
          <div className="absolute   md:block hidden left-10 bottom-36">
            <Dots />
          </div>


          {/* Right Side Graphics */}

          <div className="absolute   md:block hidden md:right-10 top-20">
            <Graphic />
          </div>
          <div className="absolute  md:block hidden  right-10 bottom-36">
            <Dots />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPowerHouse;
