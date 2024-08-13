import { FieldValues, UseControllerProps, UseFormClearErrors } from "react-hook-form";


export interface IInputBaseProps {
  placeholder?: string;
  maxLength?: number;
  type: 'text' | 'email';
  required?: boolean;
  theme: 'dark' | 'light';
  id: string;
}

export interface IInputProps<F extends FieldValues> extends IInputBaseProps {
  controllerProps: UseControllerProps<F>;
  isEmail?: boolean;
  clearErrors?: UseFormClearErrors<F>;
}
