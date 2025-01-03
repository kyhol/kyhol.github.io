// dogGalleryRoutes.js
import { Routes, Route } from "react-router-dom";
import BreedSelector from "./components/BreedSelector";
import ImageGallery from "./components/ImageGallery";
import DogCarousel from "./components/DogCarousel";
import About from "./components/About";

const dogGalleryRoutes = (
  <Routes>
    <Route path="/dog-gallery" element={<BreedSelector />} />
    <Route path="/dog-gallery/carousel" element={<DogCarousel />} />
    <Route path="/dog-gallery/about" element={<About />} />
  </Routes>
);

export default dogGalleryRoutes;
