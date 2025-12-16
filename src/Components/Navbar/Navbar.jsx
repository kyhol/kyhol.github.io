import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Left Side: Logo (Angled via CSS) */}
        <div className="navbar-left">
          <div className="navbar-name cedarville-cursive-regular">
            <span className="default-font">&lt;</span>
            <Link to="/" className="kyleHollett">
              Kyle Hollett
            </Link>
            <span className="default-font">&gt;</span>
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>

        {/* Right Side: Links (Centered via CSS) */}
        <div className={`navbar-right ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <div className="dropdown">
            <button className="dropbtn">Keyin</button>
            <div className="dropdown-content">
              <div className="semester-category">
                <span className="semester-title">Semester 1</span>
                <div className="semester-projects">
                  <Link to="/keyin-presentation" onClick={closeMenu}>
                    PowerPoint
                  </Link>
                  <Link to="/mental-health" onClick={closeMenu}>
                    JS Assignment
                  </Link>
                  <Link to="/fizzbuzz" onClick={closeMenu}>
                    Python Midterm
                  </Link>
                  <Link to="/Final" onClick={closeMenu}>
                    Python Final
                  </Link>
                  <Link to="/robot" onClick={closeMenu}>
                    Robot Final
                  </Link>
                </div>
              </div>
              <div className="semester-category">
                <span className="semester-title">Semester 2</span>
                <div className="semester-projects">
                  <Link to="/dog-gallery" onClick={closeMenu}>
                    Dog Gallery
                  </Link>
                  <Link to="/midterm" onClick={closeMenu}>
                    Midterm
                  </Link>
                  <Link to="/Sem2Final" onClick={closeMenu}>
                    Final
                  </Link>
                </div>
              </div>
              <div className="semester-category">
                <span className="semester-title">Semester 3</span>
                <div className="semester-projects">
                  <Link to="/Sem3SQLMidTerm" onClick={closeMenu}>
                    SQL Midterm
                  </Link>
                  <Link to="/Sem3EJSMidterms" onClick={closeMenu}>
                    EJS Midterm
                  </Link>
                  <Link to="/Sem3EJSFinal" onClick={closeMenu}>
                    EJS Final
                  </Link>
                  <Link to="/Sem3JavaMidTerm" onClick={closeMenu}>
                    Java Midterm
                  </Link>
                  <Link to="/Sem3JavaFinal" onClick={closeMenu}>
                    Java Final
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Side Projects</button>
            <div className="dropdown-content">
              <div className="semester-category">
                <span className="semester-title">2024</span>
                <div className="semester-projects">
                  <Link to="/calculator" onClick={closeMenu}>
                    Calculator
                  </Link>
                  <Link to="/grocery-list" onClick={closeMenu}>
                    Grocery List
                  </Link>
                  <Link to="/carousel" onClick={closeMenu}>
                    Carousel
                  </Link>
                  <Link to="/snake-game" onClick={closeMenu}>
                    Snake Game
                  </Link>
                  <Link to="/stopwatch" onClick={closeMenu}>
                    Stopwatch
                  </Link>
                  <Link to="/text-to-speech" onClick={closeMenu}>
                    Text to Speech
                  </Link>
                  <Link to="/todo-list" onClick={closeMenu}>
                    Todo List
                  </Link>
                  <Link to="/weather-app" onClick={closeMenu}>
                    Weather App
                  </Link>
                </div>
              </div>
              <div className="semester-category">
                <span className="semester-title">2025</span>
                <div className="semester-projects">
                  <Link to="/paintapp" onClick={closeMenu}>
                    Simple Paint App
                  </Link>
                  <Link to="/TypingPractice" onClick={closeMenu}>
                    Typing Practice
                  </Link>
                  <Link to="/wildfire-proximity" onClick={closeMenu}>
                    Wildfire Proximity
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/about-me" onClick={closeMenu}>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
