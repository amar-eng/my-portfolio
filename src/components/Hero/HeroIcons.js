import React from "react";
import Linkden from "../../assets/icons/link.png";
import Git from "../../assets/icons/git.png";
import "./HeroIcons.scss";
const HeroIcons = () => {
  return (
    <div className="heroIcons">
      <img src={Git} className="heroIcons__image" alt="Github" />
      <img src={Linkden} className="heroIcons__image" alt="Linkedin" />
    </div>
  );
};

export default HeroIcons;
