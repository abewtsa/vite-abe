import { useState } from "react";

const BurstAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="burst-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul className={`bursts ${isHovered ? "animate" : ""}`}>
        {[...Array(10)].map((_, i) => (
          <li key={i} className={`deg${i * 36}`}></li>
        ))}
      </ul>
    </div>
  );
};

export default BurstAnimation;
