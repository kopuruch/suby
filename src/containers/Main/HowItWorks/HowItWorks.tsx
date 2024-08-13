import React from 'react';
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { SECTIONS_ID } from "@Config/constants";

import Label from "@Components/Label/Label";
import classes from "./HowItWorks.module.scss";
import SvgIcon from "@Components/SvgIcon/SvgIcon";


const HowItWorks = () => {
  const { t } = useTranslation();

  const STEPS = [
    {
      id: 1,
      title: t('howItWorks.list.title1'),
      text: t('howItWorks.list.text1'),
    },
    {
      id: 2,
      title: t('howItWorks.list.title2'),
      text: t('howItWorks.list.text2'),
    },
    {
      id: 3,
      title: t('howItWorks.list.title3'),
      text: t('howItWorks.list.text3'),
    },
  ]

  return (
    <section className='section section--light' id={SECTIONS_ID.howItWorks}>
      <div className='container'>
        <Label
          icon='chart'
          text={t('howItWorks.label')}
          extraClassName={classes.label}
        />

        <h2 className={clsx(classes.title, 'title', 'title--h2')}>
          {t('howItWorks.title')}
        </h2>

        <div className={classes.list}>
          {STEPS.map(({id, title, text}) =>
            <div
              className={classes.item}
              key={id}
            >
              <div className={classes.itemInner}>
                <div className={clsx(classes.itemLabel, 'body--l')}>
                  <SvgIcon
                    icon='star'
                    svgSize={24}
                    className={classes.itemIcon}
                  />

                  {t('howItWorks.step')} {id}
                </div>

                <h3 className={clsx(classes.itemTitle, 'title', 'title--h3')}>
                  {title}
                </h3>

                <p className={clsx(classes.itemDescription, 'body--m')}>
                  {text}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks;