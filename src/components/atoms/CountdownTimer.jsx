import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css'; // Import default styles
import { useTranslations } from 'next-intl';

const CountdownTimer = () => {
    const endTime = new Date().getTime() + 24 * 3600 * 1000 + 5000; // 24 hours from now
    const t = useTranslations('home');

    return (
        <div className='' >
            <div className='mb-2 text-center text-lg font-bold'> {t('pay', { time: 30 })} </div>

            <div className='relative ] flex items-center justify-center overflow-hidden rounded-md border max-w-[280px] h-[100px] w-full mx-auto border-gray-200 px-4 pb-3 pt-6'>

                <div className='progress absolute left-0 right-0 top-0 h-[6px] overflow-hidden  bg-[#e5e7eb]'></div>

                <FlipClockCountdown
                    to={endTime}
					labelStyle={{color :"#ec972e" , fontSize : "14px", fontWeight : "700" }}
                    labels={['Hours', 'Minutes', 'Seconds']} // Remove the Days label
                    className='tick flex justify-center text-[28px]'
                />
            </div>
        </div>
    );
};

export default CountdownTimer;
