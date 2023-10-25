import React, { useState, useEffect } from "react";
import Character from "./Character.jsx";
import axios from "axios";

function AllCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/get")
      .then((response) => setCharacters(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="all-characters-container">
      {characters.map((character, index) => (
        <Character key={index} character={character} />
      ))}
    </div>
  );
}

export default AllCharacters;
