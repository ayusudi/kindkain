import ReachOut from '@/components/reachout';
import Link from "next/link";
import Image from 'next/image';
import Sidebar from "@/components/components_productpage/sidebar"
import { cookies } from 'next/headers'

export default async function HomePage() {
  const cookieStore = cookies()
  const locale = cookieStore.get('locale')?.value || 'id';
  const res = await fetch(`https://kindkain.vercel.app/api/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      locale
    },
    credentials: 'same-origin', // Important for including cookies
    next: { revalidate: 10 }, // Adjust the cache revalidation as needed
  });
  if (!res.ok) {
    throw new Error('Failed to fetch product data');
  }
  const data = await res.json();
  return (
    <section className='bg-cream'>
      <div className='max-w-screen-2xl m-auto px-5 hidden md:flex'>
        <p className='px-5 py-5 text-[15px] font-quicksand'>Home  /  <span className='text-darkpurple'>Browse Product</span></p>
      </div>
      <div className='max-w-screen-2xl m-auto flex flex-col md:flex-row md:px-5 pb-2 md:pb-20'>
        <Sidebar />
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 flex-grow mx-4 md:mx-5'>
          <div className='pt-4 md:pt-0 col-span-2 md:col-span-3 xl:pl-7 2xl:pl-10 w-3/6 md:w-full text-[22px] md:text-[40px] font-quicksand font-bold text-darkpurple md:mb-2'>
            <p>Browse <br className='flex md:hidden' />Our Products</p>
          </div>
          {
            data.map((el, i) => (
              <Link href={'/products/' + el.slug} key={i} className='cursor-pointer mb-3 flex flex-col justify-center items-center '>
                <div className='w-[168px] md:w-[300px] flex flex-col gap-2 md:gap-3'>
                  <div className='relative w-[168px] h-[168px] md:w-[300px] md:h-[300px] bg-grey rounded-xl' style={{ aspectRatio: '1/1' }}>
                    <Image alt={i + 'photo'} sizes='(max-width:300px) 100vw' fill className='rounded-lg' src={el.photo} />
                  </div>
                  <p className='pl-1 font-nunito font-bold text-[16px] md:text-[21px] h-[70px] md:h-[64px] ' >{el.title}</p>
                  <p className='pl-1 font-quicksand text-[16px]'>IDR {el.price}</p>
                </div>
              </Link>
            ))
          }
          <div className='h-12 col-span-2 md:col-span-3 pl-6 text-[24px] text-center border border-1 rounded-full py-1.5 font-quicksand text-gray mb-6 mt-10'>
            <p>Load More</p>
          </div>
        </div>
      </div>
      <ReachOut />
    </section>
  )
}
