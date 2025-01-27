// components/QuickOrderForm.js
import { useTranslations } from 'next-intl';
import React from 'react';

const QuickOrderForm = () => {
    const t = useTranslations("home")
    return (
        <div className='h-[80vh] overflow-auto' >
        <div className=' bg-white relative mx-4 rounded-2xl border-2 p-4 mb-14 mt-4' style={{ borderColor: 'rgb(236, 151, 46)' }}>
            <div className='' >
                <div className='mb-2 flex w-full  rounded-lg p-2 hover:cursor-pointer border-2 border-blue-600 bg-sky-200'>
                    <div className='relative h-16 w-16 cursor-pointer overflow-hidden rounded-md'>
                        <div data-radix-aspect-ratio-wrapper style={{ position: 'relative', width: '100%', paddingBottom: '100%' }}>
                            <div style={{ position: 'absolute', inset: '0px' }}>
                                <img alt='' loading='lazy' decoding='async' data-nimg='fill' sizes='64px' src="/imgs/img1.webp" style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }} />
                            </div>
                        </div>
                    </div>
                    <div className='ms-4 w-[80%]'>
                        <div className='flex w-full justify-between text-start text-sm font-bold text-black'>
                            <div className='whitespace-nowrap'>
                                <span> {t("Buy")}   </span>
                                <span className='text-brand'>1</span>
                                &nbsp;<span> {t("For")}  </span>&nbsp;
                                <span className='text-brand'>35</span>
                                &nbsp;<span> {t("AED")} </span>
                            </div>
                            <div>
                                <span className='text-brand text-sm'>
                                    <span className='me-1 font-bold'>35</span> {t("AED")} 
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-wrap items-center justify-between pt-1'>
                            <p className='w-auto rounded-lg bg-gradient-to-l px-2 py-1 text-xs font-semibold uppercase text-white from-green-500 to-green-500'> {t("Save")}  53%</p>
                            <span className='text-sm text-gray-400 line-through'>74.47  {t("AED")} </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-2 my-4 rounded bg-gray-100 p-3'>
                <div className='flex justify-between text-xs'>
                    <p> {t("Sub Total")} </p>
                    <p className='font-semibold'>35  {t("AED")} </p>
                </div>
                <div className='my-2 flex justify-between text-xs'>
                    <p> {t("Delivery Fee")} </p>
                    <p className='font-semibold'> {t("Free")} </p>
                </div>
                <div className='my-2 flex justify-between text-xs text-green-600'>
                    <p> {t("Save Amount")} </p>
                    <p className='font-semibold'>+39.47  {t("AED")} </p>
                </div>
                <div className='h-[1px] bg-gray-400'></div>
                <div className='mt-2 flex justify-between text-xs font-semibold'>
                    <p> {t("Total")} </p>
                    <p>35  {t("AED")} </p>
                </div>
            </div>
            <div className='flex justify-center font-bold text-rose-500'> {t("Please fill in the form to Quick Order")} </div>

            <div>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                    <div className='space-y-2'>
                        <div className='relative mt-2 rounded-md shadow-sm' id=':rmm:-form-item' aria-describedby=':rmm:-form-item-description' aria-invalid='false'>
                            <div className='pointer-events-none absolute inset-y-0 bottom-[1.2px] left-[1.2px] top-[1.2px] flex h-[46px] w-[47px] items-center bg-gray-100 px-3 ltr:rounded-bl-sm ltr:rounded-tl-sm rtl:right-[1.2px] rtl:rounded-br-sm rtl:rounded-tr-sm'>
                                <span className='flex h-full w-full items-center justify-center sm:text-sm'>
                                    <img alt='name-icon' loading='lazy' width='14' height='14' decoding='async' data-nimg='1' className='h-auto w-auto' src='/imgs/icon1.webp' style={{ color: 'transparent' }} />
                                </span>
                            </div>
                            <input className='border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 block h-12 w-full rounded-sm border-0 py-1.5 pe-2 ps-14 text-xs text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-xs placeholder:text-gray-400 focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]' placeholder={t("WriteYourName")}  value='' name='name' />
                            <div className='pointer-events-none absolute inset-y-0 bottom-[1.2px] top-[1.2px] flex items-center px-1 ltr:right-3 ltr:rounded-bl-sm ltr:rounded-tl-sm rtl:left-3'></div>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <div className='relative mt-2 rounded-md shadow-sm' id=':rmn:-form-item' aria-describedby=':rmn:-form-item-description' aria-invalid='false'>
                            <div className='pointer-events-none absolute inset-y-0 bottom-[1.2px] left-[1.2px] top-[1.2px] flex h-[46px] w-[47px] items-center bg-gray-100 px-3 ltr:rounded-bl-sm ltr:rounded-tl-sm rtl:right-[1.2px] rtl:rounded-br-sm rtl:rounded-tr-sm'>
                                <span className='flex h-full w-full items-center justify-center sm:text-sm'>
                                    <img alt='phone-icon' loading='lazy' width='14' height='14' decoding='async' data-nimg='1' className='h-auto w-auto' src='/imgs/icon2.webp' style={{ color: 'transparent' }} />
                                </span>
                            </div>
                            <input className='border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 block h-12 w-full rounded-sm border-0 py-1.5 pe-2 ps-14 text-xs text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-xs placeholder:text-gray-400 focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]' placeholder='0501234567' type='tel' value='' name='phone' />
                            <div className='pointer-events-none absolute inset-y-0 bottom-[1.2px] top-[1.2px] flex items-center px-1 ltr:right-3 ltr:rounded-bl-sm ltr:rounded-tl-sm rtl:left-3'></div>
                        </div>
                    </div>
                </div>
                <div className='my-4 grid grid-cols-1 gap-4 sm:my-2 sm:grid-cols-2'>
                    <div className='space-y-2'>
                        <div className='relative mt-2 rounded-md' id=':rmo:-form-item' aria-describedby=':rmo:-form-item-description' aria-invalid='false'>
                            <div className='pointer-events-none absolute inset-y-0 bottom-[1.2px] left-[1.2px] top-[1.2px] flex h-[46px] w-[47px] items-center bg-gray-100 px-3 ltr:rounded-bl-sm ltr:rounded-tl-sm rtl:right-[1.2px] rtl:rounded-br-sm rtl:rounded-tr-sm'>
                                <span className='flex h-full w-full items-center justify-center sm:text-sm'>
                                    <img alt='area-icon' loading='lazy' width='16' height='16' decoding='async' data-nimg='1' src='/imgs/icon3.webp' style={{ color: 'transparent' }} />
                                </span>
                            </div>
                            <select name='emirate' className='bg-background block h-12 w-full appearance-none rounded-sm border-0 py-1.5 pe-2 ps-14 text-xs text-gray-900 outline-none ring-1 ring-inset ring-gray-400 placeholder:text-xs placeholder:text-gray-400 focus:text-xs focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]' placeholder='Select City'>
                                <optgroup className='text-xs'>
                                    <option value='-1'>{t("Select City")}  </option>
                                    <option className='ps-14 text-xs' value='Abu Dhabi'>
                                        Abu Dhabi / أبو ظبي
                                    </option>
                                    <option className='ps-14 text-xs' value='Umm al-Quwain'>
                                        Umm al-Quwain / أم القيوين
                                    </option>
                                    <option className='ps-14 text-xs' value='Sharjah'>
                                        Sharjah / الشارقة
                                    </option>
                                    <option className='ps-14 text-xs' value='Al Ain'>
                                        Al Ain / العين
                                    </option>
                                    <option className='ps-14 text-xs' value='Fujairah'>
                                        Fujairah / الفجيرة
                                    </option>
                                    <option className='ps-14 text-xs' value='Dubai'>
                                        Dubai / دبي
                                    </option>
                                    <option className='ps-14 text-xs' value='Ras Al Khaimah'>
                                        Ras Al Khaimah / راس الخيمة
                                    </option>
                                    <option className='ps-14 text-xs' value='Ajman'>
                                        Ajman / عجمان
                                    </option>
                                </optgroup>
                            </select>
                            <div className='pointer-events-none absolute inset-y-0 bottom-[1.2px] top-[1.2px] flex items-center px-1 ltr:right-3 ltr:rounded-bl-sm ltr:rounded-tl-sm rtl:left-3'></div>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <div className='relative mt-2 rounded-md shadow-sm' id=':rmp:-form-item' aria-describedby=':rmp:-form-item-description' aria-invalid='false'>
                            <div className='pointer-events-none absolute inset-y-0 bottom-[1.2px] left-[1.2px] top-[1.2px] flex h-[46px] w-[47px] items-center bg-gray-100 px-3 ltr:rounded-bl-sm ltr:rounded-tl-sm rtl:right-[1.2px] rtl:rounded-br-sm rtl:rounded-tr-sm'>
                                <span className='flex h-full w-full items-center justify-center text-xs'>
                                    <img alt='mail-icon' loading='lazy' width='16' height='16' decoding='async' data-nimg='1' src='/imgs/icon4.webp' style={{ color: 'transparent' }} />
                                </span>
                            </div>
                            <input className='border-input bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder block h-12 w-full rounded-sm border-0 py-1.5 pe-2 ps-14 text-xs text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-xs placeholder:text-gray-400 focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]' placeholder={t("WriteYourEmail")}  value='' name='email' />
                            <div className='pointer-events-none absolute inset-y-0 bottom-[1.2px] top-[1.2px] flex items-center px-1 ltr:right-3 ltr:rounded-bl-sm ltr:rounded-tl-sm rtl:left-3'></div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 grid grid-cols-1 gap-4'>
                    <div className='space-y-2'>
                        <div className='relative' id=':rmq:-form-item' aria-describedby=':rmq:-form-item-description' aria-invalid='false'>
                            <textarea className='border-input focus-visible:ring-ring flex min-h-[60px] w-full bg-transparent shadow-sm focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 rounded-sm border-0 px-2 py-1.5 text-xs text-gray-900 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus-visible:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]' name='address' placeholder={t("textarea")} ></textarea>
                            <div className='pointer-events-none absolute top-2 flex items-center px-1 ltr:right-3 ltr:rounded-bl-sm ltr:rounded-tl-sm rtl:left-3'></div>
                        </div>
                    </div>
                </div>
            </div>

			<div className="bg-white fixed bottom-0 left-1/2 z-[1000] mx-auto w-[490px] max-w-[100vw] -translate-x-1/2 rounded-sm border-t border-t-[#dee2e6] px-2 py-2 shadow-sm transition-all duration-150 translate-y-0">
			<div className="relative flex items-center cursor-pointer"><button className="bg-primary relative me-2 flex w-full items-center justify-center px-4 py-4 text-xl font-[600] leading-8 text-white shadow-xl transition duration-300 hover:opacity-80 rounded-full"> {t("Order Now")} </button></div></div>
        </div>
        </div>
    );
};

export default QuickOrderForm;
