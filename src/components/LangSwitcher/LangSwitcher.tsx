import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import clsx from 'clsx';

import classes from './Styles.module.scss';


const LangSwitcher = ({ onCloseMenu }: { onCloseMenu: () => void }) => {
  const router = useRouter();

  const { i18n: { language } } = useTranslation();

  const onChangeLanguage = () => {
    const newLocale = language === 'en' ? 'uk' : 'en'

    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  };

  return (
    <ul className={classes.locale}>
      {router.locales!.map(lang =>
        <li
          key={lang}
          className={clsx(classes.langItem, {
            [classes.langActive]: language === lang
          })}
          onClick={() => {
            onChangeLanguage()
            onCloseMenu()
          }}
        >
          {lang === 'uk' ? 'UA' : lang.toUpperCase()}
        </li>
      )}
    </ul>
  );
};

export default LangSwitcher;
