import React, { useState } from "react";

export const Switch = ({ onSwitchChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onSwitchChange(newValue);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id="toggle"
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={toggleSwitch}
          />
          <div
            className={`toggle__line w-12 h-6 bg-gray-300 rounded-full shadow-inner ${
              isChecked ? "bg-gray-950" : "bg-gray-200"
            }`}
          ></div>
          <div
            className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow top-0 ${
              isChecked ? "transform translate-x-full" : ""
            }`}
          ></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium text-sm">
          Turn on close button
        </div>
      </label>
    </div>
  );
};

export default Switch;
