/* eslint-disable react/no-unescaped-entities */
import FunnelVisionImage from "@/assets/images/funnelVision.webp";
import Image from "next/image";
import AnimatedDOt from "@/assets/icons/animatedDot.svg";
const FunnelFreedom = () => {
  return (
    <div className="py-[60px] md:py-[140px] px-[20px] relative">
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

        <Image src={FunnelVisionImage} alt="funnel-vision" className="w-full md:max-w-[505px]" />
      </div>
      <div className="absolute left-1/4  md:block hidden  -translate-x-64 bottom-36 ">
        <AnimatedDOt />
      </div>
      <div className="absolute rotate-180  md:block hidden right-1/4  translate-x-64 top-36 ">
        <AnimatedDOt />
      </div>
    </div>
  );
};

export default FunnelFreedom;
