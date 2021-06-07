import React from "react";
import "./Button.scss";
const Button = ({ name, color, textColor, backgroundColor }) => {
  return (
    <button
      className="hero__btn"
      style={{
        backgroundColor: color,
        color: textColor,
        $nest: { "&:hover": { color: backgroundColor } },
      }}
    >
      {name}
    </button>
  );
};

export default Button;
