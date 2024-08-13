import React, { FC } from 'react';
import { Link } from "react-scroll";
import clsx from "clsx";

import { useCheckWindowSize } from "@Hooks/index";

import { MEDIA_SIZES } from "@Config/constants";


interface ICustomLinkProps {
  onClick?: () => void;
  children: JSX.Element | string;
  anchor: string;
  className?: string;
}


const ScrollLink: FC<ICustomLinkProps> = (props) => {
  const {
    children,
    anchor,
    className,
  } = props

  const isDesktop = useCheckWindowSize('IS_GREATER_THAN', MEDIA_SIZES.lg);

  const onClick = () => {
    props.onClick && props.onClick();
  }

  return (
    <>
      <Link
        to={anchor}
        className={clsx(className)}
        offset={isDesktop ? -50 : -80}
        onClick={onClick}
      >
        <span>{children}</span>
      </Link>
    </>
  )
}

export default ScrollLink;