import EntrepreneursIcon from "@/assets/icons/aspiringEnterpreneurs.svg";
import AffiliateIcon from "@/assets/icons/affiliate.svg";
import ContentCreator from "@/assets/icons/contentCreator.svg";

const TailoredSolutions = () => {
  const TailoredSolutionsData = [
    {
      icon: <EntrepreneursIcon />,
      title: "For aspiring entrepreneurs",
      desc: "Launch your digital product empire without the tech headaches or marketing overwhelm.",
    },
    {
      icon: <AffiliateIcon />,
      title: "For affiliate marketers",
      desc: "Create your own high-converting infoproducts and keep 100% of the profits. It's time to own, not just promote.",
    },
    {
      icon: <ContentCreator />,
      title: "For content creators and influencers",
      desc: "Turn your content into courses, ebooks, and coaching programs. Monetize your influence like never before.",
    },
  ];

  return (
    <div className="py-[140px]">
      <h2 className="text-center text-[36px] font-bold font-roboto leading-[50px] text-[#F7F9FB] ">
        Tailored solutions for every online entrepreneur
      </h2>
      <div className="pt-[50px] gap-[45px] flex justify-center items-center">
        {TailoredSolutionsData.map((item, i) => (
          <div className="flex px-[40px]  w-[324px] h-[376px] rounded-[20px] custom-card-inner-shadow    bg-[#001B2E]/60 justify-center items-center flex-col" key={i}>
            <div>{item.icon}</div>
            <h3 className="text-xl text-center pt-[38px] pb-[12px] font-roboto font-bold text-[#F7F9FB] leading-[30px]">
              {item.title}
            </h3>
            <p className="text-[16px] px-[] text-center font-semibold font-opensans">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TailoredSolutions;
