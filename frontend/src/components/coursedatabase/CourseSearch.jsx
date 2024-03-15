import React, { useState } from 'react';
import '../../styles/CourseSearch.css';

function CourseSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); // Prevents the default form submit action
    onSearch(searchTerm);
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search by course title, date or location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className = "search-btn" type="submit">Search</button>
    </form>
  );
};

export default CourseSearch;
