import React from "react";
import me from "../../assets/pics/me.jpg";
import "./Projects.scss";
import ProjectCarousel from "./ProjectCarousel";
import Pcard from "./Pcard";
import projectList from "./projectList";
const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects__title">Projects</h1>
      {projectList.map((item) => {
        return (
          <Pcard
            key={item.id}
            title={item.title}
            desc={item.description}
            website={item.website}
            code={item.code}
          />
        );
      })}
    </div>
  );
};

export default Projects;
