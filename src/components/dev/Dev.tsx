import React from "react";
import classes from "./Dev.module.scss";

const Dev: React.FC = () => {
  return (
    <div className={`${classes.dev} content`}>
      <p>This page is under construction!</p>
      <p>Thanks for understanding :)</p>
    </div>
  );
};

export default Dev;
