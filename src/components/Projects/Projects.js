import React from "react";
import me from "../../assets/pics/me.jpg";
import "./Projects.scss";
const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects">
        <p className="projects__title">
          Studio Glam
          <span>Hover Over ME</span>
          <img src={me} alt="me" className="projects__pic" />
        </p>
      </div>
    </div>
  );
};

export default Projects;
