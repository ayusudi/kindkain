
"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderMini = () => {
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
    <div className="md:pr-0 md:pl-14 md:py-20 flex flex-col gap-4 md:gap-6 bg-cream">
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
    </div>
  );
};

export default SliderMini;
