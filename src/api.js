import axios from 'axios';
import { database } from './firebase';
import { ref, runTransaction  } from 'firebase/database';

const API_KEY = 'de2260a34278cdec5dc78b90758fd91e';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city, unit) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: unit,
      },
    });

    console.log(response);
    // Update recent searches in Firebase
    updateRecentSearches(city);

    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error.response ? error.response.data.message : 'Network Error';
  }
};

const updateRecentSearches = (newCity) => {
  // Update recent searches in Firebase
  const searchesRef = ref(database, 'recentSearches');

  runTransaction(searchesRef, (searches) => {
    if (!searches) {
      searches = [];
    }

    // Check if newCity already exists, and if so, move it to the last position
    const index = searches.indexOf(newCity);
    if (index !== -1) {
      searches.splice(index, 1); // Remove existing entry
    }

    const newSearches = [newCity, ...searches.slice(0, 4)];
    return newSearches;
  }, (error, committed, snapshot) => {
    if (error) {
      console.error('Transaction failed abnormally!', error);
    } else if (!committed) {
      console.warn('Transaction aborted, data unchanged.');
    } else {
      console.log('Transaction completed successfully!');
    }
  });
};