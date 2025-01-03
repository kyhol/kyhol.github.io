import React from "react";
import GoldenSpiralBackground from "../Animations/FloatingGeometryBackground";
import ProfilePic from "../../Assets/Profile/Subtract.png";
// import EJSFinal from "../../Assets/Profile/EJSFinal.svg";
// import BlockBuster from "../../Assets/Profile/BlockBuster.jpg";
// import ChickenGun from "../../Assets/Profile/ChickenGun.jpg";
// import OminousPrayer from "../../Assets/Profile/OminousPrayer.jpg";
// import StoryTime from "../../Assets/Profile/StoryTime.jpg";

const PortfolioPage = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const galleryItems = [
  //   { id: 1, title: "UI Design", src: EJSFinal },
  //   { id: 2, title: "AI Art", src: BlockBuster },
  //   { id: 4, title: "AI Art", src: ChickenGun },
  //   { id: 5, title: "AI Art", src: OminousPrayer },
  //   { id: 6, title: "AI Art", src: StoryTime },
  // ];

  return (
    <div
      className="text-center min-h-[400px] rounded-3xl p-8 relative overflow-hidden"
      style={{ height: "75vh" }}
    >
      <div className="absolute inset-0 pointer-events-auto">
        <GoldenSpiralBackground />
      </div>

      <div className="relative w-full h-full flex pointer-events-none">
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-2xl overflow-hidden bg-gray-700/50 backdrop-blur-sm p-4 pointer-events-none">
              <img
                src={ProfilePic}
                alt="Kyle's Profile"
                className="w-32 h-32 rounded-lg object-cover"
              />
            </div>

            <h1 className="text-5xl font-bold text-gray-100">Hi, I'm Kyle</h1>

            <p className="text-lg text-blue-400">
              Software Developer <span className="mx-2">⟹</span> Student at
              Keyin College
            </p>
          </div>
        </div>

        {/* <div className="w-1/2 h-full flex items-center justify-center p-4">
          <div className="relative">
            <img
              src={galleryItems[currentIndex].src}
              alt={galleryItems[currentIndex].title}
              className="w-full h-auto max-w-2xl rounded-lg shadow-xl object-contain backdrop-blur-sm bg-gray-900/30"
              style={{ maxHeight: "calc(75vh - 4rem)" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <p className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 text-xl font-semibold">
                {galleryItems[currentIndex].title}
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PortfolioPage;
