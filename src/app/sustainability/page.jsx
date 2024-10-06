"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations('SustainabilityPage');

  return (
    <section className='bg-cream'>
      <div className='max-w-screen-2xl m-auto'>
        <div className='flex justify-center flex-col md:px-16 md:pb-20 gap-2 md:gap-6'>
          {/* <Image alt='grey-image' src="/product-warranty.png" width="300" height="300" className='w-full' /> */}
          <div className='w-11/12 md:w-full py-8 mb-12 md:mb-24 text-[24px] m-auto md:px-10 flex flex-col gap-10 md:gap-20 text-gray font-nunito'>
            <div>
              <p style={{ lineHeight: "120%", textTransform: "capitalize", whiteSpace: "pre-wrap" }} className='mb-4 md:mb-10 font-quicksand font-bold text-darkpurple text-3xl md:text-[56px]'>Sustainability</p>
              <div className='relative w-full m-auto' style={{ aspectRatio: "6/3" }}>
                <Image fill src="/sustainability.png" className='rounded-lg' />
              </div>
            </div>
            <p className='text-justify text-gray font-nunito text-base md:text-2xl' style={{ whiteSpace: "pre-wrap" }}>{t('paragraph')}</p>
            <div className='flex flex-col gap-4 md:gap-5 items-start'>
              <p style={{ whiteSpace: 'pre-wrap', textTransform: 'capitalize' }} className='text-darktext font-quicksand font-bold text-xl md:text-4xl'>{t('title')}</p>
              <p className='text-gray font-nunito text-base md:text-2xl text-justify' style={{ whiteSpace: "pre-wrap" }}>{t('background')}</p>
              <p className='text-gray font-nunito text-base md:text-2xl text-justify py-1'>{t('text')}</p>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}