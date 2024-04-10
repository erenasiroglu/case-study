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
  const [remainingTimePeriod, setRemainingTimePeriod] = useState(23);

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

  console.log(selectedPosition);
  console.log(selectedTimePeriod);

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
        />
      </div>
      <div className="rightSide">
        <Counter
          selectedTheme={selectedTheme}
          isCloseButtonOn={isCloseButtonOn}
          timerTitle={timerTitle}
          selectedPosition={selectedPosition}
          selectedTimePeriod={selectedTimePeriod}
          remainingTimePeriod={remainingTimePeriod} // Yeni prop
        />
      </div>
    </div>
  );
};

export default App;
