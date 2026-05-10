
/*-------------------- Imports --------------------*/

/*import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import GenshinPage from './pages/GenshinPage';
import HonkaiPage from './pages/HonkaiPage';
import WutheringPage from './pages/WutheringPage';
import './App.css';*/

/*-------------------- Main App --------------------*/

/*const App = () => {
  return (
    <Router>
      <header className="header">
        <h1>Game Character Card</h1>
        <p>Characters from OpenWorld RPG!</p>
      </header>
      
      <nav className="navbar">
        <Link to="/genshin" className="nav-link">Genshin</Link>
        <Link to="/honkai" className="nav-link">Honkai</Link>
        <Link to="/wuthering" className="nav-link">Wuthering</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Navigate to="/genshin" />} />
        <Route path="/genshin" element={<GenshinPage />} />
        <Route path="/honkai" element={<HonkaiPage />} />
        <Route path="/wuthering" element={<WutheringPage />} />
      </Routes>

      <footer className="footer">
        <p>© 2025 Game Character Card | All rights reserved</p>
      </footer>
    </Router>
  );
};

export default App; */

/*----------Light-Dark Mode test--------------*/
/*-------------------- Imports --------------------*/

import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GenshinPage from './pages/GenshinPage';
import HonkaiPage from './pages/HonkaiPage';
import WutheringPage from './pages/WutheringPage';
import UtilityPage from './pages/UtilityPage';
import TalentPage from './pages/TalentPage';
import './App.css';

/*-------------------- Main App --------------------*/

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Extracting saved preference in mode from localstorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
    }
  }, []);

  // Toggle Dark/Light Mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    localStorage.setItem('darkMode', !isDarkMode);
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <header className="header">
          <section>
            <div id="background">
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
              <div><span></span></div>
            </div>
          </section>
          <h1>Astral Archives</h1>
          <p>The Ultimate Open-World RPG Character Database</p>
          <button onClick={toggleDarkMode} className="theme-toggle-btn">
            {isDarkMode ? "🌙" : "🌞"}
          </button>
        </header>

        <nav className="navbar">
          <div className="mobile-menu-header">
            <button className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
          <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <NavLink to="/GenshinImpact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Genshin Impact</NavLink>
            <NavLink to="/HonkaiStarRail" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Honkai Star Rail</NavLink>
            <NavLink to="/WutheringWaves" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Wuthering Waves</NavLink>
            <NavLink to="/Utility" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Utility</NavLink>
            <NavLink to="/Talent" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Talent</NavLink>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/GenshinImpact" />} />
          <Route path="/GenshinImpact" element={<GenshinPage />} />
          <Route path="/HonkaiStarRail" element={<HonkaiPage />} />
          <Route path="/WutheringWaves" element={<WutheringPage />} />
          <Route path="/Utility" element={<UtilityPage />} />
          <Route path="/Talent" element={<TalentPage />} />
        </Routes>

        <footer className="footer">
          <p>© 2026 Astral Archives | Developed by Aryan | All rights reserved</p>
          <p>Disclaimer: Astral Archives is a fan-made, non-commercial project. All character images, names, and game assets belong to their respective owners (miHoYo, HoYoverse, Kuro Games).</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
