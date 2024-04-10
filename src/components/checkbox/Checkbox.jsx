import React from 'react';

export const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-4 w-4"
      />
      <label className="ml-2 text-sm text-gray-500">{label}</label>
    </div>
  );
};

export default Checkbox;
