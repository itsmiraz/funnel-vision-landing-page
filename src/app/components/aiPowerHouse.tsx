import ResarchIcon from "@/assets/icons/marketReseachIcon.svg";
import ProductIcon from "@/assets/icons/productIon.svg";
import MagicIcon from "@/assets/icons/magicIcon.svg";
import BrandIdentity from "@/assets/icons/brandIdentity.svg";
import SalesConvert from "@/assets/icons/salesConvertion.svg";
import FunnelSetup from "@/assets/icons/funnelSetup.svg";

const AiPowerHouse = () => {
  const data = [
    {
      icon: <ResarchIcon />,
      title: "Smart market research",
      desc: "Uncover hidden opportunities in your niche.",
    },
    {
      icon: <ProductIcon />,
      title: "Products that deliver",
      desc: "Create valuable content your audience will love.",
    },
    {
      icon: <MagicIcon />,
      title: "Offer creation magic",
      desc: "Package your knowledge into products people can't resist.",
    },
    {
      icon: <BrandIdentity />,
      title: "Instant brand identity",
      desc: "Look professional without hiring a designer.",
    },
    {
      icon: <SalesConvert />,
      title: "Sales copy that converts",
      desc: "Say goodbye to staring at blank pages.",
    },
    {
      icon: <FunnelSetup />,
      title: "Easy funnel setup",
      desc: "Launch faster than ever before.",
    },
  ];

  return (
    <div className="pt-[140px]">
      <div className="max-w-[1071px] pt-[50px] px-[25px]  linier-gradient-left-to-right   mx-auto rounded-[20px]">
        <h1 className="text-3xl font-bold text-center text-[#F7F9FB]">
          Success stories from the Funnel Vision community
        </h1>
        <div className="flex flex-wrap pt-[50px] gap-x-[33px] gap-y-[20px]">
        {data.map((item, i) => (
          <div key={i} className="md:w-[494px] rounded-[20px] custom-card-inner-shadow py-[24px] px-[20px] flex gap-x-[16px]">
            <div>{item.icon}</div>
            <div>
              <h2 className="text-[20px] font-semibold font-roboto">
                {item.title}
              </h2>
              <p className="text-[14px] pt-[6px] font-semibold font-opensans">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
   
    </div>
  );
};

export default AiPowerHouse;
