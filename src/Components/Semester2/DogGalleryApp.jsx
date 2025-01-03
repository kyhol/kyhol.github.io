import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Semester2/DogAPIImageGallery/components/Header";
import Footer from "../Semester2/DogAPIImageGallery/components/Footer";
import About from "../Semester2/DogAPIImageGallery/components/About";
import styles from "./DogGallery.module.css";
// import { GiCarousel } from "react-icons/gi";

const MainContent = ({
  breed,
  setBreed,
  numImages,
  setNumImages,
  images,
  breeds,
  fetchImages,
}) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Select Breed:</label>
          <select
            className={styles.select}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option value="">Select a breed</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Number of Images:</label>
          <input
            type="number"
            min="1"
            max="10"
            value={numImages}
            onChange={(e) => setNumImages(Number(e.target.value))}
            className={styles.input}
          />
        </div>

        <button onClick={fetchImages} className={styles.fetchButton}>
          Fetch Images
        </button>
      </div>

      <div className={styles.imageGrid}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Dog ${index + 1}`}
            className={styles.dogImage}
          />
        ))}
      </div>

      {/* {images.length > 0 && (
        <Link to="/dog-gallery/carousel" className={styles.carouselLink}>
          <button className={styles.carouselButton}>
            View as Carousel <GiCarousel />
          </button>
        </Link>
      )} */}
    </div>
  );
};

const DogGalleryApp = () => {
  const [breed, setBreed] = useState("");
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        setBreeds(Object.keys(data.message));
      } catch (error) {
        console.error("Failed to fetch breeds:", error);
      }
    };
    fetchBreeds();
  }, []);

  const fetchImages = useCallback(async () => {
    if (breed && numImages > 0) {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${breed}/images/random/${numImages}`
        );
        const data = await response.json();
        setImages(data.message);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    }
  }, [breed, numImages]);

  return (
    <div className={styles.dogGalleryWrapper}>
      <Header />
      <div className={styles.pageContainer}>
        <Routes>
          <Route
            path="/"
            element={
              <MainContent
                breed={breed}
                setBreed={setBreed}
                numImages={numImages}
                setNumImages={setNumImages}
                images={images}
                breeds={breeds}
                fetchImages={fetchImages}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default DogGalleryApp;
