import React, { useState } from "react";
import Dropdown from "../components/dropdown/Dropdown";
import Switch from "../components/switch/Switch";
import Radio from "../components/radio-button/RadioButton";
import Input from "../components/input/Input";
import Checkbox from "../components/checkbox/Checkbox";

export const TimerSettings = ({
  onThemeChange,
  onSwitchChange,
  onInputChange,
  onPositionChange,
  onRemainingTimePeriodChange,
  onSelectedTimePeriodChange,
}) => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [timerTitle, setTimerTitle] = useState("Black Friday Sale");
  const [remainingTimePeriod, setRemainingTimePeriod] = useState(120);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("days");

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

  const handlePositionChange = (event) => {
    const position = event.target.value;
    setSelectedPosition(position);
    onPositionChange(position);
  };

  const handleRemainingTimePeriodChange = (value) => {
    setRemainingTimePeriod(value);
    onRemainingTimePeriodChange(value);
  };

  const handleTimePeriodChange = (value) => {
    setSelectedTimePeriod(value);
    onSelectedTimePeriodChange(value);
  };

  console.log(selectedTheme);
  console.log(isSwitchOn);
  console.log(selectedPosition);
  console.log(selectedTimePeriod);
  console.log(remainingTimePeriod);

  return (
    <div className="timer-settings p-8">
      <h1 className="text-2xl font-semibold mb-4">Timer Settings</h1>
      <div className="mb-4">
        <span className="block mb-3 text-base font-semibold">Timer Style</span>
        <Dropdown onThemeChange={handleThemeChange} />
      </div>
      <div className="mb-4 flex flex-row items-center">
        <b className="mr-2 text-base">Close Button</b>
      </div>
      <Switch onSwitchChange={handleSwitchChange} />
      <div className="flex flex-col">
        <b className="mb-4 mt-5 text-base">Timer Title</b>
        <Input
          placeholder="Enter Timer Title"
          onChange={handleTimerTitleChange}
          defaultValue={timerTitle}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <b className="block mb-4 text-base">Set the time in</b>
        <div className="flex flex-row gap-2.5">
          <Radio
            id="days"
            name="timePeriod"
            value="days"
            label="Days"
            onChange={() => handleTimePeriodChange("days")}
          />
          <Radio
            id="hours"
            name="timePeriod"
            value="hours"
            label="Hours"
            onChange={() => handleTimePeriodChange("hours")}
          />
          <Radio
            name="timePeriod"
            label="Minutes"
            onChange={() => handleTimePeriodChange("minutes")}
          />
          <Radio
            name="timePeriod"
            label="Seconds"
            onChange={() => handleTimePeriodChange("seconds")}
          />
        </div>
      </div>
      <div className="mb-4">
        <b className="block mb-4 text-base">Remaining Time Period</b>
        <Input
          onChange={handleRemainingTimePeriodChange}
          defaultValue={remainingTimePeriod}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <b className="block mb-4 text-base">Positioning</b>
        <div className="flex flex-row gap-2.5">
          <Radio
            name="position"
            value="top Sticky"
            label="Top Sticky"
            onChange={(value) => handlePositionChange(value)}
          />
          <Radio
            name="position"
            value="top static"
            label="Top Static"
            onChange={(value) => handlePositionChange(value)}
          />
          <Radio
            name="position"
            value="bottom static"
            label="Bottom Static"
            onChange={(value) => handlePositionChange(value)}
          />
        </div>
      </div>
      <h1 className="text-2xl font-semibold mb-4">Counters and Labels</h1>
      <div className="mb-4 flex flex-col">
        <b className="mr-2 mb-4 text-base">Display the count in</b>
        <div className="flex flex-row gap-2.5">
          <Checkbox label="Days" />
          <Checkbox label="Hours" />
          <Checkbox label="Minutes" />
          <Checkbox label="Seconds" />
        </div>
      </div>
    </div>
  );
};

export default TimerSettings;
