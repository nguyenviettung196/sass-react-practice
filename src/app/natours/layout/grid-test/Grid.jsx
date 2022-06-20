import React from "react";
import ColOneOfTwo from "./col-1-of-2/ColOneOfTwo";
import ColOneOfThree from "./col-1-of-3/ColOneOfThree";
import ColOneOfFour from "./col-1-of-4/ColOneOfFour";
import "./_Grid.scss";

const Grid = (props) => {
  return (
    <>
      <div className="row">{props.children}</div>
      {/* <div className="row">
        <ColOneOfTwo />
        <ColOneOfTwo />
      </div>
      <div className="row">
        <ColOneOfThree />
        <ColOneOfThree />
        <ColOneOfThree />
      </div>
      <div className="row">
        <ColOneOfFour />
        <ColOneOfFour />
        <ColOneOfFour />
        <ColOneOfFour />
      </div>
      <div className="row">
        <div className="col-1-of-3">Col 1 of 3</div>
        <div className="col-2-of-3">Col 2 of 3</div>
      </div>
      <div className="row">
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-3-of-4">Col 3 of 4</div>
      </div>
      <div className="row">
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-2-of-4">Col 2 of 4</div>
      </div> */}
    </>
  );
};

export default Grid;
