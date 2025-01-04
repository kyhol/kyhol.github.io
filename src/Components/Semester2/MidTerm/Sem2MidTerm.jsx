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
          <span className="ml-4 text-sm text-gray-400">javascript</span>
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
  requirements = [],
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
              <span
                key={contributor}
                className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {contributor}
              </span>
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
        <h3 className="font-bold mb-2 text-gray-100">Project Requirements:</h3>
        <ul className="list-disc list-inside space-y-1">
          {requirements.map((requirement, index) => (
            <li key={index} className="text-gray-300">
              {requirement}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">
          Implementation Highlights:
        </h3>
        <ul className="list-disc list-inside space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index} className="text-gray-300">
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-2 text-gray-100">Technologies Used:</h3>
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
    </div>
  );
};

const Sem2MidTerm = () => {
  const projects = [
    {
      title: "Gary Blue's Diner Website",
      description:
        "A modern, responsive website for Gary Blue's Diner featuring an attractive homepage, detailed menu presentation, and an interactive online ordering system. The project focuses on creating an engaging user experience while implementing proper web development practices and DOM manipulation.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "DOM Manipulation",
        "Figma",
        "Git/GitHub",
        "Responsive Design",
        "Form Validation",
      ],
      requirements: [
        "Figma design mockup following UI/UX principles",
        "Semantic HTML implementation",
        "CSS styling matching Figma design",
        "JavaScript DOM manipulation",
        "Form validation and order processing",
        "GitHub repository management",
        "Responsive layout for all devices",
        "Clear code documentation",
      ],
      codeSnippet: `// Form validation and order processing
function validateOrder(formData) {
  const quantity = parseInt(formData.get('quantity'));
  const creditCard = formData.get('creditCard');
  
  // Validate quantity
  if (quantity <= 0) {
    throw new Error('Quantity must be positive');
  }
  
  // Validate credit card format
  const creditCardRegex = /^\\d{4}-\\d{4}-\\d{4}-\\d{4}$/;
  if (!creditCardRegex.test(creditCard)) {
    throw new Error('Invalid credit card format');
  }
  
  // Calculate total
  const total = calculateOrderTotal(quantity);
  
  // Update DOM with confirmation
  displayOrderConfirmation(total);
}`,
      highlights: [
        "Welcoming homepage with location info, hours, and customer reviews",
        "Interactive menu page with high-quality food photography",
        "Online ordering system with real-time form validation",
        "Dynamic DOM updates for order confirmation",
        "Responsive design for optimal viewing on all devices",
        "Custom form validation for quantities and payment information",
        "Modular JavaScript functions for maintainable code",
        "Integration with Unsplash for professional food imagery",
      ],
      contributors: ["Brian Janes", "Brad Ayers"],
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

export default Sem2MidTerm;
