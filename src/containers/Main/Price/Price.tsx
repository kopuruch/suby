import React from 'react';
import clsx from "clsx";
import { Trans, useTranslation } from "next-i18next";

import { useCheckWindowSize } from "@Hooks/index";

import { MEDIA_SIZES, SECTIONS_ID } from "@Config/constants";

import classes from './Price.module.scss';
import Label from "@Components/Label/Label";
import { SvgIconType } from "@Components/SvgIcon/SvgIcon.types";
import SvgIcon from "@Components/SvgIcon/SvgIcon";
import Button from "@Components/Button/Button";


const PRICES = {
  withSuby: {
    forYear: 96,
    forMonth: 8,
    youtube: 1,
    netflix: 4,
    spotify: 3,
  },
  withoutSuby: {
    forYear: 228,
    forMonth: 19,
    youtube: 3,
    netflix: 11,
    spotify: 5,
  }
}


const Price = () => {
  const { t } = useTranslation();

  const isDesktop = useCheckWindowSize('IS_GREATER_THAN', MEDIA_SIZES.lg);

  const SERVICE_LIST: {
    id: number;
    name: string;
    icon: SvgIconType;
  }[] = [
    {
      id: 1,
      name: t('price.services1'),
      icon: 'youtube',
    },
    {
      id: 2,
      name: t('price.services2'),
      icon: 'netflix',
    }, {
      id: 3,
      name: t('price.services3'),
      icon: 'spotify',
    },
  ]

  const WITH_SUBY = [
    {
      id: 'with_suby_youtube',
      price: PRICES.withSuby.youtube,
    },
    {
      id: 'with_suby_netflix',
      price: PRICES.withSuby.netflix,
    },
    {
      id: 'with_suby_spotify',
      price: PRICES.withSuby.spotify,
    },
  ]

  const WITHOUT_SUBY = [
    {
      id: 'without_suby_youtube',
      price: PRICES.withoutSuby.youtube,
    },
    {
      id: 'without_suby_netflix',
      price: PRICES.withoutSuby.netflix,
    },
    {
      id: 'without_suby_spotify',
      price: PRICES.withoutSuby.spotify,
    },
  ]

  return (
    <section className={clsx('section', 'section--light', classes.section)} id={SECTIONS_ID.price}>
      <div className={classes.wrapper}>
        <Label icon='wallet' text={t('price.label')} extraClassName={classes.label} />

        <h2 className={clsx('title', 'title--h2', classes.title)}>
          {t('price.title')}
        </h2>
      </div>

      <div className={classes.tableWrapper}>
        <div className={classes.tableSide}>
          <div className={clsx(classes.headerCell, 'body--bold', [isDesktop ? 'body--m' : classes.tableName])}>
              <span>
                {t('price.tableName')}
              </span>

            <span className={classes.noMobile}>
                {t('price.tableNameInfo')}
              </span>
          </div>

          {SERVICE_LIST.map(({ name, id, icon }) =>
            <div key={id} className={clsx(classes.serviceName, classes.tableCell, classes.tableRow, 'body--m')}>
              <SvgIcon icon={icon} svgSize={24} />
              <span>{name}</span>
            </div>
          )}

          <div className={clsx(classes.footerCell, classes.priceLabel, 'body--m')}>
            {t('price.price')}
          </div>
        </div>

        <div className={classes.centerSide}>
          <div className={clsx(classes.headerCell, classes.headerTableNameCenter, classes.alignCenter)}>
            <h4 className={clsx('title', 'title--h5', classes.planType)}>
              {t('price.withSuby')}
            </h4>

            <p className={clsx(classes.infoText, 'body--s')}>
              <Trans
                i18nKey={'price.forYear'}
              >
                {{ price: PRICES.withSuby.forYear }}
              </Trans>
            </p>
          </div>

          {WITH_SUBY.map(({ price, id }) =>
            <div key={id}
                 className={clsx(classes.tableCell, classes.tableRow, classes.cellPrice, 'body--l', 'body--bold')}>
              <SvgIcon icon='check' svgSize={32} />

              <span>
                  ${price}
                </span>
            </div>
          )}

          <div
            className={clsx('title', [isDesktop ? 'title--h3' : 'title--h4'])}>
            <div className={clsx(classes.priceBlock, classes.footerCell)}>
              <p>
                <Trans
                  i18nKey={'price.forMonth'}
                >
                  {{ price: PRICES.withSuby.forMonth }}
                </Trans>
              </p>
            </div>

            {isDesktop && <Button
              type='primary'
              text={t('general.order')}
              className={classes.orderBtn}
              scrollToForm={true}
            />}
          </div>
        </div>

        <div>
          <div className={clsx(classes.headerCell, classes.infoText, classes.alignCenter)}>
            <h4 className={clsx('title', 'title--h5', classes.planType)}>
              {t('price.withoutSuby')}
            </h4>

            <p className={clsx(classes.infoText, 'body--s')}>
              <Trans
                i18nKey={'price.forYear'}
              >
                {{ price: PRICES.withoutSuby.forYear }}
              </Trans>
            </p>
          </div>

          {WITHOUT_SUBY.map(({ price, id }) =>
            <div key={id}
                 className={clsx(classes.tableCell, classes.tableRow, classes.cellPrice, 'body--l', 'body--bold')}>
              <SvgIcon icon='check' svgSize={32} />

              <span>
                  ${price}
                </span>
            </div>
          )}

          <div
            className={clsx(classes.infoText, classes.footerCell, classes.priceBlock, 'title', [isDesktop ? 'title--h3' : 'title--h4'])}>
            <Trans
              i18nKey={'price.forMonth'}
            >
              {{ price: PRICES.withoutSuby.forMonth }}
            </Trans>
          </div>
        </div>
      </div>

      {!isDesktop && <Button
        type='primary'
        text={t('general.order')}
        className={classes.mobileBtn}
        scrollToForm={true}
      />}
    </section>
  )
}

export default Price;