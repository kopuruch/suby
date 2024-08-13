import React from 'react';
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import { SECTIONS_ID } from "@Config/constants";

import classes from './Hero.module.scss';
import Button from "@Components/Button/Button";
import maskot from '@Images/hero/maskot.svg';


const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={clsx(classes.section, 'section--dark')} id={SECTIONS_ID.hero}>
      <div className='container'>
        <div className={classes.wrapper}>
          <div>
            <h1
              className={clsx('title title--h1', classes.title)}
              dangerouslySetInnerHTML={{__html: t('hero.title')}}
            />

            <p className={clsx('body--l', classes.description)}>
              {t('hero.description')}
            </p>

            <Button
              type='primary'
              text={t('general.order')}
              className={classes.btn}
              scrollToForm={true}
            />
          </div>

          <div className={classes.maskot}>
            <Image src={maskot} alt='maskot' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;