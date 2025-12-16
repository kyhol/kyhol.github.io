/* AboutDescription.js */
import React from "react";
import ScrollAnimation from "../Animations/ScrollAnimation"; // Ensure this path is correct

const AboutDescription = () => {
  return (
    /* ADDED: overflow-hidden and max-w-[100vw] to force containment */
    <div className="w-full max-w-[100vw] px-4 sm:px-6 py-6 md:p-6 overflow-hidden">
      {/* ADDED: min-w-0 prevents flex children from forcing width */}
      <div className="flex flex-col items-center justify-center w-full min-w-0 max-w-6xl mx-auto gap-4 md:gap-12">
        {/* Main Introduction */}
        <ScrollAnimation direction="up" className="w-full">
          <div className="w-full bg-gray-800/80 backdrop-blur-md rounded-xl md:rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl border border-gray-700/50">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-white text-center md:text-left">
              The Journey So Far
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center md:text-left break-words">
              As a passionate developer based in St. John's, Newfoundland, I
              blend technical expertise with a deep commitment to community
              impact. Having recently{" "}
              <span className="text-blue-400 font-bold">
                Graduated with Honors
              </span>{" "}
              from Keyin College, where I received the{" "}
              <span className="text-yellow-400 font-bold">
                Overall Excellence Award
              </span>
              , I am eager to bring my dedication and skills to the professional
              world. I am crafting my path in the digital landscape while
              staying rooted in what matters most – creating positive change
              through technology.
            </p>
          </div>
        </ScrollAnimation>

        {/* Skills and Passions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 w-full">
          {/* Card 1 */}
          <ScrollAnimation direction="up" className="min-h-full w-full">
            <div className="w-full bg-gray-800/60 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 min-h-full shadow-lg hover:bg-gray-800 transition duration-300 border border-gray-700/30 flex flex-col">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-blue-400 text-center md:text-left">
                Tech Artistry
              </h3>
              <p className="text-sm sm:text-base md:text-base text-gray-300 leading-relaxed flex-grow text-center md:text-left break-words">
                Diving deep into full-stack development, I craft modern web
                solutions that bridge imagination and functionality. Every
                project is an opportunity to create something meaningful and
                impactful.
              </p>
            </div>
          </ScrollAnimation>

          {/* Card 2 */}
          <ScrollAnimation direction="up" className="min-h-full w-full">
            <div className="w-full bg-gray-800/60 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 min-h-full shadow-lg hover:bg-gray-800 transition duration-300 border border-gray-700/30 flex flex-col">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 text-blue-400 text-center md:text-left">
                Community Impact
              </h3>
              <p className="text-sm sm:text-base md:text-base text-gray-300 leading-relaxed flex-grow text-center md:text-left break-words">
                From mental wellness at The Wellness Collective to sustainable
                furniture restoration at Home Again Furniture Bank, I'm driven
                to create technologies that address human struggles and foster
                community growth.
              </p>
            </div>
          </ScrollAnimation>

          {/* Card 3 */}
          <ScrollAnimation direction="up" className="min-h-full w-full">
            <div className="w-full bg-gray-800/60 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 min-h-full shadow-lg hover:bg-gray-800 transition duration-300 border border-gray-700/30 flex flex-col">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 text-blue-400 text-center md:text-left">
                Continuous Growth
              </h3>
              <p className="text-sm sm:text-base md:text-base text-gray-300 leading-relaxed flex-grow text-center md:text-left break-words">
                Each day presents opportunities for growth and learning. Whether
                mastering a new framework or pursuing personal development,
                evolution is my constant companion.
              </p>
            </div>
          </ScrollAnimation>

          {/* Card 4 */}
          <ScrollAnimation direction="up" className="min-h-full w-full">
            <div className="w-full bg-gray-800/60 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 min-h-full shadow-lg hover:bg-gray-800 transition duration-300 border border-gray-700/30 flex flex-col">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-4 text-blue-400 text-center md:text-left">
                Future Vision
              </h3>
              <p className="text-sm sm:text-base md:text-base text-gray-300 leading-relaxed flex-grow text-center md:text-left break-words">
                My goal is to create technology that makes a difference. I'm
                excited to collaborate with like-minded individuals and
                organizations who share this vision of tech-driven positive
                change.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default AboutDescription;
