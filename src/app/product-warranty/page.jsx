"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ProductWarrantyPage() {
  const t = useTranslations('ProductWarrantyPage');
  return (
    <section className='bg-cream'>
      <div className='max-w-screen-2xl m-auto'>
        <div className='flex justify-center flex-col md:px-16 md:pb-20 gap-2 md:gap-6'>
          {/* <Image alt='grey' src="/product-warranty.png" width="300" height="300" className='w-full' /> */}
          <div className='py-9 mb-24 text-[18px] md:text-[24px] m-auto px-6 md:px-10 flex flex-col gap-12 text-gray font-nunito'>
            <p style={{ lineHeight: "120%", textTransform: "capitalize", whiteSpace: "pre-wrap" }} className='font-quicksand font-bold text-darkpurple text-3xl md:text-[56px]'>{t('textbold')}</p>
            <p className='whitespace-pre-wrap'>{t('text')}</p>
            <div>
              <p className='font-bold mb-1'>{t('title')}</p>
              <ol className='list-decimal ml-8 flex flex-col gap-1.5 md:w-[80%]' style={{ lineHeight: "141%", letterSpacing: 0.96 }}>
                <li>{t('bullet1')} <a className='underline' href='https://wa.me/628111329911'>WhatsApp</a>.</li>
                <li className='whitespace-pre-wrap'>{t('bullet2')}{t('bullet2itallic')}</li>
                <li className='text-justify'>{t('bullet3')}</li>
                <li className='text-justify'>{t('bullet4')}</li>
              </ol>
            </div>
            <div>
              <p className='font-bold mb-1'>{t('title-terms')}</p>
              <ol className='list-decimal ml-8 flex flex-col gap-1.5 md:w-[80%]' style={{ lineHeight: "141%", letterSpacing: 0.96 }}>
                <li>{t('terms1')}</li>
                <li>{t('terms2')}</li>
                <li>{t('terms3')}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}