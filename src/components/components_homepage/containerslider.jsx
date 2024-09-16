
"use client"
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const TrendingSlider = () => {
  const t = useTranslations("Top5.products")
  const router = useRouter()
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // default setting for mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900, // Adjust this breakpoint to match your desired screen size
        settings: {
          slidesToShow: 2, // show 4 items on larger screens
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-cream">
      <div className='max-w-screen-2xl m-auto px-6 py-10 md:pr-0 md:pl-14 md:py-20 flex flex-col gap-4 md:gap-6'>
        <div>
          <p className="text-darkpurple font-quicksand font-bold md:text-xl text-sm">BEST SELLER</p>
          <p className="text-darktext font-quicksand font-bold md:text-[40px] text-xl w-[88%] md:w-[55%]" style={{ lineHeight: '120%' }}>What&rsquo;s Trending</p>
        </div>
        <div className='w-full trending'>
          <Slider {...settings}>
            {new Array(4).fill('').map((e, i) => {
              let slug = t(`${i}.slug`)
              let photo = t(`${i}.photo`).toString()
              return (
                <div onClick={() => router.push(`/products/${slug}`)} key={i} className="cursor-pointer trending-slider__item w-[150px] h-[150px] mx-auto pr-3 md:pr-12">
                  <div style={{ position: 'relative', aspectRatio: "1/1" }} className='flex w-[150px] h-[150px] md:w-[300px] md:h-[300px]'>
                    <Image fill sizes='(max-width: 300px) 100vw' className='rounded-lg' src={photo} alt={t(`${i}.title`)} />
                  </div>
                  <p style={{ lineHeight: "145%", letterSpacing: 0.33 }} className="h-[58px] text-md line-clamp-3 md:text-xl md:line-clamp-2 font-bold my-2 md:my-4 text-sm font-nunito text-darktext">{t(`${i}.title`)}</p>
                  <p className="font-nunito text-sm md:text-xl self-end justify-self-end dark:text-[#000000] text-[#000000]">IDR {t(`${i}.price`)}</p>
                </div>
              )
            })}
          </Slider>
        </div>
        <button onClick={() => router.push(`/products`)} className="hover:bg-darkpurple hover:text-nude font-quicksand font-lg md:font-2xl py-3.5 md:mr-14 bg-transparent border border-1.5 border-gray text-gray rounded-full my-4 md:my-6">
          Browse More
        </button>
      </div>

    </div>
  );
};

export default TrendingSlider;
