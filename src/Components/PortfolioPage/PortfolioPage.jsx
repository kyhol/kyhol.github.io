import React from "react";
import GoldenSpiralBackground from "../Animations/FloatingGeometryBackground";
import ProfilePic from "../../Assets/Profile/HeadShot2.svg";

const PortfolioPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 flex flex-col justify-center overflow-hidden">
      {/* 1. Background Layer (Full Screen, Z=0) */}
      <div className="absolute inset-0 z-0">
        <GoldenSpiralBackground />
      </div>

      {/* 2. Content Layer (Z=10) */}
      {/* Added pt-24 to push text below the transparent navbar */}
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

            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 tracking-tight">
              Hi, I'm Kyle
            </h1>

            <p className="text-xl text-gray-300 font-light max-w-lg leading-relaxed">
              Software Developer{" "}
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/about-me"
                className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-lg shadow-indigo-500/20 transform hover:-translate-y-1"
              >
                About Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium backdrop-blur-sm transition-all transform hover:-translate-y-1"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            {/* Right side content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
