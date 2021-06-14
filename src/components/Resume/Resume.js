import React from "react";
import Button from "../Button/Button";
import Timeline from "../Timeline/Timeline";
import Skills from "./Skills";
import "../Button/Button.scss";
import pdf from "../../assets/pdf/Amar.pdf";
import "./Resume.scss";
const Resume = () => {
  return (
    <div>
      <Timeline />
      <button
        className="hero__btn"
        onClick={() => window.open(`${pdf}`)}
        style={{
          backgroundColor: "#05203b",
          color: "rgb(220, 206, 194)",
          marginLeft: "5rem",
          marginBottom: "5rem",
        }}
      >
        Download Resume
      </button>
      <Skills />
    </div>
  );
};

export default Resume;
