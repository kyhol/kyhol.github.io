import React, { useState, useCallback, useRef, useEffect } from "react";

const FloatingGeometryBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [points, setPoints] = useState([]);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const OSCILLATION_RADIUS = 15;

  const generatePoints = useCallback((count = 200) => {
    const container = containerRef.current;
    if (!container) return [];

    const rect = container.getBoundingClientRect();
    const gridSize = Math.sqrt(count);
    const cellWidth = rect.width / gridSize;
    const cellHeight = rect.height / gridSize;

    return Array.from({ length: count }, (_, i) => {
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;

      // Add random offset within each grid cell
      const baseX = col * cellWidth;
      const baseY = row * cellHeight;
      const x = baseX + Math.random() * cellWidth * 0.8;
      const y = baseY + Math.random() * cellHeight * 0.8;

      return {
        id: i,
        x,
        y,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        baseX: x,
        baseY: y,
        phase: Math.random() * Math.PI * 2,
      };
    });
  }, []);

  const updatePoints = useCallback(() => {
    setPoints((prevPoints) => {
      const container = containerRef.current;
      if (!container) return prevPoints;

      const rect = container.getBoundingClientRect();
      const time = Date.now() / 2000;

      return prevPoints.map((point) => {
        // Oscillating motion around base position
        const oscillationRadius = 15;
        const newX =
          point.baseX + Math.cos(point.phase + time) * oscillationRadius;
        const newY =
          point.baseY + Math.sin(point.phase + time * 1.5) * oscillationRadius;

        return {
          ...point,
          x: newX,
          y: newY,
        };
      });
    });

    animationRef.current = requestAnimationFrame(updatePoints);
  }, []);

  const findNearbyPoints = useCallback(
    (x, y) => {
      const interactionRadius = 200;
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
    setPoints(generatePoints());
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
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

  const [isMouseInContainer, setIsMouseInContainer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsMouseInContainer(true);
    const handleMouseLeave = () => setIsMouseInContainer(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  const nearbyPoints = isMouseInContainer
    ? findNearbyPoints(mousePos.x, mousePos.y)
    : [];

  return (
    <div ref={containerRef} className="absolute inset-0 bg-gray-900">
      <svg className="w-full h-full">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="1" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {points.map((point, idx) => {
          const isNearby = nearbyPoints.some((p) => p.id === point.id);
          const distanceToMouse = Math.sqrt(
            Math.pow(point.x - mousePos.x, 2) +
              Math.pow(point.y - mousePos.y, 2)
          );
          const opacity = isNearby
            ? Math.max(0.2, 1 - distanceToMouse / 300)
            : 0.2;

          return (
            <React.Fragment key={point.id}>
              {isNearby && idx > 0 && (
                <line
                  x1={mousePos.x}
                  y1={mousePos.y}
                  x2={point.x}
                  y2={point.y}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  className="transition-opacity duration-300"
                  opacity={opacity * 1.5}
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
                strokeWidth="1"
                className="opacity-20"
              />
            )
        )}
      </svg>
    </div>
  );
};

export default FloatingGeometryBackground;
