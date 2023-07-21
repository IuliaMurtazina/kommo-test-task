import React, { ReactNode } from "react";
import classes from "./Heading.module.scss";

interface HeadingProps {
  children: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <div className={classes.heading}>
      <div className={classes.slogan}>
        <img src={`${process.env.PUBLIC_URL}/img/fire.svg`} alt="Fire" />
        <span>FUTURE OF eSPORTS</span>
      </div>
      {children}
    </div>
  );
};

export default Heading;
