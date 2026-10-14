//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Reviews from "./Reviews";
import Services from "./Services";
import Resources from "./Resources";
import Contact from "./Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gray-900 text-white"
          : "min-h-screen bg-gray-100 text-gray-900"
      }
    >
      {" "}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="m-4 rounded-lg bg-blue-600 px-4 py-2 text-white "
      >
        {darkMode ? "light mode" : "dark mode"}
      </button>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="pt-20">
        <Home />
        <Reviews />
        <Services />
        <Resources />
        <Contact />
      </main>
    </div>
  );
}
export default App;
