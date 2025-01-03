import React from "react";
import { GiDogHouse } from "react-icons/gi";
import { Link } from "react-router-dom";
import styles from "../../DogGallery.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerButtonWrapper}>
        <button className={styles.headerButton}>
          <Link to="/">
            Home <GiDogHouse />
          </Link>
        </button>
        <button className={styles.headerButton}>
          <Link to="/dog-gallery/about">About</Link>
        </button>
        <a
          href="https://dog.ceo/dog-api/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.headerButton}>Dog API</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
