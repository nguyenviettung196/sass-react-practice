import React from "react";
import ButtonWhite from "../../components/button-white/ButtonWhite";
import HeadingSecondary from "../../components/heading-secondary/HeadingSecondary";
import ColOneOfThree from "../grid-test/col-1-of-3/ColOneOfThree";
import Grid from "../grid-test/Grid";
import TourCard from "./tour-card/TourCard";
import "./_TourSection.scss";

const cardOne = [
  "3 day tours",
  "Up to 30 people",
  "2 tour giudes",
  "Sleep incozy hotels",
  "Difficulty: easy",
];
const cardTwo = [
  "7 day tour",
  "Up to 40 people",
  "6 tour guides",
  "Sleep in provided tents",
  "Difficulty:medium",
];
const cardThree = [
  "5 day tour",
  "Up to 15 people",
  "3 tour guides",
  "Sleep in privided tents",
  "Difficulty:hard",
];

const TourSection = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text mb-big">
        <HeadingSecondary text="Most popular tours" />
      </div>
      <Grid>
        <ColOneOfThree>
          <TourCard
            type="1"
            heading="The sea explorer"
            lists={cardOne}
            price="299"
          />
        </ColOneOfThree>
        <ColOneOfThree>
          <TourCard
            type="2"
            heading="The forest hiker"
            lists={cardTwo}
            price="399"
          />
        </ColOneOfThree>
        <ColOneOfThree>
          <TourCard
            type="3"
            heading="the snow adventurer"
            lists={cardThree}
            price="499"
          />
        </ColOneOfThree>
      </Grid>
      <div className="center-text mt-huge">
        <ButtonWhite text={`Discover all tours`} color="green" />
      </div>
    </section>
  );
};

export default TourSection;
