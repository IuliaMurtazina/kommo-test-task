import React from "react";
import classes from "./ButtonClose.module.scss";
import Button from "../Button/Button";

interface ButtonCloseProps {
  onClose?: () => void;
}

const ButtonClose: React.FC<ButtonCloseProps> = ({ onClose }) => {
  return (
    <Button variant="text" className={classes["btn-close"]} onClick={onClose}>
      <div></div>
    </Button>
  );
};

export default ButtonClose;
