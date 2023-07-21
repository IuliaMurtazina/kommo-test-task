import React from "react";
import classes from "./Card.module.scss";
import { CardData } from "./CardContainer";

const Card: React.FC<CardData> = ({ img, date, title }) => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={`${process.env.PUBLIC_URL}/img/${img}`} alt="Card" />
      </div>
      <p className={classes.date}>{date}</p>
      <p className={classes.title}>{title}</p>
    </div>
  );
};

export default Card;
