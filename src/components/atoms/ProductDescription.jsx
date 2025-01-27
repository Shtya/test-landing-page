import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function ProductDescription() {
	const t = useTranslations('home')

    return (
        <div className='bg-[#f2f2f2] ' id="product-description"  >
            <div className=' bg-[#f2f2f2] !px-5 !py-3 font-bold '> {t("ProductDescription")} </div>


            <div className='bg-white rounded-lg p-4 pb-3'>
                <div className='bg-white rounded-lg pb-10'>
                    <div className='text-sm'>
                        <p>
                            <strong > {t("explain")} </strong>
                        </p>
                    </div>
                </div>

                <div>
                    <Image alt='Image description' src='/imgs/img1.webp' width={3840} height={3840} className='loading-animation mb-3 rounded-lg' style={{ color: 'transparent', minHeight: '350px', objectFit: 'contain', width: '100%', height: 'auto' }} sizes='600px' priority />
                    <Image alt='Image description' src='/imgs/img2.webp' width={3840} height={3840} className='loading-animation mb-3 rounded-lg' style={{ color: 'transparent', minHeight: '350px', objectFit: 'contain', width: '100%', height: 'auto' }} sizes='600px' priority />
                    <Image alt='Image description' src='/imgs/img3.webp' width={3840} height={3840} className='loading-animation mb-3 rounded-lg' style={{ color: 'transparent', minHeight: '350px', objectFit: 'contain', width: '100%', height: 'auto' }} sizes='600px' priority />
                </div>
            </div>
        </div>
    );
}
