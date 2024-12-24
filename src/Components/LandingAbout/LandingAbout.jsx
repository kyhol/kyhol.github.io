import React from "react";
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
    </div>
  );
};

export default LandingAbout;
