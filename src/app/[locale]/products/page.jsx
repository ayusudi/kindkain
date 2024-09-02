"use client"
import Navbar from '@/components/navbar';
import ReachOut from '@/components/reachout';
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

function ComponentOption({ name, status, clickMethod }) {
  return (
    <div className="flex items-center gap-2">
      <div onClick={() => clickMethod(name)} className='cursor-pointer border border-[#BBBBBB] bg-[#EAEAEA] rounded-full w-5 h-5 flex justify-center items-center'>
        {
          status ? (<svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M3.19691 8L0 4.80309L1.45689 3.3462L3.19691 5.09138L8.28314 0L9.74002 1.45689L3.19691 8Z" fill="#707070" />
          </svg>) : (<></>)
        }
      </div>
      <p className={status ? 'font-nunito text-darktext font-bold' : 'font-nunito text-darktext'}>{name}</p>
    </div>
  )
}

export default function HomePage() {
  const t = useTranslations('HomePage');
  const [allCategory, setAllCategory] = useState(true)
  let [categories, setCategories] = useState([
    {
      name: "Feminime Care",
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
  const [allSortBy, setAllSortBy] = useState(true)
  const [sortBy, setSortBy] = useState([
    { name: "Best Selling", status: false },
    { name: "Alphabetically, A-Z", status: false },
    { name: "Alphabetically, Z-A", status: false },
    { name: "Price, low to high", status: false },
    { name: "Price, high to low", status: false },
    { name: "Date, old to new", status: false },
    { name: "Date, new to old", status: false },
  ])

  const clickStatusCategory = (name) => {
    if (name === "All") {
      setAllCategory(true)
      setCategories([
        {
          name: "Feminime Care",
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
    } else {
      let temp = [...categories]
      let choosen = temp.find(el => el.name === name)
      choosen.status = !choosen.status
      let isTrue = temp.find((el) => el.status === true)
      if (isTrue) setAllCategory(false)
      else setAllCategory(true)
      setCategories(temp)
    }
  }

  const clickSortBy = (name) => {
    let temp = [...sortBy]
    if (name === "All") {
      setAllSortBy(true)
      setSortBy([
        { name: "Best Selling", status: false },
        { name: "Alphabetically, A-Z", status: false },
        { name: "Alphabetically, Z-A", status: false },
        { name: "Price, low to high", status: false },
        { name: "Price, high to low", status: false },
        { name: "Date, old to new", status: false },
        { name: "Date, new to old", status: false },
      ])
    } else {
      if (name === "Best Selling") temp[0].status = !temp[0].status
      else if (name === "Alphabetically, A-Z" && !temp[1].status) {
        temp[1].status = true
        temp[2].status = false
      }
      else if (name === "Alphabetically, Z-A" && !temp[2].status) {
        temp[2].status = true
        temp[1].status = false
      } else if (name === "Price, low to high" && !temp[3].status) {
        temp[3].status = true
        temp[4].status = false
      } else if (name === "Price, high to low" && !temp[4].status) {
        temp[4].status = true
        temp[3].status = false
      } else if (name === "Date, old to new" && !temp[5].status) {
        temp[5].status = true
        temp[6].status = false
      } else if (name === "Date, new to old" && !temp[6].status) {
        temp[6].status = true
        temp[5].status = false
      } else {
        let findIt = temp.find(el => el.name === name)
        findIt.status = !findIt.status
      }
      setAllSortBy(false)
      setSortBy(temp)
    }
  }
  return (
    <section className='bg-cream'>
      <Navbar />
      <div className='px-5 hidden md:flex'>
        <p className='px-5 py-5 text-[15px] font-quicksand'>Home  /  <span className='text-darkpurple'>Browse Product</span></p>

      </div>
      <div className='flex flex-col md:flex-row md:px-5 pb-2 md:pb-20'>
        <div className='w-[270px] hidden md:flex md:flex-col'>
          <div className='flex flex-col md:gap-8 px-5 border-r-[1px] border-[#CCC2BA] my-3'>
            <div >
              <div className='flex justify-between items-center mb-3'>
                <p className='font-quicksand font-semibold'>Category</p>
                <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M1 7L7 1L13 7" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className='flex flex-col gap-3'>
                <ComponentOption clickMethod={clickStatusCategory} name={"All"} status={allCategory} />
                {categories.map((el, i) => <ComponentOption clickMethod={clickStatusCategory} key={i} name={el.name} status={el.status} />)}
              </div>
            </div>
            <div>
              <div className='flex justify-between items-center mb-3'>
                <p className='font-quicksand font-semibold'>Sort By</p>
                <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M1 7L7 1L13 7" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className='flex flex-col gap-3 py-3'>
                <ComponentOption clickMethod={clickSortBy} name={"All"} status={allSortBy} />
                {sortBy.map((el, i) => <ComponentOption clickMethod={clickSortBy} key={i} name={el.name} status={el.status} />)}
              </div>

            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 flex-grow mx-4 md:mx-5'>
          <div className='pt-4 md:pt-0 col-span-2 md:col-span-3 md:pl-6 w-3/6 md:w-full text-[22px] md:text-[40px] font-quicksand font-bold text-darkpurple md:mb-2'>
            <p>Browse <br className='flex md:hidden' />Our Products</p>
          </div>
          {
            new Array(12).fill({}).map((el, i) => (
              <div key={i} className='mb-3 flex flex-col justify-center items-center '>
                <div className='w-[168px] md:w-[300px] flex flex-col gap-2 md:gap-3'>
                  <div className='w-[168px] h-[168px] md:w-[300px] md:h-[300px] bg-grey rounded-xl'>
                  </div>
                  <p className='pl-1 font-nunito font-bold text-[16px] md:text-[21px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
                  <p className='pl-1 font-quicksand text-[16px]'>IDR 200.000</p>
                </div>
              </div>
            ))
          }
          <div className='col-span-2 md:col-span-3 pl-6 text-[24px] text-center border border-1 rounded-full py-1.5 font-quicksand text-gray mb-6 mt-10'>
            <p>Load More</p>
          </div>
        </div>
      </div>
      <ReachOut />
      <Footer />
    </section>
  )
}