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
  demoGif = "/FinalsTaxiGif.gif",
}) => {
  return (
    <div className="border border-gray-700 rounded-lg shadow-md p-6 max-w-2xl mx-auto mb-8 bg-gray-800">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-gray-100">{title}</h2>
        <p className="text-gray-300">{description}</p>
      </div>

      <div className="mb-6">
        <img
          src={demoGif}
          alt="Program Demo"
          className="rounded-lg w-full max-h-40 object-contain bg-black"
        />
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

const Semester1PyFinal = () => {
  const projects = [
    {
      title: "HAB Taxi Services Management System",
      description:
        "A comprehensive taxi service management system featuring employee management, financial tracking, automated monthly fees, and detailed reporting. The system handles various aspects of the taxi service business including revenue tracking, expense management, car rentals, and financial analytics.",
      technologies: [
        "Python",
        "File I/O",
        "Data Validation",
        "Financial Calculations",
        "Date Processing",
        "Regular Expressions",
        "Text-based UI",
        "ERD Design",
      ],
      pythonPackages: ["datetime", "os", "sys", "time", "re"],
      demoGif: "/FinalsTaxiGif.gif",
      codeSnippet: `def main_menu():
    while True:
        print("   ╔═══════════════════════════════════════════════╗")
        print("   ║               HAB Taxi Services               ║")
        print("   ║            Company Services System            ║")
        print("   ╟───────────────────────────────────────────────╢")
        print("   ║      1.   Enter a New Employee (Driver)       ║")
        print("   ║      2.   Enter Company Revenues              ║")
        print("   ║      3.   Enter Company Expenses              ║")
        print("   ║      4.   Track Car Rentals                   ║")
        print("   ║      5.   Record Employee Payment             ║")
        print("   ║      6.   Print Company Profit Listing        ║")
        print("   ║      7.   Print Driver Financial Listing      ║")
        print("   ║      8.   Rental Report - Monthly Summary     ║")
        print("   ║      9.   Quit Program                        ║")
        print("   ╚═══════════════════════════════════════════════╝")`,
      highlights: [
        "Automated Monthly Stand Fees: Automatic charging and recording of stand fees for drivers with their own cars",
        "Employee Management: Comprehensive system for managing driver information including validation for names, addresses, phone numbers, and driver licenses",
        "Financial Tracking: Detailed revenue and expense tracking with HST calculations and customizable transaction types",
        "Rental Management: System for tracking car rentals including daily, weekly, and monthly options",
        "Advanced Validation: Robust input validation system for all data types including postal codes, phone numbers, and monetary values",
        "Financial Reporting: Multiple report types including company profit listings, driver financial listings, and rental summaries",
        "Custom UI Elements: Animated loading screens and professional ASCII art interface elements",
        "File-based Storage: Persistent data storage using text files with proper file I/O handling",
      ],
      contributors: [
        {
          name: "Angela Flynn-Smith",
          linkedin: "https://www.linkedin.com/in/angela-flynn-smith-4aa354278/",
        },
        {
          name: "Brad Ayers",
          linkedin: "https://www.linkedin.com/in/bradley-ayers/",
        },
        {
          name: "Beth-Ann Penney-Rideout",
          linkedin: "https://www.linkedin.com/in/bethann-penney/",
        },
        {
          name: "Victoria Breen",
          linkedin: "https://www.linkedin.com/in/victoria-breen-b8888b26a/",
        },
        {
          name: "Monique Maynard",
          linkedin: "https://www.linkedin.com/in/monique-maynard-26015723/",
        },
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

export default Semester1PyFinal;
