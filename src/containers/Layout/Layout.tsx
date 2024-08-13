import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import useScrollLock from '@Hooks/useScrollLock';
import useCheckWindowSize from '@Hooks/useCheckWindowSize';
import { MEDIA_SIZES } from '@Config/constants';

import classes from './Layout.module.scss';
import Header from "@Containers/Header/Header";
import Footer from "@Containers/Footer/Footer";


const Layout = ({ children }: { children: JSX.Element }) => {

  const { lockScroll, unlockScroll } = useScrollLock();
  const isDesktop = useCheckWindowSize('IS_GREATER_THAN', MEDIA_SIZES.xl);

  const [mobMenuStatus, setMobMenuStatus] = useState(false);

  useEffect(() => {
    (!isDesktop && mobMenuStatus) ? lockScroll() : unlockScroll();
    // eslint-disable-next-line
  }, [isDesktop, mobMenuStatus]);

  useEffect(() => {
    setMobMenuStatus(false);
  }, [isDesktop]);

  const handleMenu = () => {
    if (!isDesktop) {
      setMobMenuStatus(!mobMenuStatus);
      lockScroll();
    }
  };

  const onCloseMenu = () => {
    setMobMenuStatus(false);
    unlockScroll();
  };

  return (
    <div className={classes.main}>
      <Header
        handleMenu={handleMenu}
        onCloseMenu={onCloseMenu}
        mobMenuStatus={mobMenuStatus}
      />

      <div className={clsx(classes.wrapper, {
        [classes.isOpened]: mobMenuStatus,
      })}>
        <main className={classes.container}>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
