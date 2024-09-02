"use client"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <section className='bg-cream'>
      <Navbar />
      <div className='flex justify-center flex-col px-16 pb-20 gap-6'>
        <Image src="/product-warranty.png" width="300" height="300" className='w-full' />
        <div className='py-8 mb-24 text-[24px] m-auto px-10 flex flex-col gap-12 text-gray font-nunito'>
          <p style={{ lineHeight: "120%", textTransform: "capitalize", whiteSpace: "pre-wrap" }} className='font-quicksand font-bold text-darkpurple text-[56px]'>{'Every purchase of KindKain\nmenstrual pad comes with\n1 year of snap button warranty.'}</p>
          <p style={{ lineHeight: "141%", letterSpacing: 0.96, width: "80%" }}>If your KindKain menstrual pad button is not working properly, and the defect  is not caused by inappropriate use or a product accident that occurred outside of KindKain's control.</p>
          <div>
            <p className='font-bold mb-1'>You can apply for button repair by:</p>
            <ol className='list-decimal ml-8 flex flex-col gap-1.5' style={{ lineHeight: "141%", letterSpacing: 0.96, width: "80%" }}>
              <li>Contacting us via WhatsApp.</li>
              <li style={{ whiteSpace: "pre" }}>{'Submit a report by providing us these information\nName:\nActive WhatsApp Number:\nPurchase Invoice Attachment (from Marketplace):\nName of product and quantity of product that needs reparation:\nVideo of the defect product:\n'}</li>
              <li className='text-justify'>After completing our validation process (1-2 working days), we will inform you our address so you can send the product(s) to us. Please clean (wash) your menstrual pad first, and send it in a safe packaging.</li>
              <li className='text-justify'>After we are done with the reparation (3-5 working days since we receive the products), we will send back the menstrual pad to your address.</li>
            </ol>
          </div>
          <div>
            <p className='font-bold mb-1'>Warranty and delivery fee terms:</p>
            <ol className='list-decimal ml-8 flex flex-col gap-1.5' style={{ lineHeight: "141%", letterSpacing: 0.96, width: "80%" }}>
              <li>Reports received within or equal to 30 days from the date of purchase will receive free button repairs and free two-way shipping.</li>
              <li >Reports received 31 days to 365 days from the date of purchase will receive free button repairs. Shipping costs are borne by the buyer.</li>
              <li>Reports received 366 days to 1095 days from the date of purchase, buttons can be repaired at a cost of IDR 15,000 per menstrual pad. Shipping costs are borne by the buyer.</li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}