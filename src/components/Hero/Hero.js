import React from "react";
import "./Hero.scss";
import HeroCard from "./HeroCard";
import HeroContent from "./HeroContent";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container"></div>
      <HeroCard />
      <HeroContent />
    </div>
  );
};

export default Hero;
