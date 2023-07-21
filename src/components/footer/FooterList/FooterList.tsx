import React from "react";
import classes from "./FooterList.module.scss";
import { Link } from "react-router-dom";

interface FooterListProps {
  data: {
    title: string;
    links: string[];
  };
}

const FooterList: React.FC<FooterListProps> = ({ data }) => {
  return (
    <div className={classes["list-container"]}>
      <p>{data.title}</p>
      <ul className={classes.list}>
        {data.links.map((link, index) => (
          <li key={index}>
            <Link to="/">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
