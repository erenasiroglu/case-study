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
  onCheckboxChange,
  onButtonTitleChange,
  onButtonLinkChange,
  onDaysTextChange,
  onHoursTextChange,
  onMinutesTextChange,
  onSecondsTextChange,
}) => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [timerTitle, setTimerTitle] = useState("Black Friday Sale");
  const [remainingTimePeriod, setRemainingTimePeriod] = useState(120);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("days");
  const [buttonTitle, setButtonTitle] = useState("Shop Now!");
  const [buttonLink, setButtonLink] = useState("www.stripe.com");
  const [daysText, setDaysText] = useState("Days");
  const [hoursText, setHoursText] = useState("Hours");
  const [minutesText, setMinutesText] = useState("Minutes");
  const [secondsText, setSecondsText] = useState("Seconds");

  const [showDays, setShowDays] = useState(true);
  const [showHours, setShowHours] = useState(true);
  const [showMinutes, setShowMinutes] = useState(true);
  const [showSeconds, setShowSeconds] = useState(true);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    onThemeChange(theme);
    selectedTheme ? setSelectedTheme("") : setSelectedTheme(theme);
  };

  const handleSwitchChange = (isChecked) => {
    setIsSwitchOn(isChecked);
    onSwitchChange(isChecked);
    isSwitchOn ? setIsSwitchOn(false) : setIsSwitchOn(true);
  };

  const handleTimerTitleChange = (value) => {
    setTimerTitle(value);
    onInputChange(value);
  };

  const handlePositionChange = (event) => {
    const position = event.target.value;
    setSelectedPosition(position);
    onPositionChange(position);
    selectedPosition ? setSelectedPosition("") : setSelectedPosition(position);
  };

  const handleRemainingTimePeriodChange = (value) => {
    setRemainingTimePeriod(value);
    onRemainingTimePeriodChange(value);
    selectedTimePeriod
      ? setSelectedTimePeriod("")
      : setSelectedTimePeriod(value);
  };

  const handleTimePeriodChange = (value) => {
    setSelectedTimePeriod(value);
    onSelectedTimePeriodChange(value);
  };


  const handleCheckboxChange = (name) => {
    switch (name) {
      case "days":
        setShowDays((prevValue) => !prevValue);
        onCheckboxChange(name, !showDays);
        break;
      case "hours":
        setShowHours((prevValue) => !prevValue);
        onCheckboxChange(name, !showHours);
        break;
      case "minutes":
        setShowMinutes((prevValue) => !prevValue);
        onCheckboxChange(name, !showMinutes);
        break;
      case "seconds":
        setShowSeconds((prevValue) => !prevValue);
        onCheckboxChange(name, !showSeconds);
        break;
      default:
        break;
    }
  };

  const handleButtonTitleChange = (value) => {
    setButtonTitle(value);
    onButtonTitleChange(value);
  };

  const handleButtonLinkChange = (value) => {
    setButtonLink(value);
    onButtonLinkChange(value);
  }

  const handleDaysTextChange = (value) => {
    setDaysText(value);
    onDaysTextChange(value);
  }

  const handleHoursTextChange = (value) => {
    setHoursText(value);
    onHoursTextChange(value);
  }

  const handleMinutesTextChange = (value) => {
    setMinutesText(value);
    onMinutesTextChange(value);
  }

  const handleSecondsTextChange = (value) => {
    setSecondsText(value);
    onSecondsTextChange(value);
  }

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
        <div className="block mb-4 text-base font-semibold">
          Set the time in
        </div>
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
        <div className="block mb-4 text-base font-semibold">
          Remaining Time Period
        </div>
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
        <div className="mr-2 mb-4 text-base font-semibold">
          Display the count in
        </div>
        <div className="flex flex-row gap-2.5 mb-4">
          <Checkbox
            label="Days"
            checked={showDays}
            onChange={(isChecked) => handleCheckboxChange("days", isChecked)}
          />
          <Checkbox
            label="Hours"
            checked={showHours}
            onChange={(isChecked) => handleCheckboxChange("hours", isChecked)}
          />
          <Checkbox
            label="Minutes"
            checked={showMinutes}
            onChange={(isChecked) => handleCheckboxChange("minutes", isChecked)}
          />
          <Checkbox
            label="Seconds"
            checked={showSeconds}
            onChange={(isChecked) => handleCheckboxChange("seconds", isChecked)}
          />
        </div>
        <div className="period-labels">
          <div className="mr-2 mb-4 text-base font-semibold">Days Label</div>
          <Input placeholder="Days" onChange={handleDaysTextChange} defaultValue={daysText} />
          <div className="mr-2 mb-4 text-base font-semibold">Hours Label</div>
          <Input placeholder="Hours" onChange={handleHoursTextChange} defaultValue={hoursText} />
          <div className="mr-2 mb-4 text-base font-semibold">Minutes Label</div>
          <Input placeholder="Minutes" onChange={handleMinutesTextChange} defaultValue={minutesText} />
          <div className="mr-2 mb-4 text-base font-semibold">Seconds Label</div>
          <Input placeholder="Seconds" onChange={handleSecondsTextChange} defaultValue={secondsText} />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-4">Button Settings</h1>
          <div className="mr-2 mb-4 text-base font-semibold">Button Text</div>
          <Input placeholder="Shop Now!" onChange={handleButtonTitleChange} defaultValue={buttonTitle} />
          <div className="mr-2 mb-4 text-base font-semibold">Button Link </div>
          <Input placeholder="www.stripe.com" onChange={handleButtonLinkChange} defaultValue={buttonLink} />
        </div>
      </div>
    </div>
  );
};

export default TimerSettings;
