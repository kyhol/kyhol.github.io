import React, { useState, useEffect } from "react";
import { GiJumpingDog } from "react-icons/gi";

const BreedSelector = ({ setBreed, setNumImages }) => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      setBreeds(Object.keys(data.message));
    };
    fetchBreeds();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const breed = e.target.breed.value;
    const numImages = e.target.numImages.value;
    setBreed(breed);
    setNumImages(numImages);
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            <h2>Select Breed:</h2>
            <select name="breed">
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <label>
            <h2>Number of Images:</h2>
            <input
              type="number"
              name="numImages"
              min="1"
              max="100"
              defaultValue="1"
            />
          </label>
          <button type="submit">
            Fetch Images &nbsp;
            <GiJumpingDog />
          </button>
        </form>
      </div>
    </>
  );
};

export default BreedSelector;
