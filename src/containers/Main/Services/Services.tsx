import React from 'react';
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import { SECTIONS_ID } from "@Config/constants";

import classes from './Services.module.scss';
import Label from "@Components/Label/Label";
import youtubeIcon from "@Images/general/youtube.svg";
import netflixIcon from "@Images/general/netflix.svg";
import spotifyIcon from "@Images/general/spotify.svg";
import Button from "@Components/Button/Button";


const Services = () => {
  const { t } = useTranslation();

  const SERVICES = [
    {
      title: t('services.list.title1'),
      text: t('services.list.text1'),
      icon: youtubeIcon,
      id: 1,
    },
    {
      title: t('services.list.title2'),
      text: t('services.list.text2'),
      icon: netflixIcon,
      id: 2,
    },
    {
      title: t('services.list.title3'),
      text: t('services.list.text3'),
      icon: spotifyIcon,
      id: 3,
    },
  ]

  return (
    <section className={clsx('section--light', 'section')} id={SECTIONS_ID.services}>
      <div className="container">
        <div className={classes.wrapper}>
          <Label
            icon='phone'
            text={t('services.label')}
            extraClassName={classes.label}
          />

          <h2 className={clsx('title', 'title--h2', classes.title)}>
            {t('services.title')}
          </h2>

          <div className={classes.list}>
            {SERVICES.map(({title, text, icon, id}) =>
              <div key={id} className={classes.item}>
                <div className={classes.itemImg}>
                  <Image src={icon} alt={title} />
                </div>

                <div className={classes.itemTitleWrapper}>
                  <h4 className={clsx(classes.itemTitle, 'title', 'title--h4')}>
                    {title}
                  </h4>

                  <span className={clsx(classes.itemTitleLabel, 'label-text-small')}>{t('general.top')}</span>
                </div>

                <p className={clsx('body--m', classes.itemDescription)}>
                  {text}
                </p>
              </div>
            )}
          </div>

          <Button
            type='primary'
            text={t('general.order')}
            scrollToForm={true}
          />
        </div>
      </div>
    </section>
  )
}

export default Services;