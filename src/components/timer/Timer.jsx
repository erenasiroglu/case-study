import React, { useState, useEffect } from "react";

export const Timer = ({
  selectedTheme,
  selectedTimePeriod,
  remainingTimePeriod,
  showDays,
  showHours,
  showMinutes,
  showSeconds,
  daysText,
  hoursText,
  minutesText,
  secondsText,
}) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    let totalTimeInSeconds = 0;
    switch (selectedTimePeriod) {
      case "days":
        totalTimeInSeconds = remainingTimePeriod * 24 * 60 * 60;
        break;
      case "hours":
        totalTimeInSeconds = remainingTimePeriod * 60 * 60;
        break;
      case "minutes":
        totalTimeInSeconds = remainingTimePeriod * 60;
        break;
      case "seconds":
        totalTimeInSeconds = remainingTimePeriod;
        break;
      default:
        totalTimeInSeconds = 0;
    }

    setRemainingTime(totalTimeInSeconds);

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
  }, [selectedTimePeriod, remainingTimePeriod]);

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
  let buttonColor;
  switch (selectedTheme) {
    case "Light":
      textColor = "text-black";
      buttonColor = "bg-teal-700";
      break;
    case "Dark":
      textColor = "text-white";
      buttonColor = "bg-[#9FCFCA]";
      break;
    case "Colorful":
      textColor = "text-black";
      buttonColor = "bg-[#9FCFCA]";
      break;
    default:
      textColor = "bg-white";
      buttonColor = "bg-teal-700";
  }

  const renderDigitGroups = (time, unit) => {
    const digits = formatTime(time, unit).toString().padStart(2, "0");

    return digits.split("").map((digit, index) => (
      <div
        key={index}
        className={`${buttonColor} rounded p-2 ${textColor} font-bold mr-1`}
      >
        {digit}
      </div>
    ));
  };

  return (
    <div className="flex flex-row flex-wrap">
      {showDays && (
        <div className="flex flex-col items-center text-2xl mr-4">
          <div className="flex flex-row">
            {renderDigitGroups(remainingTime, "days")}
          </div>
          <span className={`text-xs ${textColor}`}>{daysText}</span>
        </div>
      )}
      {showHours && (
        <div className="flex flex-col items-center text-2xl mr-4">
          <div className="flex flex-row">
            {renderDigitGroups(remainingTime, "hours")}
          </div>
          <span className={`text-xs ${textColor}`}>{hoursText}</span>
        </div>
      )}
      {showMinutes && (
        <div className="flex flex-col items-center text-2xl mr-4">
          <div className="flex flex-row">
            {renderDigitGroups(remainingTime, "minutes")}
          </div>
          <span className={`text-xs ${textColor}`}>{minutesText}</span>
        </div>
      )}
      {showSeconds && (
        <div className="flex flex-col items-center text-2xl mr-4">
          <div className="flex flex-row">
            {renderDigitGroups(remainingTime, "seconds")}
          </div>
          <span className={`text-xs ${textColor}`}>{secondsText}</span>
        </div>
      )}
    </div>
  );
};

export default Timer;
