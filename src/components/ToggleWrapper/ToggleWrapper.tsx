import React from 'react';

import useCheckWindowSize, { CheckType } from '@Hooks/useCheckWindowSize';


const ToggleWrapper = (props: {
  children: React.ReactNode;
  mediaSize: number;
  className: string;
  isLessMedia: boolean;
}) => {
  const screenType: CheckType = props.isLessMedia ? 'IS_LESS_THAN' : 'IS_GREATER_THAN'

  const isTargetScreen = useCheckWindowSize(screenType, props.mediaSize);

  return (
    isTargetScreen
      ? <>{props.children}</>
      : <div className={props.className}>{props.children}</div>
  )
}

export default ToggleWrapper;
