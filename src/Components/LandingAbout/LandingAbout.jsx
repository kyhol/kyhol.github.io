import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LinkedInLogo from "../../Assets/Footer/Group 1000005950.svg";
import GitHubLogo from "../../Assets/Footer/Group 1000005949.svg";
import "./LandingAbout.css";
import ProfilePic from "../../Assets/Profile/Subtract.png";
import PicLeftTextRight from "./LandingPicLeftTextRight";
import AboutDescription from "./AboutDescription";

const LandingAbout = () => {
  return (
    <div className="mx-auto p-6">
      {/* Hero Section with Dark Background */}
      <div
        className="text-center flex flex-col items-center justify-center min-h-[400px]  rounded-3xl p-8"
        style={{ backgroundColor: "#333", height: "75vh" }}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-6">
          {/* Profile Image */}
          <div className="rounded-2xl overflow-hidden bg-gray-700 p-4">
            <img
              src={ProfilePic}
              alt="Kyle's Profile"
              className="w-32 h-32 rounded-lg object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl font-bold" style={{ color: "whitesmoke" }}>
            Hi, I'm Kyle
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-blue-400">
            Junior Developer <span className="mx-2">⟹</span> Student at Keyin
            College
          </p>
        </div>
      </div>

      <PicLeftTextRight />

      {/* About Me Card */}
      <AboutDescription />
      {/* Social Links Footer */}
      <div className="aboutLogoContainer flex justify-center items-center space-x-4 mt-6">
        <FaArrowRight className="text-orange-600 mr-2" />
        <a
          href="http://github.com/kyhol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubLogo} alt="GitHub Logo" className="w-8 h-8" />
        </a>
        <a
          href="http://www.linkedin.com/in/kyle-hollett-8558842a8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInLogo} alt="LinkedIn Logo" className="w-8 h-8" />
        </a>
        <a href="mailto:kyle.hollett@keyin.com">
          <MdOutlineEmail className="w-8 h-8 text-gray-600" />
        </a>
        <FaArrowLeft className="text-orange-600 ml-2" />
      </div>
    </div>
  );
};

export default LandingAbout;
