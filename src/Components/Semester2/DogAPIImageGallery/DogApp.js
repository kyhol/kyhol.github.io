// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BreedSelector from "./components/BreedSelector";
import ImageGallery from "./components/ImageGallery";
import DogCarousel from "./components/DogCarousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import { GiCarousel } from "react-icons/gi";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

const App = () => {
  const [breed, setBreed] = useState("");
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
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
  };

  useEffect(() => {
    fetchImages();
  }, [breed, numImages]);

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <BreedSelector
                    setBreed={setBreed}
                    setNumImages={setNumImages}
                  />
                  <ImageGallery images={images} />
                  <div className="viewCarsouselButtonWrapper">
                    <Link to="/carousel">
                      <button className="viewCarsouselButton">
                        View as Carousel &nbsp; <GiCarousel />
                      </button>
                    </Link>
                  </div>
                </div>
              }
            />
            <Route
              path="/carousel"
              element={<DogCarousel breed={breed} numImages={numImages} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
