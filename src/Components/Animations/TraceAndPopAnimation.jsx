import React, { useEffect, useRef } from "react";

const TraceAndPopAnimation = ({
  children,
  className = "",
  once = true,
  threshold = 0.5,
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-trace-and-pop");
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove("animate-trace-and-pop");
          }
        });
      },
      { threshold }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [once, threshold]);

  return (
    <div ref={elementRef} className={`relative ${className}`}>
      <style jsx>{`
        .animate-trace-and-pop::before {
          content: "";
          position: absolute;
          inset: -2px;
          z-index: 2;
          background: linear-gradient(
                90deg,
                transparent 0%,
                white 50%,
                transparent 100%
              )
              0 0 / 12px 2px,
            linear-gradient(180deg, transparent 0%, white 50%, transparent 100%)
              100% 0 / 2px 12px,
            linear-gradient(270deg, transparent 0%, white 50%, transparent 100%)
              100% 100% / 12px 2px,
            linear-gradient(0deg, transparent 0%, white 50%, transparent 100%) 0
              100% / 2px 12px;
          background-repeat: no-repeat;
          animation: borderTrace 2s linear;
          pointer-events: none;
          opacity: 0;
        }

        .animate-trace-and-pop::after {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          z-index: 3;
          animation: cornerPop 0.5s ease-out 1.7s;
          pointer-events: none;
        }

        @keyframes borderTrace {
          0% {
            opacity: 1;
            background-position: 0 0, /* top */ 100% 0, /* right */ 100% 100%,
              /* bottom */ 0 100%; /* left */
          }
          25% {
            background-position: 100% 0, 100% 0, 100% 100%, 0 100%;
          }
          50% {
            background-position: 100% 0, 100% 100%, 100% 100%, 0 100%;
          }
          75% {
            background-position: 100% 0, 100% 100%, 0 100%, 0 100%;
          }
          95% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            background-position: 100% 0, 100% 100%, 0 100%, 0 0;
          }
        }

        @keyframes cornerPop {
          0% {
            opacity: 0;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(2);
          }
          100% {
            opacity: 0;
            transform: scale(1);
          }
        }
      `}</style>
      {children}
    </div>
  );
};

export default TraceAndPopAnimation;
