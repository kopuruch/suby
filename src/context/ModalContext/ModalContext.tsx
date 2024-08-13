import React, { createContext, useCallback, useEffect, useState } from 'react';

import { IModalContextContext, IModalState, ModalConfig } from "../../interfaces/modal";


export const emptyModal: ModalConfig = {
  type: 'default',
  title: '',
}
const MODAL_DELAYED = 300;

const ModalContext = createContext<IModalContextContext>({
  modalState: { isOpen: false, modal: emptyModal },
  closeModal: () => { },
  openModal: (_) => { },
});

ModalContext.displayName = 'ModalContext';


const ModalProvider = (props: { children: JSX.Element }) => {
  const [modalState, setModalState] = useState<IModalState>({
    isOpen: false,
    modal: emptyModal,
  });

  useEffect(() => {
    if (!modalState.isOpen && modalState.modal !== emptyModal) {
      const timer = setTimeout(() => {
        setModalState({ isOpen: false, modal: emptyModal });
      }, MODAL_DELAYED);

      return () => {
        clearTimeout(timer);
      }
    }
  }, [modalState]);

  const openModal = useCallback((config: ModalConfig) => {
    setModalState({
      modal: config,
      isOpen: true,
    });
  }, []);

  const closeModal = useCallback(() => {
    setModalState(prev => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  return (
    <ModalContext.Provider
      {...props}
      value={{
        modalState,
        openModal,
        closeModal,
      }}
    />
  );
};

export { ModalProvider, ModalContext };