import React from "react";
import classes from "./SectionExplore.module.scss";
import Heading from "../../ui/Heading/Heading";
import Button from "../../ui/Button/Button";
import { Link } from "react-router-dom";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { tabletSmall } from "../../../constants";
import useOpenModal from "../../../hooks/useOpenModal";

const SectionExplore: React.FC = () => {
  const isTabletSmall = useMediaQuery(tabletSmall);
  const openModalHandler = useOpenModal();

  return (
    <div className={`${classes.section} content`}>
      <div className={classes.left}>
        <Heading>
          <h1>Unleash the Next Generation of Gaming</h1>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec
          donec in morbi pulvinar. Enim non pulvinar neque.
        </p>
        <div className={classes.buttons}>
          <Button variant="contained" onClick={openModalHandler}>
            Explore More
          </Button>
          <Button variant="text" onClick={openModalHandler}>
            View our team
          </Button>
        </div>
      </div>
      <div className={classes.right}>
        <img
          src={`${process.env.PUBLIC_URL}/img/pic1.png`}
          alt="Game character - male"
        />
      </div>

      {!isTabletSmall && (
        <div className={classes.links}>
          <Link to="/" className={classes.link}>
            FACEBOOK
          </Link>
          <Link to="/" className={classes.link}>
            INSTAGRAM
          </Link>
          <Link to="/" className={classes.link}>
            TWITCH
          </Link>
        </div>
      )}
    </div>
  );
};

export default SectionExplore;
