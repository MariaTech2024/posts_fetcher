import React from "react";
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon from react-icons

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value); // Update the parent state with the search term
  };

  const handleSearchClick = () => {
    onSearch(); // This can be used if you want a default search term action
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title..."
          onChange={handleChange} // Update state on input change
        />
        <button className="search-button" onClick={handleSearchClick}>
          <FaSearch className="search-icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;