"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const CardComponent = ({ title, subtitle, button, buttonTo }) => {
  return (
    <div className='flex flex-col gap-5 items-start'>
      <p style={{ whiteSpace: 'pre-wrap', textTransform: 'capitalize' }} className='text-darktext font-quicksand font-bold text-4xl'>{title}</p>
      <p className='text-gray font-nunito' style={{ whiteSpace: "pre-wrap" }}>{subtitle}</p>
      <a href={buttonTo} className='rounded-full py-3 px-6 text-yellow text-2xl bg-darkpurple font-quicksand font-semibold'>{button}</a>
    </div>
  )
}
export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <section className='bg-cream'>
      <div className='flex justify-center flex-col px-16 pb-20 gap-6'>
        <Image alt='grey-image' src="/product-warranty.png" width="300" height="300" className='w-full' />
        <div className='w-full py-8 mb-24 text-[24px] m-auto px-10 flex flex-col gap-24 text-gray font-nunito'>
          <div>
            <p style={{ lineHeight: "120%", textTransform: "capitalize", whiteSpace: "pre-wrap" }} className='mb-10 font-quicksand font-bold text-darkpurple text-[56px]'>Main Title Size</p>
            <Image alt='grey-image-alt' src="/product-warranty.png" width="300" height="300" className='w-full rounded-lg' />
          </div>
          <CardComponent button={'Apply As A Reseller'} buttonTo={'/'} title={'Sub-Title Size'} subtitle={'This option is suitable if you have your own online or offline store(s).\nApply through the button below.'} />
          <div className='flex flex-col gap-5 items-start'>
            <p style={{ whiteSpace: 'pre-wrap', textTransform: 'capitalize' }} className='text-darktext font-quicksand font-bold text-4xl'>{'Want to be KindKain affiliators\non the marketplace?'}</p>
            <p className='text-gray font-nunito' style={{ whiteSpace: "pre-wrap" }}>{
              `This option is suitable for fellow creators who are active in social media \nand live streaming.\n\nWe have open affiliate programs in both Shopee and TikTok Shop,\nfeel free to connect your account with our products.`}</p>
          </div>
          <CardComponent button={'Consult With Us'} buttonTo={'/'} title={'In need of our products for wedding\nor corporate souvenirs, hampers,\nor event merchandise?'} subtitle={'We have in house manufacturing for our products, bulk / custom order\nstarting from 60pcs is available. Contact us with your requirements.'} />
          <CardComponent button={'Chat with our team'} buttonTo={'/'} title={'Have any other inquiries on collaborating\nor doing partnership with KindKain?'} subtitle={"Don't be shy, say hello and chat with us!"} />
        </div>
      </div>
    </section>
  )
}