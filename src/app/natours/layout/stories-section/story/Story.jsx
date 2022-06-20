import React from "react";
import HeadingTertiary from "../../../components/heading-tertiary/HeadingTertiary";
import "./_Story.scss";
const Story = ({ title, imageUrl, name }) => {
  return (
    <div className="story">
      <figure className="story__shape">
        <img src={imageUrl} alt="person on a tour " className="story__img" />
        <figcaption className="story__caption">{name}</figcaption>
      </figure>
      <div className="story__text">
        <HeadingTertiary text={title} marginBottom="mb-small" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          numquam amet inventore autem quos dicta consequuntur? Dicta veniam,
          eaque perspiciatis omnis, eos est nemo placeat numquam fugit eaque
          perspiciatis omnis, eos est nemo placeat numquam fugit consectetur,
          aut asperiores.
        </p>
      </div>
    </div>
  );
};

export default Story;
