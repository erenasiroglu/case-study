import React from "react";
import Header from "../components/header/Header";

export const Counter = ({
  selectedTheme,
  isCloseButtonOn,
  timerTitle,
  selectedPosition,
  selectedTimePeriod,
  remainingTimePeriod,
  showDays,
  showHours,
  showMinutes,
  showSeconds,
  buttonTitle,
  buttonLink,
}) => {

  // let positionClass;
  // switch (selectedPosition) {
  //   case "top Sticky":
  //     positionClass = "sticky top-0";
  //     break;
  //   case "top static":
  //     positionClass = "top-0";
  //     break;
  //   case "bottom static":
  //     positionClass = "bottom-2";
  //     break;
  //   default:
  //     positionClass = "";
  // }

  return (
    <div className={`bg-gray-200 p-8 w-full h-full bg-[#E5E6E4]`}>
      <div className={`bg-[#FAF9F9] shadow-md h-full`}>
        <Header
          selectedTheme={selectedTheme}
          isCloseButtonOn={isCloseButtonOn}
          timerTitle={timerTitle}
          selectedPosition={selectedPosition}
          remainingTimePeriod={remainingTimePeriod}
          selectedTimePeriod={selectedTimePeriod}
          showDays={showDays}
          showHours={showHours}
          showMinutes={showMinutes}
          showSeconds={showSeconds}
          buttonTitle={buttonTitle}
          buttonLink={buttonLink}
        />
      </div>
    </div>
  );
};

export default Counter;
