"use client";

import React, { useState } from "react";
import DotArrowDown from "@/assets/icons/dotArrowDown.svg";
const Faq = () => {
  const faqQuestions = [
    {
      title: "Do I need to be a tech wizard to use Funnel Vision?",
      content:
        "Unlike traditional funnel builders, Funnel Vision doesn't just give you the tools - it does the work for you. Our AI creates your products, writes your copy, and designs your funnel, all based on your unique niche and audience.",
    },
    {
      title: "How does Funnel Vision differ from other funnel builders?",
      content:
        "Unlike traditional funnel builders, Funnel Vision doesn't just give you the tools - it does the work for you. Our AI creates your products, writes your copy, and designs your funnel, all based on your unique niche and audience.",
    },
    {
      title: "Can I really create a full, converting funnel in 20 minutes?",
      content:
        "Unlike traditional funnel builders, Funnel Vision doesn't just give you the tools - it does the work for you. Our AI creates your products, writes your copy, and designs your funnel, all based on your unique niche and audience.",
    },
    {
      title: "How customizable are the funnels and products?",
      content:
        "Unlike traditional funnel builders, Funnel Vision doesn't just give you the tools - it does the work for you. Our AI creates your products, writes your copy, and designs your funnel, all based on your unique niche and audience.",
    },
  ];

  return (
    <div className="pb-[140px] px-[16px]">
      <h1 className="text-3xl font-bold text-center text-[#F7F9FB]">
        Common questions about Funnel Vision
      </h1>
      <div className="pt-[50px] space-y-[20px] max-w-[600px] mx-auto">
        {faqQuestions.map((item, i) => (
          <Accordion data={item} i={i} key={i} length={faqQuestions.length} />
        ))}
      </div>
    </div>
  );
};

export default Faq;

export type AccordionProps = {
  length: number;
  i: number;
  data: {
    title: string;
    content: string;
  };
};
const Accordion = ({ data }: AccordionProps) => {
  const { title, content } = data;
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`pt-6 px-[30px] py-[25px]  rounded-[20px] custom-card-inner-shadow  pb-6 select-none`}
    >
      <button
        className="w-full select-none text-[#F7F9FB] font-medium text-[18px] font-roboto gap-x-6 text-left flex  justify-between items-center "
        onClick={toggleAccordion}
      >
        {title}
        <div
          className={`${
            isOpen ? "rotate-180" : "rotate-0"
          }  duration-300 transition-all `}
        >
          <DotArrowDown />
        </div>
      </button>

      <div
        className={`overflow-hidden duration-700 transition-all transition-max-height ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="py-2 text-caption-1-large pr-10 text-[#FFFFFF]/60  text-[14px] font-semibold font-opensans leading-[22px]">
          {content}
        </div>
      </div>
    </div>
  );
};
