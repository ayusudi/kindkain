"use client"
import Navbar from '@/components/navbar';
import ReachOut from '@/components/reachout';
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function HomePage() {
  const t = useTranslations('HomePage');
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // default setting for mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900, // Adjust this breakpoint to match your desired screen size
        settings: {
          slidesToShow: 3, // show 4 items on larger screens
          slidesToScroll: 1,
        }
      }
    ]
  };

  const items = [
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
    { title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit...', price: 'IDR 200.000' },
  ];

  return (
    <section className='bg-cream max-w-[100vw] overflow-x-hidden'>
      <Navbar />
      <div className='px-5 hidden md:flex '>
        <p className='px-5 pt-5 pb-3 text-[15px] font-quicksand'>Home  /  Browse Product / Category / <span className='text-darkpurple font-semibold'>Product Name</span></p>
      </div>
      <div className='flex px-5 flex-col md:flex-row py-5 md:py-0'>
        <div className='flex-1 flex flex-col'>
          <div className='w-[300px] h-[300px] md:w-[725px] md:h-[725px] m-auto p-4'>
            <div className='bg-[#D9D9D9] w-full h-full rounded-lg'>
            </div>
          </div>
          <div className='flex m-auto'>
            <Slider {...settings} className='w-[300px] md:w-[725px]'>
              {items.map((item, index) => (
                <div key={index} className="  mx-auto py-2 px-3 md:p-4">
                  <div className="aspect-square  rounded-lg bg-[#D9D9D9]"></div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className='flex-1'></div>
      </div>

      <ReachOut />
      <Footer />
    </section>
  )
}