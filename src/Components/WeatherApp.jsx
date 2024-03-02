import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import ToggleUnit from './ToggleUnit';
import RecentSearches from './RecentSearches';
import { fetchWeatherData } from '../api'; 
import { database } from '../firebase';
import { ref, get  } from 'firebase/database';


const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [recentSearches, setRecentSearches] = useState([]);
  const [error,setError]=useState('')

  useEffect(() => {
    // Fetch weather data when the city or unit changes
    setError('')
    if (city) {
      fetchWeatherData(city, unit)
        .then((data) => {
          setWeatherData(data);
          updateRecentSearches(city);
        })
        .catch((error) => setError(error));
    }
  }, [city, unit]);

  useEffect(() => {
    // Fetch recent searches from Firebase
    const searchesRef = ref(database, 'recentSearches');

    get(searchesRef).then((snapshot) => {
      const searches = snapshot.val() || [];
      setRecentSearches(searches);
    }).catch((error) => {
      console.error('Error fetching recent searches:', error);
    });
  }, []);

const updateRecentSearches = (newCity) => {
  // Update recent searches in Firebase
  const existingIndex = recentSearches.indexOf(newCity);

  if (existingIndex !== -1) {
    // Move existing city to the top
    const updatedSearches = [
      recentSearches[existingIndex],
      ...recentSearches.slice(0, existingIndex),
      ...recentSearches.slice(existingIndex + 1),
    ];
    setRecentSearches(updatedSearches);
  } else {
    // Add new city to the top
    const newSearches = [newCity, ...recentSearches.slice(0, 4)];
    setRecentSearches(newSearches);
  }
};

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  const handleToggleUnit = () => {
    setUnit(unit === 'metric' ? 'imperial' : 'metric');
  };

  return (
   
    <div className='flex flex-col justify-center items-center'>
     <div className='flex justify-between items-center'> <div className='text-2xl text-white mb-2'>Search Weather</div>
      <ToggleUnit unit={unit} onToggle={handleToggleUnit} />
      
      </div>
       <SearchBar onSearch={handleSearch} error={error} setError={setError} />
       <div className={`flex ${window.innerWidth < 400 ? 'flex-col' : 'flex-row'}`}>
  {weatherData && <WeatherDisplay data={weatherData} unit={unit} />}
  <RecentSearches searches={recentSearches} onSearch={handleSearch} />
</div>

      </div> 
  );
};

export default WeatherApp;
