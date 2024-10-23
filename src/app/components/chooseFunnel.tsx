import React from "react";
import BlueCheck from "@/assets/icons/BlueCheck.svg";
import LeftArrowIcon from "@/assets/icons/SmallLeftArrow.svg";
import OrangeFillLeftArrow from "@/assets/icons/OrangeFillLeftArrow.svg";
import Image from "next/image";
import GradientBubble from "@/assets/images/smallBubble.png";
const ChooseFunnel = () => {
  const planData = [
    {
      title: "Free Plan",
      desc: "Dip your toes in with",
      credit: `<span class='text-[#00FF00] text-[20px] font-bold font-roboto leading-[26px]'>150</span> credits`,
      active: false,
    },
    {
      title: "Basic Plan",
      desc: "",
      credit: `<span class='text-[#00FF00] text-[20px] font-bold font-roboto leading-[26px]'>800</span> credits/month`,
      bottomDesc: "to kickstart your funnel empire",
      active: false,
    },
    {
      title: "Pro Plan",
      desc: "",
      credit:
        "<span class='text-[#00FF00] text-[20px] font-bold font-roboto leading-[26px]'>3500</span> credits/month",
      bottomDesc: "for serious funnel builders",
      active: true,
    },
    {
      title: "Enterprise Plan",
      desc: "",
      credit:
        "<span class='text-[#00FF00] text-[20px] font-bold font-roboto leading-[26px]'>Unlimited</span> credits",
      bottomDesc: "for high-volume creators",
      active: false,
    },
  ];

  return (
    <div className="pb-[140px]">
      <h1 className="text-3xl font-bold text-center text-[#F7F9FB]">
        Choose your path to Funnel success
      </h1>
      <div className="mt-[50px]  flex md:flex-row flex-col justify-center items-center gap-[25px]">
        {planData.map((item, i) => (
          <div
            key={i}
            className={`${
              item.active &&
              "p-[10px] overflow-hidden  relative  rounded-[20px]"
            }`}
          >
            <div className="bg-[#001B2E99] backdrop-blur-md relative z-30 pl-[30px] pr-[20px] w-[246px] py-[30px] flex flex-col justify-center items-center rounded-[20px] custom-card-inner-shadow  ">
              <div className="">
                <h2 className="text-[20px] text-center font-medium font-roboto leading-[30px]">
                  {item.title}
                </h2>
                {item.desc && (
                  <p className="text-[12px] font-opensans font-semibold">
                    {item.desc}
                  </p>
                )}
              </div>

              {/* credits */}
              <div className="pt-[23px] text-center">
                <div
                  className="text-[14px] font-medium font-roboto  text-[F7F9FB]"
                  dangerouslySetInnerHTML={{ __html: item.credit }}
                ></div>
                {item.bottomDesc && (
                  <p className="text-[12px] font-semibold font-opensans leading-[18px]">
                    {item.bottomDesc}
                  </p>
                )}
              </div>

              <ul className="pt-[25px] space-y-[10px]">
                <li className="flex items-center gap-x-3">
                  <div>
                    <BlueCheck />{" "}
                  </div>{" "}
                  <p> Lorem Ipsum is simply </p>
                </li>
                <li className="flex items-center gap-x-3">
                  <div>
                    <BlueCheck />{" "}
                  </div>{" "}
                  <p> Lorem Ipsum is simply </p>
                </li>
                <li className="flex items-center gap-x-3">
                  <div>
                    <BlueCheck />{" "}
                  </div>{" "}
                  <p> Lorem Ipsum is simply </p>
                </li>
                <li className="flex items-center gap-x-3">
                  <div>
                    <BlueCheck />{" "}
                  </div>{" "}
                  <p> Lorem Ipsum is simply </p>
                </li>
              </ul>

              <button
                className={`${
                  item.active ? "bg-[#FF6B35]" : "bg-[#001B2E99] text-[#FF6B35]"
                } text-[14px] border border-[#F7F9FB]/10 flex mt-[34px] font-mont font-bold w-fit mx-auto pl-3 justify-center gap-x-[11px] items-center p-1 rounded-[10px] `}
              >
                <p> Get Started</p>
                {item.active ? <LeftArrowIcon /> : <OrangeFillLeftArrow />}
              </button>
            </div>

            {item.active && (
              <Image
                className="w-[307px] animate-funnel-card-gradient-animation absolute -top-10 -left-10 "
                src={GradientBubble}
                alt=""
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseFunnel;
