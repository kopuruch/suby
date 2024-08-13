import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import dynamic from "next/dynamic";

import MetaHead from "@Components/MetaHead/MetaHead";
const HeroDynamic = dynamic(() => import('@Containers/Main/Hero/Hero'));
const AboutDynamic = dynamic(() => import('@Containers/Main/About/About'));
const ServicesDynamic = dynamic(() => import('@Containers/Main/Services/Services'));
const PriceDynamic = dynamic(() => import('@Containers/Main/Price/Price'));
const HowItWorksDynamic = dynamic(() => import('@Containers/Main/HowItWorks/HowItWorks'));
const FeedbackDynamic = dynamic(() => import('@Containers/Main/Feedback/Feedback'));
const AdvantagesDynamic = dynamic(() => import('@Containers/Main/Advantages/Advantages'));
const FormDynamic = dynamic(() => import('@Containers/Main/Form/Form'));


const Home = () => {
  const { t} = useTranslation();

  return (
    <>
      <MetaHead
        title={'title'}
        description={t('meta.description')}
      />

      <HeroDynamic />
      <AboutDynamic />
      <ServicesDynamic />
      <PriceDynamic />
      <HowItWorksDynamic />
      <FeedbackDynamic />
      <AdvantagesDynamic />
      <FormDynamic />
    </>
  )
}

export default Home;


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common']))
    },
  };
};
