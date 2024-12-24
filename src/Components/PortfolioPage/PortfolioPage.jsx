import React, { useState, useEffect } from "react";
import ProfilePic from "../../Assets/Profile/Subtract.png";
import EJSFinal from "../../Assets/Profile/EJSFinal.svg";
import BlockBuster from "../../Assets/Profile/BlockBuster.jpg";
import ChickenGun from "../../Assets/Profile/ChickenGun.jpg";
import OminousPrayer from "../../Assets/Profile/OminousPrayer.jpg";
import StoryTime from "../../Assets/Profile/StoryTime.jpg";
import ChristmasFun from "../../Assets/Profile/ChristmasFun.jpg";

const PortfolioPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const galleryItems = [
    { id: 1, title: "AI Generated Art 1", src: EJSFinal },
    { id: 2, title: "UI Design 1", src: BlockBuster },
    { id: 3, title: "AI Generated Art 2", src: ChristmasFun },
    { id: 4, title: "UI Design 2", src: ChickenGun },
    { id: 5, title: "AI Generated Art 3", src: OminousPrayer },
    { id: 6, title: "UI Design 3", src: StoryTime },
  ];

  // Added galleryItems.length as a dependency
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
        setTimeout(() => {
          setIsAnimating(false);
        }, 500);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [galleryItems.length]); // Added dependency

  return (
    <div
      className="text-center min-h-[400px] rounded-3xl p-8"
      style={{ backgroundColor: "#333", height: "75vh" }}
    >
      <div className="w-full h-full flex">
        {/* Left Side - Profile */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-2xl overflow-hidden bg-gray-700 p-4">
              <img
                src={ProfilePic}
                alt="Kyle's Profile"
                className="w-32 h-32 rounded-lg object-cover"
              />
            </div>

            <h1 className="text-5xl font-bold text-gray-100">Hi, I'm Kyle</h1>

            <p className="text-lg text-blue-400">
              Junior Developer <span className="mx-2">⟹</span> Student at Keyin
              College
            </p>
          </div>
        </div>

        {/* Right Side - Gallery */}
        <div className="w-1/2 h-full flex items-center justify-center p-4">
          <div className="relative perspective">
            <div
              className={`book-page flex items-center justify-center ${
                isAnimating ? "turning" : ""
              }`}
            >
              <img
                src={galleryItems[currentIndex].src}
                alt={galleryItems[currentIndex].title}
                className="w-full h-auto max-w-2xl rounded-lg shadow-xl object-contain"
                style={{ maxHeight: "calc(75vh - 4rem)" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <p className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 text-xl font-semibold">
                  {galleryItems[currentIndex].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .perspective {
          perspective: 1500px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .book-page {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 1s ease;
          width: 100%;
        }

        .book-page.turning {
          transform: rotateY(-180deg);
        }

        @keyframes pageShadow {
          0% {
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
          }
          100% {
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
          }
        }

        .book-page img {
          backface-visibility: hidden;
          animation: pageShadow 1s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;
