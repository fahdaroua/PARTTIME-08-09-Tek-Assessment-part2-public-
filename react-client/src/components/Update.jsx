import React, { useState } from "react";
import axios from "axios";
import "./styles/AddCharacter.css";

const Update = ({ character }) => {
  const [updatedCharacter, setUpdatedCharacter] = useState(character);
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedCharacter({ ...updatedCharacter, [name]: value });
  };

  const handleUpdateCharacter = () => {
    axios
      .put(`http://localhost:5000/update/${updatedCharacter._id}`, updatedCharacter)
      .then((response) => {
        console.log("Character updated successfully:", response.data);
      
      })
      .catch((error) => {
        console.error("Error updating character:", error);
        
      });
  };

  return (
    <div className="container">

    <div className="add-character-container">
      <h2 className="add-character-title">Update Character</h2>
      <form className="add-character-form">
        <label className="add-character-label" htmlFor="name">
          Name:
        </label>
        <input className="add-character-input" type="text" id="name" name="name" onChange={handleInputChange} />

        <label className="add-character-label" htmlFor="traits" name="traits">
          Traits:
        </label>
        <input className="add-character-input" type="text" id="traits" name="traits" onChange={handleInputChange}/>

        <label className="add-character-label" htmlFor="affiliations">
          Affiliations:
        </label>
        <input className="add-character-input" type="text" id="affiliations"  name="affiliations" onChange={handleInputChange}/>

        <label className="add-character-label" htmlFor="image" >
          Image URL:
        </label>
        <input className="add-character-input" type="text" id="image"  name = "image" onChange={handleInputChange}/>

        <label className="add-character-label" htmlFor="description" ha>
          Description:
        </label>
        <textarea className="add-character-textarea" id="description" name="description" />

        <button type="button" className="add-character-button" onClick={handleUpdateCharacter} >
          Update Character
        </button>
      </form>
    </div>
    </div>
  );
};

export default Update;
