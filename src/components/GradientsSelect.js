import React from "react";
import { uniqueTags } from "../gradients";

const GradientsSelect = ({ filter, setFilter, darkMode, setDarkMode }) => {
  const changeMode = darkMode ? "bg-dark text-white" : "bg-light";
  const handleSelectChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <form className={`input-group mb-3 ${changeMode}`}>
      <label className={`input-group-text ${changeMode}`} htmlFor="select">
        Filtrer par Tag
      </label>
      <select
        className={`form-select ${changeMode}`}
        id="select"
        onChange={handleSelectChange}
        selected={filter}
        value={filter}
      >
        <option value="all">Tous</option>
        {uniqueTags.map((el) => {
          return (
            <option value={el} key={el}>
              {el}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default GradientsSelect;
