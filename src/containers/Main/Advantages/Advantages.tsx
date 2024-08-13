import React from 'react';
import clsx from "clsx";
import { useTranslation } from "next-i18next";

import { useCheckWindowSize } from "@Hooks/index";

import { SvgIconType } from "@Components/SvgIcon/SvgIcon.types";
import { MEDIA_SIZES, SECTIONS_ID } from "@Config/constants";

import classes from './Advantages.module.scss';
import Label from "@Components/Label/Label";
import TaggedTranslation from "@Components/TaggedTranslation/TaggedTranslation";
import SvgIcon from "@Components/SvgIcon/SvgIcon";


const Advantages = () => {
  const { t } = useTranslation();

  const isDesktop = useCheckWindowSize('IS_GREATER_THAN', MEDIA_SIZES.lg);

  const ADVANTAGES: {
    icon: SvgIconType;
    title: string;
    text: string;
  }[] = [
    {
      icon: 'hand',
      title: t('advantages.list.title1'),
      text: t('advantages.list.text1'),
    },
    {
      icon: 'support',
      title: t('advantages.list.title2'),
      text: t('advantages.list.text2'),
    },
    {
      icon: 'payment',
      title: t('advantages.list.title3'),
      text: t('advantages.list.text3'),
    },
    {
      icon: 'access',
      title: t('advantages.list.title4'),
      text: t('advantages.list.text4'),
    },
  ]

  return (
    <section className={clsx('section', 'section--light')} id={SECTIONS_ID.advantages}>
      <div className='container'>
        <div className={classes.wrapper}>
          <div className={classes.textWrapper}>
            <Label
              icon='diamond'
              text={t('advantages.label')}
              extraClassName={classes.label}
            />

            <p className={clsx('title', 'title--h2', classes.title)}>
              <TaggedTranslation text={t('advantages.title')} />
            </p>
          </div>

          <div className={classes.list}>
            {ADVANTAGES.map(({icon, title, text}) =>
              <div
                className={classes.item}
                key={icon}
              >
                <div className={classes.itemIcon}>
                  <SvgIcon
                    icon={icon}
                    svgSize={isDesktop ? 32 : 24}
                  />
                </div>

                <h5 className={clsx(classes.itemTitle, 'title', 'title--h5')}>
                  {title}
                </h5>

                <p className={clsx('body--m', classes.itemText)}>
                  {text}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages;