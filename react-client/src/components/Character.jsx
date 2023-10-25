import React,{useState}from 'react'
import "./styles/AllCharacters.css";
import Update from './Update.jsx';
import axios from 'axios';
const Character = ({ character }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleDeleteCharacter = () => {
    axios
      .delete(`http://localhost:5000/delete/${character._id}`)
      .then((resp) => {
        console.log("Character deleted successfully:", resp.data);
        
      })
      .catch((err) => {
        console.error("Error deleting character:", err);
        
      });
  };

  return (
    <div  className="character-card">
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
            <button className="update-button" onClick={()=> setShowUpdateForm(!showUpdateForm)}>Update</button>
            <button className="delete-button"onClick={handleDeleteCharacter} >Delete</button>
          </div>
          {showUpdateForm && <Update character={character} />}
        </div>
  )
}

export default Character
