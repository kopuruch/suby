import React, { useContext, useState } from 'react';
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";

import { ModalContext } from "@Context/ModalContext/ModalContext";
import { useFormValidation } from "@Hooks/index";

import { SECTIONS_ID } from "@Config/constants";

import classes from './Form.module.scss';
import Input from "@Components/Form/Input/Input";
import Button from "@Components/Button/Button";


export interface IForm {
  email: string;
}


const Form = () => {
  const { t } = useTranslation();
  const validation = useFormValidation<IForm>();
  const { openModal } = useContext(ModalContext);
  const [isPending, setPending] = useState(false);

  const schemaItems = {
    name: validation.required,
    email: validation.email,
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: validation.resolver(schemaItems),
    defaultValues: {
      name: '',
      email: '',
    }
  })

  const onSubmit = handleSubmit(({ email, name }) => {
    setPending(true);

    openModal({
      type: 'default',
      content: <div className={clsx('body--l', classes.sentText)}>{t('form.submitText')}</div>,
    })

    console.log(email, name);
  })

  return (
    <section className={clsx('section', 'section--light', classes.section)} id={SECTIONS_ID.form}>
      <div className='container'>
        <div className={classes.wrapper}>
          <h2 className={clsx('title', 'title--h2', classes.title)}>
            {t('form.title')}
          </h2>

          <p className={clsx('body--m', classes.description)}>
            {t('form.formInfo')}
          </p>

          <div className={classes.inputs}>
            <Input
              type='text'
              required
              controllerProps={{ control, name: "name" }}
              placeholder={t('form.name')}
              theme='dark'
              id='name-input'
            />

            <Input
              type='email'
              required
              controllerProps={{ control, name: 'email' }}
              placeholder='Email'
              theme='dark'
              id='email-input'
              isEmail
            />
          </div>

          <Button
            type='primary'
            text={t('form.send')}
            className={classes.btn}
            onClick={onSubmit}
          />
        </div>
      </div>
    </section>
  )
}

export default Form;