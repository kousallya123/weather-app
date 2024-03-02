import React from 'react';

const RecentSearches = ({ searches, onSearch }) => {
  return (
    <div className="bg-white ml-4 mt-4 p-4 rounded-md">
    <h3 className="text-sm font-semibold mb-2">Recent Searches</h3>
    <ul>
      {searches.map((search, index) => (
        <li
          key={index}
          onClick={() => onSearch(search)}
          className="cursor-pointer hover:bg-gray-100 transition duration-300 p-2 rounded-md mb-1"
        >
          {search}
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default RecentSearches;
