import { useTranslations } from "next-intl";

export default function Teebalhoor() {
	const t = useTranslations("home")
	
    return (
        <div className='bg-[#f2f2f2] pt-[50px] pb-[30px]  '>
            <div className='bg-white mx-4  rounded-lg'>
                <div className='relative text-center'>
                    <div className='absolute left-[50%] top-0 translate-x-[-50%] translate-y-[-50%]'>
                        <div className='border-animation flex h-[50px] w-[50px] items-center justify-center rounded-full'>
                            <span className='relative flex shrink-0 overflow-hidden rounded-full h-[45px] w-[45px] bg-gray-100'>
                                <div style={{ position: 'relative', width: '100%', paddingBottom: '100%' }} data-radix-aspect-ratio-wrapper=''>
                                    <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
                                        <img src='/imgs/logo.webp' alt='Image' fetchPriority='high' decoding='async' data-nimg='fill' className='object-cover' style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} sizes='44px' />
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                    <h1 className='pb-2 pt-[1.6rem] font-bold'> {t("TEEBALHOOR")} </h1>
                </div>
                <div className='grid grid-cols-2 border-b border-t py-2'>
                    <div className='flex items-center justify-center border-r'>
                        <svg width='20px' height='20px' className='text-primary' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path>
                        </svg>
                        <div className='mx-1'> {t("MondaySunday")} </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <svg width='20px' height='20px' className='text-primary' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path>
                        </svg>
                        <div className='mx-1'>5:00 - 8:00</div>
                    </div>
                </div>
                <div className='flex items-center justify-center py-2'>
                    <svg className='text-primary' width='20px' height='20px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path>
                        <rect x='3' y='5' width='18' height='14' rx='2' stroke='currentColor' strokeWidth='2' strokeLinecap='round'></rect>
                    </svg>
                    <div className='mx-1'></div>
                </div>
            </div>
        </div>
    );
}
