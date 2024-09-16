"use client"
import ReachOut from '@/components/reachout';
import Link from "next/link";
import Image from 'next/image';
import Sidebar from "@/components/components_productpage/sidebar"
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import getProducts from './getProducts';

export default function HomePage(value) {
  const [cookies] = useCookies();
  const [index, setIndex] = useState(6)
  const { locale, categories } = cookies
  const [data, setData] = useState(getProducts(locale, categories))
  let [categoriesFilter, setCategoriesFilter] = useState([
    {
      name: "Feminine Care",
      status: false
    },
    {
      name: "Bath & Personal Care",
      status: false
    },
    {
      name: "Home & Living",
      status: false
    },
    {
      name: "Hobbies & Accessories",
      status: false
    },
    {
      name: "Kitchen & Dining",
      status: false
    },
    {
      name: "Travel & Grocery",
      status: false
    }
  ])
  const fetchData = (list = categories) => {
    let result = getProducts(locale, list)
    setData(result)
  }
  useEffect(() => {
    let temp = [...categoriesFilter]
    if (categories?.length) {
      temp.forEach(el => {
        el.status = false
        if (categories.includes(el.name)) {
          el.status = true
        }
      })
      setCategoriesFilter(temp)
    }
    fetchData()
  }, [locale, categories])

  return (
    <section className='bg-cream'>
      <div className='max-w-screen-2xl m-auto px-5 hidden md:flex'>
        <p className='px-5 py-5 text-[15px] font-quicksand'>Home  /  <span className='text-darkpurple'>Browse Product</span></p>
      </div>
      <div className='max-w-screen-2xl m-auto flex flex-col md:flex-row md:px-5 pb-2 md:pb-20'>
        <Sidebar categoriesFilter={categoriesFilter} setData={setData} data={data} />
        <div className='flex flex-col flex-grow'>
          <div className='pt-4 md:pt-0 pl-4 xl:pl-10 2xl:pl-14 w-3/6 md:w-full text-[22px] md:text-[40px] font-quicksand font-bold text-darkpurple mb-3'>
            <p>Browse <br className='flex md:hidden' />Our Products</p>

          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 flex-grow mx-4 md:mx-5'>
            {
              data.filter((el, i) => i < index).map((el, i) => (
                <Link href={'/products/' + el.slug} key={i} className='cursor-pointer mb-3 flex flex-col items-center '>
                  <div className='w-[168px] md:w-[300px] flex flex-col gap-2 md:gap-3'>
                    <div className='relative w-[168px] h-[168px] md:w-[300px] md:h-[300px] bg-grey rounded-xl' style={{ aspectRatio: '1/1' }}>
                      <Image alt={i + 'photo'} sizes='(max-width:300px) 100vw' fill className='rounded-lg' src={el.photo} />
                    </div>
                    <p className='pl-1 font-nunito font-bold text-[16px] md:text-[21px] h-[70px] md:h-[64px] line-clamp-2' >{el.title}</p>
                    <p className='pl-1 font-quicksand text-[16px]'>{el.price}</p>
                  </div>
                </Link>
              ))
            }
            {
              index < data.length ? (<div onClick={() => setIndex(index + 6)} className='cursor-pointer hover:bg-darkpurple hover:text-white h-12 col-span-2 md:col-span-3 pl-6 text-[24px] text-center border border-1 rounded-full py-1.5 font-quicksand text-gray mb-6 mt-10'>
                <p>Load More</p>
              </div>) : <></>
            }
          </div>
        </div>

      </div>
      <ReachOut />
    </section>
  )
}
