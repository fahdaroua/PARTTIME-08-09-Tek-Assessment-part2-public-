import React from "react";
import "./styles/AllCharacters.css";

function AllCharacters({data}) {

  return (
    <div className="all-characters-container">
      {data&& data.map((character, index) => (
        <div key={index} className="character-card">
          <img
            src={character.image}
            alt={character.name}
            className="character-image"
          />
          <h2 className="character-name">{character.name}</h2>
          <div className="character-traits">
            {character.traits.split(",").map((trait) => (
              <span key={trait} className="trait">
                {trait}
              </span>
            ))}
          </div>
          <div className="character-affiliations">
            {character.affiliations.split(",").map((affiliation) => (
              <span key={affiliation} className="affiliation">
                {affiliation}
              </span>
            ))}
          </div>
          <div className="update-delete-buttons">
            <button className="update-button" >Update</button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllCharacters;

