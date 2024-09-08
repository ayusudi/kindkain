"use client"
import ReachOut from '@/components/reachout';
import { useTranslations } from 'next-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Accordion, CustomFlowbiteTheme, Flowbite } from "flowbite-react";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const accordion = {
  "root": {
    "base": "font-quicksand text-[20px]",
    "flush": {
      "off": "rounded-lg ",
      "on": ""
    }
  },
  "content": {
    "base": "border-b-[1px] px-1 pt-0 pb-5 font-nunito font-normal text-base md:text-[20px]"
  },
  "title": {
    "arrow": {
      "base": "h-6 w-6 shrink-0",
      "open": {
        "off": "",
        "on": "rotate-180"
      }
    },
    "base": "flex w-full items-center justify-between py-5 px-1 text-left font-medium text-gray-500 text-base md:text-[22px]",
    "flush": {
      "off": "hover:bg-gray-100 focus:ring-none border-0 border-b-[1px]",
      "on": "bg-transparent dark:bg-transparent "
    },
    "heading": "font-[600]",
    "open": {
      "off": "",
      "on": "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white border-0"
    }
  }
}


function Component({ product }) {
  return (
    <Accordion theme={accordion.root} >
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>Materials & Dimensions</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray-500 dark:text-gray-400">
            {product.material_size}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>How To Use</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray-500 dark:text-gray-400">
            {product.how_to_use}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel theme={accordion}>
        <Accordion.Title theme={accordion.title}>How To Wash</Accordion.Title>
        <Accordion.Content theme={accordion.content}>
          <p className="whitespace-pre-wrap mb-2 text-gray-500 dark:text-gray-400">
            {product.how_to_wash}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default function HomePage() {
  const router = useRouter()
  const t = useTranslations('HomePage');
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // default setting for mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900, // Adjust this breakpoint to match your desired screen size
        settings: {
          slidesToShow: 3, // show 4 items on larger screens
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

  let [product, setProduct] = useState({
    "id": "1",
    "category": "Bath & Personal Care",
    "slug": "kindkain-reusable-face-pad",
    "name": "KindKain Reusable Face Pad",
    "description": "- Specially designed as the best choice of reusable face pad for sensitive skin, leaving no lint, efficient for face cleansing\n- Made of microfiber and microfleece which are antibacterial and hypoallergenic.\n- Multifunctional, can be used as an effective replacement for disposable face pads for makeup removal/cleansing, face wash & exfoliation without scrubs, or facial care applications such as toners.\nReusable Face Pad is the best alternative product choice that can be washed and used repeatedly for 6 months and up to 1 year, so it is more economical.",
    "material_size": "Size: 7.5 x 7cm with hanging strap and finger tuck\nMaterial: hypoallergenic microfleece & antibacterial microfiber",
    "how_to_use": "How to use and store:\n1. Pre-wash the face pad before the first use with clean water and bar soap/liquid detergent, then dry.\n2. Use the microfiber (textured) side to remove makeup or wash your face.\n3. The microfleece side can be used to apply skin care products.\n4. Wash the face pad by hand with bar soap after each use until they are clean, then hang them up to dry, and they are ready to use again.",
    "how_to_wash": "Additional notes:\n- Facepad does not need to wait to dry before it can be used again.\n- For effective washing, use a soap bar (KindKain's coconut soap or bath soap bar).",
    "photo": "https://drive.usercontent.google.com/download?id=1H864e3aQyzBofuOwYAVJmxSmJjbo7n5k",
    "photos": [
      "https://drive.usercontent.google.com/download?id=1H864e3aQyzBofuOwYAVJmxSmJjbo7n5k",
      "https://drive.usercontent.google.com/download?id=1MtW_701BAYnzDpaztF6XYvu_lVAjpLGU",
      "https://drive.usercontent.google.com/download?id=12Re7lZjBeMjlRgFdsChh1bQkT_qfGMMw",
      "https://drive.usercontent.google.com/download?id=1CXvZs3N8d5qaDJrOIxed-Qy643A31FAX",
      "https://drive.usercontent.google.com/download?id=1vKnYVbMj12ov_HyudRcD9sFlWPMuYNfX",
      "https://drive.usercontent.google.com/download?id=1v4VQbWKV48IQY0dlfsNLWeuuptvAWES2"
    ],
    "shopee": "https://shopee.co.id/KindKain-Kapas-Kain-Wajah-Muka-Cuci-Pakai-Ulang-Reusable-Cotton-Pad-i.841448295.17086383470?sp_atk=13d75d94-bb09-4649-8a2e-1471d7476592&xptdk=13d75d94-bb09-4649-8a2e-1471d7476592",
    "tokopedia": "https://www.tokopedia.com/kindkain/kindkain-kapas-kain-wajah-muka-cuci-pakai-ulang-reusable-cotton-pad-1-pcs?extParam=src%3Dshop%26whid%3D14139504",
    "lazada": "https://www.lazada.co.id/products/kindkain-kapas-kain-wajah-muka-cuci-pakai-ulang-reusable-cotton-pad-i7885480165.html?spm=a2o4j.store_product.list.27.71e7d447TB6Dhw"
  })

  const [list, setList] = useState([
    { name: "Pantyliner 18cm", img: "", status: true },
    { name: "Mini 21~23cm", img: "", status: false },
    { name: "Day 27~28cm", img: "", status: false },
    { name: "Night 35cm", img: "", status: false },
    { name: "Maxi 42cm", img: "", status: false },
  ])

  const change = (i) => {
    let temp = [...list]
    temp.forEach(el => el.status = false)
    temp[i].status = true
    setList(temp)
  }

  return (
    <section className='bg-cream'>
      <div className='max-w-screen-2xl m-auto'>
        <div className='w-5/6 md:w-full px-5 hidden md:flex'>
          <p className='px-5 pt-5 pb-3 text-[15px] font-quicksand'>Home  /  Browse Product / {product.category} / <span className='text-darkpurple font-semibold'>{product.name}</span></p>
        </div>
        <div className='w-5/6 md:w-full m-auto md:m-0 flex md:px-5 flex-col md:flex-row py-5 md:py-0 items-center md:items-start'>
          <div className='flex flex-col'>
            <div className='aspect-square md:w-[725px] md:h-[725px] md:p-4'>
              <div className='w-full h-full relative rounded-lg'>
                <Image sizes='(max-width: 300px) 100vw' src={product.photo} alt='product' fill className="aspect-square w-full h-full rounded-lg" />
              </div>
            </div>
            <div className='flex justify-start items-start'>
              <Slider {...settings} className='w-[300px] md:w-[725px] md:px-0'>
                {product.photos?.map((item, index) => (
                  <div key={index} className="  mx-auto p-3 md:p-4">
                    <Image src={item} alt={index} width="300" height="300" className="aspect-square rounded-lg bg-[#D9D9D9]" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className='md:flex-1 md:pl-8 md:pr-8 flex flex-col gap-3 md:gap-6 items-start'>
            <div>
              <h2 style={{ lineHeight: "120%" }} className='md:mt-2.5 text-3xl text-center md:text-left md:text-5xl capitalize w-full md:w-5/6 font-quicksand font-bold text-darkpurple'>{product.name}</h2>
              <p className='text-xl md:text-[32px] text-center md:text-left font-nunito my-2'>IDR 200.000</p>
            </div>
            <p style={{ lineHeight: "150%", whiteSpace: "break-spaces" }} className='text-justify text-base md:text-[20px] text-gray font-nunito'>{product.description} </p>
            <div>
              <p className='text-base md:text-[20px] text-darktext font-nunito font-semibold mb-3'>Variants Available</p>
              <div className='flex flex-wrap md:w-5/6 gap-3'>
                {
                  list.map((el, i) => {
                    if (el.status) return <div key={i} className='p-2 md:py-2.5 md:px-3 border rounded-full border-darkpurple cursor-pointer'><p className='text-base md:text-[20px] font-nunito font-bold text-darkpurple'>{el.name}</p></div>
                    else return <div key={i} onClick={() => change(i)} className='p-2 md:py-2.5 md:px-3 border rounded-full border-gray cursor-pointer'><p className='text-base md:text-[20px] font-nunito font-bold text-gray'>{el.name}</p></div>
                  })
                }
              </div>
            </div>
            <button className="mt-2 md:mt=0 w-4/6 font-quicksand bg-darkpurple text-yellow text-md md:text-lg rounded-full px-4 py-2.5">
              I Want This Product!
            </button>
            <div className='w-full'>
              <Component product={product} />
            </div>
          </div>
        </div>
        <div className='pl-5 flex flex-col md:pb-20 pb-14  gap-8 pr-8 mt-6 md:mt-14 overflow-x-scroll'>
          <p className='m-auto md:m-0 w-5/6 md:w-full text-3xl md:text-4xl text-center md:text-left font-[700] font-quicksand'>Our Costumer Also Buy</p>
          <div className='flex justify-between flex-wrap gap-3'>
            {
              new Array(4).fill("").map((e, i) => {
                return (
                  <div key={i} className='w-[150px] md:w-[300px] mb-2 md:mb-0'>
                    <div className='w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-[#D9D9D9] rounded-lg'></div>
                    <p style={{ lineHeight: "145%", letterSpacing: 0.33 }} className="p-1 md:p-0 font-bold my-2 md:my-4 text-md md:text-[21px] font-nunito text-darktext">Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
                    <p className="p-1 md:p-0 text-base md:text-[21px] text-gray font-nunito text-sm ">IDR 200.000</p>
                  </div>
                )
              })
            }
          </div>
          <button onClick={() => router.push("/products")} className="w-full hover:bg-darkpurple hover:text-nude font-quicksand font-lg md:font-2xl py-3.5 md:mr-14 bg-transparent border border-1.5 border-gray text-gray rounded-full my-0 md:my-6">
            Browse More
          </button>
        </div>
      </div>

      <ReachOut />
    </section>
  )
}
