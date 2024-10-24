/* eslint-disable react/no-unescaped-entities */
"use client";
import Background from "@/assets/images/HeaderBg.webp";
import MobileBackground from "@/assets/images/mobile-bg.webp";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
// import LeftArrowIcon from "@/assets/icons/LeftArrowIcon.svg";
import PeopleImage from "@/assets/images/People.webp";
import AppImage from "@/assets/images/APP ScreensWithOutGradient.webp";
import { useEffect, useState } from "react";
import CustomButton from "./customButton";

import GreenGlow from "@/assets/images/gradients/green-glow.png";
import OrangeGlow from "@/assets/images/gradients/orange-glow.png";
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${
            isMobile ? MobileBackground.src : Background.src
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="pt-[34px] pb-[140px]"
      >
        {/* Header */}
        <div className="flex px-[20px] z-20  md:px-10 pb-[61px] md:pb-[120px] justify-between items-center max-w-[1301px] mx-auto">
          <Image src={Logo} className="w-[120px] md:w-[140px]" alt="logo" />
          <button className="bg-[#001B2E]  font-mont font-bold text-[16px] md:text-[20px] text-[#FF6B35] backdrop-blur-sm border-[2px] px-[19px] py-[6px]  border-[#0052CC]/40 md:border-[#0052CC66] rounded-[10px]">
            Sign Up
          </button>
        </div>

        {/* hero */}
        <div className="flex flex-col px-4 justify-center">
          <h1 className="text-[40px] md:text-[60px] font-roboto  leading-[50px] md:leading-[70px]  pb-[30px] font-bold text-center">
            Transform your ideas into profitable{" "}
            <br className="md:block hidden" /> funnels in 20 minutes or less
          </h1>
          <p className="text-[18px] md:text-[16px] font-opensans  pb-[65px] font-semibold text-center">
            Whether you're an aspiring entrepreneur, affiliate marketer, or
            content creator, Funnel Vision's AI-powered{" "}
            <br className="md:block hidden" /> platform turns your expertise
            into high-converting digital products - even if you're just starting
            out.
          </p>

          <div className="hover:-translate-y-2 ease-in-out duration-300 transition-all">
            <CustomButton title="Join the beta launch" size="large" />
          </div>
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
      <div className="md:w-[1078px] px-4 mx-auto py-[20px] border border-[#0C2638] rounded-[20px] bg-[#001B2E] overflow-hidden  -translate-y-20 ">
        <Image
          src={AppImage}
          alt="app-image"
          className="md:max-w-[836px] mx-auto z-20 relative "
        />

        {/* Glows */}
        <div className="absolute  md:block hidden bottom-10 left-4 animate-green-glow">
          <Image className="w-[244px]" src={GreenGlow} alt="green glow" />
        </div>
        <div className="absolute md:block hidden  top-10 left-4 animate-orange-glow">
          <Image className="w-[244px]" src={OrangeGlow} alt="orange glow" />
        </div>
        <div className="absolute md:block hidden  top-10 right-4 animate-green-glow-2">
          <Image className="w-[244px]" src={GreenGlow} alt="green glow" />
        </div>
        <div className="absolute  md:block hidden bottom-10 right-4 animate-orange-glow-2">
          <Image className="w-[244px]" src={OrangeGlow} alt="orange glow" />
        </div>

        <style jsx>{`
          /* Green Glow 1 */
          @keyframes greenGlowMove {
            0% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(50px, -50px) scale(1.1);
            }
            100% {
              transform: translate(0, 0) scale(1);
            }
          }

          /* Orange Glow 1 */
          @keyframes orangeGlowMove {
            0% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(-20px, 80px) scale(1.05);
            }
            100% {
              transform: translate(0, 0) scale(1);
            }
          }

          /* Green Glow 2 */
          @keyframes greenGlowMove2 {
            0% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(30px,50px) scale(1.08);
            }
            100% {
              transform: translate(0, 0) scale(1);
            }
          }

          /* Orange Glow 2 */
          @keyframes orangeGlowMove2 {
            0% {
              transform: translate(0, 0) scale(1);
            }
            50% {
              transform: translate(-20px, -50px) scale(1.1);
            }
            100% {
              transform: translate(0, 0) scale(1);
            }
          }

          .animate-green-glow {
            animation: greenGlowMove 6s ease-in-out infinite;
          }

          .animate-orange-glow {
            animation: orangeGlowMove 4s ease-in-out infinite;
          }

          .animate-green-glow-2 {
            animation: greenGlowMove2 7s ease-in-out infinite;
          }

          .animate-orange-glow-2 {
            animation: orangeGlowMove2 5s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Hero;
