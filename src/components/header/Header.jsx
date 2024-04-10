import React, { useState } from "react";
import Timer from "../timer/Timer";
import "./styles.css";

export const Header = ({ selectedTheme, isCloseButtonOn, timerTitle, remainingTimePeriod, selectedTimePeriod }) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(true);
    setTimeout(() => {
      setIsHidden(false);
    }, 2000);
  };

  const handleRedirect = () => {
    window.open("https://www.beforesunset.ai/", "_blank");
  };

  let backgroundColor;
  let textColor;

  switch (selectedTheme) {
    case "Light":
      backgroundColor = "bg-white";
      textColor = "text-black";
      break;
    case "Dark":
      backgroundColor = "bg-black";
      textColor = "text-white";
      break;
    case "Colorful":
      backgroundColor = "bg-teal-700";
      textColor = "text-black";
      break;
    default:
      backgroundColor = "bg-white";
  }

  return (
    !isHidden && (
      <div
        className={`header w-full flex flex-row h-20 p-4 justify-around items-center ${backgroundColor}`}
      >
        <h1 className={`header-text text-2xl font-bold ${textColor}`}>{timerTitle}</h1> 
        <Timer selectedTheme={selectedTheme} remainingTimePeriod={remainingTimePeriod} selectedTimePeriod={selectedTimePeriod}/>
        <button
          className={`bg-[#248277] px-4 py-2 rounded-md text-2xl font-bold ${textColor}`}
          onClick={handleRedirect}
        >
          Shop Now!
        </button>
        {isCloseButtonOn && (
          <button type="button" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        )}
      </div>
    )
  );
};

export default Header;
