"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import getBestSelling from "./getBestSelling";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const TrendingSlider = () => {
  const t = useTranslations("Revisi");
  const [cookie] = useCookies();
  const [data, setData] = useState([
    {
      id: "1",
      title: "KindKain Kapas Kain Wajah Cuci Pakai Ulang",
      slug: "kindkain-kapas-kain-wajah-cuci-pakai-ulang",
      price: "IDR 16.000 - 45.000",
      photo:
        "https://drive.usercontent.google.com/download?id=1H864e3aQyzBofuOwYAVJmxSmJjbo7n5k",
      category: "Bath & Personal Care",
      startPrice: 16000,
      bestselling: true,
    },
    {
      id: "4",
      title: "KindKain Pembalut Kain Wanita Cuci Pakai Ulang",
      slug: "kindkain-pembalut-kain-wanita-cuci-pakai-ulang",
      price: "IDR 38.000 - 78.000",
      photo:
        "https://drive.usercontent.google.com/download?id=1yJqzOioWqphq9h5trN4uCPBv0T9nz7nD",
      category: "Feminine Care",
      startPrice: 38000,
      bestselling: true,
    },
    {
      id: "5",
      title: "KindKain Sisipan Pembalut Kain Cuci Pakai Ulang",
      slug: "kindkain-sisipan-pembalut-kain-cuci-pakai-ulang",
      price: "IDR 15.000",
      photo:
        "https://drive.usercontent.google.com/download?id=17izJzH9dlx2mmxsvO55czn1pupWXiaKu",
      category: "Feminine Care",
      startPrice: 15000,
      bestselling: true,
    },
    {
      id: "8",
      title: "KindKain Kantong Wet Bag Waterproof Pakai Ulang",
      slug: "kindkain-kantong-wet-bag-waterproof-pakai-ulang",
      price: "IDR 52.000 - 199.000",
      photo:
        "https://drive.usercontent.google.com/download?id=1zWAfe5X8P3mugW1Uk1ftwRwx6kV6AXni",
      category: "Travel & Grocery",
      startPrice: 52000,
      bestselling: true,
    },
  ]);
  const router = useRouter();
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
        },
      },
    ],
  };

  useEffect(() => {
    let result = getBestSelling(cookie);
    setData(result);
  }, []);

  return (
    <div className="bg-cream">
      <div className="max-w-screen-2xl m-auto px-6 py-10 md:pr-0 md:pl-14 md:py-20 flex flex-col gap-4 md:gap-6">
        <div>
          <p className="text-darkpurple font-quicksand font-bold md:text-xl text-sm">
            {t("BEST SELLER")}
          </p>
          <p
            className="text-darktext font-quicksand font-bold md:text-[40px] text-xl w-[88%] md:w-[55%]"
            style={{ lineHeight: "120%" }}
          >
            {t("What's Trending")}
          </p>
        </div>
        <div className="w-full trending">
          <Slider {...settings}>
            {data.map((e, i) => {
              let slug = e.slug;
              let photo = e.photo;
              return (
                <div
                  onClick={() => router.push(`/products/${slug}`)}
                  key={i}
                  className="cursor-pointer trending-slider__item w-[150px] h-[150px] mx-auto pr-3 md:pr-12"
                >
                  <div
                    style={{ position: "relative", aspectRatio: "1/1" }}
                    className="flex w-[150px] h-[150px] md:w-[300px] md:h-[300px] animated-background bg-gradient-to-r from-zinc-200 via-zinc-200 to-zinc-400"
                  >
                    <Image
                      fill
                      sizes="(max-width: 300px) 100vw"
                      className="rounded-lg"
                      src={photo}
                      alt={
                        "KindKain Pembalut Kain & Menstrual Cup Untuk Kesehatan Wanita " +
                        e.id
                      }
                    />
                  </div>
                  <p
                    style={{ lineHeight: "145%", letterSpacing: 0.33 }}
                    className="h-[58px] text-md line-clamp-3 md:text-xl md:line-clamp-2 font-bold my-2 md:my-4 text-sm font-nunito text-darktext"
                  >
                    {e.title}
                  </p>
                  <p className="font-nunito text-sm md:text-xl self-end dark:text-[#000000] text-[#000000]">
                    {e.price}
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
        <button
          onClick={() => router.push(`/products`)}
          className="hover:bg-darkpurple hover:text-nude font-quicksand font-lg md:font-2xl py-3.5 md:mr-14 bg-transparent border border-1.5 border-gray text-gray rounded-full my-4 md:my-6"
        >
          {t("Browse More")}
        </button>
      </div>
    </div>
  );
};

export default TrendingSlider;
