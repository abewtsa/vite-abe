import { useState } from "react";
import FloatCard from "./FloatCard"; // Adjust the import path as necessary

const cardData = [
  {
    name: "UX Card No.1 ",
    icon: "https://www.svgrepo.com/show/430362/ux-line-circle.svg",
    title: "This is a floating UX Card",
    content: "Content of floating UX Card",
    footer: "",
  },
  {
    name: "Front End Card",
    icon: "https://www.svgrepo.com/show/533324/code.svg",
    title: "This is a Front End Card",
    content: "A lot of code, from GPT",
    footer: "",
  },
  {
    name: "UX Card No.2",
    icon: "https://www.svgrepo.com/show/430362/ux-line-circle.svg",
    title: "Another UX Card Portfolio",
    content: "A lot of code, from GPT",
    footer: "",
  },
  {
    name: "Figma Card",
    icon: "https://www.svgrepo.com/show/532271/figma.svg",
    title: "Figma Card for Prototype portfolio",
    content: "A lot of code, from GPT",
    footer: "",
  },
  {
    name: "HOOPS Card",
    icon: "https://www.svgrepo.com/show/511300/spiral-32.svg",
    title: "This is only for HOOPS",
    content: "A lot of code, from GPT",
    footer: "",
  },
];

const FloatCardContainer = () => {
  // The initial state is set using cardData.map(() => 1), which creates an array of the same length as 'cardData',
  // with each element initialized to 1. This means initially, all cards will have a z-index of 1.
  const [zIndexes, setZIndexes] = useState(cardData.map(() => 1));

  const handleHover = (index, zIndex) => {
    console.log("Hovering over card", index, "with zIndex", zIndex);
    setZIndexes((prevZIndexes) => {
      // Create a shallow copy of the previous zIndexes array to avoid directly mutating the state.
      const newZIndexes = [...prevZIndexes];
      // Find the highest zIndex in the current array and set the zIndex of the hovered card to one more than this value.
      // This ensures that the hovered card will be brought to the front.
      newZIndexes[index] = Math.max(...prevZIndexes) + 1;
      return newZIndexes;
    });
  };

  return (
    <div id="newHeroWrapper" className="float-hero">
      <div id="floatCardContainer" style={{ width: "60%" }}>
        {cardData.map((card, index) => (
          <FloatCard
            key={index}
            {...card}
            handleHover={(zIndex) => handleHover(index, zIndex)}
            zIndex={zIndexes[index]}
          />
        ))}
      </div>

      <div id="heroCoffeeCup" className="float-hero-coffee">
        <img
          src="https://raw.githubusercontent.com/abewtsa/vite-abe/d958030cbd995c4ab5136c8afef78ae6270073d6/public/coffee_cup.svg"
          className="float-hero-coffee-svg"
          alt="Code Latte"
        />
      </div>
    </div>
  );
};

export default FloatCardContainer;
