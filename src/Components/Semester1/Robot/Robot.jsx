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

const Robot = () => {
  const projects = [
    {
      title: "Intelligent Robot Obstacle Course Navigation System",
      description:
        "An advanced robotics project implementing autonomous navigation, computer vision, and dynamic response systems. The robot navigates through a complex obstacle course, identifies different types of rooms, responds to visual markers, and executes specific actions based on environmental conditions.",
      technologies: [
        "Python",
        "Computer Vision",
        "Robotics Control",
        "Motion Planning",
        "Sensor Integration",
        "LED Control Systems",
        "Sound Processing",
        "Event Handling",
      ],
      pythonPackages: ["RoboMaster SDK", "time", "sys"],
      codeSnippet: `def start():
    robot_ctrl.set_mode(rm_define.robot_mode_free)
    chassis_ctrl.set_trans_speed(0.7)
    chassis_ctrl.set_rotate_speed(30)
    led_ctrl.set_top_led(rm_define.armor_top_all, 255, 0, 0, rm_define.effect_always_on)
    
    # Navigate through maze
    chassis_ctrl.move_with_distance(0,5)
    chassis_ctrl.move_with_distance(0,0.8)
    led_ctrl.set_top_led(rm_define.armor_top_all, 161, 255, 69, rm_define.effect_marquee)
    user_defined_Maze()

    # Room type processing
    if Room1Type == 1:  # Fire scenario
        vision_ctrl.enable_detection(rm_define.vision_detection_marker)
        vision_ctrl.set_marker_detection_distance(2)
    elif Room1Type == 3:  # Rescue scenario
        vision_ctrl.enable_detection(rm_define.vision_detection_people)`,
      highlights: [
        "Dynamic Room Type Response: Autonomous identification and response to three different room scenarios - fire detection, hazard avoidance, and person rescue",
        "Advanced Vision System: Implementation of marker detection and person recognition with precise distance calculations",
        "Complex Navigation: Precise movement control through maze-like environments with automatic position resets",
        "Multi-Modal Feedback: Integration of LED patterns, sound effects, and motion responses for different scenarios",
        "Gimbal Control: Sophisticated control of the robot's gimbal system for marker scanning and targeting",
        "Emergency Response Simulation: Implementation of rescue protocols including person detection and safe escort procedures",
        "Real-time Event Processing: Handling of impact detection and sound recognition events",
        "Visual Effects: Programming of complex LED patterns and animations for status indication",
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

export default Robot;
