import React from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "./SectionNews.module.scss";
import Heading from "../../ui/Heading/Heading";
import Button from "../../ui/Button/Button";
import CardContainer from "../../ui/Card/CardContainer";
import useOpenModal from "../../../hooks/useOpenModal";

const CARDS_DATA = [
  {
    img: `card1.png`,
    date: "April 2, 2021",
    title: "Esports Group teams up with the Indianapolis Colts",
    id: uuidv4(),
  },
  {
    img: `card2.png`,
    date: "April 2, 2021",
    title: "NAVI reveals s1mple fifth anniversary",
    id: uuidv4(),
  },
  {
    img: `card3.png`,
    date: "April 2, 2021",
    title: "A1esports Shares new picture",
    id: uuidv4(),
  },
  {
    img: `card4.png`,
    date: "April 2, 2021",
    title: "T1 unveil partnership with Razer",
    id: uuidv4(),
  },
  {
    img: `card5.png`,
    date: "April 2, 2021",
    title: "RX secures content partnership with",
    id: uuidv4(),
  },
];

const SectionNews: React.FC = () => {
  const openModalHandler = useOpenModal();

  return (
    <div className={`${classes.section} content`}>
      <div className={classes.top}>
        <Heading>
          <h2>Latest News & Articles</h2>
        </Heading>
        <Button variant="contained" onClick={openModalHandler}>
          Read More
        </Button>
      </div>
      <div className={classes.bottom}>
        <CardContainer data={CARDS_DATA} />
      </div>
    </div>
  );
};

export default SectionNews;
