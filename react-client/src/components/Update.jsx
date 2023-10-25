import React, { useState } from "react";
import "./styles/AddCharacter.css";
import axios from "axios";
const Update = () => {
  
 

  return (
    <div className="container">

    <div className="add-character-container">
      <h2 className="add-character-title">Add New Character</h2>
      <form className="add-character-form">
        <label className="add-character-label" htmlFor="name">
          Name:
        </label>
        <input className="add-character-input" type="text" id="name" name="name" />

        <label className="add-character-label" htmlFor="traits" name="traits">
          Traits:
        </label>
        <input className="add-character-input" type="text" id="traits" name="traits" />

        <label className="add-character-label" htmlFor="affiliations">
          Affiliations:
        </label>
        <input className="add-character-input" type="text" id="affiliations"  name="affiliations" />

        <label className="add-character-label" htmlFor="image" >
          Image URL:
        </label>
        <input className="add-character-input" type="text" id="image"  name = "image" />

        <label className="add-character-label" htmlFor="description" >
          Description:
        </label>
        <textarea className="add-character-textarea" id="description" name="description"  />

        <button type="button" className="add-character-button" >
          Update Character
        </button>
      </form>
    </div>
    </div>
  );
};

export default Update;
