import { useState, useEffect } from "react";

const FloatingDots = () => {
  const generateRandomDot = () => ({
    left: Math.random() * window.innerWidth, // Random left position within window width
    top: Math.random() * window.innerHeight, // Random top position within window height
  });

  const [dots, setDots] = useState<Array<{ left: number; top: number }>>(
    Array.from(
      { length: Math.floor(Math.random() * 11) + 60 },
      generateRandomDot
    )
  );

  useEffect(() => {
    const updateDotsPosition = (event: MouseEvent) => {
      const updatedDots = dots.map((dot) => ({
        left: dot.left + Math.sin(event.clientX / 800) * 20,
        top: dot.top + Math.cos(event.clientY / 300) * 20,
      }));
      setDots(updatedDots);
    };

    document.addEventListener("mousemove", updateDotsPosition);

    return () => {
      document.removeEventListener("mousemove", updateDotsPosition);
    };
  }, [setDots]);

  return (
    <div className="floating-dots-container">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="dot"
          style={{ left: dot.left, top: dot.top }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingDots;
