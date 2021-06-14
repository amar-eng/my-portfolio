import React, { useState } from "react";
import "./Projects.scss";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Pcard from "./Pcard";
import projectList from "./projectList";

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const length = projectList.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  if (!Array.isArray(projectList) || projectList.length <= 0) {
    return null;
  }
  return (
    <>
      <h1 className="projects__title">Projects</h1>
      <section className="projects">
        <BsChevronLeft className="left-arrow" onClick={prevSlide} />
        <BsChevronRight className="right-arrow" onClick={nextSlide} />
        {projectList.map((item, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={item.id}
            >
              {index === current && (
                <Pcard
                  key={item.id}
                  title={item.title}
                  desc={item.description}
                  website={item.website}
                  code={item.code}
                  pic={item.image}
                />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Projects;
