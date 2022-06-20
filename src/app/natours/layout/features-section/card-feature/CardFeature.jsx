import React from "react";
import HeadingTertiary from "../../../components/heading-tertiary/HeadingTertiary";
import ColOneOfFour from "../../grid-test/col-1-of-4/ColOneOfFour";
import "./_CardFeature.scss";

const CardFeature = ({ icon, title }) => {
  return (
    <ColOneOfFour>
      <div className="feature-box">
        <i className={`feature-box__icon ${icon}`}></i>

        <HeadingTertiary text={title} marginBottom="mb-small" />
        <p className="feature-box__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          qui, autem accusantium libero quasi vel, facilis quis consectetur.
        </p>
      </div>
    </ColOneOfFour>
  );
};

export default CardFeature;
