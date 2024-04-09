import React from "react";
import Counter from "./layouts/Counter";
import TimerSettings from "./layouts/TimerSettings";
import "./App.css";

export const App = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="leftSide">
        <TimerSettings />
      </div>
      <div className="rightSide">
        <Counter />
      </div>
    </div>
  );
};

export default App;
