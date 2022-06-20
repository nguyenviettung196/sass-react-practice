import React from "react";
import "./_ColTwoOfThree.scss";

const ColTwoOfThree = (props) => {
  return <div className="col-2-of-3">{props.children}</div>;
};

export default ColTwoOfThree;
