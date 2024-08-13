import React from 'react';

import { ISvgIconProps } from '../SvgIcon.types';


const bar = (props: ISvgIconProps) => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="19" height="2" rx="1" fill="currentColor" />
      <rect y="11" width="22" height="2" rx="1" fill="currentColor" />
      <rect x="3" y="19" width="19" height="2" rx="1" fill="currentColor" />
    </svg>
  );
};

export default bar;
