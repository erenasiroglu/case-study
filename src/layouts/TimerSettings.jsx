import React, { useState } from "react";
import Dropdown from "../components/dropdown/Dropdown";
import Switch from "../components/switch/Switch";
import Radio from "../components/radio-button/RadioButton";
import Input from "../components/input/Input";
import Checkbox from "../components/checkbox/Checkbox";

export const TimerSettings = ({ onThemeChange, onSwitchChange, onInputChange }) => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [timerTitle, setTimerTitle] = useState("Black Friday Sale");
  const [remainingTimePeriod, setRemainingTimePeriod] = useState(120);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    onThemeChange(theme);
  };

  const handleSwitchChange = (isChecked) => {
    setIsSwitchOn(isChecked);
    onSwitchChange(isChecked);
  };

  const handleTimerTitleChange = (value) => {
    setTimerTitle(value);
    onInputChange(value);
  };

  const handleRemainingTimePeriodChange = (value) => {
    setRemainingTimePeriod(value);
  };

  console.log(selectedTheme);
  console.log(isSwitchOn);

  return (
    <div className="timer-settings p-8">
      <h1 className="text-base font-bold mb-4">Timer Settings</h1>
      <div className="mb-4">
        <span className="block mb-4 text-sm font-bold">Timer Style</span>
        <Dropdown onThemeChange={handleThemeChange} />
      </div>
      <div className="mb-4 flex flex-row items-center">
        <b className="mr-2 text-sm">Close Button</b>
      </div>
      <Switch onSwitchChange={handleSwitchChange} />
      <div className="mb-4 flex flex-col">
        <b className="block mb-4 mt-5 text-sm">Timer Title</b>
        <Input placeholder="Enter Timer Title" onChange={handleTimerTitleChange} defaultValue={timerTitle} />
      </div>
      <div className="mb-4 flex flex-col">
        <b className="block mb-4 text-sm">Set the time in</b>
        <div className="flex flex-row">
          <Radio/> Days
          <Radio /> Hours
          <Radio /> Minutes
          <Radio /> Seconds
        </div>
      </div>
      <div className="mb-4">
        <b className="block mb-4 text-sm">Remaining Time Period</b>
        <Input placeholder="Enter Remaining Time Period" onChange={handleRemainingTimePeriodChange} defaultValue={remainingTimePeriod} />
      </div>
      <div className="mb-4 flex flex-col">
        <b className="block mb-4 text-sm">Positioning</b>
        <div className="flex flex-row">
          <Radio />
          <Radio />
          <Radio />
        </div>
      </div>
      <h1 className="text-base font-bold mb-4">Counters and Labels</h1>
      <div className="mb-4 flex flex-col">
        <b className="mr-2 text-sm">Display the count in</b>
        <div className="flex flex-row">
        <Checkbox />
        <Checkbox />
        <Checkbox />
        <Checkbox />
        </div>
      </div>
    </div>
  );
};

export default TimerSettings;
