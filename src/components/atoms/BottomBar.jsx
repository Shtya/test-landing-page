
"use client"
import React, { useEffect , useState } from 'react';
import Translate from './Translate';
import { useTranslations } from 'next-intl';

export default function BottomBar({ setIsModalOpen }) {
    const t = useTranslations('home');
    const [ScrollY , setScrollY] = useState(0)
    const [show , setShow] = useState(false)

    useEffect(() => {
        const homeElement = document.querySelector(".main");
    
        const handleScroll = () => {
            if (homeElement) {
                setScrollY(homeElement.scrollTop)
            }
        };
    
        if (homeElement) {
            homeElement.addEventListener("scroll", handleScroll);
        }
    
        return () => {
            if (homeElement) {
                homeElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, []); 


     // Handle show/hide logic based on ScrollY
     useEffect(() => {
        let timeoutId;

        if (ScrollY > -1) {
            setShow(true); // Show the element when scrolling
            timeoutId = setTimeout(() => {
                setShow(false); // Hide the element after 2 seconds
            }, 300);
        }

        // Cleanup the timeout when ScrollY changes or component unmounts
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [ScrollY]);

    return (
        <div className={`bg-white fixed ${show ? "bottom-[-80px]" : " bottom-0 "}  left-1/2 z-10 mx-auto w-[750px] max-w-[100%] -translate-x-1/2 rounded-sm border-t border-t-[#dee2e6] px-2 py-2 shadow-sm transition-all duration-150 translate-y-0`}>
            <div className='relative flex items-center' style={{ direction: 'ltr' }}>
                {/* Order Button */}
                <button onClick={() => setIsModalOpen(true)} className='bg-primary relative me-2 flex w-full items-center justify-center px-4 py-4 text-xl font-[600] leading-8 text-white shadow-xl transition cursor-pointer duration-300 hover:opacity-80 rounded-full headShake'>
                    <img alt='order-image' loading='lazy' width='35' height='35' decoding='async' data-nimg='1' className='absolute right-2' src='imgs/cartaa.webp' style={{ color: 'transparent' }} />
                    {t('orderNow')}
                </button>

                {/* WhatsApp Button */}
                <a target='_blank' href='https://wa.me/+201551495772'>
                    <div className='flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-xl'>
                        <img alt='order-image' loading='lazy' width='30' height='30' decoding='async' data-nimg='1' style={{ color: 'transparent' }} src='/imgs/whatsapp2.webp' />
                    </div>
                </a>

                <Translate />
            </div>
        </div>
    );
}
