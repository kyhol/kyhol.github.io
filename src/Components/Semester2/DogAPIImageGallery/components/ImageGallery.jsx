import React from "react";
import { useDogContext } from "../Context/DogContext";

const ImageGallery = () => {
  const { images } = useDogContext();

  return (
    <div className="image-gallery">
      {images &&
        images.map((image, index) => (
          <img key={index} src={image} alt="Dog" className="gallery-image" />
        ))}
    </div>
  );
};

export default ImageGallery;
