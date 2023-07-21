import React from "react";
import classes from "./SectionCustomize.module.scss";
import Heading from "../../ui/Heading/Heading";
import Slider from "../../slider/Slider";

const SectionCustomize = () => {
  return (
    <div className={`${classes.section} content`}>
      <div className={classes.left}>
        <img
          src={`${process.env.PUBLIC_URL}/img/pic2.png`}
          alt="Game character - male"
        />
      </div>
      <div className={classes.right}>
        <Heading>
          <h2>Customize your Own Character</h2>
        </Heading>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae.
        </p>
        <Slider />
      </div>
    </div>
  );
};

export default SectionCustomize;
