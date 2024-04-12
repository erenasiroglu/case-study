import React, { useState } from "react";
import Timer from "../timer/Timer";
import "./styles.css";

export const Header = ({
  selectedTheme,
  isCloseButtonOn,
  timerTitle,
  remainingTimePeriod,
  selectedTimePeriod,
  showDays,
  showHours,
  showMinutes,
  showSeconds,
  buttonTitle,
  buttonLink,
  daysText,
  hoursText,
  minutesText,
  secondsText,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(true);
    setTimeout(() => {
      setIsHidden(false);
    }, 2000);
  };

  const handleRedirect = () => {
    if (buttonLink.startsWith("http://") || buttonLink.startsWith("https://")) {
      window.open(buttonLink, "_blank");
    } else {
      window.open("http://" + buttonLink, "_blank");
    }
  };
  
  let backgroundColor;
  let buttonColor;
  let textColor;

  switch (selectedTheme) {
    case "Light":
      backgroundColor = "bg-white";
      buttonColor = "bg-[#248277]"
      break;
    case "Dark":
      backgroundColor = "bg-black";
      buttonColor = "bg-[#248277]"
      textColor = "text-white";
      break;
    case "Colorful":
      backgroundColor = "bg-[#248277]";
      buttonColor = "bg-[#9FCFCA]"
      break;
    default:
      backgroundColor = "bg-white";
      textColor = "text-black";
  }

  return (
    !isHidden && (
      <div
      className={`header w-full h-20 flex items-center justify-center ${backgroundColor}`}
      >
        <div className="header-inner flex gap-8">
          <h1 className={`header-text text-2xl font-bold truncate ${textColor}`}>
            {timerTitle}
          </h1>
          <Timer
            selectedTheme={selectedTheme}
            remainingTimePeriod={remainingTimePeriod}
            selectedTimePeriod={selectedTimePeriod}
            showDays={showDays}
            showHours={showHours}
            showMinutes={showMinutes}
            showSeconds={showSeconds}
            daysText={daysText}
            hoursText={hoursText}
            minutesText={minutesText}
            secondsText={secondsText}
          />
          <button
            className={`flex justify-center items-center w-[160px] h-[38px] px-4 py-2 rounded-md text-2xl font-bold truncate ${textColor} ${buttonColor}`}
            onClick={handleRedirect}
          >
            {buttonTitle}
          </button>
          {isCloseButtonOn && (
            <button type="button" className="flex justify-center items-center" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={selectedTheme === "Dark" ? "white" : "black"}
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
      </div>
    )
  );  
};

export default Header;
