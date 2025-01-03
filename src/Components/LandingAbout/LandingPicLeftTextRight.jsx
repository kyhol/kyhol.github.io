import React from "react";
import ScrollAnimation from "../Animations/ScrollAnimation";
import computerPic from "../../Assets/computerPic.png";

const LandingPicLeftTextRight = () => {
  return (
    <div className="mx-auto p-6">
      <div
        className="text-center flex flex-col items-center justify-center min-h-[400px] rounded-3xl p-8"
        style={{ height: "75vh" }}
      >
        <div className="flex items-center justify-center gap-16 w-full">
          {/* Left side - Computer Picture */}
          <ScrollAnimation
            direction="left"
            className="w-2/5 flex justify-center"
          >
            <img
              src={computerPic}
              alt="Computer Pic"
              className="computer-pic w-full h-auto"
            />
          </ScrollAnimation>

          {/* Right side - Text Content */}
          <ScrollAnimation
            direction="right"
            className="w-1/2 flex flex-col items-start pl-8"
          >
            <h2
              className="text-2xl font-bold mb-4 ml-24"
              style={{ color: "whitesmoke" }}
            >
              Welcome to My Portfolio
            </h2>
            <p className="mb-4 ml-16" style={{ color: "whitesmoke" }}>
              I specialize in creating modern web applications.
            </p>
            <p className="ml-16" style={{ color: "whitesmoke" }}>
              Through my studies at Keyin College...
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default LandingPicLeftTextRight;
