// src/components/DogCarousel.jsx
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import { GiDogHouse } from "react-icons/gi";

const DogCarousel = ({ breed, numImages }) => {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDogImages = async () => {
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
      } else {
        setImages([]);
      }
    };

    fetchDogImages();
  }, [breed, numImages]);

  return (
    <div className="returnWrapper">
      <button className="returnWrapperButton" onClick={() => navigate("/")}>
        <GiDogHouse />
        &nbsp; Return to Main Page
      </button>
      {images.length > 0 ? (
        <div className="carousel-wrapper">
          <Carousel className="carousel-image" showThumbs={false} infiniteLoop>
            {images.map((image, index) => (
              <div className="carousel-image" key={index}>
                <img src={image} alt={`Dog ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <p>
          No images selected. Please select a breed and number of images, then
          fetch the images.
        </p>
      )}
    </div>
  );
};

export default DogCarousel;
