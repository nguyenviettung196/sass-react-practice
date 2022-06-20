import React from "react";
import "./_ButtonWhite.scss";

const ButtonWhite = ({ text, color, disableAnimation }) => {
  return (
    <a
      className={`btn btn-${color}  ${
        disableAnimation ? "noanimation" : "btn-animated"
      }`}
      href="#"
    >
      {text}
    </a>
  );
};

export default ButtonWhite;
