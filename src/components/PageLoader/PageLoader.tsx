import React from 'react';
import clsx from "clsx";

import classes from './PageLoader.module.scss';


const PageLoader = ({ isLoading }: {isLoading: boolean;}) => {
  return (
    <div className={clsx(classes.wrapper, [isLoading && classes.isLoading])}>
      <div className={classes.loader} />
    </div>
  )
}

export default PageLoader;