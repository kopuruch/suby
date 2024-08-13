import React from 'react';
import { useTranslation } from "next-i18next";
import ScrollLink from "@Components/ScrollLink/ScrollLink";

import { useCheckWindowSize } from "@Hooks/index";

import { MEDIA_SIZES, ROUTES } from "@Config/constants";

import classes from '../Header.module.scss';
import clsx from "clsx";


const Navigation = ({onCloseMenu}: {onCloseMenu: () => void}) => {
  const { t } = useTranslation();

  const isDesktop = useCheckWindowSize('IS_GREATER_THAN', MEDIA_SIZES.lg);

  const NAV_LIST = [
    {
      id: 1,
      title: t('nav.aboutUs'),
      isAvailable: true,
      anchor: 'about_us',
    },
    {
      id: 2,
      title: t('nav.services'),
      isAvailable: true,
      anchor: 'services',
    },
    {
      id: 3,
      title: t('nav.price'),
      isAvailable: true,
      anchor: 'price',
    },
    {
      id: 4,
      title: t('nav.howItWorks'),
      isAvailable: true,
      anchor: 'how_it_works',
    },
    {
      id: 5,
      title: t('nav.feedbacks'),
      isAvailable: true,
      anchor: 'feedback',
    },
    {
      id: 6,
      title: t('nav.advantages'),
      isAvailable: true,
      anchor: 'advantages',
    },
    // {
    //   id: 7,
    //   route: ROUTES.blog,
    //   title: t('nav.blog'),
    //   isAvailable: true,
    // },
  ]

  return (
    <nav className={classes.navigation}>
      <div className={classes.linksList}>
        {NAV_LIST.map(({anchor, title, id}) =>
          <ScrollLink
            anchor={anchor}
            key={id}
            className={clsx(classes.link, 'body--l')}
            onClick={onCloseMenu}
          >
            {title}
          </ScrollLink>
        )}
      </div>
    </nav>
  )
}

export default Navigation;