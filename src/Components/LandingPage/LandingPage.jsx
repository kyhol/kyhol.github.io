import React from "react";
import { Link } from "react-router-dom"; // Imported for the buttons
import "./LandingPage.css";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "../ProjectContainer/ProjectContainer.css";

// --- Asset Imports ---
import CalculatorImage from "./Assets/image1.png";
import TextToSpeechImage from "./Assets/image2.png";
import SnakeGameImage from "./Assets/image3.png";
import WeatherAppImage from "./Assets/image5.png";
import ProfilePic from "../../Assets/Profile/HeadShot2.svg"; // Added Profile Pic Import

// --- Component Imports ---
import LanguageExperience from "../LanguageExperience/LanguageExperience";
import SocialLinks from "../SocialLinks/SocialLinks";
import GoldenSpiralBackground from "../Animations/FloatingGeometryBackground"; // Added Background Import

const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
      {/* --- HERO SECTION START --- */}
      {/* This section takes the full screen height (min-h-screen) and has the spiral background */}
      <div className="relative w-full min-h-screen bg-gray-900 flex flex-col justify-center overflow-hidden">
        {/* 1. Golden Spiral Background Layer */}
        <div className="absolute inset-0 z-0">
          <GoldenSpiralBackground />
        </div>

        {/* 2. Content Layer */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center pt-24">
          <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-12 mt-10 md:mt-0">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left animate-fade-in-up">
              {/* Profile Picture */}
              <div className="relative group mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={ProfilePic}
                    alt="Kyle's Profile"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Intro Text */}
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 tracking-tight">
                Hi, I'm Kyle
              </h1>

              <p className="text-xl text-gray-300 font-light max-w-lg leading-relaxed">
                Software Developer <br />
                <span className="font-bold text-yellow-500">
                  **UNDER CONSTRUCTION**
                </span>
                <br /> Started December 14 2025
              </p>

              {/* Buttons */}
              <div className="mt-8 flex gap-4">
                <Link
                  to="/about-me"
                  className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-500/20 transform hover:-translate-y-1"
                >
                  About Me
                </Link>
                <a
                  href="#projects" // We can add an id="projects" to the section below if you want smooth scrolling
                  className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium backdrop-blur-sm transition-all transform hover:-translate-y-1"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* Right side spacer (can be used for other content later) */}
            <div className="w-full md:w-1/2 flex justify-center items-center"></div>
          </div>
        </div>
      </div>
      {/* --- HERO SECTION END --- */}
      {/* --- EXISTING LANDING CONTENT START --- */}
      {/* I added id="projects" here so the "View Projects" button above scrolls to this section */}
      <div className="landing-container" id="projects">
        <h2 style={{ color: "whitesmoke" }}>Coding Skills</h2>
        <hr />
        <LanguageExperience />

        <hr />
        <SocialLinks />

        {/* Updated Header with Class */}
        <h2 className="featured-title">Featured Projects</h2>

        {/* <ProjectContainer
          title="Calculator App"
          description="A simple calculator built with React."
          image={CalculatorImage}
          link="/calculator"
          codeLink="https://github.com/kyhol/Portfolio/blob/main/front-end/src/Components/Calculator/Calculator.jsx"
        />
        <ProjectContainer
          title="Weather App"
          description="A weather forecasting app using OpenWeather API."
          image={WeatherAppImage}
          link="/weather-app"
          codeLink="https://github.com/kyhol/Portfolio/blob/main/front-end/src/Components/WeatherApp/WeatherApp.jsx"
        />
        <ProjectContainer
          title="Snake Game"
          description="A classic Snake game."
          image={SnakeGameImage}
          link="/snake-game"
          codeLink="https://github.com/kyhol/Portfolio/blob/main/front-end/src/Components/SnakeGame/SnakeGame.jsx"
        />
        <ProjectContainer
          title="Text-to-Speech Converter"
          description="Convert text to speech using the Web Speech API."
          image={TextToSpeechImage}
          link="/text-to-speech"
          codeLink="https://github.com/kyhol/Portfolio/tree/main/front-end/src/Components/TextToSpeech"
        /> */}
      </div>
    </div>
  );
};

export default LandingPage;
