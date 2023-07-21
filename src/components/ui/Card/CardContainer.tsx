import React from "react";
import classes from "./CardContainer.module.scss";
import Card from "./Card";

export interface CardData {
  img: string;
  date: string;
  title: string;
  id: string;
}

interface CardContainerProps {
  data: CardData[];
}

const CardContainer: React.FC<CardContainerProps> = ({ data }) => {
  return (
    <div className={classes.container}>
      {data.map((item) => (
        <Card
          img={item.img}
          date={item.date}
          title={item.title}
          id={item.id}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default CardContainer;
