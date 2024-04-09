import React from 'react';

export const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-4 w-4 text-blue-600"
      />
      <label className="ml-2 text-sm text-gray-700">{label}</label>
    </div>
  );
};

export default Checkbox;
