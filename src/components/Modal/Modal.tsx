import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import clsx from "clsx";

import { ModalContext } from '@Context/ModalContext/ModalContext';
import { classModifier } from '@Utils/index';

import Default from "./components/Default/Default";
import classes from './Modal.module.scss';
import SvgIcon from "@Components/SvgIcon/SvgIcon";


const Modal = () => {
  const { modalState, closeModal } = useContext(ModalContext);
  const {
    modal,
    isOpen,
  } = modalState;
  const doClosingWhenOutsideClick = modal.doClosingWhenOutsideClick ?? true;
  const isClosable = modal.isClosable ?? true;

  const modalWrapRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => { // close on click or keydown
    if (isOpen && doClosingWhenOutsideClick) {
      const onClick = (e: MouseEvent) => {
        const isClickOnOutside = e.target === modalWrapRef.current;

        if (isClickOnOutside) {
          handleCloseModal();
        }
      };
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleCloseModal();
        }
      }
      document.addEventListener('mousedown', onClick);
      document.addEventListener('keydown', onKeyDown);

      return () => {
        document.removeEventListener('mousedown', onClick);
        document.removeEventListener('keydown', onKeyDown);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, modal.onCloseModal, doClosingWhenOutsideClick]);

  useEffect(() => { // hide scroll on page
    if (modalState.isOpen) {
      document.body.classList.add("overflow--hidden");

      return () => {
        document.body.classList.remove("overflow--hidden");
      }
    }
  }, [modalState.isOpen])

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    return null;
  }

  const handleCloseModal = () => {
    closeModal();
    modal.onCloseModal?.();
  };

  return ReactDOM.createPortal(
    <div
      className={clsx(classes.modalWrap, [!isOpen && classes.closed])}
      ref={modalWrapRef}
    >
      <div className={classModifier(classes.modal, modal.classModifier)}>
        {isClosable &&
          <button
            className={classes.closeBtn}
            onClick={handleCloseModal}
          >
            <SvgIcon icon='cross' svgSize={24} />
          </button>
        }

        {modal.type === 'default' && <Default config={modal} />}
      </div>
    </div>,
    modalRoot
  )
};

export default Modal;
