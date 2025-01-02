import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Calculator from "./Components/Calculator/Calculator";
import GroceryList from "./Components/GroceryList/GroceryList";
import Carousel from "./Components/ImageCarousel/ImageCarousel";
import SnakeGame from "./Components/SnakeGame/SnakeGame";
import Stopwatch from "./Components/StopWatch/StopWatch";
import TextToSpeech from "./Components/TextToSpeech/TextToSpeech";
import TodoList from "./Components/ToDoList/ToDoList";
import WeatherApp from "./Components/WeatherApp/WeatherApp";
import LandingPage from "./Components/LandingPage/LandingPage";
import Footer from "./Components/Footer/Footer";
import AboutMe from "./Pages/About";
import Contact from "./Pages/Contact";
import KeyinPresentation from "./Components/Semester1/PowerPoint/PowerPoint";
import MentalHealthInfo from "./Components/Semester1/MentalHealth/MentalHealth";
import FizzBuzz from "./Components/Semester1/FizzBuzz/FizzBuzz";
import Final from "./Components/Semester1/Final/Final";
import Robot from "./Components/Semester1/Robot/Robot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
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
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
