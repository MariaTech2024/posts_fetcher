import React from "react";
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa'; 

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value); 
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search post by title..."
          onChange={handleChange} 
        />
          <FaSearch className="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;