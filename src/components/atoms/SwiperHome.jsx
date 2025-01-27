'use client'; // Required for using Swiper in Next.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import Image from 'next/image';

const images = [
    {
        src: '/imgs/img1.webp',
        alt: 'Image 1',
    },
    {
        src: '/imgs/img2.webp',
        alt: 'Image 2',
    },
    {
        src: '/imgs/img3.webp',
        alt: 'Image 3',
    },
];

export default function Carousel() {
    const [swiperInstance, setSwiperInstance] = useState(null); // Store Swiper instance
    const [activeIndex, setActiveIndex] = useState(0); // Track active slide index

    // Handle Swiper initialization
    const handleSwiperInit = swiper => {
        setSwiperInstance(swiper);
    };

    // Handle slide change
    const handleSlideChange = swiper => {
        setActiveIndex(swiper.realIndex); // Update active index
    };

    // Handle preview image click
    const handlePreviewClick = index => {
        if (swiperInstance) {
            swiperInstance.slideTo(index); // Navigate to the clicked slide
        }
    };

    return (
        <div className='relative' role='region' aria-roledescription='carousel'>
            <div className='relative'>
                <Swiper
                    modules={[Navigation, EffectCreative, Autoplay]}
                    effect='creative'
                    speed={800}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: ['-100%', 0, -100], // Move horizontally to the left
                        },
                        next: {
                            translate: ['100%', 0, 0], // Move horizontally to the right
                        },
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    loop={true}
                    onSwiper={handleSwiperInit} // Initialize Swiper instance
                    onSlideChange={handleSlideChange} // Track slide changes
                    className='overflow-hidden'>
                    {images.map((image, index) => (
                        <SwiperSlide key={index} role='group' aria-roledescription='slide'>
                            <div className='flex items-center justify-center min-h-fit'>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={800}
                                    height={400}
                                    className='object-contain w-full h-fit'
                                    priority={index === 0} // Only prioritize the first image
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <div style={{ direction: 'ltr' }} className='arrows flex justify-center gap-[30px] absolute bottom-[10px] w-full h-[40px] z-[10]'>
                    <button className='swiper-button-prev !relative !h-[32px] !w-[32px] rounded-full bg-black/25 duration-200 hover:bg-black/75 flex items-center justify-center'>
                        <Image src={'/icons/prev-arow.svg'} width={15} height={15} alt='' />
                    </button>

                    <button className='swiper-button-next !relative !h-[32px] !w-[32px] rounded-full bg-black/25 duration-200 hover:bg-black/75 flex items-center justify-center'>
                        <Image src={'/icons/next-arrow.svg'} width={15} height={15} alt='' />
                    </button>
                </div>
            </div>

            {/* Preview Grid */}
            <div className='preview flex max-w-[100%] flex-wrap justify-start gap-2 px-4 py-5 rtl:justify-end'>
                <div className='relative grid grid-cols-[repeat(auto-fill,minmax(64px,1fr))] gap-[7px] w-full '>
                    {images.map((image, index) => (
                        <div key={index} className=' rounded-md overflow-hidden relative parent-open w-[64px] h-[64px] cursor-pointer' onClick={() => handlePreviewClick(index)}>
                            <div className='top-0 right-0'>
                                <Image alt='' src={image.src} width={64} height={64} className='loading-animation object-cover' />
                            </div>
                            <div className='w-full h-full bg-black/25 group-hover:open-clippath  close-clippath absolute inset-0 '> </div>

                            {/* Checkmark for Active Slide */}
                            {activeIndex === index && (
                                <div className='absolute inset-0 flex items-center justify-center bg-black/25 text-white transition-opacity duration-200 opacity-100'>
                                    <Image className='h-5 w-5 loading-animation object-cover' alt='' src={'/icons/check.svg'} width={15} height={15} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
