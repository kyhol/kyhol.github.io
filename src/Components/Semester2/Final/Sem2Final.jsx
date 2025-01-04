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
  components = [],
  codeSnippet,
  highlights = [],
  contributors = [],
  architecture = [],
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
        <h3 className="font-bold mb-2 text-gray-100">Core Components:</h3>
        <ul className="list-disc list-inside space-y-1">
          {components.map((component, index) => (
            <li key={index} className="text-gray-300">
              {component}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">
          Architecture & Features:
        </h3>
        <ul className="list-disc list-inside space-y-1">
          {architecture.map((item, index) => (
            <li key={index} className="text-gray-300">
              {item}
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

const Sem2Final = () => {
  const projects = [
    {
      title: "React E-commerce Platform",
      description:
        "A modern e-commerce platform built with React, featuring product listings, detailed product views, shopping cart functionality, and a checkout process. The project implements React Router for navigation, Context API for state management, and includes comprehensive unit testing.",
      technologies: [
        "React",
        "React Router",
        "Context API",
        "Jest",
        "React Testing Library",
        "JSON Server",
        "CSS3",
        "Figma",
        "Git/GitHub",
      ],
      components: [
        "ProductList.jsx - Displays product grid with data from mock API",
        "ProductDetails.jsx - Shows detailed product information with add-to-cart functionality",
        "ShoppingCart.jsx - Manages cart items using Context API",
        "Checkout.jsx - Handles order processing and form validation",
      ],
      codeSnippet: `// ShoppingCartContext.js
import { createContext, useState, useContext } from 'react';

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.id !== productId)
    );
  };

  return (
    <ShoppingCartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart 
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}`,
      architecture: [
        "React Router configuration with 4+ distinct routes/pages",
        "Context API implementation for global state management",
        "Mock JSON server for simulating API endpoints",
        "Unit testing setup with Jest and React Testing Library",
        "Responsive design implementation following Figma mockups",
      ],
      highlights: [
        "Clean component architecture with proper separation of concerns",
        "Comprehensive unit tests for critical components",
        "Global state management using Context API",
        "Mock API integration for product data",
        "Modern UI design implemented with responsive CSS",
        "Form validation and error handling",
        "Shopping cart persistence",
        "Optimized performance with React best practices",
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

export default Sem2Final;
