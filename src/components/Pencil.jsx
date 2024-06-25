import { useState, useRef } from "react";

const Pencil = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const pencilRef = useRef(null);

  const handleMouseOver = () => {
    setIsAnimating(true);
    animatePencil();
  };

  const handleMouseLeave = () => {
    setIsAnimating(false);
  };

  const animatePencil = () => {
    if (pencilRef.current) {
      const initialPosition = pencilRef.current.getBoundingClientRect().x;
      const targetPosition = initialPosition + 200; // Adjust distance as needed
      let currentPosition = initialPosition;

      const animation = () => {
        currentPosition += 1; // Adjust speed as needed
        pencilRef.current.style.transform = `translateX(${currentPosition}px)`;

        if (currentPosition < targetPosition && isAnimating) {
          requestAnimationFrame(animation);
        }
      };

      animation();
    }
  };

  return (
    <div className="pencil-container">
      <svg
        ref={pencilRef}
        className="pencil-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        width="100"
        height="200"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <rect
          x="10"
          y="0"
          width="80"
          height="280"
          fill="#f0f0f0"
          stroke="#000"
          strokeWidth="5"
        />
        <circle cx="50" cy="10" r="5" fill="#333" />
      </svg>
    </div>
  );
};

export default Pencil;
