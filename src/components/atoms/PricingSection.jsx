import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const PricingSection = (() => {
    const t = useTranslations('home');

    return (
        <div  className='bg-background p-4' >
            <div className='flex flex-wrap items-center gap-x-4'>
                {/* Current Price */}
                <div className='flex items-center gap-2'>
                    <h2 className='text-2xl font-bold'>35 {t('currency')}</h2>
                </div>

                {/* Divider */}
                <div className='h-5 w-[2px] rounded bg-gray-300'></div>

                {/* Original Price and Discount */}
                <div className='flex items-center gap-x-4'>
                    <h2 className='text-2xl line-through'>74.47 {t('currency')}</h2>
                    <div className='border text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80 flex items-center rounded-full bg-[#00c400] px-2 py-1 font-medium text-white'>
                        <DiscountIcon className='me-1 w-3' />
                        53%
                    </div>
                </div>
            </div>

            {/* Rating and Sold Count */}
            <div className='flex justify-between py-2 text-sm'>
                {/* Rating */}
                <div className='flex'>
                    <div className=' flex items-center gap-[2px] '>
                        <Image src='/icons/star.svg' alt='' width={18} height={20} />
                        <Image src='/icons/star.svg' alt='' width={18} height={20} />
                        <Image src='/icons/star.svg' alt='' width={18} height={20} />
                        <Image src='/icons/star.svg' alt='' width={18} height={20} />
                        <Image alt='' style={{ clipPath: 'polygon(0 0, 55% 0, 55% 100%, 0% 100%)' }} className='rtl:scale-x-[-1]' src='/icons/star.svg' width={18} height={20} />
                    </div>
                    <p className='mx-2'>4.6 (365 {t('review')})</p>
                </div>

                {/* Sold Count */}
                <p>365 {t('sold')}</p>
            </div>
        </div>
    );
});

export default PricingSection 

// Placeholder for Discount Icon
const DiscountIcon = () => {
    return (
        <svg className='me-1 w-3' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='currentColor'>
            {/* Replace this with your actual discount icon SVG */}
            <path d='M168.5 72L256 165l87.5-93h-175zM383.9 99.1L311.5 176h129L383.9 99.1zm50 124.9H256 78.1L256 420.3 433.9 224zM71.5 176h129L128.1 99.1 71.5 176zm434.3 40.1l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152c4.5-6.1 11.7-9.8 19.3-9.8H376c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4z'></path>
        </svg>
    );
};
