import React,{useState}from 'react'
import "./styles/AllCharacters.css";
import Update from './Update.jsx';
import axios from 'axios';
const Character = ({character}) => {
    const [status,setStatus] = useState(false)
   
   
   
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
            <button className="update-button" onClick={()=>{setStatus(!status)}}>Update View</button>
            <button className="delete-button" >Delete</button>
          </div>
          {status&&<Update />}
        </div>
  )
}

export default Character
