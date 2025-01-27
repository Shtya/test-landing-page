'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useTranslations } from 'next-intl';

export default function Carousel() {
  const t  = useTranslations()
  
    return (
        <div className='text-background py-2' style={{ backgroundColor: '#ec972e' }}>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}>
                {t.raw('carousel_top_nav').map((e, i) => (
                    <SwiperSlide key={i} >
                        <div  className='py-2 text-center text-xs'> {e} </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
