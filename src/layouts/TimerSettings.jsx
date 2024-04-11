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
        <div className="font-semibold mr-2 text-base">Close Button</div>
      </div>
      <Switch onSwitchChange={handleSwitchChange} />
      <div className="flex flex-col">
        <div className="mb-4 mt-5 text-base font-semibold">Timer Title</div>
        <Input
          placeholder="Enter Timer Title"
          onChange={handleTimerTitleChange}
          defaultValue={timerTitle}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <div className="block mb-4 text-base font-semibold">Set the time in</div>
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
        <div className="block mb-4 text-base font-semibold">Remaining Time Period</div>
        <Input
          onChange={handleRemainingTimePeriodChange}
          defaultValue={remainingTimePeriod}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <div className="block mb-4 text-base font-semibold">Positioning</div>
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
        <div className="mr-2 mb-4 text-base font-semibold">Display the count in</div>
        <div className="flex flex-row gap-2.5 mb-4">
        <Checkbox label="Days" />
          <Checkbox label="Hours" />
          <Checkbox label="Minutes" />
          <Checkbox label="Seconds" />
        </div>
        <div className="period-labels">
          <div className="mr-2 mb-4 text-base font-semibold">Days Label</div>
          <Input placeholder="Days" />
          <div className="mr-2 mb-4 text-base font-semibold">Hours Label</div>
          <Input placeholder="Hours"/>
          <div className="mr-2 mb-4 text-base font-semibold">Minutes Label</div>
          <Input placeholder="Minutes"/>
          <div className="mr-2 mb-4 text-base font-semibold">Seconds Label</div>
          <Input placeholder="Seconds"/>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-4">Button Settings</h1>
          <div className="mr-2 mb-4 text-base font-semibold">Button Text</div>
          <Input placeholder="Shop Now!" />
          <div className="mr-2 mb-4 text-base font-semibold">Button Link </div>
          <Input placeholder="www.stripe.com"/>
        </div>
      </div>
    </div>
  );
};

export default TimerSettings;
