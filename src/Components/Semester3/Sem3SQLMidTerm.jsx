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
          <span className="ml-4 text-sm text-gray-400">sql</span>
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
  databaseDesign = [],
  codeSnippet,
  queries = [],
  cliFeatures = [],
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
        <h3 className="font-bold mb-2 text-gray-100">Database Design:</h3>
        <ul className="list-disc list-inside space-y-1">
          {databaseDesign.map((item, index) => (
            <li key={index} className="text-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">Key Queries:</h3>
        <ul className="list-disc list-inside space-y-1">
          {queries.map((query, index) => (
            <li key={index} className="text-gray-300">
              {query}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">CLI Features:</h3>
        <ul className="list-disc list-inside space-y-1">
          {cliFeatures.map((feature, index) => (
            <li key={index} className="text-gray-300">
              {feature}
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

const Sem3SQLMidTerm = () => {
  const projects = [
    {
      title: "Movie Rental Database System",
      description:
        "A normalized PostgreSQL database system for managing movie rentals, featuring customer management, movie inventory tracking, and rental history. The system includes a CLI application for database interactions and comprehensive SQL queries for data analysis.",
      technologies: [
        "PostgreSQL",
        "Python",
        "SQL",
        "CLI",
        "Git/GitHub",
        "Database Normalization",
      ],
      codeSnippet: `-- Table creation with proper constraints
CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_year INTEGER,
    genre VARCHAR(50),
    director VARCHAR(100)
);

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(15)
);

CREATE TABLE rentals (
    rental_id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(customer_id) ON DELETE CASCADE,
    movie_id INTEGER REFERENCES movies(movie_id),
    rental_date DATE NOT NULL,
    return_date DATE,
    CONSTRAINT fk_customer
        FOREIGN KEY(customer_id) 
        REFERENCES customers(customer_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_movie
        FOREIGN KEY(movie_id) 
        REFERENCES movies(movie_id)
);

-- Sample complex query
SELECT c.first_name, c.last_name, m.title, r.rental_date
FROM customers c
JOIN rentals r ON c.customer_id = r.customer_id
JOIN movies m ON r.movie_id = m.movie_id
WHERE m.director = 'Christopher Nolan'
AND r.return_date > CURRENT_DATE
ORDER BY r.rental_date DESC;`,
      databaseDesign: [
        "Movies Table: Stores movie details including title, year, genre, and director",
        "Customers Table: Maintains customer information with email as unique identifier",
        "Rentals Table: Links customers and movies with rental dates",
        "3NF Compliance: No transitive dependencies or partial key dependencies",
        "Proper foreign key constraints with cascade delete",
        "Indexing on frequently queried columns",
        "Data integrity through constraints and validation",
      ],
      queries: [
        "Customer rental history by email lookup",
        "Movie rental history by title",
        "Customer list by movie title",
        "Director-based rental analysis",
        "Currently rented movies tracking",
        "Complex joins for rental analysis",
        "Cascade delete implementation",
      ],
      cliFeatures: [
        "Automatic table creation and verification",
        "Movie listing functionality",
        "Customer email update capability",
        "New movie addition interface",
        "Customer removal with cascade delete",
        "Error handling and input validation",
        "User-friendly command structure",
      ],
      contributors: [],
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

export default Sem3SQLMidTerm;
