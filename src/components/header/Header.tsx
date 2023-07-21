import React, { useState } from "react";
import classes from "./Header.module.scss";
import Button from "../ui/Button/Button";
import useMediaQuery from "../../hooks/useMediaQuery";
import { tabletBig, tabletSmall } from "../../constants";
import HeaderLinks from "../header/HeaderLinks/HeaderLinks";
import { createPortal } from "react-dom";
import SideMenu from "../header/SideMenu/SideMenu";
import Actions from "../header/HeaderActions/HeaderActions";

const Header: React.FC = () => {
  const isTabletBig = useMediaQuery(tabletBig);
  const isTabletSmall = useMediaQuery(tabletSmall);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
    document.querySelector("html")!.classList.add("overflow-hidden");
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
    document.querySelector("html")!.classList.remove("overflow-hidden");
  };

  return (
    <header className={`${classes.header} content`}>
      {isTabletBig && (
        <Button
          variant="text"
          className={classes["burger-menu"]}
          onClick={openMenuHandler}
        >
          <div className={classes.burger}></div>
        </Button>
      )}
      <img
        src={`${process.env.PUBLIC_URL}/img/logo.png`}
        className={classes.logo}
        alt="Logo"
      />

      {!isTabletBig && <HeaderLinks isTabletBig={isTabletBig} />}
      {isTabletBig &&
        createPortal(
          <SideMenu
            isMenuOpen={isMenuOpen}
            isTabletBig={isTabletBig}
            isTabletSmall={isTabletSmall}
            onClose={closeMenuHandler}
          />,
          document.getElementById("modal-root")!,
        )}

      {!isTabletSmall && <Actions />}
    </header>
  );
};

export default Header;
