import React from 'react';

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
        className="form-radio h-4 w-4 bg-black transition duration-150 ease-in-out"
      />
      <label htmlFor={id} className="ml-1 text-sm text-gray-500">{label}</label>
    </div>
  );
};

export default RadioButton;
