import { useState, useEffect, useRef } from "react";

// Creates a random offset for initial card positioning with maxX and maxY limits
const getRandomOffset = (maxX, maxY) => {
  const variationX = 100;
  const variationY = 20;
  const offsetX = Math.random() * variationX - variationX * 2;
  const offsetY = Math.random() * variationY - variationY / 2;
  const x = Math.floor(Math.random() * maxX) + offsetX;
  const y = Math.floor(Math.random() * maxY) + offsetY;
  return { x, y };
};

// Generates a random rotation within a specified maximum angle, which is provided below
const getRandomRotation = (maxAngle) => {
  const variation = 5; // Adjust the variation as needed
  const rotation = Math.random() * maxAngle * 2 - maxAngle;
  return rotation + variation;
};

// FloatCard component definition
const FloatCard = ({
  name,
  icon,
  iconReverse,
  title,
  year,
  preview,
  colour,
  textColour,
  handleHover,
  zIndex,
  delay = 0, // New delay prop with default value 0
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false); // New state variable
  const draggableRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // useEffect to wrap and execute an animation function using requestAnimationFrame browser API, that updates itself every frame paint for the animation
  useEffect(() => {
    // Set initial offset and rotation for card animation based on viewport size
    const maxX = window.innerWidth < 768 ? 240 : 600;
    const mobileValue = 150;
    const desktopValue = 200;
    const initialOffset =
      window.innerWidth < 768
        ? getRandomOffset(maxX, mobileValue)
        : getRandomOffset(maxX, desktopValue);
    const initialRotation = getRandomRotation(20);

    let startTime;
    let animationFrameId;

    // Animation function using requestAnimationFrame API for smooth card animation
    // This function is automatically called by the browser to animate the card, utilizing a high-resolution timestamp (timestamp) for accurate timing.

    // When requestAnimationFrame schedules the animate function:
    // - The browser passes a DOMHighResTimeStamp (timestamp) indicating the current time of execution.
    // - This ensures precise animation timing synced with the browser's repaint cycle.

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      //animation 'controller' start and stop
      if (progress > 0 && !animationStarted) {
        setAnimationStarted(true);
      }

      // VALUE NOTES: progress -> the duration of the animation, 100 -> point of origin, initialoffset -> the calculated offset for respective axis, 800 -> the duration of animation
      //position values, provide easeInOut with animation values
      const newPosition = {
        x: easeInOut(progress, 100, initialOffset.x + 50, 800),
        y: easeInOut(progress, 900, -(initialOffset.y + 420), 800),
      };

      //rotation values
      const newRotation = easeInOut(progress, 0, initialRotation, 800);

      setPosition(newPosition);
      setRotation(newRotation);

      // continue animation, for length of progress
      if (progress < 800) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    //Calling the requestAnimationFrame API which is a method provided by modern web browsers that allows you to schedule a function to be called before the next repaint or redraw of the webpage. It's designed specifically for animations and other tasks that require smooth, high-performance updates to the user interface.
    const startAnimation = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    // Apply delay before starting the animation
    const delayTimeout = setTimeout(startAnimation, delay);

    // useEffect clean up
    return () => {
      clearTimeout(delayTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [delay, animationStarted]);

  // useEffect to store one time state between each mouse or touch events
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

  // Mouse event handler for mouse events
  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  // Touch event handler for touch devices
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setDragging(true);
    setOffset({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
    handleHover(zIndex); // Handle hover behavior on touch start
    setIsHovered(true); // Set hovered state on touch start
  };

  const handleMouseEnter = () => {
    handleHover(zIndex);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchEndHover = () => {
    setIsHovered(false);
  };

  // returning JSX for rendering the FloatCard component
  return (
    <>
      <div
        ref={draggableRef}
        className={`float-card ${isAnimating ? "animateCard" : ""}`}
        style={{
          display: animationStarted ? "block" : "none", // Conditionally apply display: none
          transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
          cursor: dragging ? "grabbing" : "grab",
          userSelect: dragging ? "none" : "auto",
          backgroundColor: isHovered ? colour : "", // Apply hover color dynamically
          zIndex,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchEnd={handleTouchEndHover}
      >
        <img
          src={isHovered ? iconReverse : icon}
          alt=""
          className="float-card-icon"
        />
        <span
          className="float-card-year"
          style={{ color: isHovered ? textColour : "" }}
        >
          {year}
        </span>
        <h2 style={{ color: isHovered ? textColour : "" }}>{title}</h2>
        <h3 style={{ color: isHovered ? textColour : "" }}>{preview}</h3>
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
