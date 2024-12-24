import React from "react";
import "./PowerPoint.css";

const PowerPoint = () => {
  // Using your GitHub Pages URL
  const baseUrl = "https://kyhol.github.io";
  const pptxUrl = `${baseUrl}/PowerPointSemester1.pptx`;
  const embedUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
    pptxUrl
  )}`;

  return (
    <div className="presentation-container">
      <h1>Keyin Semester 1 Presentation</h1>
      <div className="presentation-wrapper">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
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
