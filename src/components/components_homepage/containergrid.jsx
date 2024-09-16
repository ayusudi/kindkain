"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useCookies } from 'react-cookie';

const Component = () => {
  const t = useTranslations("HomePage")
  const router = useRouter()
  const [cookies, setCookie] = useCookies();
  const items = [
    {
      title: 'Feminine Care', img: '/categories/feminim-care.jpg'
    },
    {
      title: 'Bath & Personal Care', img: '/categories/bath-personal.jpg'
    },
    {
      title: 'Home & Living', img: '/categories/home-living.jpg'
    },
    {
      title: 'Kitchen & Dining', img: '/categories/kitchen-dining.jpg'
    },
    {
      title: 'Travel & Grocery', img: '/categories/travel-grocery.jpg'
    },
    {
      title: 'Hobbies & Accessories', img: '/categories/hobbies-accessories.jpg'
    },
  ];
  const movePage = async (el) => {
    setCookie("categories", el.title)
    router.push(`/products`)
  }

  return (
    <div className="bg-cream">
      <div className='max-w-screen-2xl m-auto p-6 md:px-14 md:py-16 flex flex-col md:flex-row gap-6 md:gap-[76px]'>
        <div className='flex-grow flex flex-col md:w-[455px] md:gap-4 gap-3 justify-center'>
          <p style={{ lineHeight: "120%" }} className='md:w-96 md:text-4xl text-2xl font-quicksand font-bold text-darktext'>Our Product Categories</p>
          <p className='md:w-96 text-justify text-gray md:text-lg text-md font-nunito md:mb-8'>{t("text-category")}</p>
          <button onClick={() => router.push(`/products`)} className="md:flex md:items-center md:justify-center hidden md:mt-16 hover:bg-darkpurple hover:text-nude font-quicksand font-lg md:font-2xl md:py-3.5 mr-14 bg-transparant border border-1.5 border-gray text-gray rounded-full">
            Browse All Categories
          </button>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {
            items.map((el, i) => (
              <div onClick={() => movePage(el)} key={el.title} className='cursor-pointer relative h-40 w-40 md:h-64 md:w-64 rounded-lg'>
                <Image alt={el.title} fill src={el.img} className='rounded-lg' />
              </div>
            ))
          }
        </div>
        <button onClick={() => router.push(`/products`)} className="w-full py-3.5 flex items-center justify-center md:hidden md:mt-16 hover:bg-darkpurple hover:text-nude font-quicksand font-lg md:font-2xl md:py-3.5 mr-14 bg-transparant border border-1.5 border-gray text-gray rounded-full">
          Browse All Categories
        </button>
      </div>
    </div>
  );
};

export default Component;
