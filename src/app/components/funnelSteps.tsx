/* eslint-disable react/no-unescaped-entities */
import Step1 from "@/assets/images/steps/1.png";
import Step2 from "@/assets/images/steps/2.webp";
import Step3 from "@/assets/images/steps/3.webp";
import Step4 from "@/assets/images/steps/4.webp";
import Step5 from "@/assets/images/steps/5.webp";
import Step6 from "@/assets/images/steps/6.webp";
import Step7 from "@/assets/images/steps/7.webp";
import Image from "next/image";

const FunnelSteps = () => {
  return (
    <div className="px-[16px]">
      <h2 className="text-center font-roboto text-[#F7F9FB] text-[36px] font-bold ">
        7 simple steps to your profit-ready Funnel
      </h2>
      <div className="max-w-[649px]  px-[26px] mx-auto py-10">
        {/* Step 1 */}
        <div
          className={`flex md:flex-row flex-col md:items-center pb-[60px] items-start justify-start md:justify-center gap-x-[56px]`}
        >
          <div className="md:w-[763px]">
          <Image src={Step1} alt="steps" className="md:w-[499px] " />
          </div>
          <div>
            <h3 className="text-[#F7F9FB] font-roboto whitespace-nowrap font-bold text-[26px] leading-[40px]">
              Share your niche
            </h3>
            <p className="font-semibold text-[16px] pt-[16px] font-opensans  ">
              Tell us what you know best - your affiliate niche, your   content
              sweet spot, or your entrepreneurial vision.
            </p>
          </div>
        </div>
        {/* Step 2 */}
        <div
          className={`flex   md:flex-row flex-col-reverse pb-[32px]  justify-center gap-x-[72px]`}
        >
          <div>
            <h3 className="text-[#F7F9FB] font-roboto whitespace-nowrap font-bold text-[26px] leading-[40px]">
              Meet your ideal customers
            </h3>
            <p className="font-semibold text-[16px] pt-[16px] font-opensans  ">
              We'll show you exactly who's eager <br /> to buy and what they're
              looking for.
            </p>
          </div>
          <Image
            src={Step2}
            className="md:-translate-x-14 w-[273px] h-[123px]"
            alt="steps"
          />
        </div>
        {/* Step 3 */}
        <div
          className={`flex  md:flex-row flex-col pb-[60px] justify-center gap-x-[49px]`}
        >
          <Image src={Step3} className="w-[273px] h-[123px]" alt="steps" />
          <div>
            <h3 className="text-[#F7F9FB] font-roboto whitespace-nowrap font-bold text-[26px] leading-[40px]">
              Craft your perfect offer
            </h3>
            <p className="font-semibold text-[16px] pt-[16px] font-opensans  ">
              Based on your niche and audience, <br /> we'll design an
              irresistible offer stack.
            </p>
          </div>
        </div>
        {/* Step 4 */}
        <div
          className={`flex   md:flex-row flex-col-reverse pb-[32px]  justify-center gap-x-[69px]`}
        >
          <div>
            <h3 className="text-[#F7F9FB] font-roboto whitespace-nowrap font-bold text-[26px] leading-[40px]">
              Write copy that converts
            </h3>
            <p className="font-semibold text-[16px] pt-[16px] font-opensans  ">
              We'll create sales copy that turns <br /> your followers into
              customers.
            </p>
          </div>
          <Image
            src={Step4}
            className="md:-translate-x-10 w-[273px] h-[123px]"
            alt="steps"
          />
        </div>
        {/* Step 5 */}
        <div
          className={`flex  md:flex-row flex-col pb-[60px] justify-center gap-x-[49px]`}
        >
          <Image src={Step5} alt="steps" className="w-[273px] h-[123px]" />
          <div>
            <h3 className="text-[#F7F9FB] font-roboto whitespace-nowrap font-bold text-[26px] leading-[40px]">
              Build your product suite
            </h3>
            <p className="font-semibold text-[16px] pt-[16px] font-opensans  ">
              From main offers to upsells, we'll <br /> create content that
              delivers value.
            </p>
          </div>
        </div>
        {/* Step 6 */}
        <div
          className={`flex  md:flex-row flex-col-reverse  pb-[32px]  justify-center gap-x-[79px]`}
        >
          <div>
            <h3 className="text-[#F7F9FB] font-roboto whitespace-nowrap font-bold text-[26px] leading-[40px]">
              Design your brand identity
            </h3>
            <p className="font-semibold text-[16px] pt-[16px] font-opensans  ">
              We'll suggest colors, fonts, and even <br /> product names that
              resonate with your <br /> audience.
            </p>
          </div>
          <Image
            src={Step6}
            className="md:-translate-x-14 w-[273px] h-[123px]"
            alt="steps"
          />
        </div>
        {/* Step 7 */}
        <div
          className={`flex  md:flex-row flex-col md:translate-x-10 pb-[60px] justify-center gap-x-[10px]`}
        >
          <Image src={Step7} alt="steps" className="md:w-[273px]  md:-translate-x-12 " />
          <div>
            <h3 className="text-[#F7F9FB] font-roboto font-bold text-[26px] leading-[40px]">
              Launch profit-generating funnel
            </h3>
            <p className="font-semibold text-[16px] pt-[16px] font-opensans  ">
              Put it all together and start seeing results.
            </p>
          </div>
        </div>
      </div>
      <p className="text-[16px] font-opensans text-center md:pt-10 font-semibold">
        It's that straightforward. Funnel Vision handles the complex stuff, so
        you <br className="md:block hidden" /> can focus on scaling your
        business and connecting with your audience.
      </p>
    </div>
  );
};

export default FunnelSteps;
