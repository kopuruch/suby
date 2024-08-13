import React from 'react';

import { ISvgIconProps } from './SvgIcon.types';

import SVG_ICONS from './icons';


const getSvgSize = (width: number, height: number) => ({ width, height });


const SvgIcon = (props: ISvgIconProps) => {
  const {
    icon,
    svgSize,
    color = '',
    className = '',
  } = props;

  const SvgComponent = SVG_ICONS[icon];

  const svgIconSize = svgSize
    ? Array.isArray(svgSize)
      ? getSvgSize(svgSize[0], svgSize[1])
      : getSvgSize(svgSize, svgSize)
    : '';


  if (!SvgComponent) {
    return null;
  }

  return (
    <SvgComponent
      {...svgIconSize}
      color={color}
      className={className}
    />
  )
}

export default SvgIcon;