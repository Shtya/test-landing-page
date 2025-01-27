"use client"
import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function Translate() {
  const router = useRouter();
  const pathname  = usePathname()
  const locale = useLocale()


  // Function to switch the language
  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en'; 
    router.push(pathname, { locale: newLocale });
  };


  return (
    <div
      className='absolute right-0 top-[-90px] flex items-center cursor-pointer hover:scale-[.98] duration-200 justify-center  bg-white rounded-[50%] w-[56px] h-[56px]'
      style={{ boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)' }}
      onClick={switchLanguage} // Add onClick handler
    >
      <Image src={'/icons/translate.svg'} alt='Translate' width={28} height={28} />
    </div>
  );
}