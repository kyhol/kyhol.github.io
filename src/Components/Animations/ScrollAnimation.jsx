import React, { useEffect, useRef } from "react";
import "./ScrollAnimation.css";

const ScrollAnimation = ({ children, direction, className }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50px", // Only trigger when element is 50px into viewport
      threshold: 0.1, // Trigger earlier
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        // Only add animation class if element is entering viewport from below
        if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
          entry.target.classList.add(
            direction === "left" ? "animate-swing-left" : "animate-swing-right"
          );
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Small delay to ensure initial state is set
    setTimeout(() => {
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
    }, 100);

    return () => observer.disconnect();
  }, [direction]);

  return (
    <div
      ref={elementRef}
      className={`${
        direction === "left" ? "swing-in-left" : "swing-in-right"
      } ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
