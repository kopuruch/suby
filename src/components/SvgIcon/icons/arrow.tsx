import React from 'react';

import { ISvgIconProps } from '../SvgIcon.types';


const arrow = (props: ISvgIconProps) => {
  return (
    <svg {...props} viewBox="0 0 24 25" fill="none">
      <g clipPath="url(#clip0_580_256)">
        <path d="M14.7512 4.53052L7.24902 12.0327L14.7512 19.5349" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_580_256">
          <rect width="24" height="24" fill="currentColor" transform="translate(0 0.032959)" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default arrow;
