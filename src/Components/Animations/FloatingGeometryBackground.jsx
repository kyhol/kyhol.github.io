import React, { useState, useCallback, useRef, useEffect } from "react";

const FloatingGeometryBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [points, setPoints] = useState([]);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);

  const OSCILLATION_RADIUS = 15;

  // Determine point count based on screen size
  const getPointCount = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 50 : 150;
    }
    return 100;
  };

  const generatePoints = useCallback(() => {
    const container = containerRef.current;
    if (!container) return [];

    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // --- CHANGED LOGIC START ---
    // Instead of a flat loop, we calculate rows/cols based on Aspect Ratio
    // to ensure the grid covers the entire height.
    const targetCount = getPointCount();
    const ratio = width / height;

    // Calculate rows and columns to fit the aspect ratio
    // If ratio is > 1 (landscape), we have more cols than rows.
    const rows = Math.ceil(Math.sqrt(targetCount / ratio));
    const cols = Math.ceil(targetCount / rows);

    const cellWidth = width / cols;
    const cellHeight = height / rows;

    const newPoints = [];
    let idCounter = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Calculate base position for this cell
        const baseX = c * cellWidth;
        const baseY = r * cellHeight;

        // Add random offset, but keep it within bounds so it doesn't fly off screen
        const x = baseX + Math.random() * cellWidth * 0.8 + cellWidth * 0.1;
        const y = baseY + Math.random() * cellHeight * 0.8 + cellHeight * 0.1;

        newPoints.push({
          id: idCounter++,
          x,
          y,
          size: Math.random() * 2 + 1,
          baseX: x,
          baseY: y,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
    return newPoints;
    // --- CHANGED LOGIC END ---
  }, []);

  const findNearbyPoints = useCallback(
    (x, y) => {
      const interactionRadius = window.innerWidth < 768 ? 100 : 200;
      return points
        .map((point) => {
          const distance = Math.sqrt(
            Math.pow(point.x - x, 2) + Math.pow(point.y - y, 2)
          );
          return { ...point, distance };
        })
        .filter((point) => point.distance < interactionRadius)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 8);
    },
    [points]
  );

  useEffect(() => {
    // Add a small delay to resize to let the container finish layout
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setPoints(generatePoints()), 100);
    };

    window.addEventListener("resize", handleResize);
    setPoints(generatePoints());

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [generatePoints]);

  useEffect(() => {
    let lastTime = 0;
    const fps = 30;
    const frameDelay = 1000 / fps;

    const animate = (currentTime) => {
      if (currentTime - lastTime >= frameDelay) {
        setPoints((prevPoints) => {
          const time = Date.now() / 2000;
          return prevPoints.map((point) => {
            const newX =
              point.baseX + Math.cos(point.phase + time) * OSCILLATION_RADIUS;
            const newY =
              point.baseY +
              Math.sin(point.phase + time * 1.5) * OSCILLATION_RADIUS;
            return { ...point, x: newX, y: newY };
          });
        });
        lastTime = currentTime;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    const handleInteraction = (clientX, clientY) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Check boundaries to ensure we are actually over the section
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        setIsInteracting(true);
        setMousePos({ x, y });
      } else {
        setIsInteracting(false);
      }
    };

    const handleMouseMove = (e) => handleInteraction(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        handleInteraction(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const nearbyPoints = isInteracting
    ? findNearbyPoints(mousePos.x, mousePos.y)
    : [];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 bg-gray-900 overflow-hidden pointer-events-none"
    >
      <svg className="w-full h-full">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="1" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {points.map((point) => {
          let opacity = 0.3;
          let isNearby = false;

          if (isInteracting) {
            isNearby = nearbyPoints.some((p) => p.id === point.id);
            if (isNearby) {
              const distanceToMouse = Math.sqrt(
                Math.pow(point.x - mousePos.x, 2) +
                  Math.pow(point.y - mousePos.y, 2)
              );
              opacity = Math.max(0.3, 1 - distanceToMouse / 250);
            }
          }

          return (
            <React.Fragment key={point.id}>
              {isNearby && (
                <line
                  x1={mousePos.x}
                  y1={mousePos.y}
                  x2={point.x}
                  y2={point.y}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  className="transition-opacity duration-75"
                  opacity={opacity}
                />
              )}
              <circle
                cx={point.x}
                cy={point.y}
                r={point.size}
                fill="#6366f1"
                filter="url(#glow)"
                opacity={opacity}
                className="transition-opacity duration-300"
              />
            </React.Fragment>
          );
        })}

        {nearbyPoints.map(
          (point, idx) =>
            idx > 0 && (
              <line
                key={`connection-${point.id}`}
                x1={nearbyPoints[idx - 1].x}
                y1={nearbyPoints[idx - 1].y}
                x2={point.x}
                y2={point.y}
                stroke="#4f46e5"
                strokeWidth="0.5"
                className="opacity-20"
              />
            )
        )}
      </svg>
    </div>
  );
};

export default FloatingGeometryBackground;
