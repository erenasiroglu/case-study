import React from "react";

export const Input = ({
  label,
  placeholder,
  onChange,
  defaultValue,
  customWidthClass,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        className={`shadow appearance-none border rounded py-2 px-3 text-gray-500 text-sm rounded-lg leading-tight focus:outline-none focus:shadow-outline ${
          customWidthClass || "w-240"
        }`}
        placeholder={placeholder}
        onChange={handleChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
