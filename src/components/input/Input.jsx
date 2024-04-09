import React from 'react';

const Input = ({ label, placeholder, onChange, defaultValue }) => {
  const handleChange = (event) => {
    onChange(event.target.value); 
  };

  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
      <input
        className="shadow appearance-none border rounded w-240 py-2 px-3 text-gray-500 text-sm rounded-lg leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
