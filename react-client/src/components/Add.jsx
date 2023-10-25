import React, { useState } from "react";
import axios from "axios";
import "./styles/AddCharacter.css";

const Add = () => {
  const [characterData, setCharacterData] = useState({
    name: "",
    traits: "",
    affiliations: "",
    image: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCharacterData({ ...characterData, [name]: value });
  };

  const handleAddCharacter = () => {
    axios
      .post("http://localhost:5000/add", characterData)
      .then((response) => {
        console.log("Character added successfully:", response.data);
       
      })
      .catch((error) => {
        console.error("Error adding character:", error);
       
      });
  };
  return (
    <div className="container">
      <div className="add-character-container">
        <h2 className="add-character-title">Add New Character</h2>
        <div className="add-character-form">
          <label className="add-character-label" htmlFor="name">
            Name:
          </label>
          <input
            className="add-character-input"
            type="text"
            id="name"
            name="name"
            value={characterData.name}
            onChange={handleInputChange}
          />

          <label className="add-character-label" htmlFor="traits">
            Traits:
          </label>
          <input
            className="add-character-input"
            type="text"
            id="traits"
            name="traits"
            value={characterData.traits}
            onChange={handleInputChange}
          />

          <label className="add-character-label" htmlFor="affiliations">
            Affiliations:
          </label>
          <input
            className="add-character-input"
            type="text"
            id="affiliations"
            name="affiliations"
            value={characterData.affiliations}
            onChange={handleInputChange}
          />

          <label className="add-character-label" htmlFor="image">
            Image URL:
          </label>
          <input
            className="add-character-input"
            type="text"
            id="image"
            name="image"
            value={characterData.image}
            onChange={handleInputChange}
          />

          <label className="add-character-label" htmlFor="description">
            Description:
          </label>
          <textarea
            className="add-character-textarea"
            id="description"
            name="description"
            value={characterData.description}
            onChange={handleInputChange}
          />

          <button
            type="button"
            className="add-character-button"
            onClick={handleAddCharacter}
          >
            Add Character
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
