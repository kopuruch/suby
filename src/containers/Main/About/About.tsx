import React from 'react';
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import { SECTIONS_ID } from "@Config/constants";

import classes from './About.module.scss';
import Label from "@Components/Label/Label";
import maskot from "@Images/about/maskot.svg";


const About = () => {
  const { t } = useTranslation();

  return (
    <section className={clsx('section', 'section--light', classes.section)} id={SECTIONS_ID.about}>
      <div className='container'>
        <div className={classes.wrapper}>
          <div className={classes.imgWrapper}>
            <Image src={maskot} alt='maskot' />
          </div>

          <div className={classes.textBlock}>
            <Label
              icon='people'
              text={t('about.label')}
              extraClassName={classes.label}
            />

            <h2 className={clsx('title title--h2', classes.title)}>
              {t('about.title')}
            </h2>

            <p className={classes.description}>
              {t('about.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;