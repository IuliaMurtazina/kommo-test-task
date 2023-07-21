import React from "react";
import classes from "./HeaderActions.module.scss";
import Button from "../../ui/Button/Button";
import useOpenModal from "../../../hooks/useOpenModal";

const HeaderActions = () => {
  const openModalHandler = useOpenModal();

  return (
    <div className={classes.actions}>
      <Button
        variant="text"
        className={classes.cart}
        onClick={openModalHandler}
      >
        <img src={`${process.env.PUBLIC_URL}/img/cart.svg`} alt="" />
        <div className={classes.count}>0</div>
      </Button>
      <Button variant="outlined" onClick={openModalHandler}>
        Contact Us
      </Button>
    </div>
  );
};

export default HeaderActions;
