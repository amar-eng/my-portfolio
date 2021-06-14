import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import pdf from "../../assets/pdf/Amar.pdf";
import Button from "../Button/Button";
import "./HeroContent.scss";
import "../Button/Button.scss";
import HeroIcons from "./HeroIcons";
const HeroContent = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1000,
      startDelay: 500,
      cursorChar: "|",
      backSpeed: 50,
      typeSpeed: 120,
      strings: ["Developer", "Mentor", "Entrepreneur", "Colognoisseur"],
    });
  }, []);

  return (
    <div className="heroContent">
      <h1 className="heroContent__title">Hello</h1>

      {/* <Button
        onClick={console.log(12)}
        name="Resume"
        color="rgb(220, 206, 194)"
        textColor="#05203b"
      /> */}

      <button
        className="hero__btn"
        onClick={() => window.open(`${pdf}`)}
        style={{
          backgroundColor: "#05203b",
          color: "rgb(220, 206, 194)",
        }}
      >
        Resume
      </button>
      <button
        className="hero__btn"
        style={{
          backgroundColor: "rgb(220, 206, 194)",
          color: "#05203b",
        }}
      >
        Projects
      </button>

      {/* <Button name="Projects" color="#05203b" textColor="rgb(220, 206, 194)" /> */}
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
