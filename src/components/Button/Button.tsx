import React from 'react';
import { animateScroll, Link } from 'react-scroll';
import clsx from "clsx";

import { classModifier } from "@Utils/index";

import { SECTIONS_ID } from "@Config/constants";
import { ButtonConfig } from "@Components/Button/Button.types";
import ScrollLink from "@Components/ScrollLink/ScrollLink";


const Button = (props: ButtonConfig)  => {
  const {
    text,
    type,
    className,
    scrollToForm = false,
  } = props;

  const buttonClassName = type === 'secondary'
    ? classModifier('button', [props.size, props.color, type])
    : classModifier('button', [type]);

  const onClick = () => {
    props.onClick && props.onClick();
  }

  return scrollToForm
    ? <ScrollLink
      anchor={SECTIONS_ID.form}
      className={clsx(className, buttonClassName)}
    >
      {text}
    </ScrollLink>
    : <button
      onClick={onClick}
      className={clsx(className, buttonClassName)}
    >
      {text}
    </button>
}

export default Button;