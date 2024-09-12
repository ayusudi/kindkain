"use client"
import React from 'react';
import { Carousel } from "flowbite-react";
import { useTranslations } from 'next-intl';

const Component = () => {
  const t = useTranslations("HomePage")
  return (
    <div className="bg-nude">
      <div className='max-w-screen-2xl m-auto px-6 py-10 gap-8 md:px-14 md:py-20 flex flex-col min-h-[556px] '>
        <div className='w-full flex flex-col gap-2'>
          <p className="m-auto text-darkpurple font-quicksand font-bold md:text-xl text-sm text-center">TESTIMONIALS</p>
          <p className="m-auto text-darktext font-quicksand font-bold md:text-[40px] text-xl w-[88%] md:w-[55%] text-center" style={{ lineHeight: '120%' }}>{t('testimonial')}</p>
          <p className="m-auto text-gray font-nunito md:text-xl text-sm text-center w-[88%] md:w-4/6" style={{ letterSpacing: 0.8, lineHeight: "150%", whiteSpace: 'pre-wrap' }}>{t('testimonial-subtitle')}</p>
        </div>
        <div className='w-full flex md:flex-row flex-col justify-center gap-14'>
          <div className='md:w-[640px] h-[357px] bg-white rounded-lg overflow-hidden'>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lisEQMM81QU?si=SX6uFCgTfJikgUKm" title="YouTube video player" allowFullScreen></iframe>
          </div>
          <div className='md:w-[640px] h-[357px]'>
            <Carousel>
              <div className='bg-gray h-full p-8'>
                1
              </div>
              <div className='bg-gray h-full p-8'>
                2
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Component;
