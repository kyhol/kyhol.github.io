import { MdOutlineEmail } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LinkedInLogo from "../../Assets/Footer/Group 1000005950.svg";
import GitHubLogo from "../../Assets/Footer/Group 1000005949.svg";

const SocialLinks = () => {
  const SocialIcon = ({ href, children, tooltip }) => (
    <div className="group relative">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {children}
        </a>
      ) : (
        children
      )}

      <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white p-4 rounded-lg text-sm w-max -top-full left-1/2 transform -translate-x-1/2 -translate-y-4 z-10 shadow-xl">
        {tooltip}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-gray-900" />
      </div>
    </div>
  );

  return (
    <div className="aboutLogoContainer flex justify-center items-center space-x-4 mt-6">
      <SocialIcon tooltip="Check these out →">
        <FaArrowRight className="text-orange-600 mr-2" />
      </SocialIcon>

      <SocialIcon
        href="http://github.com/kyhol"
        tooltip="Where the magic happens ✨"
      >
        <img src={GitHubLogo} alt="GitHub Logo" className="w-8 h-8" />
      </SocialIcon>

      <SocialIcon
        href="http://www.linkedin.com/in/kyle-hollett-8558842a8/"
        tooltip="Professional mode activated 👔"
      >
        <img src={LinkedInLogo} alt="LinkedIn Logo" className="w-8 h-8" />
      </SocialIcon>

      <SocialIcon
        href="mailto:kyle.hollett@keyin.com"
        tooltip="Drop me a line, I don't bite! 📧"
      >
        <MdOutlineEmail className="w-8 h-8" style={{ color: "whitesmoke" }} />
      </SocialIcon>

      <SocialIcon tooltip="← Social stuff here">
        <FaArrowLeft className="text-orange-600 ml-2" />
      </SocialIcon>
    </div>
  );
};

export default SocialLinks;
