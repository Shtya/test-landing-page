import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Marquee from 'react-fast-marquee';


export default function TopNav() {
    const t = useTranslations();
	const locale = useLocale()
    return (
        <div style={{ backgroundColor: '#f10100' }} className='h-[36px] w-full max-w-[100vw] overflow-hidden text-white'>
            <Marquee speed={50} gradient={false}  >
				{
					t.raw("slider_top_nav").map((e,i)=> (
						<span key={i} className='inline-block h-[36px] min-w-[600px] font-bold leading-[36px]'> {e} </span>
					))
				}
                </Marquee>
        </div>
    );
}
