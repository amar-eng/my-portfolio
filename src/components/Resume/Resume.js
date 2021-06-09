import React from "react";
import Button from "../Button/Button";
import Timeline from "../Timeline/Timeline";
import Skills from "./Skills";
import "./Resume.scss";
const Resume = () => {
  return (
    <div>
      <Timeline />
      <Button
        name="Download Resume"
        color="#05203b"
        textColor="rgb(220, 206, 194)"
        className="resumeButton"
      />
      <Skills />
    </div>
  );
};

export default Resume;
