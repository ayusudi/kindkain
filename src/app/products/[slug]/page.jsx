"use client"
import ReachOut from '@/components/reachout';
import Image from 'next/image';
import Variants from "@/components/components_productpage/variants";
import Accordion from "@/components/components_productpage/accordion";
import Slider from "@/components/components_productpage/slider";
import { useState } from 'react';
import searchBySlug from './searchBySlug';
import Modal from '@/components/components_productpage/modal'
import axios from 'axios';
import { useRouter } from 'next/navigation';



export default function RootLayout({ params }) {
  const router = useRouter()
  const { slug } = params;
  const [product, setProduct] = useState(searchBySlug(slug))
  const [openModal, setOpenModal] = useState(false);
  const openNow = () => {
    setOpenModal(true)
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default setting for mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900, // Adjust this breakpoint to match your desired screen size
        settings: {
          slidesToShow: 3, // Show 4 items on larger screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  const movePage = async (title) => {
    await axios({
      method: "POST",
      url: "https://kindkain.vercel.app/api/categories",
      data: {
        categories: [title]
      }
    })
    router.push(`/products`)
  }


  return (
    <section className='bg-cream'>
      <div className='max-w-screen-2xl m-auto'>
        <div className='cursor-pointer w-5/6 md:w-full px-5 hidden md:flex'>
          <p className='px-5 pt-5 pb-3 text-[15px] font-quicksand'>
            Home / Browse Product / <span className='cursor-pointer' onClick={() => movePage(product.category)}>{product.category}</span> / <span className='text-darkpurple font-semibold'>{product.name}</span>
          </p>
        </div>
        <div className='w-5/6 md:w-full m-auto md:m-0 flex md:px-5 flex-col md:flex-row py-5 md:py-0 items-center md:items-start'>
          <div className='flex flex-col'>
            <div className='aspect-square md:w-[725px] md:h-[725px] md:p-4'>
              <div className='w-full h-full relative rounded-lg'>
                <Image sizes='(max-width: 300px) 100vw' src={product.photo} alt='product' fill className="aspect-square w-full h-full rounded-lg" />
              </div>
            </div>
            <Slider setProduct={setProduct} product={product} settings={settings} />
          </div>
          <div className='md:flex-1 md:pl-8 md:pr-8 flex flex-col gap-3 md:gap-6 items-start'>
            <div>
              <h2 style={{ lineHeight: "120%" }} className='md:mt-2.5 text-3xl text-center md:text-left md:text-5xl capitalize w-full md:w-5/6 font-quicksand font-bold text-darkpurple'>{product.name}</h2>
              <p className='text-xl md:text-[32px] text-center md:text-left font-nunito my-2 pt-1.5'>{product.price}</p>
            </div>
            <p style={{ lineHeight: "150%", whiteSpace: "break-spaces" }} className='text-justify text-base md:text-[20px] text-gray font-nunito'>{product.description}</p>
            <Variants variants={product.variants} product={product} setProduct={setProduct} />
            <button onClick={openNow} className="mt-2 md:mt=0 w-4/6 font-quicksand bg-darkpurple text-yellow text-md md:text-lg rounded-full px-4 py-2.5 font-semibold">
              I Want This Product!
            </button>
            <Modal openModal={openModal} setOpenModal={setOpenModal} product={product} />
            <div className='w-full'>
              <Accordion product={product} />
            </div>
          </div>
        </div>
      </div>

      <ReachOut />
    </section>
  );
}
