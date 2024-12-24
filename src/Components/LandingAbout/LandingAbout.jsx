import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LinkedInLogo from "../../Assets/Footer/Group 1000005950.svg";
import GitHubLogo from "../../Assets/Footer/Group 1000005949.svg";
import "./LandingAbout.css";
import PicLeftTextRight from "./LandingPicLeftTextRight";
import AboutDescription from "./AboutDescription";
import PortfolioPage from "../PortfolioPage/PortfolioPage";

const LandingAbout = () => {
  return (
    <div className="mx-auto p-6">
      {/* Hero Section with Dark Background */}
      <PortfolioPage />
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
          <MdOutlineEmail className="w-8 h-8" style={{ color: "whitesmoke" }} />
        </a>
        <FaArrowLeft className="text-orange-600 ml-2" />
      </div>
    </div>
  );
};

export default LandingAbout;
