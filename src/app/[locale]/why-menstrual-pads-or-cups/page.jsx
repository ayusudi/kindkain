"use client"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef, useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion-group">
      {items.map((item, index) => (
        <div key={index} className="accordion-item  border-b-[1px] border-[#93867C]">
          <button
            className={`accordion-toggle ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <p style={{ whiteSpace: 'pre-wrap' }} className='font-nunito font-semibold text-[24px] '>{item.title}</p>

          </button>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className={`accordion-content ${activeIndex === index ? 'open' : ''}`}
            style={{
              maxHeight: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
            }}
          >
            <div className="accordion-content-inner">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default function HomePage() {
  const t = useTranslations('HomePage');
  const accordionItems = [
    {
      title: 'Pembalut KindKain terbuat dari bahan apa?',
      content: 'Content for section 1.',
      contentHeight: 100, // Adjust the height for each content section as needed
    },
    {
      title: 'Apakah pembalut KindKain bisa bocor/rembes?',
      content: 'Content for section 2.',
      contentHeight: 100,
    },
    {
      title: 'Pembalut KindKain dapat digunakan berapa kali?',
      content: 'Content for section 3.',
      contentHeight: 100,
    },
    {
      title: 'Bagamaina cara mencuci pembalut KindKain?',
      content: 'Content for section 3.',
      contentHeight: 100,
    },
    {
      title: 'Siapa saja yang cocok menggunakan pembalut KindKain?',
      content: 'Content for section 3.',
      contentHeight: 100,
    },
    {
      title: 'Berapa banyak pembalut KindKain yang saya perlukan?',
      content: 'Content for section 3.',
      contentHeight: 100,
    },
    {
      title: 'Bagaimana jika saya sedang haid,\nnamun harus tetap beraktivitas di luar rumah?',
      content: 'Content for section 3.',
      contentHeight: 100,
    },
    {
      title: 'Apakah pembalut KindKain dapat digunakan untuk \nyang mengalami inkontinensia urin?',
      content: 'Content for section 3.',
      contentHeight: 100,
    },
    {
      title: 'Apakah pembalut KindKain dapat digunakan untuk masa nifas?',
      content: 'Content for section 3.',
      contentHeight: 100,
    },
    {
      title: 'Apa perbedaan pembalut kain KindKain dibandingkan dengan merk lainnya?',
      content: 'Content for section 3.',
      contentHeight: 100,
    },
    {
      title: 'Mengapa pembalut KindKain diproduksi menggunakan kain berwarna terang?',
      content: 'Content for section 3.',
      contentHeight: 100,
    }
  ];
  return (
    <section className='bg-cream'>
      <Navbar />
      <div className='font-nunito flex justify-center flex-col pb-20 gap-6'>
        <Image src="/banner-why.png" width="900" height="100" className='w-full h-auto' />
        <div className="mx-auto flex flex-col gap-10 py-12 w-10/12">
          <div className='flex w-full justify-between items-center'>
            <Image src="/cup.png" alt="KindKain" width="555" height="555" className="rounded-lg shadow-md" />
            <div className="w-[300px] md:w-[580px] flex items-start flex-col gap-6">
              <Image src="/lebih-sehat.png" width="60" height="60" />
              <div className="font-quicksand text-darkpurple  text-5xl font-bold">Lebih Sehat</div>
              <p className="text-[20px] text-gray text-justify mb-2">
                Penggunaan pembalut kain seperti pembalut KindKain membantu mengurangi drastis dan bahkan menghilangkan total gejala-gejala ketidaknyamanan pada kulit saat menstruasi seperti iritasi, ruam, lecet, gatal, dan juga reaksi alergi lainnya.
              </p>
              <p className="text-[20px] text-gray text-justify">
                Pembalut KindKain juga lebih sehat karena tidak mengandung pemutih, dioksin, parfum sintetis, maupun residu pestisida dari kapas, sehingga mengurangi paparan kimia yang dapat mendisrupsi hormon. Hal yang sama berlaku untuk cawan menstruasi.
              </p>
            </div>
          </div>
          <div className='flex w-full justify-between items-center'>
            <Image src="/cup.png" alt="KindKain" width="555" height="555" className="rounded-lg shadow-md" />
            <div className="w-[300px] md:w-[580px] flex items-start flex-col gap-6">
              <Image src="/lebih-ramah.png" width="60" height="60" />
              <div className="font-quicksand text-darkpurple  text-5xl font-bold">Lebih Ramah Lingkungan</div>
              <p className="text-[20px] text-gray text-justify mb-2">
                Dari segi lingkungan, pembalut kain dan cawan menstruasi jauh lebih ramah lingkungan karena dapat digunakan berulang kali. Hal ini <span className='text-darkpurple font-bold'>mencegah terbuangnya kurang lebih 11.000 ~ 16.000 pembalut sekali pakai</span> yang dibuang oleh setiap wanita di masa hidupnya.
              </p>
            </div>
          </div>
          <div className="text-center flex flex-col gap-8 py-12">
            <Image className='m-auto' src="/lebih-hemat.png" width="60" height="60" />
            <div className="flex items-center justify-center space-x-2">
              <div className="text-darkpurple text-5xl font-bold">Lebih Hemat</div>
            </div>
            <p className="text-gray w-5/6 m-auto text-xl">
              Dari segi harga, penggunaan <span className='text-darkpurple font-bold'>pembalut KindKain 5-10x lebih hemat</span> daripada pembalut sekali pakai. Sedangkan untuk <span className='text-darkpurple font-bold'>cawan menstruasi 20-30x lebih hemat</span> daripada pembalut sekali pakai.
            </p>

            {/* Pricing Cards */}
            <div className="text-left flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex flex-col gap-1.5 bg-white border border-[#8F8C8A] rounded-lg p-8 shadow-md w-full md:w-1/3">
                <h3 className="font-semibold text-darktext text-2xl">Pembalut Sekali Pakai</h3>
                <p className="text-sm text-gray">(Dengan Klaim Bebas Klorin & Dioksin)</p>
                <p className="text-lg text-darkpurple font-bold">IDR</p>
                <p className="text-2xl text-darkpurple font-bold">1.500-12.000</p>
                <p className="text-sm text-gray">Per Pemakaian</p>
              </div>
              <div className="flex items-start flex-col gap-1.5 bg-darkpurple text-white rounded-lg p-8 shadow-md w-full md:w-1/3">
                <h3 className="font-semibold text-2xl w-3/6">Pembalut KindKain</h3>
                <p className="text-lg font-bold text-yellow">IDR</p>
                <p className="text-2xl font-bold text-yellow">317 - 583</p>
                <p className="text-sm text-[#978DA8]">Per Pemakaian</p>
                <button className="bg-yellow text-darkpurple px-8 py-2 mt-2 rounded-full">Shop Now</button>
              </div>
              <div className="items-start flex flex-col gap-1.5 bg-darkpurple text-white rounded-lg p-8 shadow-md w-full md:w-1/3">
                <h3 className="font-semibold text-2xl w-5/6">Cawan Menstruasi KindKain</h3>
                <p className="text-lg font-bold text-yellow">IDR</p>
                <p className="text-2xl font-bold text-yellow">83</p>
                <p className="text-sm text-[#978DA8]">Per Pemakaian</p>
                <button className="bg-yellow text-darkpurple px-8 py-2 mt-2 rounded-full">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-nude flex flex-col py-20 '>
        <div className='w-10/12 mx-auto'>
          <p className='text-[40px] font-bold text-darkpurple font-quicksand pb-4'>Frequently Asked Question</p>
          <Accordion items={accordionItems} />
        </div>

      </div>
      <Footer />
    </section>
  )
}