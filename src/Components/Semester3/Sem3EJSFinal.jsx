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
  features = [],
  codeSnippet,
  architecture = [],
  contributors = [],
  security = [],
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
        <h3 className="font-bold mb-2 text-gray-100">Key Features:</h3>
        <ul className="list-disc list-inside space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-300">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2 text-gray-100">
          Architecture & Implementation:
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
        <h3 className="font-bold mb-2 text-gray-100">Security Measures:</h3>
        <ul className="list-disc list-inside space-y-1">
          {security.map((item, index) => (
            <li key={index} className="text-gray-300">
              {item}
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

const Sem3EJSFinal = () => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description:
        "A feature-complete real-time chat platform built with Express.js, MongoDB, and WebSockets. The application provides secure user authentication, real-time messaging, user profiles, and administrative capabilities.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS Templates",
        "WebSockets",
        "express-ws",
        "bcrypt",
        "HTML5",
        "CSS3",
        "Git/GitHub",
      ],
      codeSnippet: `// WebSocket setup and message handling
const expressWs = require('express-ws');
const ws = expressWs(app);

app.ws('/chat', (ws, req) => {
  const user = req.session.user;
  
  // Add user to active sessions
  activeUsers.set(user.username, {
    ws: ws,
    joinedAt: new Date()
  });

  // Broadcast user joined message
  broadcastMessage({
    type: 'userJoined',
    username: user.username,
    timestamp: new Date()
  });

  // Handle incoming messages
  ws.on('message', async (msg) => {
    const message = JSON.parse(msg);
    
    // Save message to MongoDB
    await Message.create({
      content: message.content,
      sender: user.username,
      timestamp: new Date()
    });

    // Broadcast to all connected users
    broadcastMessage({
      type: 'chat',
      content: message.content,
      sender: user.username,
      timestamp: new Date()
    });
  });

  // Handle disconnection
  ws.on('close', () => {
    activeUsers.delete(user.username);
    broadcastMessage({
      type: 'userLeft',
      username: user.username
    });
  });
});`,
      features: [
        "Real-time messaging with WebSocket integration",
        "Secure user authentication and registration system",
        "User profiles with join date and activity information",
        "Live user presence tracking and notifications",
        "Admin dashboard for user management",
        "Persistent message history with MongoDB",
        "Role-based access control",
        "Responsive design with EJS templates",
      ],
      architecture: [
        "EJS templates for dynamic view rendering",
        "Express.js backend with WebSocket integration",
        "MongoDB schemas for users and messages",
        "Session-based authentication system",
        "Partial templates for consistent header/navigation",
        "WebSocket event handlers for real-time updates",
        "MVC architecture pattern",
      ],
      security: [
        "Password hashing using bcrypt",
        "Session-based authentication",
        "Role-based access control for admin features",
        "Protected routes and API endpoints",
        "Unique username enforcement",
        "Secure WebSocket connections",
        "MongoDB injection prevention",
      ],
      contributors: ["Brian Janes"],
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

export default Sem3EJSFinal;
