import React from "react";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import "./Timeline.scss";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  let workIconStyles = { background: "rgb(204, 226, 233)" };
  let schoolIconStyles = { background: "rgb(198, 177, 159)" };
  return (
    <div className="timeline">
      <h1 className="title">Resume</h1>
      <VerticalTimeline className="timelineBody">
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p className="timeline__description">{element.description}</p>
              {showButton && (
                <a
                  className={`timelineButton ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  onClick={() => window.open(`${element.link}`)}
                  style={{ cursor: "pointer" }}
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
