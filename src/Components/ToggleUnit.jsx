import React from 'react';

const ToggleUnit = ({ unit, onToggle }) => {
  return (
    <div className="flex ml-8 items-center space-x-2 ">
    <label htmlFor="toggle" className="cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          checked={unit === 'imperial'}
          onChange={onToggle}
          className="sr-only"
        />
        <div className="block bg-blue-200 w-14 h-8 rounded-full"></div>
        <div
          className={`dot absolute left-1 top-1 bg-blue-900 w-6 h-6 rounded-full transition transform ${
            unit === 'imperial' ? 'translate-x-7' : 'translate-x-0'
          }`}
        ></div>
      </div>
    </label>
    <span className="text-white w-[5rem]  font-poppins">{unit === 'imperial' ? 'Fahrenheit' : 'Celsius'}</span>
  </div>
  
  );
};

export default ToggleUnit;
