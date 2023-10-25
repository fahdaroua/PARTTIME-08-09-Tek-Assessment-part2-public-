import React from "react";
import "./styles/AllCharacters.css";
import Character from "./Character.jsx";
function AllCharacters({data}) {
  return (
    <div className="all-characters-container">
      {data&& data.map((character, index) => (
        <Character key={index} character={character} />
      ))}
    </div>
  );
}

export default AllCharacters;

