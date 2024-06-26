import React, { useState } from "react";

export const Dropdown = ({ onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Light");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onThemeChange(option);
  };

  return (
    <div className="relative inline-block z-50 w-40 text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md px-4 py-2 bg-[#FAF9F9] text-sm font-medium text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
        >
          {selectedOption}{" "}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute mt-2 w-40 rounded-md bg-[#FAF9F9]">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              className={`block px-4 py-2 text-sm w-full text-left text-[#0A0908] ${
                selectedOption === "Light" ? " font-semibold" : ""
              }`}
              onClick={() => handleOptionClick("Light")}
              role="menuitem"
            >
              Light
            </button>
            <button
              className={`block px-4 py-2 text-sm w-full text-left ${
                selectedOption === "Dark" ? "font-semibold" : ""
              }`}
              onClick={() => handleOptionClick("Dark")}
              role="menuitem"
            >
              Dark
            </button>
            <button
              className={`block px-4 py-2 text-sm w-full text-left ${
                selectedOption === "Colorful"
                  ? "font-semibold" 
                  : ""
              }`}
              onClick={() => handleOptionClick("Colorful")}
              role="menuitem"
            >
              Colorful
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
