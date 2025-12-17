import React from "react";
import { FaHtml5, FaCss3Alt, FaPython, FaJava, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiSpringboot, SiMysql } from "react-icons/si";
import TraceAndPopAnimation from "../Animations/TraceAndPopAnimation";

const TechStackGrid = () => {
  const row1 = [
    {
      name: "HTML",
      logo: <FaHtml5 />,
      description:
        "Proficient in HTML, able to build semantic and accessible web pages.",
      color: "#e34c26",
    },
    {
      name: "CSS",
      logo: <FaCss3Alt />,
      description:
        "Skilled in CSS, can create responsive and visually appealing designs.",
      color: "#264de4",
    },
    {
      name: "JavaScript",
      logo: <RiJavascriptFill />,
      description:
        "Experienced in JavaScript, adept at building dynamic and interactive web applications.",
      color: "#f7df1e",
    },
  ];

  const row2 = [
    {
      name: "React",
      logo: <FaReact />,
      description:
        "Proficient in React, can develop complex single-page applications with state management and component-based architecture.",
      color: "#61dafb",
    },
    {
      name: "Java",
      logo: <FaJava />,
      description:
        "Knowledgeable in Java, able to build robust server-side applications and APIs.",
      color: "#e76f00",
    },
    {
      name: "Python",
      logo: <FaPython />,
      description:
        "Skilled in Python, can create efficient and scalable data-driven applications.",
      color: "#4b8bbe",
    },
    {
      name: "Express",
      logo: <SiExpress />,
      description:
        "Experienced with Express.js, building RESTful APIs and server-side applications.",
      color: "whitesmoke",
    },
  ];

  const row3 = [
    {
      name: "SQL",
      logo: <SiMysql />,
      description:
        "Proficient in SQL, designing and managing relational databases effectively.",
      color: "#00618a",
    },
    {
      name: "MongoDB",
      logo: <SiMongodb />,
      description:
        "Skilled in MongoDB, working with NoSQL databases for flexible data storage.",
      color: "#47a248",
    },
    {
      name: "Spring Boot",
      logo: <SiSpringboot />,
      description:
        "Experienced with Spring Boot, creating enterprise-level Java applications.",
      color: "#6db33f",
    },
  ];

  const TechCard = ({ tech }) => (
    <TraceAndPopAnimation>
      <div
        className="group relative flex flex-col items-center justify-center p-4 md:p-6 bg-gray-800 rounded-xl border border-gray-700 hover:bg-gray-700 transition-all duration-300 hover:scale-105 cursor-pointer w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
        title={tech.description}
      >
        <div
          className="text-4xl sm:text-5xl md:text-6xl mb-2 md:mb-4"
          style={{ color: tech.color }}
        >
          {tech.logo}
        </div>

        <p className="text-gray-200 text-xs sm:text-base md:text-lg font-semibold text-center">
          {tech.name}
        </p>

        {/* FIX APPLIED HERE:
           1. Changed '-top-full' to 'bottom-full'. 
              This aligns the bottom of the tooltip with the top of the card.
           2. Changed '-translate-y-4' to 'mb-3'. 
              This adds a small consistent margin between the card and tooltip.
        */}
        <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white p-3 md:p-4 rounded-lg text-xs md:text-sm w-48 md:w-64 bottom-full mb-3 left-1/2 transform -translate-x-1/2 z-50 shadow-xl pointer-events-none">
          {tech.description}
          {/* Arrow pointing down */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-gray-900" />
        </div>
      </div>
    </TraceAndPopAnimation>
  );

  const renderRow = (technologies, className = "") => (
    <div
      className={`flex flex-wrap justify-center gap-4 md:gap-6 ${className}`}
    >
      {technologies.map((tech, index) => (
        <TechCard key={index} tech={tech} />
      ))}
    </div>
  );

  return (
    // Reduced pt-24 to pt-12 since tooltips are closer now
    <div className="max-w-6xl mx-auto p-4 md:p-8 pt-12 w-full overflow-visible">
      <div className="flex flex-col gap-4 md:gap-6 w-full">
        {renderRow(row1)}
        {renderRow(row2)}
        {renderRow(row3)}
      </div>
    </div>
  );
};

export default TechStackGrid;
