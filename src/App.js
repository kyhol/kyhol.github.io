import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// REMOVED GoldenSpiralBackground from here

// Import all your page components
import Calculator from "./Components/Calculator/Calculator";
import GroceryList from "./Components/GroceryList/GroceryList";
import Carousel from "./Components/ImageCarousel/ImageCarousel";
import SnakeGame from "./Components/SnakeGame/SnakeGame";
import Stopwatch from "./Components/StopWatch/StopWatch";
import TextToSpeech from "./Components/TextToSpeech/TextToSpeech";
import TodoList from "./Components/ToDoList/ToDoList";
import WeatherApp from "./Components/WeatherApp/WeatherApp";
import PortfolioPage from "./Components/LandingPage/LandingPage";
import AboutMe from "./Pages/About";
import Contact from "./Pages/Contact";
import KeyinPresentation from "./Components/Semester1/PowerPoint/PowerPoint";
import MentalHealthInfo from "./Components/Semester1/MentalHealth/MentalHealth";
import FizzBuzz from "./Components/Semester1/FizzBuzz/FizzBuzz";
import Final from "./Components/Semester1/Final/Final";
import Robot from "./Components/Semester1/Robot/Robot";
import PaintApp from "./Components/SideProjects2025/Paint/PaintApp";
import DogGalleryApp from "./Components/Semester2/DogGalleryApp.jsx";
import Sem2MidTerm from "./Components/Semester2/MidTerm/Sem2MidTerm";
import Sem2Final from "./Components/Semester2/Final/Sem2Final";
import Sem3EJSFinal from "./Components/Semester3/Sem3EJSFinal.jsx";
import Sem3EJSMidterms from "./Components/Semester3/Sem3EJSMidterms.jsx";
import Sem3JavaFinal from "./Components/Semester3/Sem3JavaFinal.jsx";
import Sem3JavaMidTerm from "./Components/Semester3/Sem3JavaMidTerm.jsx";
import Sem3SQLMidTerm from "./Components/Semester3/Sem3SQLMidTerm.jsx";
import TypingPractice from "./Components/TypingPractice/TypingPractice";
import WildfireProximityApp from "./Components/WildfireProximity/WildfireProximity.jsx";

function AppContent() {
  const location = useLocation();

  const isFullScreen =
    location.pathname === "/" || location.pathname.includes("/dog-gallery");

  const showNavbar = !location.pathname.includes("/dog-gallery");

  return (
    <>
      {showNavbar && <Navbar />}

      <div className={isFullScreen ? "fullscreen-content" : "main-content"}>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/grocery-list" element={<GroceryList />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/snake-game" element={<SnakeGame />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/text-to-speech" element={<TextToSpeech />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/weather-app" element={<WeatherApp />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/keyin-presentation" element={<KeyinPresentation />} />
          <Route path="/mental-health" element={<MentalHealthInfo />} />
          <Route path="/fizzbuzz" element={<FizzBuzz />} />
          <Route path="/Final" element={<Final />} />
          <Route path="/robot" element={<Robot />} />
          <Route path="/paintapp" element={<PaintApp />} />
          <Route path="/dog-gallery/*" element={<DogGalleryApp />} />
          <Route path="/midterm" element={<Sem2MidTerm />} />
          <Route path="/Sem2Final" element={<Sem2Final />} />
          <Route path="/Sem3EJSFinal" element={<Sem3EJSFinal />} />
          <Route path="/Sem3EJSMidterms" element={<Sem3EJSMidterms />} />
          <Route path="/Sem3JavaFinal" element={<Sem3JavaFinal />} />
          <Route path="/Sem3JavaMidTerm" element={<Sem3JavaMidTerm />} />
          <Route path="/Sem3SQLMidTerm" element={<Sem3SQLMidTerm />} />
          <Route path="/TypingPractice" element={<TypingPractice />} />
          <Route
            path="/wildfire-proximity"
            element={<WildfireProximityApp />}
          />
        </Routes>
      </div>

      {showNavbar && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
