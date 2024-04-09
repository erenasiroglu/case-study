// Header.jsx

import React from "react";
import Timer from "../timer/Timer";

export const Header = ({ selectedTheme }) => {

  console.log(selectedTheme);
  const handleClick = () => {
    window.location.href = "https://www.beforesunset.ai/";
  };

  let backgroundColor;
  switch (selectedTheme) {
    case "Light":
      backgroundColor = "white";
      break;
    case "Dark":
      backgroundColor = "black";
      break;
    case "Colorful":
      backgroundColor = "gray-200";
      break;
    default:
      backgroundColor = "white";
  }

  return (
    <div className={`w-full flex flex-row h-20 p-4 justify-around items-center bg-${backgroundColor}`}>
      <h1 className="text-2xl font-bold">Black Friday Sale</h1>
      <Timer />
      <button className="bg-[#248277] text-black px-4 py-2 rounded-md text-2xl font-bold" onClick={handleClick}>
        Shop Now!
      </button>
      <button
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header;
