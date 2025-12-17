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

          {/* Replaced Dropdown with Direct Link */}
          {/* You will need to create a Route for "/keyin" in your App.js */}
          <Link to="/keyin" onClick={closeMenu}>
            Keyin
          </Link>

          {/* Replaced Dropdown with Direct Link */}
          {/* You will need to create a Route for "/side-projects" in your App.js */}
          <Link to="/side-projects" onClick={closeMenu}>
            Side Projects
          </Link>

          <Link to="/about-me" onClick={closeMenu}>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
