import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Head/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";
import Footer from "./component/Footer";
import "./App.css";

const App = () => {
  const getInitialMode = () => {
    const savedMode = localStorage.getItem("light-mode");
    return savedMode !== null ? JSON.parse(savedMode) : true; // Default to dark mode
  };

  const [darkMode, setDarkMode] = useState(getInitialMode);

  useEffect(() => {
    if (!darkMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Router>
      <div className="App">
        <Header toggleMode={() => setDarkMode((prev) => !prev)} darkMode={darkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;