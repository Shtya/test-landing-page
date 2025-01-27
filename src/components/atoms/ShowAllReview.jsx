// components/StarRating.js
import { useTranslations } from 'next-intl';
import React from 'react';


const ReviewModal = ({data , RatingComponent}) => {
	const t = useTranslations("home")
    return (
        <div className='relative w-full overflow-hidden flex flex-col items-start justify-start max-sm:h-[calc(100vh-150px)] sm:h-[calc(100vh-40px)] ' style={{direction:"rtl"}}  >
			<img src='/imgs/bg-whatsapp.webp' className=' z-[-1] absolute inset-0 object-contain ' />
            
			<div className=' comments scrollbar-width-custom   mb-3 flex h-full w-full flex-col-reverse overflow-x-hidden overflow-y-scroll px-6'>
                {
					data?.map((e,i)=> (
						<div key={i} className='my-2'>
							<div className='flex flex-col pb-2 pt-4'>
								<div className='flex'>
									<span className='h-[35px] w-[35px]'>
										<span className='relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-gray-200'>
											<img className='aspect-square h-full w-full' src={e.img} alt='User Avatar' />
										</span>
									</span>
									<div className='mx-2 flex flex-col'>
										<p className='ms-1 text-[.9rem] font-bold'>{e.name}</p>
										<div className='flex items-center justify-center'>
											<div className='flex gap-[2px] justify-center '>
												{[...Array(5)].map((_, i) => (
													<svg className='fill-primary w-[20px] ' xmlns='http://www.w3.org/2000/svg' viewBox='-1 -1 27 25.81' preserveAspectRatio='xMidYMid meet' strokeWidth='2'>
														<g shapeRendering='geometricPrecision'>
															<polygon points='25 9.02 16.4 7.75 12.46 0 8.59 7.79 0 9.14 6.21 15.23 4.85 23.81 12.55 19.79 20.3 23.74 18.85 15.17 25 9.02'></polygon>
														</g>
													</svg>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='bg-white mt-1 w-fit rounded-t-lg px-4 py-1.5 ltr:rounded-br-lg rtl:rounded-bl-lg'> {e.content} </div>
							<p className='my-1 text-xs text-gray-500'>{t("monthAgo" , {count : 3})}</p>
						</div>

					))
				}
				
            </div>

            <div className='bg-white z-[10] relative  w-full rounded-t-2xl px-4 pb-5 pt-5'>
                <form>
                    <div className='relative'>
                        <button className=' whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow bg-primary hover:bg-primary8 absolute top-[-50%] flex h-12 w-12 items-center justify-center rounded-full p-2 transition-all duration-200 ltr:right-0 rtl:left-0'>
                            <svg className='text-white  ' width='20px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='currentColor'>
                                <path d='M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z'></path>
                            </svg>
                        </button>

                        <div className=' ltr:flex-row-reverse rtl:text-right flex  items-center gap-[10px]  '>
                            <p className='text-[14px] font-semibold text-black'> {t('HowYourExperience')} </p>
                            <div className='' > <RatingComponent /> </div>
                        </div>
                        <div className='my-4 flex rounded-full shadow-sm ring-1 ring-inset ring-gray-300 focus-visible:ring-0'>
                            <input className='block flex-1 rounded-full border border-black bg-gray-100 px-5 py-3 text-sm leading-6 placeholder:text-gray-500 focus-visible:outline-0' placeholder={t('DropyourFeedback')} type='text' value='' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewModal;
