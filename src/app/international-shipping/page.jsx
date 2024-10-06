"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';


const ShippingTable = () => {
  const t = useTranslations('IntlPage')
  return (
    <div className="flex justify-center ">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-nude">
            <th className="border border-gray-300 px-4 py-2.5 w-1/3 text-center">{t('country')}</th>
            <th className="border border-gray-300 px-4 py-2.5 w-1/3 text-center">{t('price')}</th>
            <th className="border border-gray-300 px-4 py-2.5 w-1/3 text-center">{t('duration')}</th>
          </tr>
        </thead>
        <tbody>
          {[
            { country: "Singapore", price: "IDR 55.000/kg", duration: "3" },
            { country: t('West Malaysia'), price: "IDR 70.000/kg", duration: "6" },
            { country: t('East Malaysia'), price: "IDR 130.000/kg", duration: "8" },
            { country: `Brunei (${t('postcode')} B)`, price: "IDR 100.000/kg", duration: "7" },
            { country: `Brunei (${t('postcode')} K,T,P)`, price: "IDR 180.000/kg", duration: "7" },
            { country: "Taiwan", price: "IDR 70.000/kg", duration: "7" },
            { country: "Hongkong", price: "IDR 120.000/kg", duration: "5" },
          ].map((row, index) => (
            <tr key={index} className="">
              <td className="border border-gray-300 px-4 py-2.5 text-center">{row.country}</td>
              <td className="border border-gray-300 px-4 py-2.5 text-center">{row.price}</td>
              <td className="border border-gray-300 px-4 py-2.5 text-center">{row.duration} {t('days')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




export default function HomePage() {
  const t = useTranslations('IntlPage');

  return (
    <section className='bg-cream'>
      <div className='max-w-screen-2xl m-auto'>
        <div className='flex justify-center flex-col md:px-16 pb-20 gap-6'>
          <div className='w-11/12 md:w-full py-8 mb-12 md:mb-24 text-base md:text-[24px] m-auto md:px-10 flex flex-col gap-10 md:gap-[80px] text-gray font-nunito'>
            <p style={{ lineHeight: "120%", textTransform: "capitalize" }} className='font-quicksand font-bold text-darkpurple text-3xl md:text-[56px]'>International Shipping</p>
            <p className='text-darktext font-quicksand font-bold text-xl md:text-4xl whitespace-pre-wrap ' style={{ lineHeight: "141%", letterSpacing: 0.96, textTransform: "capitalize", }}>{t('textbold')}</p>
            <p className='text-base md:text-2xl' style={{ whiteSpace: "pre-wrap" }}>{t('text')}</p>
            <ShippingTable />
            <p className='whitespace-pre-wrap'>{t('textcolab')}</p>
            <div>
              <p className='mb-1'>{t('note')}</p>
              <ol className='list-decimal ml-8 flex flex-col gap-1.5 md:w-[80%]' style={{ lineHeight: "141%", letterSpacing: 0.96 }}>
                <li style={{ whiteSpace: "pre-wrap" }}>{t('bullet1')}</li>
                <li style={{ whiteSpace: "pre-wrap" }}>{t('bullet2')}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

    </section >
  )
}