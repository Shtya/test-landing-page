'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import Popup from '../templates/Popup';
import ReviewModal from './ShowAllReview';

export default function Review() {
    const t = useTranslations('home');
    const comment = [
        { img: '/imgs/avatar1.jpeg', name: 'نجلاء سالم', content: 'وايد حبيت بخور الدرهم، الريحة ثابتة وتعطي البيت جو من الرفاهية' },
        { img: '/imgs/avatar2.jpeg', name: 'عمر الحمادي', content: 'الريحة ثابتة وتظل طول اليوم' },
        { img: '/imgs/avatar3.jpeg', name: 'عمر الحمادي', content: 'عرض العيد الوطني خلى السعر مغري جداً، وما ندمت على الشراء' },
        { img: '/imgs/avatar4.jpeg', name: 'العنود منصور', content: 'ما شاء الله، بخور الدرهم غير، ريحته تعبّر عن الفخامة الإماراتية بامتياز' },
        { img: '/imgs/avatar5.jpeg', name: 'هيا ناصر', content: 'ريحة البخور شيء ما يتفوت! فواح وفخم، كل ما أشبّه يحسسني بالفخر بتراثنا' },
        { img: '/imgs/avatar6.jpeg', name: 'ali+', content: 'يحة راقية وثباتها طويل جداً. أكيد بشتريه مرة ثانية' },
        { img: '/imgs/avatar7.jpeg', name: 'مشاعل سامي', content: 'ريحة البخور غير، حسيت براحة وهدوء يوم شميته، لازم أجرب كل الأنواع' },
        { img: '/imgs/avatar8.jpeg', name: 'غادة عبد الله', content: 'أحلى بخور استخدمته لحد الحين، دايم أسمع مدح عليه من الأهل والضيوف' },
        { img: '/imgs/avatar9.jpeg', name: 'غلي المنصور', content: 'ريحته قوية وفخمة وتدوم لفترة طويلة' },
        { img: '/imgs/avatar10.jpeg', name: 'ilmn nhav', content: 'كان اختيار موفق' },
    ];

	const [isModalOpen , setIsModalOpen] = useState(false)

    return (
        <div className='bg-[#f2f2f2] ' id='review'>
            <div className=' bg-[#f2f2f2] !px-5 !py-3 font-bold '> {t('allreview')} </div>

            <div className='bg-white rounded-lg p-4 pb-3'>
                <div className='bg-background rounded-lg p-4'>
                    <div className='mx-auto flex w-[fit-content] flex-col items-center rounded border px-3 py-2'>
                        <p className='text-[1.8rem] font-bold'>4.9</p>
                        <div className='flex gap-[2px] justify-center '>
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className='fill-primary stroke-[#e17b21] w-[20px] ' xmlns='http://www.w3.org/2000/svg' viewBox='-1 -1 27 25.81' preserveAspectRatio='xMidYMid meet' strokeWidth='2'>
                                    <g shapeRendering='geometricPrecision'>
                                        {' '}
                                        <polygon points='25 9.02 16.4 7.75 12.46 0 8.59 7.79 0 9.14 6.21 15.23 4.85 23.81 12.55 19.79 20.3 23.74 18.85 15.17 25 9.02'></polygon>
                                    </g>
                                </svg>
                            ))}
                        </div>
                        <p className='text-[1.3rem] font-bold'>356 {t('review')} </p>
                    </div>

                    {/* Repeat the structure for each review */}
                    <div style={{ direction: 'rtl' }} className=' comments flex gap-[20px] flex-col border-b border-b-gray-300 py-4'>
                        {comment?.map((e, i) => (
                            <div key={i}>
                                <div className='flex'>
                                    <span className='h-[40px] w-[40px]'>
                                        <span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200'>
                                            <img className='aspect-square h-full w-full' src={e.img} alt='User Avatar' />
                                        </span>
                                    </span>
                                    <div className='mx-2 flex flex-col'>
                                        <p className='ms-1 text-[.9rem] font-bold'> {e.name} </p>
                                        <div className='flex items-center justify-center'>
                                            <div className='flex gap-[2px] justify-center '>
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className='fill-primary w-[20px] ' xmlns='http://www.w3.org/2000/svg' viewBox='-1 -1 27 25.81' preserveAspectRatio='xMidYMid meet' strokeWidth='2'>
                                                        <g shapeRendering='geometricPrecision'>
                                                            <polygon points='25 9.02 16.4 7.75 12.46 0 8.59 7.79 0 9.14 6.21 15.23 4.85 23.81 12.55 19.79 20.3 23.74 18.85 15.17 25 9.02'></polygon>
                                                        </g>
                                                    </svg>
                                                ))}
                                            </div>

                                            <p className='mx-1 mb-0 text-sm text-gray-700'>(5)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='ms-[3.1rem] mt-1'> {e.content} </div>
                            </div>
                        ))}
                    </div>
					

                    <div onClick={()=> setIsModalOpen(true) } className='flex items-center gap-[5px]  mt-[20px] text-[#778899] group hover:text-primary duration-200 '>
                        <svg className='' width='18px' height='18px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path className='group-hover:stroke-primary duration-200' d='M19 5L12.7071 11.2929C12.3166 11.6834 11.6834 11.6834 11.2929 11.2929L5 5' stroke='lightslategray' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'></path>
                            <path className='group-hover:stroke-primary duration-200' d='M19 13L12.7071 19.2929C12.3166 19.6834 11.6834 19.6834 11.2929 19.2929L5 13' stroke='lightslategray' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'></path>
                        </svg>
                        <div className=' cursor-pointer  underline-offset-3 ms-1.5 font-bold underline'> {t('showAll')} </div>
                    </div>

					<Popup title={t("customReview")}  isModalOpen={isModalOpen}  setIsModalOpen={setIsModalOpen} >
						<ReviewModal data={comment} RatingComponent={RatingComponent} />
					</Popup>




                    <form>
                        <div className='mt-8 rounded-lg border bg-[rgb(248,249,250)] px-4 py-4'>
                            <div className='mx-2 gap-[10px] flex items-center'>
                                <p className='text-[14px] font-semibold'> {t('HowYourExperience')} </p>
                                <RatingComponent />
                            </div>
                            <div className='my-4 flex rounded-full shadow-sm ring-1 ring-inset ring-gray-300 focus-visible:ring-0'>
                                <input type='text' className='block flex-1 rounded-full border-0 bg-transparent px-5 py-3 text-sm leading-6 placeholder:text-gray-400 focus-visible:outline-0' placeholder={t('DropyourFeedback')} value='' />
                            </div>
                            <button className='all bg-primary w-full rounded-full py-[10px] text-[16px] font-[600] text-white transition duration-300 hover:opacity-80'>{t("Submit")}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const RatingComponent = () => {
    const ratingChanged = newRating => {};

    return (
        <div style={{ direction: 'ltr' }}>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor='#ec972e'
                //   isHalf={true}
                emptyIcon={
                    <svg className=' stroke-primary w-[20px] ' xmlns='http://www.w3.org/2000/svg' viewBox='-1 -1 27 25.81' preserveAspectRatio='xMidYMid meet' strokeWidth='2'>
                        <g shapeRendering='geometricPrecision'>
                            {' '}
                            <polygon points='25 9.02 16.4 7.75 12.46 0 8.59 7.79 0 9.14 6.21 15.23 4.85 23.81 12.55 19.79 20.3 23.74 18.85 15.17 25 9.02'></polygon>
                        </g>
                    </svg>
                }
                fullIcon={
                    <svg aria-hidden='true' className='rr--svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.06 512.06' preserveAspectRatio='xMidYMid meet'>
                        <g shapeRendering='geometricPrecision' transform='translate(-24.14 0)'>
                            <path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'></path>
                        </g>
                    </svg>
                }
            />
        </div>
    );
};
