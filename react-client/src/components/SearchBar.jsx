import React, { useState } from "react";
import "./styles/SearchBar.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState(""); 

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value); 
  };

  const handleSearch = () => {
   
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search characters by name..."
        className="search-input"
        value={searchTerm}
        onChange={handleInputChange} 
      />
      <button className="search-button" onClick={handleSearch}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBar;
