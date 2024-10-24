import React from "react";
import Background from "@/assets/images/ctaBackground.png";
import GlowingBubble from '@/assets/images/glowingBuble.png'
import Image from "next/image";
import CustomButton from "./customButton";


const CTA = () => {
  return (
    <div className="pb-[100px] px-[20px] md:pb-[140px]">
     <div className="relative rounded-[20px]  overflow-hidden mx-auto w-fit h-fit md:w-[1052px] md:h-[370px] p-5">
       <div
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="max-w-[1012px] relative  px-[16px] py-[33px] z-30 md:py-[60px]  bg-[#001B2ECC] custom-card-inner-shadow mx-auto rounded-[20px] "
      >
        <h2 className="text-[36px] leading-[50px] md:leading-[30px] pb-[24px] text-center font-roboto font-medium md:font-bold text-[#F7F9FB]">
          Ready to fast-track your online business?
        </h2>
        <p className="text-[14px] leading-[22px] pb-[40px] font-semibold font-opensans text-center opacity-60">
          Join our beta launch now and create your first funnel before your
          coffee gets cold! <br className="md:block hidden" /> Remember, early birds get access to future
          features at no extra cost. Your digital <br className="md:block hidden" /> success story starts
          here!
        </p>
       
         <div className="hover:-translate-y-1 ease-in-out transition-all duration-300">
         <CustomButton title="Get Started" size="small"/>
         </div>
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
