/* eslint-disable react/no-unescaped-entities */
import FunnelVisionImage from "@/assets/images/funnelVision.webp";
import Image from "next/image";
import AnimatedDOt from "@/assets/icons/animatedDot.svg";
const FunnelFreedom = () => {
  return (
    <div className="py-[140px] relative">
      <div className="max-w-[1062px] gap-x-[66px]  flex justify-between items-center py-[46px] linier-gradient-left-to-right  mx-auto rounded-[20px]">
        <div className="pl-[103px]">
          <h2 className="text-[#F7F9FB] font-roboto text-[36px] leading-[50px] font-bold">
            The funnel-building <br />
            struggle ends here
          </h2>
          <p className="text-[16px] font-opensans pt-[23px] font-semibold">
            You've got the ideas, the audience, and the drive. <br /> But
            creating a profitable funnel feels like climbing <br /> a mountain.
            The tech headaches, the copywriting <br /> struggles, the product
            creation overwhelm...
          </p>
          <br />
          <p className="text-[16px] font-opensans font-semibold ">
            What if you could turn your knowledge into a full-
            <br /> fledged, profit-generating funnel faster than you <br /> can
            order takeout?
          </p>
        </div>

        <Image
          src={FunnelVisionImage}
          width={505}
          height={447}
          alt="funnel-vision"
          className=""
        />
      </div>
      <div className="absolute left-1/4  -translate-x-64 bottom-36 ">
        <AnimatedDOt />
      </div>
      <div className="absolute rotate-180 right-1/4  translate-x-64 top-36 ">
        <AnimatedDOt />
      </div>
    </div>
  );
};

export default FunnelFreedom;
