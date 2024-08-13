import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

import ErrorBoundary from "@Containers/ErrorBoundary/ErrorBoundary";
import MetaHead from '@Components/MetaHead/MetaHead';


const Error = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaHead />

      <ErrorBoundary />
    </>
  )
}

export default Error;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common']))
    },
  };
};
