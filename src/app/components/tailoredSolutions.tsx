'use client'
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
    <div className="py-[60px] px-[16px] md:py-[140px]">
      <h2 className="text-center text-[36px] font-bold font-roboto leading-[50px] text-[#F7F9FB] ">
        Tailored solutions for every online entrepreneur
      </h2>
      <div className="pt-[50px] gap-[45px] flex md:flex-row flex-col justify-center items-center">
        {TailoredSolutionsData.map((item, i) => (
          <div
            key={i}
            className="hover:-translate-y-2 cursor-pointer transform transition-all ease-in-out duration-300"
            style={{
              borderRadius:"20px",
              transition: "box-shadow 0.5s ease-in-out", // Smooth transition for the shadow
            }}
          >
            <style jsx>{`
              div:hover {
                box-shadow: 0 4px 15px rgba(255, 0, 150, 0.3), 0 4px 30px rgba(0, 255, 255, 0.4);
              }
            `}</style>

            <div
              className="flex px-[40px] shadow-none md:w-[324px] h-[376px] rounded-[20px] custom-card-inner-shadow    bg-[#001B2E]/60 justify-center items-center flex-col"
              key={i}
            >
              <div 
              style={{
                boxShadow:'none'
              }}
              className="drop-shadow-none shadow-none">{item.icon}</div>
              <h3 className="text-xl text-center pt-[38px] pb-[12px] font-roboto font-bold text-[#F7F9FB] leading-[30px]">
                {item.title}
              </h3>
              <p className="text-[16px] px-[] text-center font-semibold font-opensans">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TailoredSolutions;
