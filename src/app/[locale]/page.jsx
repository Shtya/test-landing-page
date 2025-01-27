'use client';
import BottomBar from '@/components/atoms/BottomBar';
import Cart from '@/components/atoms/Cart';
import CountdownTimer from '@/components/atoms/CountdownTimer';
import Footer from '@/components/atoms/Footer';
import Notification from '@/components/atoms/Notification';
import PaymentOptions from '@/components/atoms/PaymentOptions';
import PricingSection from '@/components/atoms/PricingSection';
import ProductDescription from '@/components/atoms/ProductDescription';
import Review from '@/components/atoms/Review';
import Carousel from '@/components/atoms/SwiperHome';
import Teebalhoor from '@/components/atoms/Teebalhoor';
import TimedownComponent from '@/components/atoms/TimedownComponent ';
import Popup from '@/components/templates/Popup';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef , useState } from 'react';
import {  } from "react";

const page = () => {
    const t = useTranslations('home');
    const pricingRef = useRef(null);
    const [isModalOpen , setIsModalOpen] = useState(false)


    return (
        <main className='home  relative '>
            <div className=''>
                <h1 className='px-5 py-4 text-2xl font-bold'> {t('title')} </h1>
            </div>
            <Carousel />
            <PricingSection />

            <hr className='h-[4px] bg-[#f2f2f2] border-none my-[30px] ' />
            <CountdownTimer />
            <hr className='h-[4px] bg-[#f2f2f2] border-none my-[30px] ' />
            <PaymentOptions ref={pricingRef} />
            <ProductDescription />
            <TimedownComponent pricingRef={pricingRef} />

            {/* #review */}
            <Review />
            <Teebalhoor />
            <Footer />
            <BottomBar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

            <Popup move={"bottom"} position={"center"} title={t('Delivery Information')} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <Cart />
            </Popup>



            <Notification />
        </main>
    );
};

export default page;
