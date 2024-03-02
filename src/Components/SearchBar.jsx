import React, { useState } from 'react';

const SearchBar = ({ onSearch,error,setError }) => {
  const [input, setInput] = useState('');


  const handleSubmit = (e) => {
    setError('')
    e.preventDefault();
    if (input.trim() !== '') {
      onSearch(input);
      setInput('');
    }else{
      setError('Enter the city name')
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="flex items-center mt-2 font-poppins">
    <input
      type="text"
      placeholder="Enter city name"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="border rounded-l p-2 w-64 focus:outline-none"
    />
    <button
      type="submit"
      className="bg-blue-900 text-white rounded-r p-2 hover:bg-blue-800 focus:outline-none"
    >
      Search
    </button>
  </form>
  {error && <p className="text-red-600 ">{error}</p>}
     </div>
  
  );
};

export default SearchBar;
