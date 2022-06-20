import React from "react";
import "./_ColOneOfFour.scss";

const ColOneOfFour = (props) => {
  return <div className="col-1-of-4">{props.children}</div>;
};

export default ColOneOfFour;
