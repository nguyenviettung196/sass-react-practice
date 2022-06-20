import React from "react";
import "./_ColOneOfTwo.scss";

const ColOneOfTwo = (props) => {
  return <div className="col-1-of-2">{props.children}</div>;
};

export default ColOneOfTwo;
