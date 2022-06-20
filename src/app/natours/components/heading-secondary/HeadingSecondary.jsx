import React from "react";
import "./_HeadingSecondary.scss";

const HeadingSecondary = ({ text }) => {
  return (
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">{text}</h2>
    </div>
  );
};

export default HeadingSecondary;
