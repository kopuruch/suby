import React, { useEffect } from 'react';
import { useTranslation } from "next-i18next";
import clsx from "clsx";

import { useCheckWindowSize } from "@Hooks/index";

import { MEDIA_SIZES, SECTIONS_ID } from "@Config/constants";

import classes from './Header.module.scss';
import SvgIcon from "@Components/SvgIcon/SvgIcon";
import Navigation from "@Containers/Header/components/Navigation";
import Button from "@Components/Button/Button";
import ToggleWrapper from "@Components/ToggleWrapper/ToggleWrapper";
import ScrollLink from "@Components/ScrollLink/ScrollLink";


interface IHeaderProps {
  handleMenu: () => void;
  onCloseMenu: () => void;
  mobMenuStatus: boolean;
}


const Header = (props: IHeaderProps) => {
  const { handleMenu, onCloseMenu, mobMenuStatus } = props;

  const { t } = useTranslation();
  const isDesktop = useCheckWindowSize('IS_GREATER_THAN', MEDIA_SIZES.xl);

  return (
    <header
      className={clsx(classes.header, 'section--dark')}
      data-is-open={mobMenuStatus}
    >
      <div className='container'>
        <div className={classes.wrapper}>
          <ScrollLink
            anchor={SECTIONS_ID.hero}
            className={classes.logo}
          >
            <SvgIcon icon='logo' svgSize={[130, 42]} />
          </ScrollLink>

          <div className={classes.mobileBackground} />

          <ToggleWrapper
            className={classes.menuWrapper}
            mediaSize={MEDIA_SIZES.xl}
            isLessMedia={false}
          >
            <Navigation onCloseMenu={onCloseMenu} />

            <Button
              text={t('general.subscribe')}
              type='secondary'
              color={'black'}
              size={'small'}
              scrollToForm={true}
            />
          </ToggleWrapper>

          {!isDesktop && <button
            className={classes.toggler}
            onClick={handleMenu}
            aria-label='toggle navigation menu'
          >
            <SvgIcon
              icon='bar'
              className={classes.bar}
              svgSize={24}
            />
            <SvgIcon
              icon='cross'
              className={classes.cross}
              svgSize={24}
            />
          </button>}
        </div>
      </div>
    </header>
  )
}

export default Header;