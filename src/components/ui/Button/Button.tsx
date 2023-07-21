import React, { ReactNode } from "react";
import classes from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  variant: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  className,
  onClick,
}) => {
  return (
    <button
      className={`${classes.btn} ${classes[`btn__${variant}`]} 
      ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
