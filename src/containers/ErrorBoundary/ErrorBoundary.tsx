import React from 'react';
import Link from "next/link";
import clsx from 'clsx';
import { useTranslation } from "next-i18next";

import { ROUTES } from "@Config/constants";

import classes from "./ErrorBoundary.module.scss";


const ErrorBoundary = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.error}>
      <div className='container'>

        <div className={classes.wrapper}>
          <h1 className='title'>
            <strong>404</strong>
          </h1>

          <div className={clsx('subtitle', classes.subtitle)}>
            {t('error.pageNotFound')}
          </div>

          <Link
            href={ROUTES.main}
            className='generalButton center'>
            {t('error.goToMain')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorBoundary;
