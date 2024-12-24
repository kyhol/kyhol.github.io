import React from "react";
import ReturnToPortfolioButton from "../../ReturnToPortfolioButton/ReturnToPortfolioButton";

const PowerPoint = () => {
  const baseUrl = "https://kyhol.github.io";
  const pptxUrl = `${baseUrl}/PowerPointSemester1.pptx`;
  const embedUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
    pptxUrl
  )}`;

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-4">
      <div className="w-full flex justify-center mb-6">
        <ReturnToPortfolioButton />
      </div>

      <h1 className="text-2xl font-bold mb-8">Keyin Semester 1 Presentation</h1>

      <div className="w-full h-[calc(100vh-200px)] rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={embedUrl}
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen={true}
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          title="Keyin Presentation"
        />
      </div>
    </div>
  );
};

export default PowerPoint;
