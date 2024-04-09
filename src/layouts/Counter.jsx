import React from 'react';
import Header from '../components/header/Header';

export const Counter = ({selectedTheme, isCloseButtonOn}) => {

  return (
    <div className='bg-gray-200 p-8 w-full h-full bg-[#E5E6E4]'>
      <div className="bg-[#FAF9F9] shadow-md w-full h-full">
        <Header selectedTheme={selectedTheme} isCloseButtonOn={isCloseButtonOn} />
      </div>
    </div>
  );
};

export default Counter;
