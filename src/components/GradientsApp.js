import React, { useState } from "react";
import GradientsList from "./GradientsList";
import GradientsSelect from "./GradientsSelect";

const GradientsApp = ({ darkMode, setDarkMode }) => {
  const [filter, setFilter] = useState("all");
  return (
    <div>
      <GradientsSelect
        filter={filter}
        setFilter={setFilter}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <GradientsList
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
};

export default GradientsApp;
