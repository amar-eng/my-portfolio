import React, { useState } from "react";
// import { BsChevronDown } from "react-icons/bs";
import Git from "../../assets/icons/git.png";
import Chrome from "../../assets/icons/chrome.png";
import "./Pcard.scss";
import "./Modal.scss";

const Pcard = ({ key, title, desc, website, code, pic }) => {
  return (
    <div className="cards">
      <div className="pCard">
        <img src={pic} alt={title} className="pCard__pic" />
        <div className="pCard__title">{title}</div>
        <div className="pCard__desc">{desc}</div>
        <div>
          <img
            src={Git}
            onClick={() => window.open(`${code}`)}
            className="pCard__icons "
          />
          <img
            src={Chrome}
            onClick={() => window.open(`${website}`)}
            className="pCard__icons "
          />
        </div>
      </div>
    </div>
  );
};

export default Pcard;
