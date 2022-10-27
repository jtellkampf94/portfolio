import { ReactNode } from "react";
import ReactDOM from "react-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { BsCheckCircle } from "react-icons/bs";
import React from "react";

interface ModalProps {
  open: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, open, closeModal }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal__overlay" />
      <OutsideClickHandler onOutsideClick={closeModal}>
        <div className="modal__container">
          <div className="modal__button-container">
            <BsCheckCircle className="modal__check" />
            <button onClick={closeModal}>&#10006;</button>
          </div>
          <div className="modal__body">{children}</div>
        </div>
      </OutsideClickHandler>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modal;
