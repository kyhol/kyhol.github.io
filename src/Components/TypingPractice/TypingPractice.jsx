import React, { useState, useEffect, useRef } from "react";
import exercisesData from "../../data/java-exercises.json";

const TypingPractice = () => {
  // Exercise state
  const [currentExercise, setCurrentExercise] = useState(null);
  const [difficulty, setDifficulty] = useState("beginner");
  const [exerciseIndex, setExerciseIndex] = useState(0);

  // Typing state
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  // Reference to input element
  const inputRef = useRef(null);

  // Timer state
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Split code into lines when exercise changes
  const codeLines =
    currentExercise?.code.split("\n").map((line) => line.trimRight()) || [];

  const getLeadingWhitespace = (line) => {
    const match = line.match(/^\s*/);
    return match ? match[0].length : 0;
  };

  // Handle line transition
  const moveToNextLine = () => {
    if (currentLine < codeLines.length - 1) {
      const nextLine = currentLine + 1;
      const leadingSpaces = getLeadingWhitespace(codeLines[nextLine]);
      setCurrentLine(nextLine);
      setCurrentChar(leadingSpaces); // Skip the leading whitespace
      setUserInput("");
    } else {
      setIsActive(false);
    }
  };

  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
    setExerciseIndex(0);
    resetExercise();
  };

  const handleExerciseChange = (e) => {
    setExerciseIndex(Number(e.target.value));
    resetExercise();
  };

  const handleTyping = (e) => {
    if (isPaused) return;

    const typed = e.target.value;
    const currentLineText = codeLines[currentLine];

    // Get the last typed character
    const typedChar = typed[typed.length - 1];
    const expectedChar = currentLineText[currentChar];

    if (typedChar) {
      if (typedChar === expectedChar) {
        // Correct character typed
        const newCharIndex = currentChar + 1;
        setCurrentChar(newCharIndex);
        if (!isActive) setIsActive(true);

        // If we've reached the end of the current line
        if (newCharIndex === currentLineText.length) {
          moveToNextLine();
        }
      }
    }

    setUserInput(typed);
  };

  const resetExercise = () => {
    setCurrentLine(0);
    setCurrentChar(0);
    setUserInput("");
    setSeconds(0);
    setIsActive(false);
    setIsPaused(false);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    setCurrentExercise(exercisesData.exercises[difficulty][exerciseIndex]);
  }, [difficulty, exerciseIndex]);

  useEffect(() => {
    if (currentExercise) {
      const initialLeadingSpaces = getLeadingWhitespace(codeLines[0]);
      setCurrentChar(initialLeadingSpaces);
    }
  }, [currentExercise]);

  useEffect(() => {
    let interval = null;
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  // Focus input on line change
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentLine]);

  if (!currentExercise) return <div>Loading...</div>;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6 text-white bg-gray-900">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{currentExercise.title}</h2>
        <div className="space-x-4">
          <select
            value={difficulty}
            onChange={handleDifficultyChange}
            className="p-2 border border-gray-600 rounded bg-gray-700 text-white"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>

          <select
            value={exerciseIndex}
            onChange={handleExerciseChange}
            className="p-2 border border-gray-600 rounded bg-gray-700 text-white"
          >
            {exercisesData.exercises[difficulty].map((exercise, index) => (
              <option key={exercise.id} value={index}>
                Exercise {index + 1}: {exercise.title}
              </option>
            ))}
          </select>

          <button
            onClick={togglePause}
            className="p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            {isPaused ? "Resume" : "Pause"}
          </button>
          <button
            onClick={resetExercise}
            className="p-2 rounded bg-gray-500 text-white hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Timer */}
      <div className="text-lg">
        Time: {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}
      </div>

      {/* Description */}
      <p className="text-gray-300">{currentExercise.description}</p>

      {/* Code Display with Overlay Input */}
      <div className="font-mono bg-gray-800 p-4 rounded relative">
        <div className="relative">
          {codeLines.map((line, index) => (
            <div
              key={index}
              className={`whitespace-pre p-1 relative ${
                index === currentLine ? "bg-gray-700" : ""
              }`}
            >
              {index === currentLine ? (
                Array.from(line).map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className={
                      charIndex < currentChar
                        ? "text-green-400"
                        : charIndex === currentChar
                        ? "text-yellow-500"
                        : "text-gray-500"
                    }
                  >
                    {char}
                  </span>
                ))
              ) : (
                <span
                  className={
                    index < currentLine ? "text-gray-400" : "text-white"
                  }
                >
                  {line}
                </span>
              )}
            </div>
          ))}
        </div>
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={handleTyping}
          disabled={isPaused}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-text focus:outline-none"
          autoFocus
          key={`input-${currentLine}`}
        />
      </div>

      {/* Progress Alert */}
      {currentLine === codeLines.length - 1 &&
        currentChar === codeLines[currentLine].length && (
          <div className="bg-green-100 border border-green-500 text-green-700 p-4 rounded">
            Exercise complete! Time: {Math.floor(seconds / 60)}:
            {String(seconds % 60).padStart(2, "0")}
          </div>
        )}
    </div>
  );
};

export default TypingPractice;
