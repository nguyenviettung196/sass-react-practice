import React from "react";
import ButtonWhite from "../../../components/button-white/ButtonWhite";
import "./_TourCard.scss";

const TourCard = ({ type, heading, lists, price }) => {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture--${type}`}>&nbsp;</div>
        <h4 className="card__heading">
          <span className={`card__heading-span card__heading-span--${type}`}>
            {heading}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            {lists?.map((list,i) => (
              <li key={i}>{list}</li>
            ))}
            {/* <li>3 day tours</li>
            <li>Up to 30 people</li>
            <li>2 tour giudes</li>
            <li>Sleep incozy hotels</li>
            <li>Difficulty: easy</li> */}
          </ul>
        </div>
      </div>
      <div className={`card__side card__side--back card__side--back-${type}`}>
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">$ {price}</p>
          </div>
          <ButtonWhite text="Book now!" color={`white`} />
        </div>
      </div>
    </div>
  );
};

export default TourCard;
