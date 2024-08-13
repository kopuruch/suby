import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { classModifier } from '@Utils/index';

import { IInputProps } from './Input.types';
import clsx from "clsx";


const Input = <F extends FieldValues>(props: IInputProps<F>) => {
  const {
    controllerProps,
    placeholder,
    maxLength,
    type,
    required,
    clearErrors,
    isEmail,
    theme,
    id,
  } = props;

  const [isSubmitted, setSubmitted] = useState(false);

  const {
    field,
    fieldState,
    formState,
  } = useController(controllerProps);

  const isMount = useRef(true);

  useEffect(() => {
    if (isMount.current) {
      isMount.current = false;
    } else {
      setSubmitted(true);
    }
  }, [formState.submitCount]);

  const clearError = useCallback(() => {
    clearErrors?.(field.name);
  }, [clearErrors, field.name]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let nextValue = e.target.value;

    if (maxLength && nextValue.length !== maxLength) {
      nextValue = nextValue.slice(0, maxLength);
    }
    if (isEmail) {
      nextValue = nextValue.replace(/\s+/g, '');
    }
    if (nextValue === field.value) {
      return;
    }
    field.onChange(nextValue);
    isSubmitted && setSubmitted(false);
  }

  const errorMessage = fieldState.error?.message;
  const isShowError = fieldState.error
    ? isSubmitted && !!errorMessage
    : false;

  return (
    <div className='input__block'>
      <div className={classModifier('input__wrapper', theme)}>
        <input
          required={required}
          {...field}
          type={type}
          className={classModifier('input', [
            isShowError && 'error',
          ])}
          autoComplete='off'
          onChange={onChange}
          id={id}
        />

        <label
          htmlFor={id}
          className={clsx('input__label', 'body--m', [
            field.value && 'fill'
          ])}
        >
          {placeholder}{required && <span className='required-symbol'>*</span>}
        </label>
      </div>

      {isShowError &&
        <div className="input__error description-text">{errorMessage}</div>
      }
    </div>
  );
};

export default Input;
