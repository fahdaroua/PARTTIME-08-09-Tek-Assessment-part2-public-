import React,{useState} from 'react';
import "./styles/SearchBar.css";


function SearchBar(props) {
  
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search characters..."
        className="search-input"
      />
      <button className="search-button" >
        <i className="fas fa-search"></i>
       
      </button>
      <button className="reset-button" >
      <i className="fas fa-sync"></i>
      </button>
    </div>
  );
}

export default SearchBar;
