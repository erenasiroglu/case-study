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
        className="form-radio h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
      />
      <label htmlFor={id} className="ml-2">{label}</label>
    </div>
  );
};

export default RadioButton;
