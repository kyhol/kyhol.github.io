import React, { createContext, useState, useContext } from "react";

const DogContext = createContext();

export const DogProvider = ({ children }) => {
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

  return (
    <DogContext.Provider
      value={{
        breed,
        setBreed,
        numImages,
        setNumImages,
        images,
        setImages,
        fetchImages,
      }}
    >
      {children}
    </DogContext.Provider>
  );
};

export const useDogContext = () => useContext(DogContext);
