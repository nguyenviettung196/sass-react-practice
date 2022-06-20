import React from "react";
import "./_CompositionImage.scss";
import Photo1 from "../../assets/nat-1-large.jpg";
import Photo2 from "../../assets/nat-2-large.jpg";
import Photo3 from "../../assets/nat-3-large.jpg";

const CompositionImage = () => {
  return (
    <div className="composition">
      <img
        src={Photo1}
        alt="photo1"
        className="composition__photo composition__photo--p1"
      />
      <img
        src={Photo2}
        alt="photo2"
        className="composition__photo composition__photo--p2"
      />
      <img
        src={Photo3}
        alt="photo3"
        className="composition__photo composition__photo--p3"
      />
    </div>
  );
};

export default CompositionImage;
