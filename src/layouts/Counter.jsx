import React from 'react';
import Header from '../components/header/Header';

export const Counter = ({ selectedTheme, isCloseButtonOn, timerTitle, selectedPosition }) => {
  let positionClass;
  switch (selectedPosition) {
    case "top Sticky":
      positionClass = "sticky top-0";
      break;
    case "top static":
      positionClass = "top-0";
      break;
    case "bottom static":
      positionClass = "bottom-2";
      break;
    default:
      positionClass = "";
  }

  return (
    <div className={`bg-gray-200 p-8 w-full h-full bg-[#E5E6E4] ${positionClass}`}>
      <div className={`bg-[#FAF9F9] shadow-md h-full absolute ${positionClass}`}>
        <Header selectedTheme={selectedTheme} isCloseButtonOn={isCloseButtonOn} timerTitle={timerTitle} selectedPosition={selectedPosition} />
      </div>
    </div>
  );
};

export default Counter;
