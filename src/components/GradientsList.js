import Gradient from "./Gradient";
import { gradients } from "../gradients";
const GradientsList = ({ darkMode, setDarkMode, filter, setFilter }) => {
  const filterGradients = gradients.filter((el) =>
    filter === "all" ? gradients : el.tags.includes(filter)
  );
  return (
    <ul className="row list-unstyled">
      {filterGradients.map((el) => (
        <Gradient
          key={el.name}
          colorStart={el.start}
          colorEnd={el.end}
          tags={el.tags}
          name={el.name}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          filter={filter}
          setFilter={setFilter}
        />
      ))}
    </ul>
  );
};

export default GradientsList;
