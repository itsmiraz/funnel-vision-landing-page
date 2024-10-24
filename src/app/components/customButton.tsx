"use client"

import React, { useState } from 'react';
import SmallLeftArrowIcon from '@/assets/icons/SmallLeftArrow.svg'; // Import your small icon
import LargeLeftArrowIcon from '@/assets/icons/LeftArrowIcon.svg'; // Import your large icon
import OrangeFillLeftArrow from '@/assets/icons/largeOrangeFillLeftArrow.svg'; // Import inactive variant if needed
import SmallOrangeFillLeftArrow from '@/assets/icons/OrangeFillLeftArrow.svg'; // Import inactive variant if needed

const CustomButton = ({
  title = "Join the beta launch", // Default title
  size = "large", // "small" or "large"
  active = true, // Determines default background and icon
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`
        ${isHovered ? "bg-[#001B2E] text-white" : active ? "bg-[#FF6B35]" : "bg-[#001B2E99] text-[#FF6B35]"}
        text-[14px] border border-[#F7F9FB]/10 flex font-mont font-bold w-fit mx-auto pl-3 justify-center gap-x-[11px] items-center p-1 rounded-[10px] 
        transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>{title}</p>
      <div className={`${size ==='large'? ' w-[38px] h-[42px]':"w-[32px] h-[32px]"  } relative flex items-center justify-center`}>
        <div
          className={`absolute transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {size === "small" ?  <SmallOrangeFillLeftArrow /> : <OrangeFillLeftArrow />}
        </div>
        <div
          className={`absolute transition-opacity duration-300 ease-in-out ${!isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {size === "small" ? <SmallLeftArrowIcon />  : <LargeLeftArrowIcon />}
        </div>
      </div>
    </button>
  );
};

export default CustomButton;
