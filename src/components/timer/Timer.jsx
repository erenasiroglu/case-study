import React from 'react';

export const Timer = ({ remainingTime, timeUnit }) => {
  const formatTime = (time, unit) => {
    switch (unit) {
      case 'days':
        return `${time} Days`;
      case 'hours':
        return `${time} Hours`;
      case 'minutes':
        return `${time} Minutes`;
      case 'seconds':
        return `${time} Seconds`;
      default:
        return '';
    }
  };

  return (
    <div className='h-9 w-auto bg-[#248277] rounded p-2 text-white'>
      <span>{formatTime(remainingTime, timeUnit)}</span>
    </div>
  );
};

export default Timer;
