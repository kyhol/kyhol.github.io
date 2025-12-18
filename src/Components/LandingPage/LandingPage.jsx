import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // You can keep this for basic resets, but we are using Tailwind mostly now
import ProjectContainer from "../ProjectContainer/ProjectContainer";

// --- Asset Imports ---
// TODO: Replace these with your actual screenshots for SkillMatchAI and Wildfire Proximity
import CalculatorImage from "./Assets/image1.png";
import TextToSpeechImage from "./Assets/image2.png";
import SnakeGameImage from "./Assets/image3.png";
import WeatherAppImage from "./Assets/image5.png";
import ProfilePic from "../../Assets/Profile/HeadShot2.svg";

// --- Component Imports ---
import LanguageExperience from "../LanguageExperience/LanguageExperience";
import SocialLinks from "../SocialLinks/SocialLinks"; // Kept if you need it
import GoldenSpiralBackground from "../Animations/FloatingGeometryBackground";

const LandingPage = () => {
  return (
    <div className="landing-page-wrapper bg-gray-900 text-white selection:bg-indigo-500 selection:text-white">
      {/* --- HERO SECTION START --- */}
      <div className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
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
                    className="w-full h-full object-cover rounded-full ring-4 ring-blue-500/30 shadow-xl shadow-blue-500/20 transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Intro Text */}
              <h1 className="text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 tracking-tight">
                Hi, I'm Kyle
              </h1>

              <p className="text-lg text-gray-300 font-light max-w-lg leading-relaxed">
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
                  href="#projects"
                  className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium backdrop-blur-sm transition-all transform hover:-translate-y-1"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* Right side spacer */}
            <div className="w-full md:w-1/2 flex justify-center items-center"></div>
          </div>
        </div>
      </div>
      {/* --- HERO SECTION END --- */}

      {/* --- CONTENT SECTION START --- */}
      <div className="container mx-auto px-4 py-20 relative z-10" id="projects">
        {/* Coding Skills */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Coding Skills
          </h2>
          <hr className="border-gray-700 mb-8 w-24 mx-auto" />
          <LanguageExperience />
        </div>

        {/* --- FEATURED PROJECTS --- */}
        <div className="flex flex-col gap-12 md:gap-24">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>

          {/* PROJECT 1: SkillMatchAI (Text Left / Image Right) */}
          <ProjectContainer
            title="SkillMatchAI"
            description="An intelligent recruitment tool leveraging NLP to analyze resumes against job descriptions, ensuring the perfect candidate fit with data-driven precision."
            image={CalculatorImage} // TODO: Replace with SkillMatchAI image
            link="/skill-match-ai"
            codeLink="https://github.com/kyhol/SkillMatchAI"
            isReversed={false}
          />

          {/* PROJECT 2: Wildfire Proximity (Image Left / Text Right) */}
          <ProjectContainer
            title="Wildfire Proximity"
            description="A real-time geospatial tracking application that monitors wildfire spread, calculating immediate threat levels for residential zones using live API data."
            image={WeatherAppImage} // TODO: Replace with Wildfire image
            link="/wildfire-proximity"
            codeLink="https://github.com/kyhol/WildfireProximity"
            isReversed={true}
          />
        </div>
      </div>
      {/* --- CONTENT SECTION END --- */}
    </div>
  );
};

export default LandingPage;
