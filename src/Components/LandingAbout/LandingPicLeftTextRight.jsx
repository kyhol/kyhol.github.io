import React from "react";
import ScrollAnimation from "../Animations/ScrollAnimation";
import computerPic from "../../Assets/computerPic.png";

const LandingPicLeftTextRight = () => {
  return (
    <div className="w-full px-4 py-6 md:p-6">
      <div className="flex flex-col items-center justify-center min-h-[auto] w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 w-full">
          {/* Image Section */}
          <ScrollAnimation
            direction="left"
            className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0"
          >
            <div className="relative w-40 md:w-full max-w-[350px]">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
              <img
                src={computerPic}
                alt="Computer Setup"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </ScrollAnimation>

          {/* Text Section */}
          <ScrollAnimation
            direction="right"
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pl-0 md:pl-8"
          >
            {/* CHANGED: Reduced to text-lg for mobile */}
            <h2 className="text-lg sm:text-5xl font-bold mb-3 text-white">
              Welcome to My Portfolio
            </h2>

            <div className="space-y-3 text-gray-300 text-sm md:text-xl leading-relaxed max-w-xs md:max-w-none">
              <p>I specialize in creating modern, scalable web applications.</p>
              <p>
                <span className="text-orange-400 font-semibold">
                  Graduate with Honors
                </span>{" "}
                from Keyin College's Software Development program.
              </p>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 mt-1 border border-white/10">
                <p className="text-xs md:text-base text-yellow-300 font-medium">
                  🏆 Winner of the Overall Excellence Award
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default LandingPicLeftTextRight;
