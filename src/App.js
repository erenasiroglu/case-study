import React, { useState } from "react";
import Counter from "./layouts/Counter";
import TimerSettings from "./layouts/TimerSettings";
import "./App.css";

export const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isCloseButtonOn, setIsCloseButtonOn] = useState(false);
  const [inputValue, setInputValue] = useState("Black Friday Sale");

  const handleInputValueChange = (value) => {
    setInputValue(value);
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const handleSwitchChange = (isChecked) => {
    setIsCloseButtonOn(isChecked);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="leftSide">
        <TimerSettings
          onThemeChange={handleThemeChange}
          onSwitchChange={handleSwitchChange}
          onInputChange={handleInputValueChange}
        />
      </div>
      <div className="rightSide">
        <Counter
          selectedTheme={selectedTheme}
          isCloseButtonOn={isCloseButtonOn}
          inputValue={inputValue}
        />
      </div>
    </div>
  );
};

export default App;
