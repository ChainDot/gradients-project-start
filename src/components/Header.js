import React, { useState } from "react";
import { gradients } from "../gradients";

const Header = ({ darkMode, setDarkMode }) => {
  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  const setLight = darkMode ? "bi bi-lightbulb-fill" : "bi bi-lightbulb";
  const textChange = darkMode ? "bg-light" : "bg-dark text-white";
  const buttonChange = darkMode ? "btn-outline-dark" : "btn-outline-light";
  const [colorIndex, setColorIndex] = useState(
    Math.floor(Math.random() * gradients.length)
  );

  const randomPick = () => {
    setColorIndex(Math.floor(Math.random() * gradients.length));
  };
  const fwdPick = () => {
    setColorIndex((colorIndex + 1) % gradients.length);
  };

  const bwdPick = () => {
    setColorIndex((colorIndex - 1 + gradients.length) % gradients.length);
  };

  const backgroundImage = `linear-gradient(to right, ${gradients[colorIndex].start}, ${gradients[colorIndex].end})`;

  return (
    <div
      className={`text-center ${textChange} py-5 mb-5`}
      style={{ backgroundImage }}
    >
      <h1 className="text-center my-4">Alyra Gradients</h1>
      <p>Ultime collection de plus beaux dégradés</p>
      <button
        aria-label="Clicker pour afficher le dégradé précédant"
        type="button"
        className={`btn ${buttonChange} m-1`}
        onClick={changeMode}
      >
        <i className={setLight}></i>
      </button>
      <button
        aria-label="Clicker pour afficher le dégradé précédant"
        type="button"
        className={`btn ${buttonChange} m-1`}
        onClick={bwdPick}
      >
        <i className="bi bi-arrow-left"></i>
      </button>
      <button
        aria-label="Clicker pour afficher le dégradé précédant"
        type="button"
        className={`btn ${buttonChange} m-1`}
        onClick={randomPick}
      >
        <i className="bi bi-arrow-clockwise"></i>
      </button>
      <button
        aria-label="Clicker pour afficher le dégradé précédant"
        type="button"
        className={`btn ${buttonChange} m-1`}
        onClick={fwdPick}
      >
        <i className="bi bi-arrow-right"></i>
      </button>
    </div>
  );
};

export default Header;
