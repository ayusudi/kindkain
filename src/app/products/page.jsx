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
  const [data, setData] = useState([])
  const [dataShow, setDataShow] = useState([])
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

  useEffect(() => {
    let temp = [...categoriesFilter]
    if (cookies.categories?.length) {
      let ctg = cookies.categories.split(',')
      temp.forEach(el => {
        el.status = false
        if (ctg.includes(el.name)) {
          el.status = true
        }
      })
      setCategoriesFilter(temp)
    }
    const fetchData = () => {
      let result = getProducts(cookies)
      setData(result)
      setDataShow(result)
    }
    fetchData()
  }, [cookies])

  return (
    <section className='bg-cream'>
      <div className='max-w-screen-2xl m-auto px-5 hidden md:flex'>
        <p className='px-5 py-5 text-[15px] font-quicksand'>Home  /  <span className='text-darkpurple'>Browse Product</span></p>
      </div>
      <div className='max-w-screen-2xl m-auto flex flex-col md:flex-row md:px-5 pb-2 md:pb-20'>
        <div className='hidden md:flex'>

          <Sidebar categoriesFilter={categoriesFilter} setData={setDataShow} data={data} />
        </div>
        <div className='flex flex-col flex-grow'>
          <div className='relative flex md:flex-col justify-between pt-4 md:pt-0 pl-4 pr-5 xl:pl-10 2xl:pl-14 md:w-3/6 md:w-full text-[22px] md:text-[40px] font-quicksand font-bold text-darkpurple mb-3'>
            <p>Browse <br className='flex md:hidden' />Our Products</p>
            <div className='flex md:hidden items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
                <path d="M4.75 7.71875C4.75 7.56128 4.81256 7.41025 4.92391 7.2989C5.03525 7.18756 5.18628 7.125 5.34375 7.125H8.90625C9.06372 7.125 9.21475 7.18756 9.3261 7.2989C9.43744 7.41025 9.5 7.56128 9.5 7.71875C9.5 7.87622 9.43744 8.02725 9.3261 8.1386C9.21475 8.24994 9.06372 8.3125 8.90625 8.3125H5.34375C5.18628 8.3125 5.03525 8.24994 4.92391 8.1386C4.81256 8.02725 4.75 7.87622 4.75 7.71875ZM2.375 4.15625C2.375 3.99878 2.43756 3.84776 2.54891 3.73641C2.66026 3.62506 2.81128 3.5625 2.96875 3.5625H11.2812C11.4387 3.5625 11.5897 3.62506 11.7011 3.73641C11.8124 3.84776 11.875 3.99878 11.875 4.15625C11.875 4.31372 11.8124 4.46475 11.7011 4.57609C11.5897 4.68744 11.4387 4.75 11.2812 4.75H2.96875C2.81128 4.75 2.66026 4.68744 2.54891 4.57609C2.43756 4.46475 2.375 4.31372 2.375 4.15625ZM0 0.59375C0 0.436278 0.0625557 0.285255 0.173905 0.173905C0.285255 0.0625557 0.436278 0 0.59375 0H13.6562C13.8137 0 13.9647 0.0625557 14.0761 0.173905C14.1874 0.285255 14.25 0.436278 14.25 0.59375C14.25 0.751222 14.1874 0.902245 14.0761 1.01359C13.9647 1.12494 13.8137 1.1875 13.6562 1.1875H0.59375C0.436278 1.1875 0.285255 1.12494 0.173905 1.01359C0.0625557 0.902245 0 0.751222 0 0.59375Z" fill="#301C51" />
              </svg>
              <p className='font-quicksand font-light text-[14px]'>Sort & Filter</p>
            </div>
            {/* <div className='text-base font-normal top-[99%] z-10 w-full h-[100%] absolute'>

              <div className='bg-cream w-[300px] sticky z-50'>
                <Sidebar categoriesFilter={categoriesFilter} setData={setDataShow} data={data} />
              </div>
            </div> */}
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 flex-grow mx-4 md:mx-5'>
            {
              dataShow.filter((el, i) => i < index).map((el, i) => (
                <Link href={'/products/' + el.slug} key={i} className='cursor-pointer mb-3 flex flex-col items-center '>
                  <div className='w-[168px] md:w-[300px] flex flex-col gap-2 md:gap-3'>
                    <div className='relative w-[168px] h-[168px] md:w-[300px] md:h-[300px] animated-background bg-gradient-to-r from-zinc-200 via-zinc-200 to-zinc-400 rounded-xl' style={{ aspectRatio: '1/1' }}>
                      <Image alt={i + 'photo'} sizes='(max-width:300px) 100vw' fill className='rounded-lg' src={el.photo} />
                    </div>
                    <p className='pl-1 font-nunito font-bold text-[16px] md:text-[21px] h-[70px] md:h-[64px] line-clamp-2 text-[#282525]' >{el.title}</p>
                    <p className='pl-1 font-quicksand text-[16px] text-[#000000]'>{el.price}</p>
                  </div>
                </Link>
              ))
            }
            {
              index < dataShow.length ? (<div onClick={() => setIndex(index + 6)} className='cursor-pointer hover:bg-darkpurple hover:text-white h-12 col-span-2 md:col-span-3 pl-6 text-[24px] text-center border border-1 rounded-full py-1.5 font-quicksand text-gray mb-6 mt-10'>
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
