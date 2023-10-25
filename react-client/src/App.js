import React, { useState, useEffect } from "react";
import Home from "./components/Home.jsx";
import AllCharacters from "./components/AllCharacters.jsx";
import Add from "./components/Add.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";
import data from "./components/data.json";
import axios from "axios"
function App() {
  const [currentPage, setCurrentPage] = useState("home");


 
  const changeView = (view) => {
    setCurrentPage(view);
  };
  const switchView = () => {
    if (currentPage === "home") {
      return <Home view={changeView} />;
    } else if (currentPage === "all-characters") {
      return <AllCharacters data={data} />;
    } else if (currentPage === "Add") {
      return <Add />;
    } 
  };

 

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
      
          <div className="navbar-logo" onClick={() => setCurrentPage("home")}>
            <img
              src="https://wallpapercave.com/dwp1x/wp12094525.jpg"
              alt="One Piece Logo"
              className="animated-logo"
            />
          </div>
          
          <ul className="nav-menu">
         
            <li className="nav-item" onClick={() => setCurrentPage("home")}>
              Home
            </li>
            <li
              className="nav-item"
              onClick={() => setCurrentPage("all-characters")}
            >
              All Characters
            </li>
            <li className="nav-item" onClick={() => setCurrentPage("Add")}>
              Add Character
            </li>
            {currentPage ==="all-characters"&&<SearchBar />}
          </ul>
        </div>
      </nav>
      <div className="content">{switchView()}</div>
    </div>
  );
}

export default App;
