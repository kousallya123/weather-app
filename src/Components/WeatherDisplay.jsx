import React from 'react';
import Icon from '../assets/icon.png'

const WeatherDisplay = ({ data, unit }) => {
  return (
    <div className='bg-blue-900 w-[20rem] h-[24rem] p-4 text-white mt-4 flex flex-col justify-center items-center'>
      <h2 className='text-xl font-semibold'>{data.name}</h2>
      <img src={Icon} className='h-[7rem] w-[7rem]'/>
      <p className='text-2xl font-semibold'> {data.main.temp}&deg;{unit === 'metric' ? 'C' : 'F'}</p>
      <p> {data.weather[0].description}</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
