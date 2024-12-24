// AboutDescription.jsx
import React from "react";
import ScrollAnimation from "../Animations/ScrollAnimation";

const AboutDescription = () => {
  return (
    <div className="mx-auto p-6">
      <div className="text-center flex flex-col items-center justify-center min-h-[400px] rounded-3xl p-8">
        <div className="flex flex-col gap-16 w-full">
          {/* Main Introduction */}
          <ScrollAnimation direction="left" className="w-full">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl bg-opacity-60">
              <h2
                className="text-4xl font-bold mb-6"
                style={{ color: "whitesmoke" }}
              >
                The Journey So Far
              </h2>
              <p className="text-lg" style={{ color: "whitesmoke" }}>
                As a passionate developer based in St. John's, Newfoundland, I
                blend technical expertise with a deep commitment to community
                impact. Currently advancing through Keyin College's software
                development program, I'm crafting my path in the digital world
                while staying rooted in what matters most – creating positive
                change through technology and community service.
              </p>
            </div>
          </ScrollAnimation>

          {/* Skills and Passions Grid */}
          <ScrollAnimation direction="right" className="w-full">
            <div className="grid grid-cols-2 gap-6">
              {/* Tech Journey */}
              <div className="bg-gray-800 rounded-2xl p-6 shadow-xl bg-opacity-60">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  Tech Artistry
                </h3>
                <p style={{ color: "whitesmoke" }}>
                  Diving deep into full-stack development, I'm crafting modern
                  web solutions that bridge imagination and functionality. Every
                  project is an opportunity to create something meaningful and
                  impactful.
                </p>
              </div>

              {/* Community Impact */}
              <div className="bg-gray-800 rounded-2xl p-6 shadow-xl bg-opacity-60">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  Community Impact
                </h3>
                <p style={{ color: "whitesmoke" }}>
                  From mental wellness initiatives at The Wellness Collective to
                  sustainable furniture restoration at Home Again Furniture
                  Bank, I believe in tech that serves a greater purpose.
                </p>
              </div>

              {/* Growth Mindset */}
              <div className="bg-gray-800 rounded-2xl p-6 shadow-xl bg-opacity-60">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  Continuous Growth
                </h3>
                <p style={{ color: "whitesmoke" }}>
                  Each day brings new opportunities to learn and evolve. Whether
                  it's mastering a new framework or nurturing my garden, growth
                  is at the heart of everything I do.
                </p>
              </div>

              {/* Future Vision */}
              <div className="bg-gray-800 rounded-2xl p-6 shadow-xl bg-opacity-60">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">
                  Future Vision
                </h3>
                <p style={{ color: "whitesmoke" }}>
                  My goal is to create technology that makes a difference. I'm
                  excited to collaborate with like-minded individuals and
                  organizations who share this vision of tech-driven positive
                  change.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
