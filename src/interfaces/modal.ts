export type ModalType =
  | 'default'
  ;

export interface IModalState {
  modal: ModalConfig;
  isOpen: boolean;
}

export interface IModalContextContext {
  openModal: (config: ModalConfig) => void;
  closeModal: () => void;
  modalState: IModalState;
}

export interface IModalConfigBase<T extends ModalType> {
  type: T;
  title?: string | JSX.Element;
  subtitle?: string | JSX.Element;
  submitText?: string | JSX.Element;
  onCloseModal?: () => void;
  classModifier?: string;
  doClosingWhenOutsideClick?: boolean;
  isClosable?: boolean;
}

export interface IModalConfigDefault extends IModalConfigBase<'default'> {
  onSubmit?: () => void;
  onReject?: () => void;
  rejectText?: string;
  content?: JSX.Element;
  disabled?: boolean;
}

export type ModalConfig =
  | IModalConfigDefault
  ;