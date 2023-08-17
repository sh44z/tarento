// SearchDiv.jsx
import React from 'react';

const SearchDiv = ({ handleSearch }) => {
  return (
    <div className="search-div bg-gray-200 p-4 rounded-md max-w-md mx-auto mb-4">
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search jobs"
        className="p-2 border rounded-md focus:outline-none w-full"
      />
    </div>
  );
};

export default SearchDiv;
