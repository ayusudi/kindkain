"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const CardComponent = ({ title, subtitle, button, buttonTo }) => {
  return (
    <div className='flex flex-col gap-4 md:gap-5 items-start'>
      <p style={{ whiteSpace: 'pre-wrap', textTransform: 'capitalize' }} className='text-darktext font-quicksand font-bold text-xl md:text-4xl'>{title}</p>
      <p className='text-gray font-nunito text-base md:text-2xl' style={{ whiteSpace: "pre-wrap" }}>{subtitle}</p>
      <a href={buttonTo} className='rounded-full py-2 md:py-3 px-5 md:px-6 text-yellow text-base md:text-2xl bg-darkpurple font-quicksand font-semibold'>{button}</a>
    </div>
  )
}
export default function HomePage() {
  const t = useTranslations('PartnershipPage');

  return (
    <section className='bg-cream'>
      <div className='max-w-screen-2xl m-auto'>
        <div className='flex justify-center flex-col md:px-16 md:pb-20 gap-2 md:gap-6'>
          {/* <Image alt='grey-image' src="/product-warranty.png" width="300" height="300" className='w-full' /> */}
          <div className='w-11/12 md:w-full py-8 mb-12 md:mb-24 text-[24px] m-auto md:px-10 flex flex-col gap-10 md:gap-24 text-gray font-nunito'>
            {/* <div> */}
            <p style={{ lineHeight: "120%", textTransform: "capitalize", whiteSpace: "pre-wrap" }} className='font-quicksand font-bold text-darkpurple text-3xl md:text-[56px]'>Partnership</p>
            {/* <Image alt='grey-image-alt' src="/product-warranty.png" width="300" height="300" className='mt-4 mt:mb-10 w-full rounded-lg' /> */}
            {/* </div> */}
            <CardComponent button={t('b1')} buttonTo={'https://wa.me/628111329911'} title={t('q1')} subtitle={t('a1')} />
            <div className='flex flex-col gap-5 items-start'>
              <p style={{ whiteSpace: 'pre-wrap', textTransform: 'capitalize' }} className='text-darktext font-quicksand font-bold text-xl md:text-4xl'>{t('q2')}</p>
              <p className='text-base md:text-2xl' style={{ whiteSpace: "pre-wrap" }}>{t('a2')}</p>
            </div>
            <CardComponent button={t('b3')} buttonTo={'https://wa.me/628111329911'} title={t('q3')} subtitle={t('a3')} />
            <CardComponent button={t('b4')} buttonTo={'https://wa.me/628111329911'} title={t('q4')} subtitle={t('a4')} />
          </div>
        </div>
      </div>

    </section>
  )
}