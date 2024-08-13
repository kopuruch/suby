import React from 'react';
import Link from "next/link";

import { MEDIA_SIZES, ROUTES } from "@Config/constants";

import SvgIcon from "@Components/SvgIcon/SvgIcon";
import classes from "@Containers/Footer/Footer.module.scss";
import Image from "next/image";
import instagram from "@Images/general/instagram.svg";
import facebook from "@Images/general/facebook.svg";
import tiktok from "@Images/general/tiktok.svg";
import x from "@Images/general/x.svg";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import ToggleWrapper from "@Components/ToggleWrapper/ToggleWrapper";
import { SvgIconType } from "@Components/SvgIcon/SvgIcon.types";


const Footer = () => {
  const { t } = useTranslation();

  // TODO: fix links
  const INFO = [
    {
      id: 1,
      text: t('nav.blog'),
      link: ''
    },
    {
      id: 2,
      text: t('nav.supportService'),
      link: ''
    },{
      id: 3,
      text: t('nav.licenseInfo'),
      link: ''
    },
  ]

  const SOCIAL: {
    icon: SvgIconType,
    link: string,
    alt: string,
  }[] = [
    {
      icon: 'instagram',
      link: '',
      alt: 'instagram',
    },
    {
      icon: 'facebook',
      link: '',
      alt: 'facebook',
    },
    {
      icon: 'tiktok',
      link: '',
      alt: 'tiktok',
    },
    {
      icon: 'x',
      link: '',
      alt: 'x',
    },
  ]

  return (
    <footer className='section section--dark'>
      <div className='container'>
        <div className={classes.wrapper}>
          <Link
            href={ROUTES.main}
            className={classes.logo}
          >
            <SvgIcon icon='logo' svgSize={[130, 42]} />
          </Link>

          <ToggleWrapper
            mediaSize={MEDIA_SIZES.lg}
            className={classes.infoWrapper}
            isLessMedia={true}
          >
            <div className={classes.info}>
              {INFO.map(({link, text, id}) =>
                <Link
                  key={id}
                  href={link}
                  className={clsx(classes.infoLink, 'body--m')}
                >
                  {text}
                </Link>
              )}
            </div>

            <div className={clsx('body--s', classes.rights)}>
              All rights reserved. Powered by Webflow
            </div>
          </ToggleWrapper>

          <div className={classes.social}>
            {SOCIAL.map(({link, icon, alt}) =>
              <Link
                href={link}
                target='_blank'
                key={alt}
                className={classes.socialLink}
              >
                <SvgIcon icon={icon} svgSize={22} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;