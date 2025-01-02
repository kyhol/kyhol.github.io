import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const navBarName = (
  <>
    <span className="default-font">&lt;</span>
    <Link to="/" className="kyleHollett">
      Kyle Hollett
    </Link>
    <span className="default-font">&gt;</span>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <p className="navbar-name cedarville-cursive-regular">{navBarName}</p>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">Keyin</button>
          <div className="dropdown-content">
            <div className="semester-category">
              <span className="semester-title">Semester 1</span>
              <div className="semester-projects">
                <Link to="/keyin-presentation">PowerPoint</Link>
                <Link to="/mental-health">JS Assignment</Link>
                <Link to="/fizzbuzz">Python Midterm</Link>
                <Link to="/Final">Python Final</Link>
                <Link to="/robot">Robot Final</Link>
              </div>
            </div>
            <div className="semester-category">
              <span className="semester-title">Semester 2</span>
              <div className="semester-projects">
                {/* Add Semester 2 projects here */}
              </div>
            </div>
            <div className="semester-category">
              <span className="semester-title">Semester 3</span>
              <div className="semester-projects">
                {/* Add Semester 3 projects here */}
              </div>
            </div>
            <div className="semester-category">
              <span className="semester-title">Semester 4</span>
              <div className="semester-projects">
                {/* Add Semester 4 projects here */}
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Side Projects</button>
          <div className="dropdown-content">
            <div className="semester-category">
              <span className="semester-title">Beginner</span>
              <div className="semester-projects">
                <Link to="/calculator">Calculator</Link>
                <Link to="/grocery-list">Grocery List</Link>
                <Link to="/carousel">Carousel</Link>
                <Link to="/snake-game">Snake Game</Link>
                <Link to="/stopwatch">Stopwatch</Link>
                <Link to="/text-to-speech">Text to Speech</Link>
                <Link to="/todo-list">Todo List</Link>
                <Link to="/weather-app">Weather App</Link>
              </div>
            </div>
            <div className="semester-category">
              <span className="semester-title">Intermediate</span>
              <div className="semester-projects">
                {/* Add Semester 2 projects here */}
              </div>
            </div>
            <div className="semester-category">
              <span className="semester-title">Expert</span>
              <div className="semester-projects">
                {/* Add Semester 3 projects here */}
              </div>
            </div>
          </div>
        </div>
        <Link to="/about-me">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
