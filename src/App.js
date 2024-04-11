import React, { useState } from "react";
import Counter from "./layouts/Counter";
import TimerSettings from "./layouts/TimerSettings";
import "./App.css";

export const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isCloseButtonOn, setIsCloseButtonOn] = useState(false);
  const [timerTitle, setTimerTitle] = useState("Black Friday Sale");
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("days");
  const [remainingTimePeriod, setRemainingTimePeriod] = useState(120);
  const [buttonTitle, setButtonTitle] = useState("Shop Now!");
  const [buttonLink, setButtonLink] = useState("www.stripe.com");

  const [showDays, setShowDays] = useState(true);
  const [showHours, setShowHours] = useState(true);
  const [showMinutes, setShowMinutes] = useState(true);
  const [showSeconds, setShowSeconds] = useState(true);

  console.log("show hours", showHours);
  console.log("show minutes", showMinutes);
  console.log("show seconds", showSeconds);
  console.log("show days", showDays);

  const handleInputValueChange = (value) => {
    setTimerTitle(value);
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const handleSwitchChange = (isChecked) => {
    setIsCloseButtonOn(isChecked);
  };

  const handlePositionChange = (position) => {
    setSelectedPosition(position);
  };

  const handleTimePeriodChange = (timePeriod) => {
    setSelectedTimePeriod(timePeriod);
  };

  const handleRemainingTimePeriodChange = (value) => {
    setRemainingTimePeriod(value);
  };

  const handleCheckboxChange = (name, isChecked) => {
    switch (name) {
      case "days":
        setShowDays(isChecked);
        break;
      case "hours":
        setShowHours(isChecked);
        break;
      case "minutes":
        setShowMinutes(isChecked);
        break;
      case "seconds":
        setShowSeconds(isChecked);
        break;
      default:
        break;
    }
  };

  const handleButtonTitleChange = (value) => {
    setButtonTitle(value);
  };

  const handleButtonLinkChange = (value) => {
    setButtonLink(value);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="leftSide">
        <TimerSettings
          onThemeChange={handleThemeChange}
          onSwitchChange={handleSwitchChange}
          onInputChange={handleInputValueChange}
          onPositionChange={handlePositionChange}
          onTimePeriodChange={handleTimePeriodChange}
          onRemainingTimePeriodChange={handleRemainingTimePeriodChange}
          onSelectedTimePeriodChange={handleTimePeriodChange}
          onCheckboxChange={handleCheckboxChange}
          onButtonTitleChange={handleButtonTitleChange}
          onButtonLinkChange={handleButtonLinkChange}
        />
      </div>
      <div className="rightSide">
        <Counter
          selectedTheme={selectedTheme}
          isCloseButtonOn={isCloseButtonOn}
          timerTitle={timerTitle}
          selectedPosition={selectedPosition}
          selectedTimePeriod={selectedTimePeriod}
          remainingTimePeriod={remainingTimePeriod}
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

export default App;
