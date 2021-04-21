import GradientTitle from "./GradientTitle";
import GradientCode from "./GradientCode";
import GradientPill from "./GradientPill";
import GradientTags from "../GradientTags";

const Gradient = ({
  colorStart,
  colorEnd,
  name,
  tags,
  darkMode,
  setDarkMode,
  filter,
  setFilter,
}) => {
  const changeMode = darkMode ? "bg-dark text-white border-light" : "bg-light";
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className={`card p-3 mb-4 ${changeMode}`}>
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTags
          tags={tags}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </li>
  );
};

export default Gradient;
