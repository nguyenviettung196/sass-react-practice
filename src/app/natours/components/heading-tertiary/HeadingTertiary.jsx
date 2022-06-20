import React from "react";
import "./_HeadingTertiary.scss";

const HeadingTertiary = ({ text,marginBottom }) => {
  return <h3 className={`heading-tertiary ${marginBottom}`}>{text}</h3>;
};

export default HeadingTertiary;
