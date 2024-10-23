import React from "react";
import LeftArrowIcon from "@/assets/icons/LeftArrowIcon.svg";
import Background from "@/assets/images/ctaBackground.png";

const CTA = () => {
  return (
    <div className="pb-[140px]">
      <div
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="max-w-[1012px] py-[60px]  bg-[#001B2ECC] custom-card-inner-shadow mx-auto rounded-[20px] "
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
          className={` bg-[#FF6B35] text-[14px] border border-[#F7F9FB]/10 flex font-mont font-bold w-fit mx-auto pl-3 justify-center gap-x-[11px] items-center p-1 rounded-[10px] `}
        >
          <p> Get Started</p>
          <LeftArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default CTA;
