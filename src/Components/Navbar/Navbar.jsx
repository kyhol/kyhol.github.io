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
        {/* Left Side: Logo */}
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

        {/* Right Side: Links */}
        <div className={`navbar-right ${isOpen ? "active" : ""}`}>
          {/* Internal Pages (Under Construction) */}
          <Link to="/keyin" onClick={closeMenu}>
            Keyin
          </Link>

          <Link to="/resume" onClick={closeMenu}>
            Resume
          </Link>

          <Link to="/side-projects" onClick={closeMenu}>
            Side Projects
          </Link>

          <Link to="/tools" onClick={closeMenu}>
            Tools
          </Link>

          {/* EXTERNAL LINKS */}
          <a
            href="https://www.linkedin.com/in/kyle-hollett-8558842a8/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/kyhol"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
