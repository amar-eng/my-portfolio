import React from "react";
import "./HeroCard.scss";

const HeroCard = () => {
  return (
    <div className="card">
      <div className="card__image" />
      <div className="card__info">
        <h2 className="card__name">Amar Mohamud</h2>
        <h2 className="card__title">Software Engineer</h2>
      </div>
    </div>
  );
};

export default HeroCard;
