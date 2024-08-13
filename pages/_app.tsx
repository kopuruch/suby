import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import dynamic from "next/dynamic";

import { ModalProvider } from "@Context/ModalContext/ModalContext";

import Layout from '@Containers/Layout/Layout';
import PageLoader from "@Components/PageLoader/PageLoader";
import '@Styles/index.scss';


const ModalDynamic = dynamic(() => import('@Components/Modal/Modal'), { ssr: false });


const App = ({ Component, pageProps }: AppProps) => {
  if (typeof window === undefined) React.useLayoutEffect = React.useEffect;

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handlePageLoad);

      return () => window.removeEventListener('load', handlePageLoad);
    }
  }, []);

  return (
    <ModalProvider>
      <>
        <PageLoader isLoading={isLoading} />

        <ModalDynamic />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ModalProvider>
  )
};

export default appWithTranslation(App);
