import React from "react";
import { ReactComponent as CheckboxCheckedSVG } from "../../lib/icon/checkbox.svg";
import { ReactComponent as CheckboxUncheckedSVG } from "../../lib/icon/checkbox_unchecked.svg";

export const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <label htmlFor={id} className={`ml-1 text-sm cursor-pointer ${checked ? 'text[#0A0908]' : 'text-gray-500'}` }>
        <div className="flex items-center">
          <span className="w-4 h-4 mr-1">
            {checked ? <CheckboxCheckedSVG /> : <CheckboxUncheckedSVG />}
          </span>
          {label}
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
