"use client"
import Navbar from '@/components/navbar';
import ReachOut from '@/components/reachout';
import Footer from '@/components/footer';
import { useTranslations } from 'next-intl';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Accordion, CustomFlowbiteTheme, Flowbite } from "flowbite-react";


const accordion = {
  "root": {
    "base": "font-quicksand text-[20px]",
    "flush": {
      "off": "",
      "on": ""
    }
  },
  "content": {
    "base": "px-1 pt-0 pb-5 border-b-[1px] font-nunito font-normal "
  },
  "title": {
    "arrow": {
      "base": "h-6 w-6 shrink-0",
      "open": {
        "off": "",
        "on": "rotate-180"
      }
    },
    "base": "flex w-full items-center justify-between py-5 px-1 text-left font-medium text-gray-500",
    "flush": {
      "off": "hover:bg-gray-100 dark:hover:bg-gray-800 border-b-[1px]",
      "on": "bg-transparent dark:bg-transparent"
    },
    "heading": "font-[600]",
    "open": {
      "off": "",
      "on": "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white border-transparent"
    }
  }
}

function Component() {
  return (
    <Flowbite theme={{ theme: { accordion } }}>
      <Accordion >
        <Accordion.Panel>
          <Accordion.Title>Materials & Dimensions</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
              dropdowns, modals, navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to&nbsp;
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                get started&nbsp;
              </a>
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How To Use</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
              has a design equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the
              <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How To Wash</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas
              Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
              components, whereas Tailwind UI offers sections of pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
              technical reason stopping you from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </Flowbite>

  );
}

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
        <div className='flex flex-col'>
          <div className='w-[300px] h-[300px] md:w-[725px] md:h-[725px] p-4'>
            <div className='bg-[#D9D9D9] w-full h-full rounded-lg'>
            </div>
          </div>
          <div className='flex justify-start items-start'>
            <Slider {...settings} className='w-[300px] md:w-[725px]'>
              {items.map((item, index) => (
                <div key={index} className="  mx-auto py-2 px-3 md:p-4">
                  <div className="aspect-square  rounded-lg bg-[#D9D9D9]"></div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className='flex-1 pl-8 pr-4 flex flex-col gap-6 items-start'>
          <div>
            <h2 style={{ lineHeight: "120%" }} className='mt-2 text-[40px] capitalize w-5/6 font-quicksand font-bold text-darkpurple'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h2>
            <p className='text-[32px] font-nunito my-2'>IDR 200.000</p>
          </div>
          <p style={{ lineHeight: "150%" }} className='text-[20px] text-gray font-nunito'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
          <div>
            <p className='text-[20px] text-darktext font-nunito font-semibold mb-3'>Variants Available</p>
            <div className='flex flex-wrap w-5/6 gap-3'>
              <div className='py-2.5 px-3 border rounded-full border-darkpurple cursor-pointer'><p className='text-[20px] font-nunito font-bold text-darkpurple'>Pantyliner 18cm</p></div>
              <div className='py-2.5 px-3 border rounded-full border-gray cursor-pointer'><p className='text-[20px] font-nunito font-bold text-gray'>Pantyliner 18cm</p></div>
              <div className='py-2.5 px-3 border rounded-full border-gray cursor-pointer'><p className='text-[20px] font-nunito font-bold text-gray'>Pantyliner 18cm</p></div>
              <div className='py-2.5 px-3 border rounded-full border-gray cursor-pointer'><p className='text-[20px] font-nunito font-bold text-gray'>Pantyliner 18cm</p></div>
              <div className='py-2.5 px-3 border rounded-full border-gray cursor-pointer'><p className='text-[20px] font-nunito font-bold text-gray'>Pantyliner 18cm</p></div>
            </div>
          </div>
          <button className="w-4/6 font-quicksand bg-darkpurple text-yellow text-md md:text-lg rounded-full px-4 py-2.5">
            I Want This Product!
          </button>
          <div className='w-full'>
            <Component />

          </div>
        </div>
      </div>
      <div className='pl-5 flex flex-col pb-20 gap-8 pr-8 mt-20'>
        <p className='text-[40px] font-[700] font-quicksand'>Our Costumer Also Buy</p>
        <div className='flex justify-between'>
          {
            new Array(4).fill("").map((e, i) => {
              return (
                <div key={i} className='w-[300px]'>
                  <div className='w-[300px] h-[300px] bg-[#D9D9D9] rounded-lg'></div>
                  <p style={{ lineHeight: "145%", letterSpacing: 0.33 }} className="font-bold my-4 text-[21px] font-nunito text-darktext">Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
                  <p className="text-[21px] text-gray font-nunito text-sm ">IDR 200.000</p>
                </div>
              )
            })
          }
        </div>
        <button className="w-full hover:bg-darkpurple hover:text-nude font-quicksand font-lg md:font-2xl py-3.5 md:mr-14 bg-transparent border border-1.5 border-gray text-gray rounded-full my-4 md:my-6">
          Browse More
        </button>
      </div>

      <ReachOut />
      <Footer />
    </section>
  )
}
