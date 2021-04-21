import { useState } from "react";
import Footer from "./components/Footer";
import GradientsApp from "./components/GradientsApp";
import Header from "./components/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const modelClasses = darkMode ? "bg-dark text white" : "bg-light";

  return (
    <div className={`App min-vh-100 d-flex flex-column ${modelClasses}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="container">
        <GradientsApp darkMode={darkMode} setDarkMode={setDarkMode} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
