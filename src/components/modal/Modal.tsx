import React from "react";
import classes from "./Modal.module.scss";
import ButtonClose from "../ui/ButtonClose/ButtonClose";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { SET_MODAL_CLOSE } from "../../store/reducers/ui";

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isModalOpen } = useAppSelector((state) => state.ui);

  const closeModalHandler = () => {
    dispatch(SET_MODAL_CLOSE());
    const bodyElement = document.querySelector("body")!;

    bodyElement.classList.remove("overflow-hidden");
    bodyElement.style.paddingRight = "0";
  };

  return (
    <>
      <div
        className={`${classes.overlay} ${
          isModalOpen ? classes.open : classes.close
        }`}
      ></div>

      <div
        className={`${classes.modal} ${
          isModalOpen ? classes.open : classes.close
        }`}
      >
        <div className={classes["modal__content"]}>
          <p className={classes.title}>This window is under construction!</p>
          <p>Thanks for understanding :)</p>
        </div>
        <ButtonClose onClose={closeModalHandler} />
      </div>
    </>
  );
};

export default Modal;
