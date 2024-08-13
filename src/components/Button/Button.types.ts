type ButtonType =
  | 'primary'
  | 'secondary'
;

interface ButtonBase<T extends ButtonType> {
  type: T;
  text: string;
  className?: string;
  onClick?: () => void;
  scrollToForm?: boolean;
}

interface SecondaryButton extends ButtonBase<'secondary'> {
  size: 'small' | 'large';
  color: 'black' | 'white';
}

interface PrimaryButton extends ButtonBase<'primary'> {
}

export type ButtonConfig =
  | PrimaryButton
  | SecondaryButton
