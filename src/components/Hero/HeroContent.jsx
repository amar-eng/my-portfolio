import React from "react";
import Button from "../Button/Button";
import "./HeroContent.scss";
const HeroContent = () => {
  return (
    <div className="heroContent">
      <h1 className="heroContent__title">Hello</h1>
      <Button name="Resume" color="rgb(220, 206, 194)" textColor="#05203b" />
      <Button name="Projects" color="#05203b" textColor="rgb(220, 206, 194)" />
      <p className="heroContent__text">
        Hi, I am Amar, a <span>Software Engineer</span> and
        <span> Innovator</span> based in Toronto.
      </p>
      <p className="heroContent__text">
        I enjoy creating things & re-inventing the wheel whether it be
        programming Javascript applications or finding solutions to real world
        problems.
      </p>
    </div>
  );
};

export default HeroContent;
