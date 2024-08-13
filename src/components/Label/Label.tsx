import React from 'react';

import { SvgIconType } from "@Components/SvgIcon/SvgIcon.types";

import classes from './Label.module.scss';
import SvgIcon from "@Components/SvgIcon/SvgIcon";
import clsx from "clsx";


interface ILabelProps {
  icon: SvgIconType;
  text: string;
  extraClassName?: string;
}


const Label = (props: ILabelProps) => {
  const {
    icon,
    text,
    extraClassName,
  } = props;

  return (
    <div className={clsx(classes.label, extraClassName, 'label-text')}>
      <SvgIcon
        icon={icon}
        svgSize={24}
        className={classes.icon}
      />

      <span className={classes.title}>
        {text}
      </span>
    </div>
  )
}

export default Label;