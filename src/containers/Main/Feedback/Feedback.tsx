import React, { useState } from 'react';
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import clsx from "clsx";

import { MEDIA_SIZES, SECTIONS_ID } from "@Config/constants";

import Label from "@Components/Label/Label";
import classes from './Feedback.module.scss';
import 'swiper/scss';
import 'swiper/css/effect-fade';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import SvgIcon from "@Components/SvgIcon/SvgIcon";


const Feedback = () => {
  const { t } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(1);

  const SLIDES = [
    {
      title: '“Не очікувала такої вигідної пропозиції”',
      text: "Не розумію, як раніше жила без цього сервісу! Дуже задоволена і оплатити можна в кілька кліків. Сервіс дійсно корисний, якщо ви хочете зекономити гроші і при цьому переглядати/слухати якісний контент.",
      name: "Валерія Климань",
      city: "Київ",
      id: 1,
    },
    {
      title: '“Супер!”',
      text: "Не розумію, як раніше жила без цього сервісу! Дуже задоволена і оплатити можна в кілька кліків. Сервіс дійсно корисний, якщо ви хочете зекономити гроші і при цьому переглядати/слухати якісний контент.",
      name: "Валерія Не Климань",
      city: "Дніпро",
      id: 2,
    },
    {
      title: '“Раджу всім!”',
      text: "Не розумію, як раніше жила без цього сервісу! Дуже задоволена і оплатити можна в кілька кліків. Сервіс дійсно корисний, якщо ви хочете зекономити гроші і при цьому переглядати/слухати якісний контент.",
      name: "Валерія з іншим прізвищем",
      city: "Харків",
      id: 3,
    },
  ]

  return (
    <section className='section section--light' id={SECTIONS_ID.feedback}>
      <div className='container'>
        <div className={classes.wrapper}>
          <Label
            icon='smile'
            text={t('feedback.label')}
            extraClassName={classes.label}
          />

          <h2 className={clsx('title', 'title--h2', classes.title)}>
            {t('feedback.title')}
          </h2>

          <div className={classes.slider}>
            <Swiper
              loop
              effect={'fade'}
              slidesPerView={1}
              centeredSlides
              modules={[EffectFade, Pagination, Navigation]}
              onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
              autoplay
              navigation={{
                nextEl: '.slider-next-btn',
                prevEl: '.slider-prev-btn',
              }}
              pagination={{
                clickable: true,
                bulletClass: 'slider-bullet',
                bulletActiveClass: 'is-active',
                horizontalClass: 'slider-bullets-wrapper',
              }}
              breakpoints={{
                320: {
                  pagination: {
                    enabled: false,
                  }
                },
                [MEDIA_SIZES.sm]: {
                  pagination: {
                    enabled: true,
                  }
                }
              }}
            >
              {SLIDES.map(({ id, name, city, title, text }) =>
                <SwiperSlide
                  key={id}
                  className={classes.item}
                >
                  <div className={classes.itemInner}>
                    <p className={clsx('body--l', 'body--bold', classes.itemTitle)}>
                      {title}
                    </p>

                    <p className={clsx('body--m', classes.feedback)}>
                      {text}
                    </p>

                    <p className={clsx('body--s', 'body--bold', classes.name)}>
                      {name}
                    </p>

                    <p className={clsx('body--s', classes.city)}>
                      {city}
                    </p>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>

            <button className='slider-prev-btn'>
              <SvgIcon icon='arrow' svgSize={24} />
            </button>
            <button className='slider-next-btn'>
              <SvgIcon icon='arrow' svgSize={24} />
            </button>

            <div className={clsx(classes.totalSlides, 'body--m', 'body--bold')}>
              <span className={classes.activeSlide}>{currentSlide}</span>/{SLIDES.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback;