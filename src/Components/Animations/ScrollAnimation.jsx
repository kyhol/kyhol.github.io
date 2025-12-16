import React, { useEffect, useRef, useState } from "react";
import "./ScrollAnimation.css";

const ScrollAnimation = ({ children, direction = "up", className }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, stop observing so it doesn't re-animate
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before bottom
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Determine animation class based on direction and visibility
  // On mobile (default), we force 'up' to prevent side-scroll issues
  // On desktop (md:), we respect the specific direction
  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0 translate-y-10"; // Hidden state

    switch (direction) {
      case "left":
        return "animate-fade-in-left";
      case "right":
        return "animate-fade-in-right";
      default:
        return "animate-fade-in-up";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${getAnimationClass()} ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
