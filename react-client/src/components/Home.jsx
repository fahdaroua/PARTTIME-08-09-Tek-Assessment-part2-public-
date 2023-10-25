import React from "react";
import "./styles/Home.css";

function Home(props) {
  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="welcome-message">
        <h1 className="title">Welcome to the One Piece Characters Guide</h1>
        <p className="subtitle">Explore and learn about your favorite One Piece characters</p>
        <button className="anime-button" onClick={() => props.view("all-characters")}>
          See Characters
        </button>
      </div>
    </div>
  );
}

export default Home;
