import React, { useState, useEffect } from "react";

const Timer = ({
  initialRemainingTime = 5 * 24 * 60 * 60,
  selectedTheme,
}) => {
  const [remainingTime, setRemainingTime] = useState(initialRemainingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time, unit) => {
    switch (unit) {
      case "days":
        return Math.floor(time / (24 * 60 * 60));
      case "hours":
        return Math.floor((time % (24 * 60 * 60)) / (60 * 60));
      case "minutes":
        return Math.floor((time % (60 * 60)) / 60);
      case "seconds":
        return time % 60;
      default:
        return 0;
    }
  };

  let textColor;
  switch (selectedTheme) {
    case "Light":
      textColor = "text-black";
      break;
    case "Dark":
      textColor = "text-white";
      break;
    case "Colorful":
      textColor = "text-black";
      break;
    default:
      textColor = "bg-white";
  }

  const renderDigitGroups = (time, unit) => {
    const digits = formatTime(time, unit).toString().padStart(2, "0");

    return digits.split("").map((digit, index) => (
      <div key={index} className={`bg-[#248277] rounded p-2 ${textColor} font-bold mr-1`}>
        {digit}
      </div>
    ));
  };

  return (
    <div className="flex flex-row flex-wrap">
      <div className="flex flex-col items-center text-2xl mr-4">
        <div className="flex flex-row">
          {renderDigitGroups(remainingTime, "days")}
        </div>
        <span className={`text-xs ${textColor}`}>Days</span>
      </div>
      <div className="mt-2"></div> 
      <div className="flex flex-col items-center text-2xl  mr-4">
        <div className="flex flex-row">
          {renderDigitGroups(remainingTime, "hours")}
        </div>
        <span className={`text-xs ${textColor}`}>Hours</span>
      </div>
      <div className="mt-2"></div>
      <div className="flex flex-col items-center text-2xl  mr-4">
        <div className="flex flex-row">
          {renderDigitGroups(remainingTime, "minutes")}
        </div>
        <span className={`text-xs ${textColor}`}>Minutes</span>
      </div>
      <div className="mt-2"></div>
      <div className="flex flex-col items-center text-2xl  mr-4">
        <div className="flex flex-row">
          {renderDigitGroups(remainingTime, "seconds")}
        </div>
        <span className={`text-xs ${textColor}`}>Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
