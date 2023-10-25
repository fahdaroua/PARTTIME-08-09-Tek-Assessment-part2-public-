import React,{useState} from "react";
import axios from "axios";
import "./styles/AddCharacter.css";
const Add = (props) => {
  
  return (
    <div className="container">
    <div className="add-character-container">
      <h2 className="add-character-title">Add New Character</h2>
      <div className="add-character-form">
        <label className="add-character-label" htmlFor="name">
          Name:
        </label>
        <input className="add-character-input" type="text" id="name"  name="name"  />

        <label className="add-character-label" htmlFor="traits" name="traits">
          Traits:
        </label>
        <input className="add-character-input" type="text" id="traits"  name="traits"  />

        <label className="add-character-label" htmlFor="affiliations">
          Affiliations:
        </label>
        <input className="add-character-input" type="text" id="affiliations"  name="affiliations"  />

        <label className="add-character-label" htmlFor="image" >
          Image URL:
        </label>
        <input className="add-character-input" type="text" id="image"   name = "image" />

        <label className="add-character-label" htmlFor="description" >
          Description:
        </label>
        <textarea className="add-character-textarea" id="description" name="description" />

        <button type="button" className="add-character-button" >
          Add Character
        </button>
      </div>
    </div>
    </div>
  );
};

export default Add;
