import React from "react";
import Git from "../../assets/icons/git.png";
import Chrome from "../../assets/icons/chrome.png";
import "./Modal.scss";
const Modal = ({ title, desc, website, code, setSelected }) => {
  const handleClick = (e) => {
    setSelected(false);
  };
  return (
    <div className="cardBackdrop">
      <div className="top-card cardBackdrop__content">
        <span onClick={handleClick}>X</span>
        <div className="cardBackdrop__title">Project : {title}</div>
        <div className="cardBackdrop__desc">{desc}</div>
        <div>
          <img
            src={Git}
            onClick={() => window.open(`${code}`)}
            className="cardBackdrop__icons "
          />
          <img
            src={Chrome}
            onClick={() => window.open(`${website}`)}
            className="cardBackdrop__icons "
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
