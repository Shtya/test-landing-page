'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import gsap from 'gsap'; // Import GSAP
import Popup from './Popup';

export default function Navbar() {
    const t = useTranslations('aside-modal');
    const locale = useLocale();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <div className='border-b-[1px] border-[#e5e7eb] flex items-center justify-between p-2'>
                <div>
                    <div className='flex cursor-pointer items-center gap-2' onClick={() => setIsModalOpen(true)}>
                        <div className='border-animation flex h-11 w-11 items-center justify-center rounded-full'>
                            <span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100'>
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
                                    <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
                                        <Image src='/imgs/logo.webp' alt='Logo' fill className='object-cover' />
                                    </div>
                                </div>
                            </span>
                        </div>

                        <h1 className='font-bold'> {t('title')} </h1>
                        <Image src='/icons/verify.svg' alt='Logo' width={18} height={18} className='object-cover' />
                    </div>
                </div>

                {/* Right Side: Buttons */}
                <div className='flex'>
                    <button className='flex h-11 w-11 items-center justify-center rounded-full me-1 hover:bg-gray-100'>
                        <Image src={'/icons/cart.svg'} width={20} height={20} alt='' />
                    </button>
                    <button className='flex h-11 w-11 items-center justify-center rounded-full hover:bg-gray-100' onClick={() => setIsModalOpen(true)}>
                        <svg className='w-[24px] scale-x-[-1] text-gray-900 rtl:scale-x-[1]' viewBox='0 0 23.778 16.619'>
                            <path d='M13.553,11.461q-5.222,0-10.445,0a2.171,2.171,0,0,0-.578.057,1.183,1.183,0,0,0,.217,2.307,3.771,3.771,0,0,0,.39.016q10.446,0,20.892,0a2.256,2.256,0,0,0,.6-.058,1.182,1.182,0,0,0-.217-2.305c-.138-.015-.278-.015-.417-.016ZM3.142,6.724a3.879,3.879,0,0,1-.416-.018,1.185,1.185,0,0,1-.148-2.321,2.364,2.364,0,0,1,.526-.04q7.508,0,15.016,0a2.865,2.865,0,0,1,.444.026,1.183,1.183,0,0,1,.946,1.378,1.2,1.2,0,0,1-1.324.976q-3.788,0-7.577,0Zm.6,14.237c-.335,0-.67.009-1-.019A1.149,1.149,0,0,1,1.7,19.864a1.172,1.172,0,0,1,.863-1.238,2.2,2.2,0,0,1,.525-.046q5.151,0,10.3,0a2.873,2.873,0,0,1,.417.026,1.161,1.161,0,0,1,.95.96,1.187,1.187,0,0,1-1.29,1.394c-1.745.005-3.489,0-5.235,0Q5.987,20.961,3.745,20.961Z' transform='translate(-1.692 -4.344)' fill='currentColor'></path>
                        </svg>
                    </button>
                </div>
            </div>

            <Popup title={t('title')} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {/* Modal Content */}
                <div className='relative flex flex-col overflow-auto max-sm:h-[calc(100vh-200px)] sm:h-[calc(100vh-100px)]  '>
                    {/* Scrollable Content */}
                    <div dir='rtl' className='relative '>

                        <div className=' bg-[#fff] h-full w-full overflow-y-auto  '>
                            <div style={{ minWidth: '100%', display: 'table' }}>
                                {/* Banner Section */}
                                <div className=' p-4 pb-0 '>
                                    <div className='relative h-[150px] overflow-hidden rounded-lg bg-black bg-cover bg-center bg-no-repeat' style={{ backgroundImage: 'url(/adespresso/img/banner.png)' }}>
                                        <div className='absolute inset-0 flex items-center justify-center bg-black/50 text-center text-white'>
                                            <div>
                                                <span className='relative flex h-[74px] w-[74px] shrink-0 overflow-hidden rounded-full bg-gray-100'>
                                                    <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
                                                        <div style={{ position: 'absolute', inset: 0 }}>
                                                            <Image alt='Image' src='/imgs/logo.webp' fill className='object-cover' sizes='74px' priority />
                                                        </div>
                                                    </div>
                                                </span>
                                                <div className='mt-2 flex items-center justify-center font-bold'>
                                                    <svg className='me-2 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'>
                                                        <path id='verication-check' d='M9,18H9a1.088,1.088,0,0,1-.4-.079,2.083,2.083,0,0,1-.429-.236c-.183-.127-.4-.275-.586-.437a1.772,1.772,0,0,0-1.191-.427,2.677,2.677,0,0,0-.409.033c-.228.035-.472.062-.745.082-.044,0-.087,0-.129,0a1.139,1.139,0,0,1-1.077-.652,9.863,9.863,0,0,1-.405-.905A1.781,1.781,0,0,0,2.6,14.36a8.931,8.931,0,0,1-.9-.406,1.308,1.308,0,0,1-.291-.209,1,1,0,0,1-.2-.274,1.616,1.616,0,0,1-.134-.811c.007-.067.016-.156.025-.25h0c.02-.2.045-.445.071-.694a1.628,1.628,0,0,0-.35-1.209c-.2-.258-.39-.523-.572-.788a1.176,1.176,0,0,1,0-1.432l0-.007c.158-.232.321-.471.5-.688a1.9,1.9,0,0,0,.394-1.6L1.128,5.9v0a3.835,3.835,0,0,1-.058-.971,1.057,1.057,0,0,1,.479-.788,3.287,3.287,0,0,1,.565-.292l.119-.053c.143-.064.29-.126.431-.186h0L2.7,3.594a1.645,1.645,0,0,0,.892-.89l.1-.226h0c.091-.213.185-.434.288-.646a1.149,1.149,0,0,1,1.134-.771,2.431,2.431,0,0,1,.259.015c.251.027.507.052.755.076h0l.195.019c.055.005.111.008.165.008A1.6,1.6,0,0,0,7.459.84L7.486.819C7.7.656,7.927.487,8.153.329A1.466,1.466,0,0,1,9,0a1.47,1.47,0,0,1,.841.326l.016.011c.2.137.4.279.587.435a1.728,1.728,0,0,0,1.16.4,2.848,2.848,0,0,0,.39-.028l.123-.017h0a5.276,5.276,0,0,1,.731-.068c.065,0,.128,0,.189.007a1.083,1.083,0,0,1,.887.577,4.44,4.44,0,0,1,.367.8,1.973,1.973,0,0,0,1.28,1.271,4.968,4.968,0,0,1,.683.305,1.64,1.64,0,0,1,.346.238,1.04,1.04,0,0,1,.223.287,1.061,1.061,0,0,1,.109.348,1.719,1.719,0,0,1,0,.421c-.02.189-.039.382-.058.568-.014.137-.028.279-.043.419a1.607,1.607,0,0,0,.342,1.175c.165.216.327.434.479.648h0a2.247,2.247,0,0,1,.261.456,1.05,1.05,0,0,1,0,.836,2.221,2.221,0,0,1-.259.454l-.06.084h0c-.112.158-.228.321-.355.47a1.852,1.852,0,0,0-.383,1.584c.035.235.062.479.081.745a1.145,1.145,0,0,1-.665,1.212c-.327.16-.628.3-.92.416a1.7,1.7,0,0,0-.967.963c-.11.266-.24.575-.39.87a1.387,1.387,0,0,1-.455.553,1.134,1.134,0,0,1-.644.172,2.152,2.152,0,0,1-.23-.013l-.61-.062h0l-.359-.036a1.745,1.745,0,0,0-.178-.009,1.612,1.612,0,0,0-1,.351c-.266.2-.486.366-.694.511a2.074,2.074,0,0,1-.429.238A1.085,1.085,0,0,1,9,18ZM5.719,7.679a1.1,1.1,0,0,0-.406.084.952.952,0,0,0-.6.913.988.988,0,0,0,.324.732l1.718,1.717.642.642a1.11,1.11,0,0,0,.772.38,1.123,1.123,0,0,0,.78-.386l3.937-3.937.015-.015,0,0a1.909,1.909,0,0,0,.172-.187.988.988,0,0,0,.155-.916.969.969,0,0,0-.673-.632,1.053,1.053,0,0,0-.278-.039,1.027,1.027,0,0,0-.743.345c-.39.391-.787.788-1.17,1.172C9.7,8.215,9.01,8.9,8.335,9.588c-.069.07-.121.1-.168.1s-.1-.031-.163-.108c-.105-.121-.223-.235-.337-.345h0c-.05-.048-.1-.1-.15-.147L7.2,8.773l0,0c-.26-.261-.528-.531-.8-.791A.965.965,0,0,0,5.719,7.679Z' transform='translate(0.003)' fill='#00b9ff'></path>
                                                    </svg>
                                                    {t('title')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Badge Section */}
                                <div className=' p-4 flex items-center justify-center' style={{ direction: 'ltr' }}>
                                    <div className='custom-border relative h-[42px] w-[280px] bg-contain bg-no-repeat' style={{ backgroundImage: 'url(/adespresso/img/text-bg.webp)' }}>
                                        <Image className='  w-full absulote ' alt='badge' src='/imgs/text-bg.webp' width={280} height={42} priority />
                                        <Image alt='badge' src='/imgs/prize.webp' width={48} height={48} className='swing absolute top-1' priority />
                                        <div className='absolute left-[70px] top-1/2 -translate-y-1/2 text-sm font-bold text-white'> {t('title2')} </div>
                                    </div>
                                </div>

                                <div className='bg-[#f2f2f2] pt-1 pb-5 '>
                                    {/* Stats Section */}
                                    <div className=' mt-4 grid grid-cols-2 gap-2 px-4'>
                                        <div style={{ direction: locale == 'en' ? 'ltr' : 'rtl' }} className='  bg-white flex items-center gap-2 rounded-lg p-2'>
                                            <div className='min-w-[34px]'>
                                                <Image alt='icon' src='/imgs/search.webp' width={34} height={34} priority />
                                            </div>
                                            <div className='font-bold'>
                                                <p className='text-brand'>186</p>
                                                <p className='text-[10px] leading-[12px]'> {t('box1')} </p>
                                            </div>
                                        </div>
                                        <div style={{ direction: locale == 'en' ? 'ltr' : 'rtl' }} className='bg-white flex items-center gap-2 rounded-lg p-2'>
                                            <div className='min-w-[34px]'>
                                                <Image alt='icon' src='/imgs/bag.webp' width={34} height={34} priority />
                                            </div>
                                            <div className='font-bold'>
                                                <p className='text-brand'>1339</p>
                                                <p className='text-[10px] leading-[12px]'> {t('box2')} </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features Section */}
                                    <div className=' mt-6 grid grid-cols-3 gap-2 px-4'>
                                        <div className='bg-white relative rounded-md px-3 pb-3 pt-5 text-center'>
                                            <div className='border-white absolute -top-4 left-1/2 mx-auto flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-[3px] bg-red-400'>
                                                <Image alt='icon' src='/imgs/verify.webp' width={18} height={18} priority />
                                            </div>
                                            <p className='text-[10px] font-bold leading-[12px]'> {t('box3')} </p>
                                        </div>
                                        <div className='bg-white relative rounded-md px-3 pb-3 pt-5 text-center'>
                                            <div className='border-white absolute -top-4 left-1/2 mx-auto flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-[3px] bg-orange-300'>
                                                <Image alt='icon' src='/imgs/camira.webp' width={18} height={14} priority />
                                            </div>
                                            <p className='text-[10px] font-bold leading-[12px]'> {t('box4')} </p>
                                        </div>
                                        <div className='bg-white relative rounded-md px-3 pb-3 pt-5 text-center'>
                                            <div className='border-white absolute -top-4 left-1/2 mx-auto flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-[3px] bg-sky-400'>
                                                <Image alt='icon' src='/imgs/drive.webp' width={17} height={17} priority />
                                            </div>
                                            <p className='text-[10px] font-bold leading-[12px]'> {t('box5')} </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Customer Service Section */}
                                <div className='h-fit bg-[#f2f2f2] '>
                                    <div data-orientation='horizontal'>
                                        <div data-state='active' data-orientation='horizontal' role='tabpanel' aria-labelledby='radix-:r2c:-trigger-home' tabindex='0' className='ring-offset-white focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2' style={{ animationDuration: '0s' }}>
                                            <div className='bg-white flex items-center justify-center px-4 py-8'>
                                                <div className='text-center'>
                                                    <Image alt='customer-service' src='/imgs/call-center.webp' width={50} height={50} className='mx-auto mb-5' priority />
                                                    <h3 className='text-primary text-sm'> {t('call1')} </h3>
                                                    <h4 className='text-primary text-sm font-bold'> {t('call2')} </h4>
                                                    <div className='my-5 flex items-center justify-center'>
                                                        <Link href='https://wa.me/+971547744211/?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20TEEBALHOOR%20%D8%B4%D8%A7%D9%87%D8%AF%D8%AA%20%D8%A7%D8%B9%D9%84%D8%A7%D9%86%20%20(https%3A%2F%2Fteebalhoor.com%2Fadespresso%2F1732440014%3Fesp_id%3D9f86e5970757b154071f92a51185872001b9aa7830b14ea4079593c627a6eda7)%20%20%D8%A8%D8%AE%D9%88%D8%B1%20%D8%AF%D8%B1%D9%87%D9%85%20%D8%A7%D9%84%D8%A7%D9%85%D8%A7%D8%B1%D8%A7%D8%AA%D9%8A(%D8%B9%D8%B1%D9%88%D8%B6%20%D8%A7%D9%84%D8%B9%D9%8A%D8%AF%20%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%20%D8%A8%D9%83%D9%85%D9%8A%D8%A9%20%D9%85%D8%AD%D8%AF%D9%88%D8%AF%D8%A9)%F0%9F%98%8D%F0%9F%87%A6%F0%9F%87%AA%F0%9F%87%A6%F0%9F%87%AA%20%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%86%20%D8%A3%D8%B7%D9%84%D8%A8' target='_blank'>
                                                            <div className='rounded-lg bg-gray-100 p-2'>
                                                                <Image alt='whatsapp' src='/imgs/whatsapp.webp' width={24} height={24} priority />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className='mb-5 flex items-center justify-center gap-4'>
                                                        <div className='h-[1px] w-8 bg-gray-300'></div>
                                                        <p className='text-xs'> {t('call3')} </p>
                                                        <div className='h-[1px] w-8 bg-gray-300'></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer  */}
                                <div className='bg-white fixed h-[50px] w-full bottom-0 mt-auto flex justify-around border-t border-gray-200 px-3 py-4 text-center'>
                                    <Link href='/privacy-policy' className='hover:text-primary duration-200 w-full cursor-pointer select-none text-xs transition-colors'>
                                        {t('footer1')}
                                    </Link>
                                    <div className='h-4 w-[1px] bg-gray-300'></div>
                                    <Link href='/terms-and-conditions' className='hover:text-primary duration-200 w-full cursor-pointer select-none text-xs transition-colors'>
                                        {t('footer2')}
                                    </Link>
                                    <div className='h-4 w-[1px] bg-gray-300'></div>
                                    <Link href='/about-us' className='hover:text-primary duration-200 w-full cursor-pointer select-none text-xs transition-colors'>
                                        {t('footer3')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Popup>
        </>
    );
}
