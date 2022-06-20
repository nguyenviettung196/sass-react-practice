import React from "react";
import ButtonWhite from "../../components/button-white/ButtonWhite";
import HeadingSecondaryV2 from "../../components/heading-secondary/HeadingSecondaryV2";
import Grid from "../grid-test/Grid";
import FormGroup from "./form/FormGroup";
import InputField from "./form/InputField";
import RadioField from "./form/RadioField";
import "./_BookSection.scss";

const BookSection = () => {
  return (
    <section className="section-book">
      <Grid>
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="mb-medium">
                <HeadingSecondaryV2 text={`Start booking now`} />
              </div>
              <InputField placeholder={`Full name`} type="text" />
              <InputField placeholder={`Email address`} type="email" />
              <div className="mb-medium">
                <FormGroup>
                  <RadioField text="Small tour group" forField={`small`} />
                  <RadioField text="Large tour group" forField={`large`} />
                </FormGroup>
              </div>
              <FormGroup>
                <ButtonWhite
                  color={`green`}
                  text="Next step &rarr;"
                  disableAnimation={true}
                />
              </FormGroup>
            </form>
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default BookSection;
