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
  pages = [],
  codeSnippet,
  coreFunctions = [],
  contributors = [],
  testing = [],
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
        <h3 className="font-bold mb-2 text-gray-100">Core Functions:</h3>
        <ul className="list-disc list-inside space-y-1">
          {coreFunctions.map((func, index) => (
            <li key={index} className="text-gray-300">
              {func}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">Pages & Features:</h3>
        <ul className="list-disc list-inside space-y-1">
          {pages.map((page, index) => (
            <li key={index} className="text-gray-300">
              {page}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">Testing Coverage:</h3>
        <ul className="list-disc list-inside space-y-1">
          {testing.map((test, index) => (
            <li key={index} className="text-gray-300">
              {test}
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

const Sem3EJSMidterms = () => {
  const projects = [
    {
      title: "Movie Database and Recommendation System",
      description:
        "A dynamic movie database application featuring in-memory data storage, movie recommendations, and comprehensive movie details. Built with Express.js and EJS templates, the application provides various movie browsing experiences including top-rated, upcoming, and genre-based recommendations.",
      technologies: [
        "Node.js",
        "Express.js",
        "EJS Templates",
        "Jest",
        "HTML5",
        "CSS3",
        "Git/GitHub",
      ],
      codeSnippet: `// Core movie service functions
const movieService = {
  // Get X movies by genre
  getMoviesByGenre: (genre, count) => {
    const genreMovies = movies.filter(movie => 
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
    
    if (genreMovies.length === 0) {
      return { success: false, message: 'No movies found for genre' };
    }
    
    return {
      success: true,
      data: genreMovies.slice(0, count)
    };
  },

  // Get top rated movies
  getTopRated: (count) => {
    return movies
      .sort((a, b) => b.rating - a.rating)
      .slice(0, count);
  },

  // Get movie by ID
  getMovieById: (id) => {
    const movie = movies.find(m => m.id === id);
    if (!movie) {
      return { success: false, message: 'Movie not found' };
    }
    return { success: true, data: movie };
  },

  // Get random movie
  getRandomMovie: () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  },

  // Get movie recommendations
  getRecommendations: (movieId, count = 3) => {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return [];
    
    return movies
      .filter(m => m.genre === movie.genre && m.id !== movieId)
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  }
};`,
      coreFunctions: [
        "getMoviesByGenre(genre, count): Retrieves specified number of movies from a given genre",
        "getTopRated(count): Returns top-rated movies sorted by rating",
        "getMovieById(id): Fetches detailed movie information by ID",
        "getRandomMovie(): Selects a random movie from the database",
        "getRecommendations(movieId, count): Generates genre-based movie recommendations",
      ],
      pages: [
        "Home Page: Displays 9 random movies with basic details",
        "Top Rated Movies: Shows 15 highest-rated movies with descriptions",
        "Movie Details Page: Comprehensive movie information with recommendations",
        "Upcoming Movies Page: Lists 5 upcoming releases",
        "Common Header: Navigation partial with links to all main pages",
      ],
      testing: [
        "Genre-based movie retrieval: Tests valid genres and empty results",
        "Top-rated movies: Verifies count and sort order",
        "Movie ID lookup: Tests valid and invalid IDs",
        "Random movie selection: Ensures valid movie returned",
        "Full test coverage for core movie service functions",
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

export default Sem3EJSMidterms;
