"use client"
import React from 'react';

const Component = () => {
  const items = [
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
  ];

  return (
    <div className="p-6 md:px-14 md:py-16 flex flex-col md:flex-row bg-cream gap-6 md:gap-[76px]">
      <div className='flex-grow flex flex-col md:w-[455px] md:gap-4 gap-3 justify-center'>
        <p style={{ lineHeight: "120%" }} className='md:w-96 md:text-4xl text-2xl font-quicksand font-bold text-darktext'>Our Product Categories</p>
        <p className='md:w-80 text-justify text-gray md:font-2xl font-lg font-nunito md:mb-8'>Not only feminine products, our product selection ranges across various categories, from home to travel.</p>
        <button className="md:flex md:items-center md:justify-center hidden md:mt-16 hover:bg-darkpurple hover:text-nude font-quicksand font-lg md:font-2xl md:py-3.5 mr-14 bg-transparant border border-1.5 border-gray text-gray rounded-full">
          Browse All Categories
        </button>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {
          items.map((el, i) => (
            <div key={i} className='h-40 w-40 md:h-64 md:w-64 rounded-lg bg-[#D9D9D9]'></div>
          ))
        }
      </div>
      <button className="w-full py-3.5 flex items-center justify-center md:hidden md:mt-16 hover:bg-darkpurple hover:text-nude font-quicksand font-lg md:font-2xl md:py-3.5 mr-14 bg-transparant border border-1.5 border-gray text-gray rounded-full">
        Browse All Categories
      </button>
    </div>

  );
};

export default Component;
