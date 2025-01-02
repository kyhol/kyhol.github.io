import React from "react";

const CodeDisplay = ({ code }) => {
  const lines = code.split("\n");

  return (
    <div className="w-full">
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="flex items-center px-4 py-2 bg-gray-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-sm text-gray-400">python</span>
        </div>

        <div className="p-4 overflow-x-auto">
          <pre className="text-gray-100 font-mono text-sm">
            <code>
              {lines.map((line, index) => (
                <div key={index} className="flex">
                  <span className="text-gray-500 w-8 inline-block select-none">
                    {index + 1}
                  </span>
                  <span className="flex-1">{line}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({
  title,
  description,
  technologies,
  pythonPackages = [],
  codeSnippet,
  highlights = [],
  contributors = [],
}) => {
  return (
    <div className="border border-gray-700 rounded-lg shadow-md p-6 max-w-2xl mx-auto mb-8 bg-gray-800">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-100">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>

      {contributors.length > 0 && (
        <div className="mb-4">
          <h3 className="font-bold mb-2 text-gray-100">Contributors:</h3>
          <div className="flex flex-wrap gap-2">
            {contributors.map((contributor) => (
              <a
                key={contributor.name}
                href={contributor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
              >
                {contributor.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {codeSnippet && (
        <div className="mb-4">
          <CodeDisplay code={codeSnippet} />
        </div>
      )}

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">Key Features:</h3>
        <ul className="list-disc list-inside space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-gray-300">
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">Technologies:</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {pythonPackages.length > 0 && (
        <div>
          <h3 className="font-bold mb-2 text-gray-100">Python Dependencies:</h3>
          <div className="flex flex-wrap gap-2">
            {pythonPackages.map((pkg) => (
              <span
                key={pkg}
                className="border border-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {pkg}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const FizzBuzz = () => {
  const projects = [
    {
      title: "Multi-Program Python Business Application",
      description:
        "A comprehensive Python application featuring six integrated programs including travel claims processing, algorithmic challenges, date/string manipulation tools, and equipment maintenance scheduling",
      technologies: [
        "Python",
        "Regular Expressions",
        "DateTime Handling",
        "File I/O",
        "Input Validation",
      ],
      pythonPackages: ["sys", "re", "datetime", "string", "random", "time"],
      contributors: [
        {
          name: "Angela Smith",
          linkedin: "https://www.linkedin.com/in/angela-flynn-smith-4aa354278/",
        },
        {
          name: "Brad Ayers",
          linkedin: "https://www.linkedin.com/in/bradley-ayers/",
        },
      ],
      codeSnippet: `def main_menu():
    while True:
        print("##############################################")
        print("#          Midterm Sprint-Main Menu:         #")
        print("#     1.Complete a Travel Claim              #")
        print("#     2.Fun Interview Question               #")
        print("#     3.Cool Stuff with Strings and Dates    #")
        print("#     4.A Little Bit of Everything           #")
        print("#     5.Something Old, Something New         #")
        print("#     6.Quit                                 #")`,
      highlights: [
        "Travel Claims System: Implemented extensive validation and calculations for employee travel expenses",
        "FizzBuzz Implementation: Created a technical interview practice program with custom number rules",
        "Employee Information System: Built advanced string/date manipulation tools with zodiac sign features",
        "Equipment Maintenance Scheduler: Developed amortization calculator with maintenance scheduling",
        "Regular Expression Tutorial: Created an interactive learning module for regex patterns",
        "Implemented cross-platform compatibility for key press detection",
        "Created reusable validation functions for monetary values using regex",
      ],
    },
  ];

  return (
    <div className="p-4 bg-gray-900">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default FizzBuzz;
