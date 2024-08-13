import React from 'react';

import { ISvgIconProps } from '../SvgIcon.types';


const check = (props: ISvgIconProps) => {
  return (
    <svg {...props} viewBox="0 0 32 33" fill="none">
      <g clipPath="url(#clip0_326_1014)">
        <path d="M6.66699 16.0352L13.3337 22.7018L26.667 9.36849" stroke="#01D87E" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_326_1014">
          <rect width="32" height="32" fill="white" transform="translate(0 0.0351562)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default check;
