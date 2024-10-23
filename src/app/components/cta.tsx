import React from "react";
import LeftArrowIcon from "@/assets/icons/SmallLeftArrow.svg";
import Background from "@/assets/images/ctaBackground.png";
import GlowingBubble from '@/assets/images/glowingBuble.png'
import Image from "next/image";


const CTA = () => {
  return (
    <div className="pb-[140px]">
     <div className="relative rounded-[20px]  overflow-hidden mx-auto w-[1052px] h-[370px] p-5">
       <div
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="max-w-[1012px] relative  z-30 py-[60px]  bg-[#001B2ECC] custom-card-inner-shadow mx-auto rounded-[20px] "
      >
        <h2 className="text-[36px] leading-[30px] pb-[24px] text-center font-roboto font-bold text-[#F7F9FB]">
          Ready to fast-track your online business?
        </h2>
        <p className="text-[14px] leading-[22px] pb-[40px] font-semibold font-opensans text-center opacity-60">
          Join our beta launch now and create your first funnel before your
          coffee gets cold! <br /> Remember, early birds get access to future
          features at no extra cost. Your digital <br /> success story starts
          here!
        </p>
        <button
          className={` bg-[#FF6B35] text-[14px] border border-[#F7F9FB]/10 flex font-mont font-bold  mx-auto pl-3 justify-center gap-x-[11px] items-center p-1 rounded-[10px] `}
        >
          <p> Get Started</p>
          <LeftArrowIcon />
        </button>
       </div> 

         {/* Moving across the top */}
    <Image
      className="absolute w-[428px] rotate-180 top-[-100px] left-[-200px] animate-bubble-top"
      src={GlowingBubble}
      alt=""
    />
    
    {/* Moving across the bottom */}
    <Image
      className="absolute w-[428px] bottom-[-100px] right-[-200px] animate-bubble-bottom"
      src={GlowingBubble}
      alt=""
    />
     </div>
    </div>
  );
};

export default CTA;
