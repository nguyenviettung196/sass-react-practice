import React from "react";
import ButtonText from "../../components/button-text/ButtonText";
import CompositionImage from "../../components/composition/CompositionImage";
import HeadingSecondary from "../../components/heading-secondary/HeadingSecondary";
import HeadingTertiary from "../../components/heading-tertiary/HeadingTertiary";
import ColOneOfTwo from "../grid-test/col-1-of-2/ColOneOfTwo";
import Grid from "../grid-test/Grid";
import "./_AboutSection.scss";

const AboutSection = () => {
  return (
    <section className="section-about">
      <HeadingSecondary text={`Exciting tours for adventurous people`} />
      <Grid>
        <ColOneOfTwo>
          <HeadingTertiary
            text={`Your're going to fall in live with nature`}
            marginBottom="mb-small"
          />
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam
            voluptatem delectus? Dolore cupiditate dolores modi vel placeat.
            Tempora consequuntur expedita id veritatis ab! Quo, nobis rerum.
            Rem, expedita fugiat.
          </p>
          <HeadingTertiary
            text={`Live adventures like you never have before`}
            marginBottom="mb-small"
          />
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam
            voluptatem delectus? Dolore cupiditate dolores modi vel placeat.
            Tempora consequuntur expedita id veritatis ab! Quo, nobis rerum.
            Rem, expedita fugiat.
          </p>
          <ButtonText text="Learn more &rarr;" />
        </ColOneOfTwo>
        <ColOneOfTwo>
          <CompositionImage />
        </ColOneOfTwo>
      </Grid>
    </section>
  );
};

export default AboutSection;
