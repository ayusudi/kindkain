
"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingSlider = () => {
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

  const items = [
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
  ];

  return (
    <div className="px-6 py-10 md:pr-0 md:pl-14 md:py-20 flex flex-col gap-4 md:gap-6 bg-cream">
      <div>
        <p className="text-darkpurple font-quicksand font-bold md:text-xl text-sm">BEST SELLER</p>
        <p className="text-darktext font-quicksand font-bold md:text-[40px] text-xl w-[88%] md:w-[55%]" style={{ lineHeight: '120%' }}>What&rsquo;s Trending</p>
      </div>
      <div className='w-full trending'>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="trending-slider__item w-[150px] h-[150px] mx-auto pr-3 md:pr-12">
              <div className="aspect-square min-w-[145px] min-h-[145px] rounded-lg bg-[#D9D9D9]"></div>
              <p style={{ lineHeight: "145%", letterSpacing: 0.33 }} className="font-bold my-4 text-sm  font-nunito text-darktext">{item.title}</p>
              <p className="font-nunito text-sm ">{item.price}</p>
            </div>
          ))}
        </Slider>
      </div>
      <button className="hover:bg-darkpurple hover:text-nude font-quicksand font-lg md:font-2xl py-3.5 md:mr-14 bg-transparent border border-1.5 border-gray text-gray rounded-full my-4 md:my-6">
        Browse More
      </button>
    </div>
  );
};

export default TrendingSlider;
