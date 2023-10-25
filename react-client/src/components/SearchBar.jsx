import React from 'react';
import "./styles/SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search characters..."
        className="search-input"
        
      />
      <button className="search-button">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
