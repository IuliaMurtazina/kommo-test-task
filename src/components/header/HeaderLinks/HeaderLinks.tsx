import React from "react";
import classes from "./HeaderLinks.module.scss";
import { NavLink } from "react-router-dom";

interface HeaderLinksProps {
  isTabletBig: boolean;
  onClose?: () => void;
}

const LINKS_DATA = [
  { path: "/", title: "Home" },
  { path: "about", title: "About" },
  { path: "team", title: "Team" },
  { path: "shop", title: "Shop" },
  { path: "pages", title: "Pages" },
];

const HeaderLinks: React.FC<HeaderLinksProps> = ({ onClose, isTabletBig }) => {
  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? classes.active : classes.link;

  const closeMenuHandler = isTabletBig ? onClose : () => {};

  return (
    <div className={classes.links}>
      {LINKS_DATA.map((link, index) => (
        <NavLink
          to={link.path}
          className={linkClassName}
          onClick={closeMenuHandler}
          key={index}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default HeaderLinks;
