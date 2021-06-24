import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import pdf from "../../assets/pdf/Amar.pdf";
import "../Contact/Contact.scss";
import Button from "../Button/Button";
import "./HeroContent.scss";
import "../Button/Button.scss";
import HeroIcons from "./HeroIcons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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
          backgroundColor: "#05203b",
          color: "rgb(220, 206, 194)",
        }}
      >
        Projects
      </button>

      <p className="heroContent__text">
        I'm Amar, a <span className="textspan" ref={textRef}></span> based in
        Toronto.
      </p>
      <p className="heroContent__text">
        I enjoy creating things & re-inventing the wheel whether it be
        programming Javascript applications or finding solutions to real world
        problems.
      </p>
      {/* <HeroIcons /> */}
      <div className="socials">
            <a className="icon-circle">
              <AiFillGithub
                style={{
                  color: "#4078c0",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
                onClick={() => window.open(`https://github.com/amar-eng`)}
              />
            </a>
            <a className="icon-circle">
              <AiFillLinkedin
                style={{
                  color: " #0e76a8",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open(`https://www.linkedin.com/in/amar-mohamud/`)
                }
              />
            </a>
          </div>
    </div>
  );
};

export default HeroContent;
