import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowLeft, FaArrowRight, FaSmileBeam } from "react-icons/fa";
import LinkedInLogo from "../../Assets/Footer/Group 1000005950.svg";
import GitHubLogo from "../../Assets/Footer/Group 1000005949.svg";
import "./LandingAbout.css";
import computerPic from "../../Assets/computerPic.png";

const LandingAbout = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center">
        <br />
        <br />
        <h1 className="landing-about-heading text-4xl font-bold mb-6">
          Hi, I'm Kyle. <FaSmileBeam className="smiley-icon inline-block" />
        </h1>
        <br />
        <br />
        <img
          src={computerPic}
          alt="Computer Pic"
          className="computer-pic mx-auto"
        />
      </div>
      <br />
      <br />
      <br />

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>

        <p className="mb-4 text-gray-700">
          I'm a junior developer and current student at Keyin College, based in
          St. John's, Newfoundland, Canada. My passion for technology is matched
          only by my commitment to community service and personal growth.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Professional Journey
        </h3>
        <p className="mb-4 text-gray-700">
          As an aspiring developer, I'm constantly honing my skills and
          exploring new technologies. My studies at Keyin College are providing
          me with a solid foundation in software development, preparing me for
          an exciting career in the tech industry.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Community Involvement
        </h3>
        <p className="mb-4 text-gray-700">
          I believe in giving back to my community and find great fulfillment in
          volunteer work:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li className="mb-2">
            <strong>The Wellness Collective:</strong> Here, I contribute to
            mental wellness initiatives and engage in gardening projects. This
            work not only benefits our community but also supports my own
            journey in maintaining mental health.
          </li>
          <li className="mb-2">
            <strong>Home Again Furniture Bank:</strong> I dedicate time to
            refurbishing furniture, which is then donated to individuals and
            families in need. This experience has taught me the value of
            sustainability and the impact of small acts of kindness.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-3 text-gray-800">
          Personal Interests
        </h3>
        <p className="mb-4 text-gray-700">
          When I'm not coding or volunteering, you can often find me tending to
          the garden. Gardening has become a form of meditation for me, allowing
          me to connect with nature and practice mindfulness.
        </p>

        <p className="mt-6 text-gray-700">
          I'm excited about the future and look forward to growing both as a
          developer and as an active member of my community.
        </p>

        <p className="mt-6 font-semibold text-gray-800">
          Feel free to reach out if you'd like to connect or collaborate!
        </p>
      </div>

      <div className="aboutLogoContainer flex justify-center items-center space-x-4 mt-6">
        <FaArrowRight className="text-orange-600 mr-2" />
        <a
          href="http://github.com/kyhol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubLogo} alt="GitHub Logo" className="w-8 h-8" />
        </a>
        <a
          href="http://www.linkedin.com/in/kyle-hollett-8558842a8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInLogo} alt="LinkedIn Logo" className="w-8 h-8" />
        </a>
        <a href="mailto:kyle.hollett@keyin.com">
          <MdOutlineEmail className="w-8 h-8 text-gray-600" />
        </a>
        <FaArrowLeft className="text-orange-600 ml-2" />
      </div>
    </div>
  );
};

export default LandingAbout;
