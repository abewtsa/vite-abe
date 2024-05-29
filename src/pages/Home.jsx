import { useState } from "react";
import FloatCardContainer from "../components/FloatCardContainer.jsx";
import HeroCard from "../components/HeroCard.jsx";

export default function Home() {
  return (
    <>
      <HeroCard />
      <FloatCardContainer />
    </>
  );
}
