import React from "react";
import "./Footer.css";
import LinkedInLogo from "../../Assets/Footer/Group 1000005950.svg";
import GitHubLogo from "../../Assets/Footer/Group 1000005949.svg";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left: Branding */}
        <div className="footer-left">
          <h3>Kyle Hollett</h3>
          <p>Software Developer</p>
        </div>

        {/* Center: Social Links */}
        <div className="footer-center">
          <div className="footer-social-links">
            <a href="mailto:kyle.hollett@keyin.com" className="social-link">
              <MdOutlineEmail className="w-6 h-6" />
              <span>Email</span>
            </a>

            <a
              href="https://github.com/kyhol"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={GitHubLogo} alt="GitHub" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/kyle-hollett-8558842a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={LinkedInLogo} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right: Signature */}
        <div className="footer-right">
          <p className="footer-signature cedarville-cursive-regular">
            <span className="default-font">&lt;</span> Kyle Hollett{" "}
            <span className="default-font">/&gt;</span>
          </p>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Kyle Hollett. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
