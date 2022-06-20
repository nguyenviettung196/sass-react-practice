import React from "react";
import Grid from "../grid-test/Grid";
import CardFeature from "./card-feature/CardFeature";
import "./_FeaturesSection.scss";

const FeaturesSection = () => {
  return (
    <section className="section-features">
      <Grid>
        <CardFeature icon="icon-basic-world" title="Explore the world" />
        <CardFeature icon="icon-basic-compass" title="Meet nature" />
        <CardFeature icon="icon-basic-map" title="Find your way" />
        <CardFeature icon="icon-basic-heart" title="Live a healthier life" />
      </Grid>
    </section>
  );
};

export default FeaturesSection;
