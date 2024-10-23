/* eslint-disable react/no-unescaped-entities */
import Background from "@/assets/images/HeaderBg.webp";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import LeftArrowIcon from "@/assets/icons/LeftArrowIcon.svg";
import PeopleImage from "@/assets/images/People.webp";
import AppImage from '@/assets/images/App Screen .webp'
const Hero = () => {
  return (
 <div>
       <div
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="pt-[34px] pb-[142px]"
    >
      {/* Header */}
      <div className="flex px-10 pb-[120px] justify-between items-center max-w-[1301px] mx-auto">
        <Image
          src={Logo}
          className="w-[120px]"
          width={120}
          height={22}
          alt="logo"
        />
        <button className="bg-[#001B2E] font-mont font-bold text-[24px] text-[#FF6B35] backdrop-blur-sm border-[2px] px-[19px] py-[6px] border-[#0052CC66] rounded-[10px]">
          Sign Up
        </button>
      </div>

      {/* hero */}
      <div className="flex flex-col justify-center">
        <h1 className="text-[60px] font-roboto  leading-[70px]  pb-[30px] font-bold text-center">
          Transform your ideas into profitable <br /> funnels in 20 minutes or
          less
        </h1>
        <p className="text-[16px] font-opensans  pb-[65px] font-semibold text-center">
          Whether you're an aspiring entrepreneur, affiliate marketer, or
          content creator, Funnel Vision's AI-powered <br /> platform turns your
          expertise into high-converting digital products - even if you're just
          starting out.
        </p>
        <button className="flex font-mont font-bold w-fit mx-auto pl-3 justify-center gap-x-[11px] items-center p-1 rounded-[10px] bg-[#FF6B35]">
          <p> Join the beta launch</p>
          <LeftArrowIcon />
        </button>
        <div className="flex-col flex justify-center items-center gap-[11px] pt-[54px]">
          <p className="text-[14px] font-opensans font-semibold">
            Trusted by over{" "}
            <span className="font-bold text-[#00FF00]">50,000</span> designers
            and developers
          </p>
          <Image src={PeopleImage} width={190} height={40} alt="people" />
        </div>
      </div>
     
    </div>
    <Image src={AppImage} alt="app-image" className="max-w-[1078px] mx-auto z-10 -translate-y-20" height={651} width={1078} />
 </div>
  );
};

export default Hero;
