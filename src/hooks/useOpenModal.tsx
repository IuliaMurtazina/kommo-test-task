import { useAppDispatch } from "../store/hooks";
import { SET_MODAL_OPEN } from "../store/reducers/ui";

const useOpenModal = () => {
  const dispatch = useAppDispatch();

  const openModalHandler = () => {
    dispatch(SET_MODAL_OPEN());
    const paddingOffset = `${window.innerWidth - document.body.clientWidth}px`;
    const bodyElement = document.querySelector("body")!;
    bodyElement.classList.add("overflow-hidden");
    
    if (bodyElement.classList.contains("overflow-hidden")) {
      bodyElement.style.paddingRight = paddingOffset;
    }
  };

  return openModalHandler;
};

export default useOpenModal;
