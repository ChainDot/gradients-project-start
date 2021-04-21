import React from "react";

const GradientTags = ({ tags, darkMode, setDarkMode, filter, setFilter }) => {
  const handleButtonClick = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="mt-3">
      {tags.sort().map((el) => {
        const changeMode = darkMode
          ? filter === el
            ? "btn btn-sm me-2 mb-2 bg-dark text-white"
            : "btn btn-sm me-2 mb-2 bg-light"
          : filter === el
          ? "btn btn-sm me-2 mb-2 bg-light"
          : "btn btn-sm me-2 mb-2 bg-dark text-white";
        return (
          <button
            className={changeMode}
            key={el}
            onClick={handleButtonClick}
            value={el}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

export default GradientTags;
