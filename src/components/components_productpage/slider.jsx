"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Component({ product, settings, setProduct }) {
  const clickImage = (item) => {
    let temp = { ...product };
    temp.photo = item;
    setProduct(temp);
  };
  return (
    <div className="flex justify-start items-start">
      <Slider {...settings} className="w-[300px] md:w-[725px] md:px-0">
        {product?.photos?.map((item, index) => (
          <div
            onClick={() => clickImage(item)}
            key={index}
            className="mx-auto p-3 md:p-4 cursor-pointer"
          >
            <Image
              src={item}
              alt={`KindKain Pembalut Kain & Menstrual Cup Untuk Kesehatan Wanita - Product ${
                index + 1
              }`}
              width="300"
              height="300"
              className="aspect-square rounded-lg animated-background bg-gradient-to-r from-zinc-200 via-zinc-200 to-zinc-400"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
