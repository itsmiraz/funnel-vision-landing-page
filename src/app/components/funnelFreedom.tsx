/* eslint-disable react/no-unescaped-entities */
"use client";
// import FunnelVisionImage from "@/assets/images/funnelVision.webp";
import Image from "next/image";
import AnimatedDOt from "@/assets/icons/animatedDot.svg";
import BackgroundGradient from "@/assets/images/funnelFreedom/backgroundGradeint.png";
import TechMaze from "@/assets/images/funnelFreedom/techmaze.png";
import WritersBlock from "@/assets/images/funnelFreedom/writersblock.png";
import ProductChaos from "@/assets/images/funnelFreedom/productchaos.png";
import TimeCrunch from "@/assets/images/funnelFreedom/timecrunch.png";
import MainCover from "@/assets/images/funnelFreedom/mainBg.png";

const FunnelFreedom = () => {
  return (
    <div className="pb-[60px] overflow-hidden pt-[60px] md:pb-[140px] px-[20px] relative">
      <div className="max-w-[1062px] gap-y-[40px] gap-x-[66px]  flex md:flex-row flex-col-reverse justify-between items-center py-[46px]  linier-gradient-left-to-right mx-auto rounded-[20px]">
        <div className="md:pl-[103px]">
          <h2 className="text-[#F7F9FB]  md:text-start text-center font-roboto text-[36px] leading-[50px] font-bold">
            The funnel-building <br className="md:block hidden" />
            struggle ends here
          </h2>
          <p className="text-[16px] md:text-start text-center  font-opensans pt-[23px] font-semibold">
            You've got the ideas, the audience, and the drive.{" "}
            <br className="md:block hidden" /> But creating a profitable funnel
            feels like climbing <br className="md:block hidden" /> a mountain.
            The tech headaches, the copywriting{" "}
            <br className="md:block hidden" /> struggles, the product creation
            overwhelm...
          </p>
          <br className="" />
          <p className="md:text-start text-center  text-[16px] font-opensans font-semibold ">
            What if you could turn your knowledge into a full-
            <br className="md:block hidden" /> fledged, profit-generating funnel
            faster than you <br className="md:block hidden" /> can order
            takeout?
          </p>
        </div>

        <div className="relative md:px-0 px-[20px]  w-full  md:max-w-[431px]">
          <div
            style={{
              backgroundImage: `url(${BackgroundGradient.src})`,
              backgroundSize: "200% 200%", // Double the size for continuous looping
              backgroundPosition: "100% 100%",
              backgroundRepeat: "no-repeat",
              animation: "moveBackground 15s linear infinite",
            }}
            className=" w-full rounded-[20px] overflow-hidden relative   p-[26px] md:max-w-[431px]"
          >
            <Image
              src={MainCover}
              alt="main-cover"
              className="md:w-[381px] mx-auto"
            />
            <style jsx>{`
              @keyframes moveBackground {
                0% {
                  background-position: 100% 100%;
                }
                50% {
                  background-position: 0% 0%;
                }
                100% {
                  background-position: 100% 100%; /* Loop back smoothly to the start */
                }
              }
            `}</style>
          </div>

          <div className="absolute top-14 z-20  -left-6 md:-left-16 max-w-[110px]  md:max-w-[160px]">
            <Image src={TechMaze} className=" " alt="" />
          </div>
          <div className="absolute bottom-16 z-20  -left-6 md:-left-14  max-w-[129px] md:max-w-[187px]">
            <Image src={ProductChaos} className=" " alt="" />
          </div>
          <div className="absolute top-14 md:top-28 z-20 -right-4  md:-right-14  max-w-[129px] md:max-w-[187px]">
            <Image src={WritersBlock} className=" " alt="" />
          </div>
          <div className="absolute bottom-28 z-20 -right-4 md:-right-14  max-w-[122px] md:max-w-[187px]">
            <Image src={TimeCrunch} className=" " alt="" />
          </div>
        </div>

        {/* <Image src={FunnelVisionImage} alt="funnel-vision" className="w-full md:max-w-[505px]" /> */}
      </div>
      <div className="absolute left-1/4  md:block hidden  -translate-x-64 bottom-48 ">
        <AnimatedDOt />
      </div>
      <div className="absolute rotate-180  md:block hidden right-1/4  translate-x-64 top-48 ">
        <AnimatedDOt />
      </div>
    </div>
  );
};

export default FunnelFreedom;
