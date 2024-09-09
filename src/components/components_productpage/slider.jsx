"use client"
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Component({ product, settings }) {
  return (
    <div className='flex justify-start items-start'>
      <Slider {...settings} className='w-[300px] md:w-[725px] md:px-0'>
        {product?.photos?.map((item, index) => (
          <div key={index} className="mx-auto p-3 md:p-4">
            <Image src={item} alt={`Product image ${index + 1}`} width="300" height="300" className="aspect-square rounded-lg bg-[#D9D9D9]" />
          </div>
        ))}
      </Slider>
    </div>
  )
}