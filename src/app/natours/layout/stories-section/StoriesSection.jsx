import React from "react";
import HeadingSecondary from "../../components/heading-secondary/HeadingSecondary";
import Grid from "../grid-test/Grid";
import Story from "./story/Story";
import "./_StoriesSection.scss";
import PhotoOne from "../../assets/nat-8.jpg";
import PhotoTwo from "../../assets/nat-9.jpg";
import VideoMp4 from "../../assets/video.mp4";
import VideoWebm from "../../assets/video.webm";
import ButtonText from "../../components/button-text/ButtonText";
import BgVideo from "../../components/bg-video/BgVideo";

const StoriesSection = () => {
  return (
    <section className="section-stories">
      <BgVideo mp4URL={VideoMp4} webmURL={VideoWebm} />
      <HeadingSecondary text={`We make people genuinely happy`} />
      <Grid>
        <Story
          title={`I had the best week ever with my family`}
          imageUrl={PhotoOne}
          name="mary smith"
        />
      </Grid>
      <Grid>
        <Story
          title={`WOW! My life is completely different now`}
          imageUrl={PhotoTwo}
          name="jack wilson"
        />
      </Grid>
      <div className="center-text mt-huge">
        <ButtonText text="Read all stories &rarr;" />
      </div>
    </section>
  );
};

export default StoriesSection;
