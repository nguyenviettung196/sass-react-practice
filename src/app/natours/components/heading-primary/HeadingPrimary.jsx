import React from "react";
import ButtonWhite from "../button-white/ButtonWhite";
import "./_HeadingPrimary.scss";

const HeadingPrimary = (props) => {
  return (
    <div className="text-box">
      <h1 className="heading-primary">
        <span className="heading-primary-main">{props.mainText}</span>
        <span className="heading-primary-sub">{props.subText}</span>
      </h1>
      {props.children}
    </div>
  );
};

export default HeadingPrimary;
