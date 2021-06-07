import React, { useEffect, useRef } from "react";
import "./HeroCard.scss";
import { init } from "ityped";
const HeroCard = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 40,
      strings: ["Developer", "Mentor", "Entrepreneur"],
    });
  }, []);
  return (
    <div className="card">
      <div className="card__image" />
      <h2 className="card__name">Amar Mohamud</h2>
      <h2 ref={textRef} className="card__title"></h2>
    </div>
  );
};

export default HeroCard;
