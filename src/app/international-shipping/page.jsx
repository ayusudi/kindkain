"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';


const ShippingTable = () => {
  return (
    <div className="flex justify-center ">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-nude">
            <th className="border border-gray-300 px-4 py-2.5 w-1/3 text-center">Country</th>
            <th className="border border-gray-300 px-4 py-2.5 w-1/3 text-center">Price</th>
            <th className="border border-gray-300 px-4 py-2.5 w-1/3 text-center">Duration</th>
          </tr>
        </thead>
        <tbody>
          {[
            { country: "Singapore", price: "IDR 55.000/kg", duration: "3 days" },
            { country: "West Malaysia", price: "IDR 70.000/kg", duration: "6 days" },
            { country: "East Malaysia", price: "IDR 130.000/kg", duration: "8 days" },
            { country: "Brunei (Post code B)", price: "IDR 100.000/kg", duration: "7 days" },
            { country: "Brunei (Post code K,T,P)", price: "IDR 180.000/kg", duration: "7 days" },
            { country: "Taiwan", price: "IDR 70.000/kg", duration: "7 days" },
            { country: "Hongkong", price: "IDR 120.000/kg", duration: "5 days" },
          ].map((row, index) => (
            <tr key={index} className="">
              <td className="border border-gray-300 px-4 py-2.5 text-center">{row.country}</td>
              <td className="border border-gray-300 px-4 py-2.5 text-center">{row.price}</td>
              <td className="border border-gray-300 px-4 py-2.5 text-center">{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};




export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <section className='bg-cream'>
      <div className='max-w-screen-2xl m-auto'>
        <div className='flex justify-center flex-col md:px-16 pb-20 gap-6'>
          <Image alt='grey-image' src="/product-warranty.png" width="300" height="300" className='w-full' />
          <div className='w-11/12 md:w-full py-8 mb-12 md:mb-24 text-base md:text-[24px] m-auto md:px-10 flex flex-col gap-10 md:gap-24 text-gray font-nunito'>
            <p style={{ lineHeight: "120%", textTransform: "capitalize", whiteSpace: "pre-wrap" }} className='font-quicksand font-bold text-darkpurple text-3xl md:text-[56px]'>International Shipping</p>
            <p className='text-darktext font-quicksand font-bold text-xl md:text-4xl' style={{ lineHeight: "141%", letterSpacing: 0.96, whiteSpace: "pre-wrap", textTransform: "capitalize", }}>{"We provide international shipping of our products\nto your country, delivered from our warehouse \nin Jakarta, Indonesia.\n\nSome of the countries we ship most to \nare South East Asian countries. \n\nPlease purchase through our WhatsApp."}</p>
            <p className='text-base md:text-2xl' style={{ whiteSpace: "pre-wrap" }}>{"Below is our current delivery pricelist as per 2024.\nPrices may change, please confirm with us prior to your purchase."}</p>
            <ShippingTable />
            <p style={{ whiteSpace: "pre-wrap" }}>{'We collaborate with Rayspeed delivery service.\nFor shipping to other countries, please contact us for the pricing.'}</p>
            <div>
              <p className='mb-1'>Note:</p>
              <ol className='list-decimal ml-8 flex flex-col gap-1.5 md:w-[80%]' style={{ lineHeight: "141%", letterSpacing: 0.96 }}>
                <li style={{ whiteSpace: "pre-wrap" }}>{'For international shipping, depending on the country, certain legal documents\nwill be needed such as personal identity card, passport, citizenship visa/permit, etc.'}</li>
                <li style={{ whiteSpace: "pre-wrap" }}>{'Payments using currencies other than IDR (rupiah) can be made through\ninternational remmitance service such as TopRemit and Flip.'}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}