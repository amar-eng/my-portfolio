import React from "react";
import { Link, Route } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import projectList from "./projectList";
import Git from "../../assets/icons/git.png";
import Chrome from "../../assets/icons/chrome.png";
import "./Pcard.scss";
const Pcard = ({ key, title, desc, website, code }) => {
  return (
    <div className="cards">
      <div className="pCard">
        <div className="pCard__title">{title}</div>
        <div className="pCard__desc">{desc}</div>
        <div>
          <img
            src={Git}
            onClick={() => window.open(`${code}`)}
            className="pCard__icons git"
          />
          <img
            src={Chrome}
            onClick={() => window.open(`${website}`)}
            className="pCard__icons git"
          />
        </div>
      </div>
    </div>
  );
};

export default Pcard;
