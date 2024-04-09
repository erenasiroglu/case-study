import React, { useState } from "react";
import Counter from "./layouts/Counter";
import TimerSettings from "./layouts/TimerSettings";
import "./App.css";

export const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="leftSide">
        <TimerSettings onThemeChange={handleThemeChange} />
      </div>
      <div className="rightSide">
        <Counter selectedTheme={selectedTheme} />
      </div>
    </div>
  );
};

export default App;
