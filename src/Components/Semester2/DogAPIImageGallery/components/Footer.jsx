import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import styles from "../CSS/DogGalleryCSS.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
        <a
          href="https://github.com/ElliottLandsborough/dog-ceo-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            &nbsp; View Dog API on Github <FaGithub /> &nbsp;
          </p>
        </a>
        <a
          href="https://x.com/dog__CEO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            &nbsp; Follow on Dog API Twitter <FaTwitter /> &nbsp;
          </p>
        </a>
      </div>
      <h3>Built with luv by Kyle Hollett &nbsp; &copy; 2024</h3>
    </div>
  );
};

export default Footer;
