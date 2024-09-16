'use client'
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function Component() {
  const router = useRouter()
  const t = useTranslations("Top5.products")
  return (
    <div className='pl-5 flex flex-col md:pb-20 pb-14  gap-8 pr-8 mt-6 md:mt-14 overflow-x-scroll'>
      <p className='m-auto md:m-0 w-5/6 md:w-full text-3xl md:text-4xl text-center md:text-left font-[700] font-quicksand'>Our Costumer Also Buy</p>
      <div className='flex justify-between flex-wrap gap-3'>
        {
          new Array(4).fill('').map((e, i) => {
            let title = t(`${i}.title`)
            let price = t(`${i}.price`)
            let slug = t(`${i}.slug`)
            let photo = t(`${i}.photo`).toString()
            return (
              <div key={i} onClick={() => router.push(`/products/${slug}`)} className='cursor-pointer w-[150px] md:w-[300px] mb-2 md:mb-0'>
                <div style={{ position: 'relative', aspectRatio: "1/1" }} className='flex w-[150px] h-[150px] md:w-[300px] md:h-[300px] animated-background bg-gradient-to-r from-zinc-200 via-zinc-200 to-zinc-400'>
                  <Image fill sizes='(max-width: 300px) 100vw' className='rounded-lg' src={photo} alt={title} />
                </div>
                <p style={{ lineHeight: "145%", letterSpacing: 0.33 }} className="p-1 md:p-0 font-bold my-2 md:my-4 text-md md:text-[21px] font-nunito text-darktext">{title}</p>
                <p className="p-1 md:p-0 text-base md:text-[21px] text-gray font-nunito text-sm ">IDR {price}</p>
              </div>
            )
          })
        }
      </div>
      <button className="w-full hover:bg-darkpurple hover:text-nude font-quicksand font-lg md:font-2xl py-3.5 md:mr-14 bg-transparent border border-1.5 border-gray text-gray rounded-full my-0 md:my-6">
        Browse More
      </button>
    </div>
  )
}