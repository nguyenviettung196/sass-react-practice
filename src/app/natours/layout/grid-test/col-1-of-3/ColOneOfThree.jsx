import React from "react";
import "./_ColOneOfThree.scss";

const ColOneOfThree = (props) => {
  return <div className="col-1-of-3">{props.children}</div>;
};

export default ColOneOfThree;
