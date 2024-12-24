import React from "react";
import { Link } from "react-router-dom";

const ReturnToPortfolioButton = () => {
  return (
    <div className="flex justify-center items-center w-48 h-8 bg-gradient-to-b from-blue-600 to-teal-500 rounded-lg shadow-md transition-transform duration-200 ease-in-out hover:scale-105 transform">
      <Link to="/" className="text-gray-200 no-underline font-bold text-base">
        Return to Portfolio
      </Link>
    </div>
  );
};

export default ReturnToPortfolioButton;
