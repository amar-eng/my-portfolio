import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import Button from "../Button/Button";
import "./HeroContent.scss";
import HeroIcons from "./HeroIcons";
const HeroContent = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1700,
      backSpeed: 80,

      strings: [
        "Developer",
        "Mentor",
        "Entrepreneur",
        "Full-Time Colognoisseur",
      ],
    });
  }, []);
  return (
    <div className="heroContent">
      <h1 className="heroContent__title">Hello</h1>
      <Button name="Resume" color="rgb(220, 206, 194)" textColor="#05203b" />
      <Button name="Projects" color="#05203b" textColor="rgb(220, 206, 194)" />
      <p className="heroContent__text">
        I'm Amar, a <span ref={textRef}></span> based in Toronto.
      </p>
      <p className="heroContent__text">
        I enjoy creating things & re-inventing the wheel whether it be
        programming Javascript applications or finding solutions to real world
        problems.
      </p>
      <HeroIcons />
    </div>
  );
};

export default HeroContent;
