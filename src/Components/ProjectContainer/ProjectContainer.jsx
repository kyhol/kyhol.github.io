import React from "react";
import { Link } from "react-router-dom";

const ProjectContainer = ({
  title,
  description,
  image,
  link,
  codeLink,
  isReversed,
}) => {
  return (
    <div
      className={`
      group relative flex flex-col gap-8 md:gap-12 items-center p-8 rounded-3xl 
      border border-white/10 bg-white/5 backdrop-blur-sm 
      hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10
      ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} 
    `}
    >
      {/* --- Text Section --- */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left z-10">
        <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>

        <p className="text-gray-300 leading-relaxed text-lg font-light">
          {description}
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
          {/* Live Link Button */}
          <Link
            to={link}
            className="px-6 py-2.5 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/25"
          >
            View Project
          </Link>

          {/* Code Link Button */}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-white/20 text-gray-300 font-medium hover:bg-white/10 hover:text-white transition-all"
            >
              View Code
            </a>
          )}
        </div>
      </div>

      {/* --- Image Section --- */}
      <div className="w-full md:w-1/2 h-64 md:h-80 relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
        <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default ProjectContainer;
