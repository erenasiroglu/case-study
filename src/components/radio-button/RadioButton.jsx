import React from "react";
import { ReactComponent as RadioCheckedSVG } from "../../lib/icon/radio.svg";
import { ReactComponent as RadioUncheckedSVG } from "../../lib/icon/radio_unchecked.svg";

export const RadioButton = ({ id, name, value, checked, onChange, label }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <label
        htmlFor={id}
        className={`ml-1 text-sm cursor-pointer ${
          checked ? "text[#0A0908]" : "text-gray-500"
        }`}
      >
        <div className="flex items-center">
          <span className="w-4 h-4 mr-1">
            {checked ? <RadioCheckedSVG /> : <RadioUncheckedSVG />}
          </span>
          {label}
        </div>
      </label>
    </div>
  );
};

export default RadioButton;
