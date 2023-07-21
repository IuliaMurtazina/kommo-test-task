import React from "react";
import classes from "./SideMenu.module.scss";
import HeaderLinks from "../HeaderLinks/HeaderLinks";
import HeaderActions from "../HeaderActions/HeaderActions";
import ButtonClose from "../../ui/ButtonClose/ButtonClose";

interface SideMenuProps {
  isTabletBig: boolean;
  isMenuOpen?: boolean;
  isTabletSmall?: boolean;
  onClose?: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({
  isMenuOpen,
  isTabletBig,
  isTabletSmall,
  onClose,
}) => {
  return (
    <div
      className={`${classes.menu} ${isMenuOpen ? classes.open : classes.close}`}
    >
      <HeaderLinks isTabletBig={isTabletBig} onClose={onClose} />

      {isTabletSmall && <HeaderActions />}
      <ButtonClose onClose={onClose} />
    </div>
  );
};

export default SideMenu;
