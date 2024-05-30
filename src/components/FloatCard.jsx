import { useState, useEffect, useRef } from "react";

// create initial translate offset to randomly position cards created
const getRandomOffset = (maxX, maxY) => {
  const variationX = 100;
  const variationY = 20;
  const offsetX = Math.random() * variationX - variationX * 2;
  const offsetY = Math.random() * variationY - variationY / 2;
  const x = Math.floor(Math.random() * maxX) + offsetX;
  const y = Math.floor(Math.random() * maxY) + offsetY;
  return { x, y };
};

// create initial rotation to randomly make cards off center when created
const getRandomRotation = (maxAngle) => {
  const variation = 5; // Adjust the variation as needed
  const rotation = Math.random() * maxAngle * 2 - 15;
  return rotation + variation;
};

const FloatCard = ({
  name,
  icon,
  title,
  preview,
  colour,
  handleHover,
  zIndex,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(true);
  // const [collision, setCollision] = useState(false);
  const draggableRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // provision for mobile offset
    const maxX = window.innerWidth < 768 ? 300 : 700;
    const initialOffset = getRandomOffset(maxX, 250);
    const initialRotation = getRandomRotation(15);

    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const newPosition = {
        x: easeInOut(progress, 100, initialOffset.x, 500),
        y: easeInOut(progress, 250, initialOffset.y, 500),
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
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // check collision of a card being dragged against a HTML element, and then pass a prop
  // useEffect(() => {
  //   const checkCollision = () => {
  //     const staticDiv = document.getElementById("floatCardCup");
  //     const draggableDiv = draggableRef.current;

  //     if (!staticDiv || !draggableDiv) return;

  //     const draggableDivRect = draggableDiv.getBoundingClientRect();
  //     const staticDivRect = staticDiv.getBoundingClientRect();

  //     if (
  //       draggableDivRect.left < staticDivRect.right &&
  //       draggableDivRect.right > staticDivRect.left &&
  //       draggableDivRect.top < staticDivRect.bottom &&
  //       draggableDivRect.bottom > staticDivRect.top
  //     ) {
  //       setCollision(true);
  //     } else {
  //       setCollision(false);
  //     }
  //   };

  //   checkCollision();
  // }, [position]);

  return (
    <>
      <div
        ref={draggableRef}
        className={`float-card ${isAnimating ? "animateCard" : ""}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
          // backgroundColor: collision ? "blue" : "", // Change background color when collision is detected
          cursor: dragging ? "grabbing" : "grab",
          userSelect: dragging ? "none" : "auto",
          backgroundColor: isHovered ? colour : "", // Apply hover color dynamically
          zIndex,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={icon} alt={name} className="float-card-icon" />
        <h2>{title}</h2>
        <p>{preview}</p>
      </div>
    </>
  );
};

export default FloatCard;

// math for animation easing
function easeInOut(t, b, c, d) {
  // t: current time, b: beginning value, c: change in value, d: duration
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}
