import { useState, useEffect } from "react";

const getRandomOffset = (maxX, maxY) => {
  const variationX = 100; // Adjust the variation as needed
  const variationY = 20; // Adjust the variation as needed
  const offsetX = Math.random() * variationX - variationX * 2;
  const offsetY = Math.random() * variationY - variationY / 2;
  const x = Math.floor(Math.random() * maxX) + offsetX;
  const y = Math.floor(Math.random() * maxY) + offsetY;
  return { x, y };
};

const getRandomRotation = (maxAngle) => {
  const variation = 5; // Adjust the variation as needed
  const rotation = Math.random() * maxAngle * 2 - 15;
  return rotation + variation;
};

const FloatCard = ({
  name,
  icon,
  title,
  content,
  footer,
  handleHover,
  zIndex,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const maxX = window.innerWidth < 768 ? 300 : 700; // Adjust the threshold and values as needed
    const initialOffset = getRandomOffset(maxX, 250); // Adjust maxY as needed
    const initialRotation = getRandomRotation(15); // Adjust maxAngle as needed

    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const newPosition = {
        x: easeInOut(progress, 100, initialOffset.x, 500),
        y: easeInOut(progress, 0, initialOffset.y, 500),
      };

      const newRotation = easeInOut(progress, 0, initialRotation, 500);

      setPosition(newPosition);
      setRotation(newRotation);

      if (progress < 500) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragging) {
        const newX = e.clientX - offset.x;
        const newY = e.clientY - offset.y;
        const constrainedX = Math.max(
          0,
          Math.min(window.innerWidth - 100, newX),
        );
        const constrainedY = Math.max(
          0,
          Math.min(window.innerHeight - 100, newY),
        );
        setPosition({
          x: constrainedX,
          y: constrainedY,
        });
      }
    };

    const handleTouchMove = (e) => {
      if (dragging) {
        const touch = e.touches[0];
        const newX = touch.clientX - offset.x;
        const newY = touch.clientY - offset.y;
        const constrainedX = Math.max(
          0,
          Math.min(window.innerWidth - 200, newX),
        );
        const constrainedY = Math.max(
          0,
          Math.min(window.innerHeight - 100, newY),
        );
        setPosition({
          x: constrainedX,
          y: constrainedY,
        });
      }
    };

    const handleMouseUp = () => setDragging(false);
    const handleTouchEnd = () => setDragging(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dragging, offset]);

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setDragging(true);
    setOffset({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  const handleMouseEnter = () => {
    console.log("Hovering over the card with zIndex", zIndex);
    handleHover(zIndex);
  };

  return (
    <>
      <div
        className={`float-card ${isAnimating ? "animateCard" : ""}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
          cursor: dragging ? "grabbing" : "grab",
          userSelect: dragging ? "none" : "auto",
          zIndex,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseEnter={handleMouseEnter}
      >
        <img src={icon} alt={name} className="float-card-icon" />
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{footer}</p>
      </div>
    </>
  );
};

export default FloatCard;

function easeInOut(t, b, c, d) {
  // t: current time, b: beginning value, c: change in value, d: duration
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}
